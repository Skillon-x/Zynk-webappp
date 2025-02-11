import json
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from difflib import get_close_matches


def load_event_data(filename):
    """Load event data from a JSON file and validate required fields."""
    try:
        with open(filename, 'r') as file:
            event_data = json.load(file)
        
        if not event_data:
            print("⚠️ Warning: Event data is empty!")
            return {}

    except (FileNotFoundError, json.JSONDecodeError):
        print("❌ Error: Could not load event data. Check the file path and format.")
        return {}

    required_keys = {"description", "location", "domain"}
    return {name: details for name, details in event_data.items() if all(key in details for key in required_keys)}


def normalize_location(location):
    """Normalize common location names for better matching."""
    location_map = {
        "bangalore": "bengaluru",
        "mumbai": "bombay",
        "delhi": "new delhi",
        "hyd": "hyderabad",
        "madras": "chennai"
    }
    return location_map.get(location.lower(), location.lower())


def save_search_history(user_query, location):
    """Save user search history for future recommendations."""
    history = {}
    try:
        with open("search_history.json", "r") as file:
            history = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        pass

    history.setdefault(user_query, []).append(location)
    
    with open("search_history.json", "w") as file:
        json.dump(history, file, indent=4)


def recommend_events(user_query, location, event_data):
    """Recommend events based on user domain query and location using TF-IDF and cosine similarity."""

    event_names = list(event_data.keys())
    event_descriptions = [event['description'] for event in event_data.values()]
    event_locations = [event['location'] for event in event_data.values()]
    event_domains = [event['domain'] for event in event_data.values()]


    user_query = user_query.lower().strip()
    location = normalize_location(location)

    # Fuzzy matching to find the closest matching domain
    matching_domains = get_close_matches(user_query, [domain.lower() for domain in event_domains], n=3, cutoff=0.5)
    if matching_domains:
        print(f"\n🔍 Did you mean: {', '.join(matching_domains)}?")
        user_query = matching_domains[0]  

    domain_filtered_events = [
        (name, desc, loc, domain) for name, desc, loc, domain in zip(event_names, event_descriptions, event_locations, event_domains)
        if user_query in domain.lower()  # Check if user query exists in domain
    ]

    if not domain_filtered_events:
        print(f"\n⚠️ No events found for the '{user_query}' domain.")
        return []

    
    location_filtered_events = [
        (name, desc, loc, domain) for name, desc, loc, domain in domain_filtered_events
        if location in loc.lower()  
    ]

    # If no events found in location, show all domain-specific events
    if not location_filtered_events:
        print(f"\n📍 No events found in {location.title()} for '{user_query}'. Showing all events in this domain.")
        location_filtered_events = domain_filtered_events

    # Combine event descriptions and locations for better text matching
    combined_descriptions = [f"{desc} {loc}" for _, desc, loc, _ in location_filtered_events]

  
    tfidf_vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = tfidf_vectorizer.fit_transform(combined_descriptions)
    
    # Convert user query into TF-IDF vector
    user_query_vector = tfidf_vectorizer.transform([user_query])

  
    similarity_scores = cosine_similarity(user_query_vector, tfidf_matrix).flatten()

    # Sort events based on similarity scores (highest first)
    sorted_indices = np.argsort(similarity_scores)[::-1]

    # Prepare recommendations
    recommendations = []
    for index in sorted_indices:
        event_name = location_filtered_events[index][0]
        event_location = location_filtered_events[index][2]
        event_score = similarity_scores[index]

        recommendations.append({
            'event': event_name,
            'location': event_location,
            'score': event_score
        })

    return recommendations


if __name__ == "__main__":
    # Display welcome message
    print("\n🎉 Welcome to Zynk! Discover events and hackathons based on your interests and expertise.")
    print("\n🌍 Available Domains: AI, Blockchain, Web3, Cybersecurity, Python, IoT, DevOps, Robotics\n")

    # Load event data
    event_data = load_event_data("events.json")

    while True:
        # User input
        user_query = input("\n🔍 Enter a domain (e.g., AI, Blockchain, Web3, etc.): ").lower().strip()
        location = input("📍 Enter a location (e.g., Bengaluru, Chennai, etc.): ").lower().strip()

        # Get recommendations
        recommended_events = recommend_events(user_query, location, event_data)

        # Display recommendations
        if recommended_events:
            print("\n✅ Recommended Events Based on Your Query:\n")
            
            # Highlight the top recommended event
            top_event = recommended_events[0]
            print(f"🏆 **Top Recommended Event:**")
            print(f"🔹 **{top_event['event']}**\n📍 Location: {top_event['location']}\n⭐ Relevance Score: {top_event['score']:.3f}\n")

            # Show remaining events
            for rec in recommended_events[1:]:
                print(f"🔹 {rec['event']}\n📍 Location: {rec['location']}\n⭐ Relevance Score: {rec['score']:.3f}\n")
            
            # Save search history
            save_search_history(user_query, location)

        else:
            print("\n❌ No events to recommend based on your query.")

        # Offer retry option
        retry = input("\n🔄 Would you like to search again with a different domain or location? (yes/no): ").strip().lower()
        if retry != "yes":
            print("\n👋 Thank you for using Zynk! Have a great day!\n")
            break

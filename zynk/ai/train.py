import json
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Function to load event data from a JSON file
def load_event_data(filename):
    with open(filename, 'r') as file:
        return json.load(file)

# Function to get recommended events based on user input
def recommend_events(user_query, location, event_data):
    # Prepare event descriptions, locations, and domains
    event_names = list(event_data.keys())
    event_descriptions = [event['description'] for event in event_data.values()]
    event_locations = [event['location'] for event in event_data.values()]
    event_domains = [event.get('domain', '') for event in event_data.values()]  # Assuming domain is a key

    # Normalize the user query to check for multiple domains
    user_query = user_query.lower().strip()  # Clean and lowercase user query
    
    # Filter events based on the exact domain specified by the user query (e.g., AI, Blockchain, Web3)
    domain_filtered_events = [
        (name, desc, loc, domain) for name, desc, loc, domain in zip(event_names, event_descriptions, event_locations, event_domains)
        if user_query in domain.lower()  # Match domain exactly (e.g., AI, Blockchain, Web3, etc.)
    ]
    
    # If no domain-specific events match, inform the user and return an empty list
    if not domain_filtered_events:
        print(f"No events found for the '{user_query}' domain.")
        return []
    
    # Filter events by location
    location_filtered_events = [
        (name, desc, loc, domain) for name, desc, loc, domain in domain_filtered_events
        if location.lower() in loc.lower()  # Filter by location
    ]
    
    # If no events match location, show all domain-specific events (without location filter)
    if not location_filtered_events:
        print(f"No events found in {location} for your '{user_query}' query. Showing all domain-specific events.")
        location_filtered_events = domain_filtered_events
    
    # Combine description and location for better context
    combined_descriptions = [f"{desc} {loc}" for _, desc, loc, _ in location_filtered_events]
    
    # TF-IDF Vectorization
    tfidf_vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = tfidf_vectorizer.fit_transform(combined_descriptions)
    
    # User Query Transformation
    user_query_vector = tfidf_vectorizer.transform([user_query])
    
    # Compute Cosine Similarity
    similarity_scores = cosine_similarity(user_query_vector, tfidf_matrix).flatten()
    
    # Sort events based on similarity scores
    sorted_indices = np.argsort(similarity_scores)[::-1]
    
    # Prepare recommendations
    recommendations = []
    for index in sorted_indices:
        event_name = location_filtered_events[index][0]
        event_score = similarity_scores[index]
        event_location = location_filtered_events[index][2]
        
        recommendations.append({
            'event': event_name,
            'location': event_location,
            'score': event_score
        })
    
    return recommendations

# Example usage
if __name__ == "__main__":
    # Display welcome message
    print("Hei, hello! Welcome to Zynk! Discover events and hackathons based on your interests and fields of expertise.")
    print("Available Domains: AI, Blockchain, Web3, Cybersecurity, Python, IoT, DevOps, Robotics")
    
    # Load the event data from the JSON file
    event_data = load_event_data("events.json")
    
    # Sample user input
    user_query = input("Enter a domain (e.g., AI, Blockchain, Web3, etc.): ").lower()  # Allow user input for domain
    location = input("Enter a location (e.g., Bengaluru, Chennai, etc.): ")  # Allow user input for location
    
    # Get recommendations
    recommended_events = recommend_events(user_query, location, event_data)
    
    # Print recommendations
    if recommended_events:
        print("\nRecommended Events based on your query:")
        for rec in recommended_events:
            print(f"Event: {rec['event']}, Location: {rec['location']}, Score: {rec['score']:.3f}")
    else:
        print("No events to recommend based on your query.")

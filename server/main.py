from fastapi import FastAPI, Query
from .ai.train import recommend_events, load_event_data
import os
import json

app = FastAPI()

# Load event data (make sure the file path is correct)
EVENTS_FILE = os.path.join(os.path.dirname(__file__), 'ai', 'events.json')

# Ensure that the events.json file exists
if not os.path.exists(EVENTS_FILE):
    raise FileNotFoundError(f"Could not find the events file at {EVENTS_FILE}")

event_data = load_event_data(EVENTS_FILE)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Zynk Event API"}

@app.post("/recommend/")
def get_recommendations(query: str, location: str):
    # Call the recommend_events function
    recommendations = recommend_events(query, location, event_data)
    
    if not recommendations:
        return {"message": f"No recommendations found for '{query}' in '{location}'"}
    
    return {"recommendations": recommendations}

from dotenv import load_dotenv
from pathlib import Path
import requests
import os

class DBGameAPI:
    def __init__(self):
        # Carrega as variaves de ambiente do .env
        dotenv_path = Path(__file__).resolve().parent.parent.parent.parent / '.env'
        load_dotenv(dotenv_path=dotenv_path)   
        # Pega as variaves de ambiente do .env
        self.IGDB_CLIENT_ID = os.getenv('IGDB_CLIENT_ID')
        self.IGDB_CLIENT_SECRET = os.getenv('IGDB_CLIENT_SECRET')
        self.GRANT_TYPE = os.getenv('GRANT_TYPE')

    def get_access_token(self)-> dict:
        igdb_url = f"https://id.twitch.tv/oauth2/token"
        response = requests.post(igdb_url, json = {
            'client_id': self.IGDB_CLIENT_ID,
            'client_secret': self.IGDB_CLIENT_SECRET,
            'grant_type': self.GRANT_TYPE
        })
        return response.json()
    
    def get_games(self, access_token:str):
        url =  "https://api.igdb.com/v4/games"
        headers = {
        'Client-ID': self.IGDB_CLIENT_ID,
        'Authorization': f'Bearer {access_token}',
        }
        data = 'fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;'
        response =  requests.post(url,headers=headers,data=data)
        return response.json()
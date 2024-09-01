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

    def get_access_token(self):
        igdb_url = f"https://id.twitch.tv/oauth2/token"

        response = requests.post(igdb_url, json = {
            'client_id': self.IGDB_CLIENT_ID,
            'client_secret': self.IGDB_CLIENT_SECRET,
            'grant_type': self.GRANT_TYPE
        })
        return response.json()
from dotenv import load_dotenv
from pathlib import Path
import requests
import os
import time

class DBGameAPI:
    def __init__(self):
        # Carrega as variaves de ambiente do .env
        dotenv_path = Path(__file__).resolve().parent.parent / '.env'
        load_dotenv(dotenv_path=dotenv_path)   
        # Pega as variaves de ambiente do .env
        self.IGDB_CLIENT_ID = os.getenv('IGDB_CLIENT_ID')
        self.IGDB_CLIENT_SECRET = os.getenv('IGDB_CLIENT_SECRET')
        self.GRANT_TYPE = os.getenv('GRANT_TYPE')

    
    def get_games(self, access_token:str):
        url =  "https://api.igdb.com/v4/games"
        headers = {
        'Client-ID': self.IGDB_CLIENT_ID,
        'Authorization': f'Bearer {access_token}',
        }
        data = 'fields *, cover.url; search "witcher"; limit 1;'
        response =  requests.post(url,headers=headers,data=data)
        return response.json()
    
    def get_card(self, access_token:str):
        dic = {}
        url =  "https://api.igdb.com/v4/games"
        headers = {
        'Client-ID': self.IGDB_CLIENT_ID,
        'Authorization': f'Bearer {access_token}',
        'Accept': 'application/json'
        }
        data = 'fields id, name, cover.*, *, release_dates.*, screenshots.*; search "minecraft"; limit 1;'
        response =  requests.post(url,headers=headers,data=data)
        game_data = response.json()
        p_jogo = game_data[0]
        dic.update({"capa": p_jogo['cover']['url']})
        dic.update({"nome": p_jogo['name']})
        dic.update({"descricao": p_jogo['summary']})
        dic.update({"criado_em": time.strftime("%Y", time.gmtime(p_jogo['first_release_date']))})
        
        return dic

    # def post_card(self, access_token:str):
    #     url =  "https://api.igdb.com/v4/games"
    #     headers = {
    #     'Client-ID': self.IGDB_CLIENT_ID,
    #     'Authorization': f'Bearer {access_token}',
    #     'Accept': 'application/json'
    #     }
    #     dic = {}
    #     data = 'fields id, name, cover.*, *, release_dates.*, screenshots.*; search "minecraft"; limit 1;'
    #     response =  requests.post(url,headers=headers,data=data)
    #     game_data = response.json()
    #     p_jogo = game_data[0]
    #     dic.update({"capa": p_jogo['cover']['url']})
    #     dic.update({"nome": p_jogo['name']})
    #     dic.update({"descricao": p_jogo['summary']})
    #     dic.update({"criado_em": time.strftime("%Y", time.gmtime(p_jogo['first_release_date']))})
    #     return dic
        

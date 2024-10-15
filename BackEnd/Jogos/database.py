from dotenv import load_dotenv
from pathlib import Path
from auth import get_token
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
        self.access_token = get_token()

    def get_games(self):
        url =  "https://api.igdb.com/v4/games"
        headers = {
        'Client-ID': self.IGDB_CLIENT_ID,
        'Authorization': f'Bearer {self.access_token}',
        }
        data = 'fields *, involved_companies.company.name, game_engines.*, videos.*, cover.*, platforms.name, franchises.*, genres.name, release_dates.*; search "cs"; limit 1;'
        response =  requests.post(url,headers=headers,data=data)

        url = "https://api.igdb.com/v4/companies"
        id_company = str(response.json()[0]['involved_companies'][0]['company'])



        print(id_company)

        return response.json()
    
    def get_card(self):
        dic = {}
        url =  "https://api.igdb.com/v4/games"
        headers = {
        'Client-ID': self.IGDB_CLIENT_ID,
        'Authorization': f'Bearer {self.access_token}',
        'Accept': 'application/json'
        }
        data = 'fields id, involved_companies.company.name, name, cover.*, *, videos.*, genres.name, platforms.*, release_dates.*, screenshots.*; search "league of legends"; limit 1;'
        response =  requests.post(url,headers=headers,data=data)
        game_data = response.json()
        print(game_data)
        p_jogo = game_data[0]
        dic.update({"capa": p_jogo['cover']['url']})
        dic.update({"nome": p_jogo['name']})
        dic.update({"descricao": p_jogo['summary']})
        dic.update({"criado_em": time.strftime("%D", time.gmtime(p_jogo['first_release_date']))})
        dic.update({"empresas_envolvidas": [i['company']['name'] for i in p_jogo['involved_companies']]})
        dic.update({"generos": [i['name'] for i in p_jogo['genres']]})
        dic.update({"plataformas":[i['name'] for i in p_jogo['platforms']]})
        # dic.update({"trailers":['https://www.youtube.com/watch?v='+i['video_id'] for i in p_jogo['videos']]})
        if 'videos' in p_jogo:
            dic.update({"trailers":['https://www.youtube.com/watch?v='+i['video_id'] for i in p_jogo['videos']]})
        else:
            pass
        
      
        


        return dic

    # def post_card(self):
    #     url =  "https://api.igdb.com/v4/games"
    #     headers = {
    #     'Client-ID': self.IGDB_CLIENT_ID,
    #     'Authorization': f'Bearer {self.access_token}',
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
        

from database import DBGameAPI
from auth import get_token

class GameAPI:
    def __init__(self):
        self.access_token = get_token()
    
    def get_games(self):
        access_token = self.access_token
        games = DBGameAPI().get_games(access_token)
        dict_games = {}
        for game in games:
            dict_games[game['id']] = game
        return dict_games
    
    def get_card(self):
         access_token = self.access_token
         data = DBGameAPI().get_card(access_token)
         return data
    
    # def post_card(self):
    #      access_token = self.get_access_token()
    #      data = DBGameAPI().post_card(access_token)
    #      return data
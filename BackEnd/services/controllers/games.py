from services.database.db_game_api import DBGameAPI

class GameAPI:
    def __init__(self):
        pass

    def get_access_token(self) -> str:
        data = DBGameAPI().get_access_token()
        access_token = data['access_token']
        return access_token

    
    def get_games(self):
        access_token = self.get_access_token()
        data = DBGameAPI().get_games(access_token)
        return data
    
    def get_card(self):
         access_token = self.get_access_token()
         data = DBGameAPI().get_card(access_token)
         return data
    
    # def post_card(self):
    #      access_token = self.get_access_token()
    #      data = DBGameAPI().post_card(access_token)
    #      return data
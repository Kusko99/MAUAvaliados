from services.database.db_game_api import DBGameAPI

class GameAPI:
    def __init__(self):
        pass

    def get_access_token(self):
        data = DBGameAPI().get_access_token()
        access_token = data['access_token']
        return access_token
    
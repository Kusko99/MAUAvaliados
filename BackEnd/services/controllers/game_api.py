from services.database.db_game_api import DBGameAPI

class GameAPI:
    def __init__(self):
        pass

    def get_access_token(self):
        return DBGameAPI().get_access_token()
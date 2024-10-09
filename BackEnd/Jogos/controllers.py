from database import DBGameAPI

class GameAPI:
    def __init__(self):
        pass
    
    def get_games(self) -> dict:
        games = DBGameAPI().get_games()
        dict_games = {}
        for game in games:
            dict_games[game['id']] = game
        return dict_games
    
    def get_card(self) -> dict:
        data = DBGameAPI().get_card()
        return data
    
    # def post_card(self):
    #      data = DBGameAPI().post_card()
    #      return data
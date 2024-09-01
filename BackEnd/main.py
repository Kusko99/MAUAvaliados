from flask import Flask
from services.controllers.game_api import GameAPI

app = Flask(__name__)

@app.route('/')
def hello():
    return GameAPI().get_access_token()

if __name__ == '__main__':
    app.run()
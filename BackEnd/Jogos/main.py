from flask import Flask
from auth import get_token

app = Flask(__name__)


def main():
    from routes import games_routes
    app.register_blueprint(games_routes)
    get_token()
    
if __name__ == '__main__':
    main()  
    app.run(port=5000, debug=True) 

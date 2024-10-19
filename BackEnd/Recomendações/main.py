from flask import Flask
from flask_cors import CORS
from barramento import barramento
from threading import Thread
import os, sys

app = Flask(__name__)
CORS(app)

def consumer():
    try:
        print("Hello")
        barramento().recive()
    except KeyboardInterrupt:
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)

def main():
    from routes import recomendacao_routes

    app.register_blueprint(recomendacao_routes)

if __name__ == '__main__':
    consumer_thread = Thread(target=consumer)
    consumer_thread.start()

    main()
    app.run(port=8000, debug=True)
    

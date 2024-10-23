import requests
import time
import os
from dotenv import load_dotenv
from pathlib import Path

#variaveis globais para armazenamento do token e tempo de expiração
access_token = None
token_experition = None


def _get_credentials() -> dict:
    """Retorna as credenciais do IGDB a partir do dotenv"""
    dotenv_path = Path(__file__).resolve().parent.parent / ".env"
    load_dotenv(dotenv_path=dotenv_path)
    IGDB_CLIENT_ID = os.getenv("IGDB_CLIENT_ID")
    IGDB_CLIENT_SECRET = os.getenv("IGDB_CLIENT_SECRET")
    GRANT_TYPE = os.getenv("GRANT_TYPE")
    return {
        "IGDB_CLIENT_ID": IGDB_CLIENT_ID,
        "IGDB_CLIENT_SECRET": IGDB_CLIENT_SECRET,
        "GRANT_TYPE": GRANT_TYPE,
    }


def _get_access_token() -> dict:
    """Altera as variveis globais com o valor do acess token e expiration time"""
    global access_token, token_experition

    igdb_url = f"https://id.twitch.tv/oauth2/token"
    credentials = _get_credentials()
    response = requests.post(
        igdb_url,
        json={
            "client_id": credentials["IGDB_CLIENT_ID"],
            "client_secret": credentials["IGDB_CLIENT_SECRET"],
            "grant_type": credentials["GRANT_TYPE"],
        },
    )
    if response.status_code == 200:
        access_token = response.json()["access_token"]
        token_experition = time.time() + response.json()["expires_in"]
        print('CLIENT ID: '+ credentials["IGDB_CLIENT_ID"])
        print('ACCESS TOKEN: '+ access_token)
    else:
        raise Exception("Error getting access token")
    
def _check_and_refresh_token():
    """Verifica se o token expirou e se sim solicita um novo"""
    if token_experition is None or time.time() > token_experition:
        _get_access_token()

def get_token():
    "Retorna o access token"
    _check_and_refresh_token()
    return access_token

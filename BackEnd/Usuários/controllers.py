from database import UserDB
from connector import User, ListGame, UserList
from barramento import barramento
from uuid import uuid4

class UserController:
    def __init__(self):
        pass


    def create_user(self, user: dict) -> dict:
        "Controller de criação de um usuário"
        db_user = User(
            id=user["id"],
            password=user.get("passwordEnabled", False),
            banned=user.get("banned", False),
            locked=user.get("locked", False),
            imageUrl=user["imageUrl"],
            hasImage=user["hasImage"],
            username=user["username"],
            firstName=user["firstName"],
            lastName=user["lastName"],
            emailAdress=(
                user["emailAddresses"][0]["emailAddress"]
                if user["emailAddresses"]
                else "Sem Email"
            ),
        )
        barramento().publish("UserCreated", db_user.to_dict())
        user = UserDB().create_user(db_user)
        return user

    def get_user_by_id(self, user_id: str) -> dict:
        "Controller que busca um(usuário) por ID"
        user = UserDB().get_user_by_id(user_id)
        return user
    
    def update_user(self,user_id: str, user_data: dict) -> dict:
        "Controller de atualização de um usuário"
        update_user = UserDB().update_user(user_id, user_data)
        return update_user
    
    def delete_user(self, user_id: str) -> dict:
        "Controller de exclusão de um usuário"
        response = UserDB().delete_user(user_id)
        barramento().publish("UserCreated", {"user_id": user_id})
        return response
    
    def create_list(self, user_id: str, data: dict) -> str:
        "Controller de criação de uma lista de jogos"
        list_id = str(uuid4())
        list = {
            "id": list_id,
            "user_id": user_id,
            "name": data["name"],
            "description": data["description"],
        }
        db_list = UserList(
            id = list["id"], 
            id_user = list["user_id"],
            name = list["name"],
            description = list["description"]
        )
        UserDB().create_list(db_list)
        return list_id
        
    

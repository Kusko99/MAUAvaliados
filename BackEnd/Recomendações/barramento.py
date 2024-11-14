import pika
import json
from controllers import RecomendaController

class barramento:
    def event(self,type:str,body:dict)->dict:
        "Metodo que constroi um evento"
        return {
            "type": type,
            "body": body
        }

    def publish(self,type:str,body:dict):
        "Metodo para publicar um evento em na fila"
        connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
        channel = connection.channel()
        channel.queue_declare(queue='eventos')
        event = self.event(type,body)
        event_json = json.dumps(event)
        channel.basic_publish(exchange='', routing_key='eventos', body=event_json)
        connection.close()


    def recive(self) -> dict:
        "Metodo para receber um evento da fila"
        connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
        channel = connection.channel()
        channel.queue_declare(queue='eventos')
        channel.basic_consume(queue='eventos',on_message_callback=self.event_handler, auto_ack=True)
        channel.start_consuming()
        connection.close()

    
    def event_handler(self, ch, method, properties, body):
        "Metodo para lidar com os eventos recebidos"
        event = json.loads(body)
        if event.type == "UserCreated":
            RecomendaController().create_usuario(event.body)
        elif event.type == "AvaliacaoCreated":
            RecomendaController().create_aval(event.body)
        elif event.type == "UserDeleted":
            RecomendaController().delete_usuario(event.body)
        print(event)


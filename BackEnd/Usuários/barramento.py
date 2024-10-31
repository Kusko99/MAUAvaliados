import pika
import json

class barramento:
    def event(self,type:str,body:dict)->dict:
        "Metodo que constroi um evento"
        return {
            "type": type,
            "body": body
        }

    def publish(self,type:str,body:dict):
        "Metodo para publicar um evento em na fila"
        #Se for rodar local trocar está host.docker.internal por localhost
        connection = pika.BlockingConnection(pika.ConnectionParameters('host.docker.internal'))
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
        print(event)


# script.py (Python)
import sys
import json

def process_data(data):
    # Simulando processamento de dados (ex: machine learning)
    result = {"prediction": "positive"}  # Exemplo fictício de saída
    return result

if __name__ == "__main__":
    # Recebe os dados passados pelo Node.js
    input_data = json.loads(sys.argv[1])
    
    # Processa os dados
    output = process_data(input_data)
    
    # Retorna o resultado ao Node.js
    print(json.dumps(output))

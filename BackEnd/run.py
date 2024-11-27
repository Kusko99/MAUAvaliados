import subprocess
import os

services = [
    os.path.join("BackEnd", "Jogos", "main.py"),
    os.path.join("BackEnd", "Usuários", "main.py"),
    os.path.join("BackEnd", "Avaliações", "main.py"),
    os.path.join("BackEnd", "Recomendações", "main.py")
]

processes = []

try:
    for service in services:
        process = subprocess.Popen(["python", service])
        processes.append(process)

        print(f"Serviço {service} iniciado com sucesso!")

    for process in processes:
        process.wait()

except KeyboardInterrupt:
    print("\nInterrompendo todos os serviços...")
    for process in processes:
        process.kill()

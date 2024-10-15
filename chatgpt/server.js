// server.js (Node.js)
// Crie uma API que receba dados do usuário e os envie para o script Python para processamento.
const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.use(express.json());

app.post('/process-data', (req, res) => {
    const inputData = req.body;

    // Executa o script Python
    const pythonProcess = spawn('python3', ['script.py', JSON.stringify(inputData)]);

    // Coleta os dados de saída do script Python
    pythonProcess.stdout.on('data', (data) => {
        const result = data.toString();
        res.json({ result });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Erro: ${data}`);
        res.status(500).send('Erro no processamento Python');
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

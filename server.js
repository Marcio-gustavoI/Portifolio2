const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

// Iniciando as ferramentas
const prisma = new PrismaClient();
const app = express();

// Configurações básicas
app.use(cors()); // Permite que o seu HTML converse com essa API
app.use(express.json()); // Permite que a API entenda dados no formato JSON

// --- ROTAS ---

// ROTA 1: GET /projetos (Busca todos os projetos no banco)
app.get('/projetos', async (req, res) => {
    try {
        const projetos = await prisma.projeto.findMany();
        
        // Como o SQLite não salva arrays (listas) nativamente, 
        // salvamos como texto e convertemos de volta para array aqui.
        const projetosFormatados = projetos.map(p => ({
            ...p,
            tecnologias: JSON.parse(p.tecnologias)
        }));

        res.json(projetosFormatados);
    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        res.status(500).json({ erro: "Erro interno no servidor" });
    }
});

// ROTA 2: POST /projetos (Cria um novo projeto no banco)
app.post('/projetos', async (req, res) => {
    try {
        // Pegando os dados que vieram do Postman ou do site
        const { nome, descricao, tecnologias, link } = req.body;
        
        // Mandando o Prisma salvar no banco de dados
        const novoProjeto = await prisma.projeto.create({
            data: {
                nome,
                descricao,
                tecnologias: JSON.stringify(tecnologias), // Converte array ["HTML", "CSS"] em texto
                link
            }
        });

        // Retorna status 201 (Criado com sucesso) e o projeto criado
        res.status(201).json(novoProjeto);
    } catch (error) {
        console.error("Erro ao criar projeto:", error);
        res.status(500).json({ erro: "Erro ao salvar no banco de dados" });
    }
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log('🚀 API oficial rodando na porta http://localhost:3000');
});
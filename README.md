## Como rodar o projeto localmente (Back-end e Front-end)

Para testar a integração do portfólio com o banco de dados, siga os passos abaixo:

1. **Instale as dependências do Node:**
   No terminal, dentro da pasta do projeto, execute:
   \`\`\`bash
   npm install
   \`\`\`

2. **Gere o banco de dados SQLite:**
   Para criar o banco e as tabelas através do Prisma, execute:
   \`\`\`bash
   npx prisma migrate dev
   \`\`\`

3. **Inicie o Servidor da API:**
   \`\`\`bash
   node server.js
   \`\`\`
   A API estará rodando em `http://localhost:3000`.

4. **Abra o Front-end:**
   Com a API rodando, abra o arquivo `index.html` no seu navegador. Os projetos exibidos na tela agora estão vindo diretamente do banco de dados SQLite via requisição HTTP (`fetch`).
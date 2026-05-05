# Atividade Avaliativa 02 - Portfólio

## Link do portfólio publicado no GitHub Pages

Cole aqui o link depois de publicar:

```txt
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

## Requisições HTTP testadas

Para testar as requisições HTTP GET, POST, PUT e DELETE, foi utilizado o `json-server`, simulando as rotas da API do portfólio.

## Como rodar a API fake

No terminal, dentro da pasta do projeto, execute:

```bash
npx json-server --watch db.json --port 3000
```

Depois disso, use Postman, Insomnia, Thunder Client ou o arquivo `api-tests.http` para testar as rotas.

## Rotas utilizadas

### GET

Lista os dados do perfil:

```txt
GET http://localhost:3000/perfil
```

Lista os projetos:

```txt
GET http://localhost:3000/projetos
```

### POST

Adiciona um novo projeto:

```txt
POST http://localhost:3000/projetos
```

Body:

```json
{
  "nome": "Novo Projeto do Portfólio",
  "descricao": "Projeto criado por uma requisição POST para testar a API do portfólio.",
  "tecnologias": ["HTML", "CSS", "JavaScript"],
  "link": "https://github.com/Marcio-gustavoI"
}
```

### PUT

Atualiza um projeto existente:

```txt
PUT http://localhost:3000/projetos/1
```

Body:

```json
{
  "id": 1,
  "nome": "Urban Store - Atualizado",
  "descricao": "Projeto atualizado por uma requisição PUT.",
  "tecnologias": ["HTML", "CSS", "Bootstrap", "Git", "JavaScript"],
  "link": "https://urbans-phi.vercel.app/"
}
```

### DELETE

Remove um projeto:

```txt
DELETE http://localhost:3000/projetos/2
```

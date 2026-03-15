// --- Bom dia, Boa tarde e Boa noite ---
var agora = new Date();
var hora = agora.getHours();
var campoMensagem = document.getElementById('mensagem');

if (hora < 12) {
    campoMensagem.innerText += 'Bom dia, ';
} else if (hora <= 18) {
    campoMensagem.innerText += 'Boa tarde, ';
} else {
    campoMensagem.innerText += 'Boa noite, ';
}

// --- Login ---
function fazerLogin() {
    let senha = prompt("Digite a senha de administrador:");
    if (senha === "marcio123") {
        document.body.classList.add("admin-mode");
    } else if (senha !== null) {
        alert("Senha incorreta.");
    }
}

// --- Função geral ---
function deletarItem(botao, seletorPai) {
    if (confirm("Tem certeza que deseja apagar este item?")) {
        botao.closest(seletorPai).remove();
    }
}

// --- Função perfil ---
function editarPerfilCompleto() {
    let nomeEl = document.getElementById('perfil-nome');
    let tituloEl = document.getElementById('perfil-titulo');
    let descEl = document.getElementById('perfil-descricao');

    let novoNome = prompt("Edite o seu nome:", nomeEl.innerText.replace('sou ', ''));
    if (novoNome !== null) nomeEl.innerText = "sou " + novoNome;

    let novoTitulo = prompt("Edite o seu título/profissão:", tituloEl.innerText);
    if (novoTitulo !== null) tituloEl.innerText = novoTitulo;

    let novaDesc = prompt("Edite a sua descrição:", descEl.innerText);
    if (novaDesc !== null) descEl.innerText = novaDesc;
}

// --- Função habilidade ---
function editarHabilidade(botao) {
    let textoElemento = botao.closest('li').querySelector('span');
    let novoTexto = prompt("Edite a habilidade:", textoElemento.innerText);
    if (novoTexto) { textoElemento.innerHTML = `<strong>Editado:</strong> ${novoTexto}`; }
}

function adicionarHabilidade(idLista) {
    let textoDaHabilidade = prompt("Digite a nova habilidade:");

    if (textoDaHabilidade) {
        let lista = document.getElementById(idLista);
        let novoLi = document.createElement('li');
        novoLi.className = "mb-3 d-flex align-items-center";

        // Escolhe o ícone certo dependendo de qual lista o botão chama
        let classeIcone = idLista === 'lista-hard-skills' ? 'fa-check text-primary' : 'fa-star text-primary';

        novoLi.innerHTML = `
            <i class="fas ${classeIcone} me-3"></i>
            <span>${textoDaHabilidade}</span>
            <button class="btn btn-sm btn-outline-warning admin-only ms-auto" onclick="editarHabilidade(this)"><i class="fas fa-pen"></i></button>
            <button class="btn btn-sm btn-outline-danger admin-only ms-1" onclick="deletarItem(this, 'li')"><i class="fas fa-trash"></i></button>
        `;
        lista.appendChild(novoLi);
    }
}

// --- Função currículo ---
function editarCurriculo(botao) {
    let textoElemento = botao.closest('.item-curriculo').querySelector('.titulo-item');
    let novoTexto = prompt("Edite o nome do curso/certificado:", textoElemento.innerText);
    if (novoTexto) { textoElemento.innerText = novoTexto; }
}

function adicionarCurriculo(idLista) {
    let titulo = prompt("Nome do Curso ou Certificado:");
    if (!titulo) return;
    let subtitulo = prompt("Instituição e Ano (Ex: SENAC - 2025):");
    let descricao = prompt("Breve descrição do que você aprendeu:");

    let div = document.createElement('div');
    div.className = "mt-4 position-relative item-curriculo";
    div.innerHTML = `
        <h4><span class="titulo-item">${titulo}</span> 
            <button class="btn btn-sm btn-outline-warning admin-only ms-2" onclick="editarCurriculo(this)"><i class="fas fa-pen"></i></button>
            <button class="btn btn-sm btn-outline-danger admin-only ms-1" onclick="deletarItem(this, '.item-curriculo')"><i class="fas fa-trash"></i></button>
        </h4>
        <p class="fw-bold mb-1">${subtitulo}</p>
        <p class="text-muted small">${descricao}</p>
    `;
    document.getElementById(idLista).appendChild(div);
}

// --- Função projeto ---
function editarProjeto(botao) {
    let textoElemento = botao.closest('.projeto-card').querySelector('.titulo-projeto');
    let novoTexto = prompt("Edite o título do projeto:", textoElemento.innerText);
    if (novoTexto) { textoElemento.innerText = novoTexto; }
}

function adicionarProjeto() {
    let titulo = prompt("Qual o nome do novo projeto?");
    if (!titulo) return;
    let descricao = prompt("Descreva o projeto brevemente:");

    // Pede a imagem
    let urlImagem = prompt("Cole a URL (link) da imagem do projeto.\n(Deixe em branco se não quiser imagem):");

    let tagImagemHTML = urlImagem ? `<img src="${urlImagem}" class="card-img-top" alt="Imagem do Projeto">` : '';

    let div = document.createElement('div');
    div.className = "col-lg-5 col-md-6 mb-4 position-relative projeto-card";
    div.innerHTML = `
        <a href="#" class="text-decoration-none">
            <div class="card h-100 shadow-sm bg-dark text-light border-success">
                ${tagImagemHTML}
                <div class="card-body mt-4">
                    <p class="small text-success opacity-75">Novo Projeto Adicionado</p>
                    <h5 class="card-title titulo-projeto">${titulo}</h5>
                    <p class="card-text text-white">${descricao}</p>
                </div>
            </div>
        </a>
        <div class="admin-only position-absolute top-0 end-0 p-2 z-3">
            <button class="btn btn-warning btn-sm shadow" onclick="editarProjeto(this)"><i class="fas fa-pen"></i></button>
            <button class="btn btn-danger btn-sm shadow" onclick="deletarItem(this, '.projeto-card')"><i class="fas fa-trash"></i></button>
        </div>
    `;
    document.getElementById('lista-projetos').appendChild(div);
}

// --- Função contato ---
function editarContatos() {
    let linkGit = document.getElementById('link-github');
    let linkIn = document.getElementById('link-linkedin');
    let linkMail = document.getElementById('link-email');

    // GitHub
    let novoGit = prompt("Cole o seu link do GitHub:", linkGit.href);
    if (novoGit !== null) linkGit.href = novoGit;

    // Linkedin
    let novoIn = prompt("Cole o seu link do LinkedIn:", linkIn.href);
    if (novoIn !== null) linkIn.href = novoIn;

    // Email
    let emailAtual = linkMail.href.replace('mailto:', '');
    let novoMail = prompt("Digite o seu endereço de E-mail:", emailAtual);
    if (novoMail !== null) linkMail.href = 'mailto:' + novoMail;
}

// --- Função de salvar dados ---
function salvarTudoNoNavegador() {
    let conteudoPrincipal = document.querySelector('main').innerHTML;
    localStorage.setItem('meu_portfolio_salvo', conteudoPrincipal);
    
    let contatosHTML = document.getElementById('contato').innerHTML;
    localStorage.setItem('meu_portfolio_contatos', contatosHTML);

    alert("Suas alterações foram salvas neste navegador!");
}

function carregarDadosSalvos() {
    let conteudoSalvo = localStorage.getItem('meu_portfolio_salvo');
    let contatosSalvos = localStorage.getItem('meu_portfolio_contatos');

    if (conteudoSalvo) {
        document.querySelector('main').innerHTML = conteudoSalvo;
    }
    if (contatosSalvos) {
        document.getElementById('contato').innerHTML = contatosSalvos;
    }
}

// Carrega os dados salvos
carregarDadosSalvos();  
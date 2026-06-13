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

    let urlImagem = prompt("Cole a URL (link) da imagem do projeto.\n(Deixe em branco se não quiser imagem):");
    let tagImagemHTML = urlImagem ? `<img src="${urlImagem}" class="card-img-top" alt="Imagem do Projeto">` : '';

    let div = document.createElement('div');
    div.className = "col-lg-5 col-md-6 mb-4 position-relative projeto-card";
    div.innerHTML = `
        <div class="card h-100 shadow-sm bg-dark text-light border-success">
            ${tagImagemHTML}
            <div class="card-body mt-4">
                <p class="small text-success opacity-75">Novo Projeto Adicionado</p>
                <h5 class="card-title titulo-projeto">${titulo}</h5>
                <p class="card-text text-white">${descricao}</p>
            </div>
        </div>
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

    let novoGit = prompt("Cole o seu link do GitHub:", linkGit.href);
    if (novoGit !== null) linkGit.href = novoGit;

    let novoIn = prompt("Cole o seu link do LinkedIn:", linkIn.href);
    if (novoIn !== null) linkIn.href = novoIn;

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

// --- Projetos (array estático — definitivo e corrigido) ---
const projetos = [
    {
        nome: "Urban Store",
        empresa: "Projeto Individual",
        descricaoCurta: "Site institucional sobre urbanismo e desigualdade social.",
        contribuicao: "Feito inteiramente por mim.",
        tecnologias: ["HTML", "CSS", "Bootstrap", "Git"],
        badgeClasses: ["bg-primary", "bg-secondary", "bg-success", "bg-info"],
        link: "https://urbans-phi.vercel.app/",
        imagem: "img/Projeto1.png",
        documentacao: {
            problema: "A conscientização sobre problemas de urbanismo muitas vezes fica restrita a textos acadêmicos complexos e de difícil acesso. Informações importantes sobre a distribuição de recursos nas cidades não alcançam os cidadãos comuns por falta de canais digitais simples.",
            solucao: "Foi desenvolvido um site informativo e responsivo focado em urbanismo e desigualdade social, utilizando componentes visuais limpos para facilitar a leitura em celulares e computadores de forma direta.",
            contribuicoes: "Projeto individual desenvolvido por mim. Fui o único responsável por toda a estruturação da interface e pela codificação do front-end utilizando HTML, CSS e o framework Bootstrap.",
            hardSkills: "HTML/CSS (Autonomia), Bootstrap (Autonomia), Git (Autonomia).",
            softSkills: "Aprendizado Contínuo: busquei desenvolver minhas competências técnicas em desenvolvimento front-end criando uma interface responsiva, organizada e fluida de forma completamente autônoma."
        }
    },
    {
        nome: "Planeja SJC",
        empresa: "FATEC SJC — 1º Semestre (2025-2)",
        descricaoCurta: "Site relatório de dados em gráficos sobre censo de São José dos Campos.",
        contribuicao: "Neste projeto, fui responsável pelo design visual, desenvolvimento do front-end e migração para Flask.",
        tecnologias: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "Python", "Flask", "Git", "Figma"],
        badgeClasses: ["bg-primary", "bg-secondary", "bg-info text-dark", "bg-success", "bg-info text-dark", "bg-warning text-dark", "bg-light text-dark", "bg-secondary", "bg-danger"],
        link: "https://api-censo-2022.vercel.app/",
        imagem: "img/Projeto3.png",
        documentacao: {
            problema: "Os dados do censo demográfico de São José dos Campos são disponibilizados em formatos brutos e complexos pelo município. A falta de uma visualização clara dificulta a análise ágil de informações sobre a população, exigindo o cruzamento manual de planilhas extensas.",
            solucao: "Foi desenvolvido um sistema web interativo que processa os dados brutos do censo e os apresenta através de gráficos limpos e intuitivos, permitindo uma navegação facilitada pelas estatísticas do município. O sistema foi migrado para uma estrutura com Flask, garantindo melhor performance.",
            contribuicoes: "Fui o principal responsável pelo design visual da aplicação, criando os protótipos no Figma. Atuei diretamente no desenvolvimento do front-end codificando as telas com HTML, CSS, Bootstrap e Tailwind. Também trabalhei na migração da estrutura do site para o framework Flask em Python sob os requisitos definidos pelo professor Fernando Masanori Ashikaga.",
            hardSkills: "Python/Flask (Autonomia), JavaScript (Autonomia), Figma (Autonomia), HTML/CSS (Autonomia).",
            softSkills: "Resolução de Problemas: ao identificar que a arquitetura estática dificultava a atualização dos dados do censo, analisei as opções disponíveis e tomei a iniciativa de migrar a aplicação para o Flask, reestruturando as pastas e rotas do projeto de forma independente."
        }
    },
    {
        nome: "API-Akaer",
        empresa: "Akaer — 2º Semestre (2026-1)",
        descricaoCurta: "Plataforma web para gerenciamento e filtragem de normas aeronáuticas.",
        contribuicao: "Atuei como Product Owner, refinando requisitos junto à Akaer e organizando o backlog da equipe OmniDevs.",
        tecnologias: ["TypeScript", "Node.js", "React", "Prisma", "MySQL"],
        badgeClasses: ["bg-primary", "bg-success", "bg-info text-dark", "bg-warning text-dark", "bg-danger"],
        link: "https://github.com/Marcio-gustavoI",
        imagem: null,
        documentacao: {
            problema: "A gestão de normas aeronáuticas exige extremo rigor, mas o processo de catalogação e busca de documentos técnicos é frequentemente descentralizado e trabalhoso. Engenheiros perdem tempo precioso procurando o status atualizado de diretrizes específicas ou filtrando normas por órgão emissor em planilhas, o que pode gerar atrasos na produção e inconsistências graves na conformidade dos projetos aeronáuticos.",
            solucao: "Foi desenvolvido um sistema web completo voltado para o gerenciamento de conteúdo técnico e normativo. A plataforma centraliza o cadastro de diretrizes aeronáuticas e oferece um painel de buscas avançadas para filtrar normas por status e órgão emissor, otimizando o fluxo de trabalho dos engenheiros.",
            contribuicoes: "Atuei como Product Owner da equipe OmniDevs, sendo responsável por refinar os requisitos da plataforma junto à Akaer e organizar o backlog do projeto. Além da gestão do produto, atuei no desenvolvimento back-end, auxiliando na configuração e integração das rotas em Node.js. Também trabalhei na validação do schema do banco de dados utilizando Prisma ORM durante a Sprint 2, garantindo que as lógicas de filtragem funcionassem corretamente.",
            hardSkills: "TypeScript (Autonomia), Node.js (Autonomia), Prisma ORM (Com ajuda), React (Com ajuda), MySQL (Com ajuda).",
            softSkills: "Comunicação Efetiva: na Sprint 2, ao notar dificuldades no fluxo de versionamento e na integração do banco com o Prisma, organizei alinhamentos rápidos com os desenvolvedores da equipe. Isso garantiu que as tarefas de back-end fossem redistribuídas corretamente e entregues no prazo, sem sobrecarregar nenhum membro."
        }
    },
    {
        nome: "Aerocode CLI",
        empresa: "Akaer — 2º Semestre (2026-1) / Avaliação Individual",
        descricaoCurta: "MVP de sistema CLI para gestão de produção aeronáutica com controle de acesso.",
        contribuicao: "Desenvolvimento do controle de acesso baseado em papéis (RBAC) em TypeScript.",
        tecnologias: ["TypeScript", "Node.js", "Git"],
        badgeClasses: ["bg-primary", "bg-success", "bg-secondary"],
        link: "https://github.com/Marcio-gustavoI",
        imagem: null,
        documentacao: {
            problema: "A gestão da produção aeronáutica envolve diversos níveis de permissão que, se não controlados adequadamente, podem gerar falhas de segurança e acessos indevidos a informações sensíveis. Processos manuais de controle de usuários no chão de fábrica atrasam a linha de montagem e dificultam a auditoria e rastreabilidade das ações de cada funcionário.",
            solucao: "Para mitigar esse problema de segurança, desenvolvemos um sistema Minimum Viable Product (MVP) via interface de linha de comando (CLI) voltado para ambiente desktop. A aplicação gerencia os níveis de acesso dos colaboradores através de um sistema Role-Based Access Control (RBAC), garantindo que apenas pessoal autorizado acesse módulos críticos da produção.",
            contribuicoes: "Neste projeto, atuei como desenvolvedor focado na implementação da lógica de autenticação e autorização em TypeScript. Fui responsável por programar as rotas de acesso e definir as estruturas de dados para os diferentes perfis de usuário. Estruturei a validação de credenciais via terminal, entregando um artefato funcional para a Avaliação Individual 1.",
            hardSkills: "TypeScript (Autonomia), Node.js (Autonomia), Git (Autonomia).",
            softSkills: "Pensamento Crítico: me deparei com o desafio de estruturar a hierarquia de permissões sem usar um banco de dados complexo neste MVP. Analisei os cenários de uso e projetei uma lógica baseada em objetos em memória que atendeu perfeitamente aos requisitos acadêmicos de forma leve e direta."
        }
    }
];

function gerarCardProjeto(projeto) {
    const imgHTML = projeto.imagem
        ? `<img src="${projeto.imagem}" class="card-img-top" alt="Imagem do Projeto ${projeto.nome}">`
        : '';

    const tagsHTML = projeto.tecnologias
        .map((tec, i) => `<span class="badge ${projeto.badgeClasses[i] || 'bg-secondary'} me-1 mb-1">${tec}</span>`)
        .join('');

    const docHTML = projeto.documentacao ? `
        <details class="mt-3">
            <summary class="text-success" style="cursor:pointer; font-size:0.85rem;">📋 Ver Documentação Acadêmica</summary>
            <div class="mt-2 text-white-50" style="font-size:0.82rem; line-height:1.6;">
                <p><strong class="text-white">🏢 Empresa/Semestre:</strong> ${projeto.empresa}</p>
                <p><strong class="text-white">⚠️ Problema:</strong> ${projeto.documentacao.problema}</p>
                <p><strong class="text-white">✅ Solução:</strong> ${projeto.documentacao.solucao}</p>
                <p><strong class="text-white">👤 Contribuições:</strong> ${projeto.documentacao.contribuicoes}</p>
                <p><strong class="text-white">🔧 Hard Skills:</strong> ${projeto.documentacao.hardSkills}</p>
                <p><strong class="text-white">🤝 Soft Skills:</strong> ${projeto.documentacao.softSkills}</p>
            </div>
        </details>
    ` : '';

    return `
        <div class="col-lg-5 col-md-6 mb-4 position-relative projeto-card">
            <div class="card h-100 shadow-sm bg-dark text-light">
                ${imgHTML}
                <div class="card-body d-flex flex-column">
                    <p class="small text-white opacity-75 mb-1">${projeto.descricaoCurta}</p>
                    <h4 class="card-title titulo-projeto text-white border-0 g-0 p-0 m-0 mb-2">${projeto.nome}</h4>
                    <p class="card-text text-white-50 small mb-3">${projeto.contribuicao}</p>
                    <div class="mb-3">${tagsHTML}</div>
                    
                    <div class="mt-auto pt-2 border-top border-secondary">
                        <a href="${projeto.link}" target="_blank" class="btn btn-sm btn-outline-success text-white w-100 mb-2"><i class="fas fa-external-link-alt me-2"></i>Acessar Repositório / Site</a>
                        ${docHTML}
                    </div>
                </div>
            </div>
            <div class="admin-only position-absolute top-0 end-0 p-2 z-3">
                <button class="btn btn-warning btn-sm shadow" onclick="editarProjeto(this)"><i class="fas fa-pen"></i></button>
                <button class="btn btn-danger btn-sm shadow" onclick="deletarItem(this, '.projeto-card')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `;
}

function carregarProjetos() {
    const lista = document.getElementById('lista-projetos');
    lista.innerHTML = projetos.map(gerarCardProjeto).join('');
}

carregarProjetos();
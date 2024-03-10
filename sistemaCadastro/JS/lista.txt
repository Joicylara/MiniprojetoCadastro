document.addEventListener('DOMContentLoaded', function() {
    // Selecione o elemento <main>
    const mainElement = document.querySelector('main');

    // Recupere os dados armazenados localmente
    const cadastroSalvo = localStorage.getItem('cadastro');
    if (cadastroSalvo) {
        const cadastro = JSON.parse(cadastroSalvo);
        // Crie uma instância da classe Lista com os dados recuperados
        const listaCadastro = new Lista(cadastro.materia, cadastro.semestre, cadastro.professor, cadastro.sala);
        // Crie o card com os dados da lista
        const card = listaCadastro.criarCard();
        
        // Adicione o card ao main
        mainElement.appendChild(card);

        // Crie o botão "Adicionar Matéria"
        const botaoAdicionar = document.createElement('button');
        botaoAdicionar.textContent = 'Adicionar Matéria';
        botaoAdicionar.classList.add('adicionarMateria');
        // Adicione o evento de clique ao botão
        botaoAdicionar.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    
        // Adicione o botão após o card
        mainElement.appendChild(botaoAdicionar);
    }
});

class Lista {
    constructor(materia, semestre, professor, sala) {
        this.materia = materia;
        this.semestre = semestre;
        this.professor = professor;
        this.sala = sala;
    }

    criarCard() {
        // Crie um elemento de card
        const card = document.createElement('div');
        card.classList.add('cardLista');
    
        // Crie o corpo do card
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
    
        const titulo = document.createElement('h1');
        titulo.classList.add('tituloSemestre');
        titulo.textContent = `Semestre ${this.semestre}`;
    
        // Crie uma lista não ordenada
        const lista = document.createElement('ul');
        lista.classList.add('lista');
    
        // Crie os itens da lista
        const itemMateria = document.createElement('li');
        itemMateria.textContent = `Matéria: ${this.materia}`;
    
        const itemProfessor = document.createElement('li');
        itemProfessor.textContent = `Professor: ${this.professor}`;
    
        const itemSala = document.createElement('li');
        itemSala.textContent = `Sala: ${this.sala}`;
    
        // Adicione os itens à lista
        lista.appendChild(itemMateria);
        lista.appendChild(itemProfessor);
        lista.appendChild(itemSala);
    
        // Adicione a lista ao corpo do card
        cardBody.appendChild(titulo);
        cardBody.appendChild(lista);
    
        // Adicione o corpo do card ao card
        card.appendChild(cardBody);
    
        return card;
    }
}

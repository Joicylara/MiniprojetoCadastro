document.addEventListener('DOMContentLoaded', function() {
    const cadastroTable = document.getElementById('cadastroTable').getElementsByTagName('tbody')[0];
    const form = document.querySelector('.cadastroForm');
    const cancelButton = document.getElementById('cancelButton');

    const cadastrosSalvos = JSON.parse(localStorage.getItem('cadastros')) || [];
    

   
    function exibirCadastros() {
        cadastroTable.innerHTML = ''; 
        cadastrosSalvos.forEach((cadastro, index) => {
            const row = cadastroTable.insertRow();
            row.innerHTML = `
                <td>${cadastro.materia}</td>
                <td>${cadastro.semestre}</td>
                <td>${cadastro.professor}</td>
                <td>${cadastro.sala}</td>
                <td>
                    <button onclick="editarCadastro(${index})">Editar</button>
                    <button onclick="excluirCadastro(${index})">Excluir</button>
                </td>
            `;
        });
        console.log(cadastrosSalvos);
    }

    exibirCadastros(); 

    
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
           
            form.classList.remove('active');
        });
    }
});

// Função para editar um cadastro
function editarCadastro(index) {
    const cadastrosSalvos = JSON.parse(localStorage.getItem('cadastros')) || [];
    const cadastro = cadastrosSalvos[index];
    const form = document.querySelector('.cadastroForm form');

    
    form.querySelector('#materia').value = cadastro.materia;
    form.querySelector('#semestre').value = cadastro.semestre;
    form.querySelector('#professor').value = cadastro.professor;
    form.querySelector('#sala').value = cadastro.sala;

   
    form.querySelector('#editIndex').value = index;

   
    const cadastroForm = document.querySelector('.cadastroForm');
    cadastroForm.classList.add('active');

    // Adiciona um evento de 'submit' para o formulário de edição
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtém os novos valores dos campos do formulário
        const materia = form.querySelector('#materia').value;
        const semestre = form.querySelector('#semestre').value;
        const professor = form.querySelector('#professor').value;
        const sala = form.querySelector('#sala').value;

        // Atualiza o cadastro no array de cadastrosSalvos
        cadastrosSalvos[index] = {
            materia: materia,
            semestre: semestre,
            professor: professor,
            sala: sala
        };

        // Salva os dados atualizados no armazenamento local
        localStorage.setItem('cadastros', JSON.stringify(cadastrosSalvos));

        
        location.reload();
    });
}

// Função para excluir um cadastro
function excluirCadastro(index) {
    if (confirm('Tem certeza que deseja excluir este cadastro?')) {
        const cadastrosSalvos = JSON.parse(localStorage.getItem('cadastros')) || [];
        cadastrosSalvos.splice(index, 1);
        localStorage.setItem('cadastros', JSON.stringify(cadastrosSalvos));
        location.reload(); // Recarrega a página para atualizar a tabela
    }
}

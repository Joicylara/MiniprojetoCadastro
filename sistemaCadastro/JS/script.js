class Cadastro {
    constructor(materia, semestre, prof, sala) {
        this.materia = materia;
        this.semestre = semestre;
        this.prof = prof;
        this.sala = sala;
    }

    addCadastro() {
        const form = document.getElementById("direitaCadastro");

        form.addEventListener("submit", (evento) => {
            evento.preventDefault();
            this.validarCadastro();
        });

        this.materia.addEventListener("blur", () => {
            this.validarMateria();
        });

        this.semestre.addEventListener("blur", () => {
            this.validarSemestre();
        });
        
    }

    validarMateria() {
        const novaMateria = this.materia.value;
        if (novaMateria === "") {
            this.erroInput(this.materia, "Obrigatório preencher matéria");
        } else {
            const item = this.materia.parentElement;
            item.className = "campo";
        }
    }

    validarSemestre() {
        const novoSemestre = this.semestre.value;
        if (novoSemestre === "") {
            this.erroInput(this.semestre, "Obrigatório preencher semestre");
        } else {
            const item = this.semestre.parentElement;
            item.className = "campo";
        }
    }

    erroInput(input, mensagem) {
        const item = input.parentElement;
        const mensagemErro = item.querySelector("p");

        mensagemErro.innerText = mensagem;
        item.className = "campo erro";
    }

    validarCadastro() {
        this.validarMateria();
        this.validarSemestre();
        const form = document.getElementById("direitaCadastro");
        const itemForm = form.querySelectorAll(".campo");
        const valido = [...itemForm].every((item) => {
            return item.className === "campo";
        });
        if (valido) {
            alert("Cadastrado com sucesso");
            
            if(!localStorage.getItem("cadastros")){
                localStorage.setItem('cadastros', JSON.stringify([]))
            }
            const cadastros = JSON.parse(localStorage.getItem("cadastros"));
            //armazenar os dados localmente para usar no html lista

            localStorage.setItem('cadastros', JSON.stringify(
                [...cadastros,  {
                    materia: this.materia.value,
                    semestre: this.semestre.value,
                    professor: this.prof.value,
                    sala: this.sala.value
                }]
               ));
            this.mostrarDados();
            window.location.href = "lista.html";
        }
    }

    mostrarDados() {
        console.table({
            Materia: this.materia.value,
            Semestre: this.semestre.value,
            Professor: this.prof.value,
            Sala: this.sala.value
        });
    }

}




const form = document.getElementById("direitaCadastro");
const materia = document.getElementById("materia");
const semestre = document.getElementById("semestre");
const prof = document.getElementById("prof");
const sala = document.getElementById("sala");

const novoCadastro = new Cadastro(materia, semestre, prof, sala);
novoCadastro.addCadastro();

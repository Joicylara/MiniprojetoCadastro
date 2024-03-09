const form = document.getElementById("direitaCadastro");
const materia = document.getElementById("materia");
const semestre = document.getElementById("semestre");
const prof = document.getElementById("prof");
const sala = document.getElementById("sala");


form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    validarMateria();
    validarSemestre();
    // alert("Cadastrado com sucesso");
});

function validarMateria(){
    const novaMateria = materia.value;
    if(novaMateria == ""){
        erroInput(materia, "Obrigatório preencher matéria");
    }else{
        const item = materia.parentElement;
        item.className = "campo";
    }
    // console.log(novaMateria);
}

function validarSemestre(){
    const novoSemestre = semestre.value;
    if(novoSemestre == ""){
        erroInput(semestre, "Obrigatório preencher semestre");
    }else{
        const item = semestre.parentElement;
        item.className = "campo";
    }
}

function erroInput(input, mensagem){
    const item = input.parentElement;
    const mensagemErro =  item.querySelector("p");

    mensagemErro.innerText = mensagem;
    item.className = "campo erro";
}
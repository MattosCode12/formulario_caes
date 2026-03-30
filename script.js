const form = document.getElementById("form");
const resultado = document.getElementById("resultado");

let cpfsCadastrados = ["12345678900", "11111111111"];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").value;

    if (nome.lenght <3) return alert("Nome inválido");
    if (!email.includes('@')) return alert("Email inválido");
    if (telefone.lenght <8) return alert("Telefone inválido");
    if (!cpf) return alert("CPF obrigatório");
    if (cpfsCadastrados.includes(cpf)) return alert("CPF já cadastrado");
    if (idade <18) return alert("Você deve ser maior de idade");
    if (!cidade) return alert("Cidade obrigatória");
    if (!moradia) return alert("Selecione a moradia");
    if (!quintal) return alert("Informe sobre o quintal");
    if (!pet) return alert("Informe sobe se tem ou já teve pet");
    if (horas === "" || isNaN(horas)) return alert("Horas inválidas");
    if (motivo.lenght <10) return alert("O motivo está muito curto");
    if (!termo) return alert("Aceite o termo");
});
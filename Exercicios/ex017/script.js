// Função para calcular idade
function CalcIdade() {
    let atual = new Date().getFullYear(); // Ano atual
    let anoNascimento = document.getElementById("iano").value; // Pegar valor do input
    let idadeOutput = document.getElementById("iidade"); // Output da idade

    if (anoNascimento) { // Garante que o campo não está vazio
        idadeOutput.innerHTML = Number(atual) - Number(anoNascimento);
    } else {
        idadeOutput.innerHTML = "0"; // Se não houver valor, mostra 0
    }
}

// Adicionando o evento ao input para atualizar a idade automaticamente
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("iano").addEventListener("input", CalcIdade);
});

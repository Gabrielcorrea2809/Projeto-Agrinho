// Aguarda que todo o HTML seja carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. SISTEMA DE ABAS (TECNOLOGIA NO CAMPO)
    // ==========================================
    const botoesAba = document.querySelectorAll(".aba-btn");
    const textoPratica = document.getElementById("texto-pratica");

    // Informações que vão mudar dinamicamente
    const conteudosAbas = {
        "Drones": "Os drones monitorizam as plantações em tempo real, mapeando áreas secas ou com pragas, evitando o desperdício de água e pesticidas.",
        "Biofertilizantes": "Os biofertilizantes utilizam microrganismos e matéria orgânica para nutrir o solo de forma natural, eliminando químicos agressivos."
    };

    botoesAba.forEach(botao => {
        botao.addEventListener("click", () => {
            // Remove a classe 'active' de todos os botões das abas
            botoesAba.forEach(btn => btn.classList.remove("active"));
            
            // Adiciona a classe 'active' ao botão que foi clicado
            botao.classList.add("active");
            
            // Altera o texto do parágrafo com base no botão clicado
            const textoBotao = botao.innerText;
            textoPratica.innerText = conteudosAbas[textoBotao];
        });
    });

    // ==========================================
    // 2. LÓGICA DO QUIZ INTERATIVO
    // ==========================================
    const botoesResposta = document.querySelectorAll(".btn-resposta");
    const resultadoQuiz = document.getElementById("resultado-quiz");

    botoesResposta.forEach(botao => {
        botao.addEventListener("click", () => {
            const respostaSelecionada = botao.innerText;

            // Verifica se o utilizador clicou na resposta correta
            if (respostaSelecionada === "Sim, com certeza!") {
                resultadoQuiz.innerText = "Correcto! 🎉 A agricultura de precisão usa dados para aplicar água e fertilizantes apenas onde é necessário.";
                resultadoQuiz.style.color = "#2e7d32"; // Verde para acerto
            } else {
                resultadoQuiz.innerText = "Errado. ❌ Na verdade, ela ajuda imenso a poupar água através de sensores e mapeamento.";
                resultadoQuiz.style.color = "#c62828"; // Vermelho para erro
            }
        });
    });

});

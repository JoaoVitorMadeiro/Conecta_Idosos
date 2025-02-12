document.addEventListener("DOMContentLoaded", function () {
    // Adiciona evento de clique para todos os botões
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            let text = this.innerText;
            alert(`Você acessou: ${text}`);
        });
    });

    // Simulação de alerta de emergência ao clicar em "Emergências"
    let emergenciaBtn = document.querySelector(".btn-emergencia");
    if (emergenciaBtn) {
        emergenciaBtn.addEventListener("click", function () {
            alert("🚨 Emergência acionada! Um profissional de saúde será contatado.");
        });
    }

    // Muda o botão ativo no menu de navegação
    let currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-btn").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
    function openTab(event, tabName) {
        let tabs = document.getElementsByClassName("tab-content");
        let buttons = document.getElementsByClassName("tab-btn");
    
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
        
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    
        document.getElementById(tabName).classList.add("active");
        event.currentTarget.classList.add("active");
    }
    
});

// Menu mobile simples
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const ul = document.querySelector('nav ul');
    ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
});

// Accordion FAQ
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Simulador simples
function calcularDiv() {
    const invest = parseFloat(document.getElementById('invest').value) || 0;
    const yieldPct = parseFloat(document.getElementById('yield').value) || 0;
    const rendaAnual = (invest * (yieldPct / 100)).toFixed(2);
    document.getElementById('resultado').innerHTML = `
        <strong>Renda anual estimada:</strong> R$ ${rendaAnual}<br>
        <small>(com reinvestimento, pode crescer mais a longo prazo)</small>
    `;
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});




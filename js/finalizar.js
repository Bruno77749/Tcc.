// Mostrar campos de pagamento com base na opção escolhida
document.querySelectorAll('input[name="payment-method"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
        const paymentMethod = e.target.value;
        document.querySelectorAll('.payment-method').forEach((element) => {
            element.style.display = 'none';
        });
        if (paymentMethod === 'card') {
            document.getElementById('credit-card-info').style.display = 'block';
        } else {
            document.getElementById('pix-info').style.display = 'block';
        }
    });
});
// Validação do formulário (opcional, pode ser expandido)
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Compra Finalizada!\nNome: ${name}\nE-mail: ${email}`);
});

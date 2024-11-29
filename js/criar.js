function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
    
    // Limpar mensagem anterior
    message.textContent = 'vc fez cadastro';
    
    // Validação de campos
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        message.textContent = 'Por favor, preencha todos os campos.';
        message.style.color = 'red';
        return false;
    }

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
        message.textContent = 'As senhas não coincidem.';
        message.style.color = 'red';
        return false;
    }

    // Validar formato de e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        message.textContent = 'Por favor, insira um e-mail válido.';
        message.style.color = 'red';
        return false;
    }

    // Se tudo estiver certo, mostrar mensagem de sucesso
    message.textContent = 'Cadastro realizado com sucesso!';
    message.style.color = 'green';
    
    // Impedir o envio do formulário real (apenas para exemplo)
    return false;
}
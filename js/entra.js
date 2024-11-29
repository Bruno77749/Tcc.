document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();


    document.getElementById('login-form').style.display = 'none';
    document.getElementById('welcome-message').style.display = 'block';
});

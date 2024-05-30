document.addEventListener('DOMContentLoaded', (event) => {
    const certificadoLink = document.getElementById('certificado-link');
    const iframeContent = document.getElementById('iframe-content');

    // Inicialmente desativar o link do certificado
    if (certificadoLink) {
        certificadoLink.classList.add('disabled');
    }

    // Iniciar temporizador de 10 segundos para liberar o certificado
    setTimeout(() => {
        certificadoLink.classList.remove('disabled');
    }, 10000); // 10 segundos

    // Mostrar o nome do usuário no certificado
    const userNameSpan = document.getElementById('user-name');
    if (userNameSpan) {
        userNameSpan.textContent = userName;
    }

    // Salvando o nome do usuário ao enviar o formulário de nome
    const nameForm = document.getElementById('name-form');
    if (nameForm) {
        nameForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name-input').value;
            localStorage.setItem('userName', nameInput);
            window.location.href = 'video.html';
        });
    }
});

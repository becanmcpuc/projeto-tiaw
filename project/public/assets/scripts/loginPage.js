document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    loginButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            const response = await fetch('http://localhost:3000/pages/9');
            const data = await response.json();
            const users = data.users;

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }));

                window.location.href = './index.html';
            } else {
                alert("Email e/ou senha inválidos.")
            }
        } catch (error) {
            alert('Erro ao fazer login:', error);
        }
    });
}); 
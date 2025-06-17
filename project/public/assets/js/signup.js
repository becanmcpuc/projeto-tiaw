document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('signupButton');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const confirmPasswordInput = document.getElementById('confirm-password-input');

    signupButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            return;
        }

        try {
            const checkResponse = await fetch('http://localhost:3000/pages/9');
            const data = await checkResponse.json();
            const users = data.users;
            
            if (users.some(user => user.email === email)) {
                return;
            }

            const newUser = {
                id: users.length + 1,
                email,
                password,
                role: 'user',
                name: email.split('@')[0]
            };

            const currentData = await fetch('http://localhost:3000/pages/9').then(res => res.json());
            currentData.users.push(newUser);

            const response = await fetch('http://localhost:3000/pages/9', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentData)
            });

            if (response.ok) {
                window.location.href = '/loginPage.html';
            }
        } catch (error) {
            console.error('Erro ao fazer cadastro:', error);
        }
    });
}); 
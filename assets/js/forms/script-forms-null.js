// Função para criar um novo formulário null
document.getElementById('forms_null').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Obtém os valores do formulário
    const response = document.getElementById('resposta').value;
    const owner = document.getElementById('owner').value;

    try {
        // Envia uma solicitação POST para adicionar um novo registro
        const res = await fetch('/null-forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dont_want: response,
                user: owner
            })
        });

        // Verifica se a resposta é bem-sucedida
        if (!res.ok) {
            throw new Error(`Erro na solicitação: ${res.statusText}`);
        }

        const data = await res.json();
        alert('Resposta adicionada com sucesso!');
        window.location.href = '/tela-de-conclusao';

        // Limpar os campos do formulário
        document.getElementById('resposta').value = '';
        document.getElementById('owner').value = '';
    } catch (error) {
        console.error('Error adding resposta:', error);
        alert('Ocorreu um erro ao adicionar a resposta. Tente novamente.');
    }
});

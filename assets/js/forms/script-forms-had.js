document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#had-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Cria um objeto com os dados do formulário
        let formData = new FormData(this);

        // Converte os dados do formulário para JSON
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        let json = JSON.stringify(object);

        console.log(json);

        // Configura a requisição POST para o modelo 'have_forms'
        fetch('/had-forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
        .then(response => response.json())
        .then(data => {
            alert('Resposta adicionada com sucesso!');
            window.location.href = '/tela-de-conclusao';
            console.log('Sucesso no modelo "had_forms":', data);
        })
        .catch((error) => {
            alert('Ocorreu um erro ao adicionar a resposta. Tente novamente.');
            console.error('Erro ao criar registro no modelo "had_forms":', error);
            // Trate o erro aqui
        });
    });
});

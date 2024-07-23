document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#have-forms').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Cria um objeto com os dados do formulário
        let formData = new FormData(this);

        // Converte os dados do formulário para JSON
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        let json = JSON.stringify(object);

        console.log(json);

        // Configura a requisição POST para o modelo 'have_forms'
        fetch('/have-forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
            .then(response => response.json())
            .then(data => {
                alert('Resposta adicionada com sucesso!');
                console.log('Sucesso no modelo "have_forms":', data);
                window.location.href = '/tela-de-conclusao';

                // Pegue o valor do campo 'owner' do formulário HTML
                let ownerValue = formData.get('owner');

                // Crie um novo objeto JSON ajustando os dados para o modelo 'dogs_forms_have'
                let dogsFormsData = {
                    gender: object.gender,
                    castrated: object.castrated,
                    belongs_to_you: ownerValue,
                    owner: data.id // Use o ID retornado pelo modelo 'have_forms' como 'owner'
                };

                // Converte os dados do formulário para JSON para o modelo 'dogs_forms_have'
                let dogsFormsJson = JSON.stringify(dogsFormsData);

                // Configura a requisição POST para o modelo 'dogs_forms_have'
                fetch('/dog-forms-have', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: dogsFormsJson
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Sucesso no modelo "dogs_forms_have":', data);
                        // Aqui você pode atualizar a interface do usuário ou redirecionar o usuário
                    })
                    .catch((error) => {
                        console.error('Erro ao criar registro no modelo "dogs_forms_have":', error);
                        // Trate o erro aqui
                    });

                // Crie um novo objeto JSON ajustando os dados para o modelo 'dogs_forms_have'
                let userFormsData = {
                    first_name: object.first_name,
                    social_name: object.social_name,
                    cellphone: object.cellphone,
                    email: object.email,
                    id_users: data.id // Use o ID retornado pelo modelo 'want-forms' como 'owner'
                };

                // Converte os dados do formulário para JSON para o modelo 'dogs_forms_want'
                let userFormsJson = JSON.stringify(userFormsData);

                // Configura a requisição POST para o modelo 'dogs_forms_want'
                fetch('/users-forms', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: userFormsJson
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Sucesso no modelo "user_forms":', data);
                        // Aqui você pode atualizar a interface do usuário ou redirecionar o usuário
                    })
                    .catch((error) => {
                        console.error('Erro ao criar registro no modelo "user_forms":', error);
                        // Trate o erro aqui
                    });

            })
            .catch((error) => {
                console.error('Erro ao criar registro no modelo "have_forms":', error);
                // Trate o erro aqui
            });
    });
});

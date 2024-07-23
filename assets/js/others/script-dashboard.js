let dadosAtuais = [];

function carregarListaDadosHadForms() {
    fetch('/had-forms')
        .then(response => response.json())
        .then(data => {
            dadosAtuais = data; // Armazena os dados carregados na variável global
            const formContainer = document.getElementById('formContainer');
            formContainer.innerHTML = ''; // Limpa a lista de dados

            data.forEach(form => {
                const hadItem = document.createElement('div');
                hadItem.classList.add('form-item', 'mb-2', 'p-2', 'border', 'rounded');
                hadItem.innerHTML = `
                <p><strong>ID:</strong> ${form.id}</p>
                <p><strong>Nome do cachorro:</strong> ${form.dogs_name}</p>
                <p><strong>Personalidade do cachorro:</strong> ${form.dogs_personality}</p>
                <p><strong>Tempo com você:</strong> ${form.time_with_you}</p>
                <p><strong>Primeiro cachorro:</strong> ${form.first_dog}</p>
                <p><strong>Outros pets:</strong> ${form.other_pets}</p>
                <p><strong>Idade do pet:</strong> ${form.pet_age}</p>
                <p><strong>Castrado:</strong> ${form.castrated}</p>
                <p><strong>Raça:</strong> ${form.breed}</p>
                <p><strong>De onde veio:</strong> ${form.where_came_from}</p>
                <p><strong>Preço do pet:</strong> ${form.pet_price}</p>
                <p><strong>Por que:</strong> ${form.why}</p>
                <p><strong>Características:</strong> ${form.characteristics}</p>
                <p><strong>Decisão do nome:</strong> ${form.name_decision}</p>
                <p><strong>O que mais gosta:</strong> ${form.most_like}</p>
                <p><strong>O que não gosta:</strong> ${form.dont_like}</p>
                <p><strong>Veterinário:</strong> ${form.veterinary}</p>
                <p><strong>Parou de viver:</strong> ${form.stopped_living}</p>
                <p><strong>Pertencia a você:</strong> ${form.belonged_to_you}</p>
                <p><strong>Usuário ID:</strong> ${form.user}</p>
            `;
                formContainer.appendChild(hadItem);
            });

            document.getElementById('downloadButton').disabled = false; // Habilita o botão de download
        })
        .catch(error => console.error('Erro ao carregar a lista de dados:', error));
}

function carregarListaDadosHaveForms() {
    fetch('/have-forms')
        .then(response => response.json())
        .then(data => {
            dadosAtuais = data; // Armazena os dados carregados na variável global
            const formContainer = document.getElementById('formContainer');
            formContainer.innerHTML = ''; // Limpa a lista de dados

            data.forEach(form => {
                const formItem = document.createElement('div');
                formItem.classList.add('form-item', 'mb-2', 'p-2', 'border', 'rounded');
                formItem.innerHTML = `
                <p><strong>ID:</strong> ${form.id}</p>
                <p><strong>Tempo com o cachorro:</strong> ${form.time_with_dog}</p>
                <p><strong>Primeiro cachorro:</strong> ${form.first_dog}</p>
                <p><strong>Outros pets:</strong> ${form.other_pets}</p>
                <p><strong>Idade do cachorro:</strong> ${form.dogs_age}</p>
                <p><strong>Raça do cachorro:</strong> ${form.breed}</p>
                <p><strong>Onde adquiriu:</strong> ${form.where_get}</p>
                <p><strong>Pagou para adquirir:</strong> ${form.paid_to_acquire}</p>
                <p><strong>Idade alcançada:</strong> ${form.age_reached}</p>
                <p><strong>Personalidade do cachorro:</strong> ${form.dog_personality}</p>
                <p><strong>Motivo para ter:</strong> ${form.why_do_have}</p>
                <p><strong>Outros:</strong> ${form.others}</p>
                <p><strong>Características:</strong> ${form.characteristics}</p>
                <p><strong>Decisão:</strong> ${form.decision}</p>
                <p><strong>Não conseguiu manter:</strong> ${form.couldnt_keep}</p>
                <p><strong>Como foi ao veterinário:</strong> ${form.how_vet}</p>
                <p><strong>O que dizer sobre:</strong> ${form.say_about}</p>
                <p><strong>Usuário ID:</strong> ${form.user}</p>
            `;
                formContainer.appendChild(formItem);
            });

            document.getElementById('downloadButton').disabled = false; // Habilita o botão de download
        })
        .catch(error => console.error('Erro ao carregar a lista de dados:', error));
}

function carregarListaDadosWantForms() {
    fetch('/want-forms')
        .then(response => response.json())
        .then(data => {
            dadosAtuais = data; // Armazena os dados carregados na variável global
            const formContainer = document.getElementById('formContainer');
            formContainer.innerHTML = ''; // Limpa a lista de dados

            data.forEach(form => {
                const formItem = document.createElement('div');
                formItem.classList.add('form-item', 'mb-2', 'p-2', 'border', 'rounded');
                formItem.innerHTML = `
                <p><strong>ID:</strong> ${form.id}</p>
                <p><strong>Características:</strong> ${form.characteristics}</p>
                <p><strong>Vive com o cachorro:</strong> ${form.live_with_dog}</p>
                <p><strong>Nickname:</strong> ${form.nickname}</p>
                <p><strong>Pretende ter um cachorro:</strong> ${form.pretend}</p>
                <p><strong>Inclui um cachorro:</strong> ${form.include}</p>
                <p><strong>Personalidade desejada:</strong> ${form.what_personality}</p>
                <p><strong>Despesas de pesquisa:</strong> ${form.research_expenses}</p>
                <p><strong>Usuário ID:</strong> ${form.user}</p>
            `;
                formContainer.appendChild(formItem);
            });

            document.getElementById('downloadButton').disabled = false; // Habilita o botão de download
        })
        .catch(error => console.error('Erro ao carregar a lista de dados:', error));
}

function carregarListaDadosNullForms() {
    fetch('/null-forms')
        .then(response => response.json())
        .then(data => {
            dadosAtuais = data; // Armazena os dados carregados na variável global
            const formContainer = document.getElementById('formContainer');
            formContainer.innerHTML = ''; // Limpa a lista de dados

            data.forEach(form => {
                const formItem = document.createElement('div');
                formItem.classList.add('form-item', 'mb-2', 'p-2', 'border', 'rounded');
                formItem.innerHTML = `
                <p><strong>ID:</strong> ${form.id}</p>
                <p><strong>Resposta:</strong> ${form.dont_want}</p>
                <p><strong>Usuário ID:</strong> ${form.user}</p>
            `;
                formContainer.appendChild(formItem);
            });

            document.getElementById('downloadButton').disabled = false; // Habilita o botão de download
        })
        .catch(error => console.error('Erro ao carregar a lista de dados:', error));
}

function baixarDadosFormulario() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dadosAtuais));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "dados_formulario.json");
    document.body.appendChild(downloadAnchorNode); // necessário para o Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

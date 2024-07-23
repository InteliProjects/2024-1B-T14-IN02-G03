document.getElementById('sendButton').addEventListener('click', function () {
    const dob = document.getElementById('dob').value;
    const education = document.getElementById('education').value;
    const housingType = document.getElementById('housingType').value;
    const familyStructure = document.getElementById('familyStructure').value;
    const income = document.querySelector('input[name="vbtn-radio"]:checked') ? document.querySelector('input[name="vbtn-radio"]:checked').value : '';
    const peopleSlider = document.getElementById('peopleSlider').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const choiceOfForm = document.querySelector('input[name="choice-of-form"]:checked') ? document.querySelector('input[name="choice-of-form"]:checked').value : '';

    // Calcular idade a partir da data de nascimento
    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    const data = {
        age: age,
        education: education,
        type_of_housing: housingType,
        family_constitution: familyStructure,
        income: income,
        live_in_this_home: Number(peopleSlider),
        country: country,
        state: state,
        city: city,
        neighborhood: neighborhood,
        choice_of_form: choiceOfForm,
    };

    console.log(JSON.stringify(data));

    fetch('/general-forms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Resposta adicionada com sucesso!');
        // Redirecionar para a nova página com base na escolha do formulário
        let targetUrl = '';
        switch (choiceOfForm) {
            case 'have':
                targetUrl = '/submit-have-forms';
                break;
            case 'want':
                targetUrl = '/submit-want-forms';
                break;
            case 'had':
                targetUrl = '/submit-had-forms';
                break;
            case 'null':
                targetUrl = '/submit-null-forms';
                break;
        }
        window.location.href = targetUrl;
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Ocorreu um erro ao adicionar a resposta. Tente novamente.');
    });
});
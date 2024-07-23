module.exports = {
    // Nome amigável do controlador
    friendlyName: 'Create All Dog Forms',

    // Descrição do controlador
    description: 'Create a new all dog forms.',

    inputs: {
        // Nome do cachorro
        dog_name: {
            type: 'string', // Tipo de dado
            maxLength: 100, // Comprimento máximo
            example: 'Rex', // Exemplo de valor
            defaultsTo: 'Sem nome' // Valor padrão
        },
        // Gênero do cachorro
        gender: {
            type: 'string', // Tipo de dado
            required: true, // Campo obrigatório
            example: 'Macho', // Exemplo de valor
        },
        // Raça do cachorro
        breed: {
            type: 'string', // Tipo de dado
            required: true, // Campo obrigatório
            example: 'Vira-lata', // Exemplo de valor
        },
        // Idade do cachorro
        age: {
            type: 'number', // Tipo de dado
            required: true, // Campo obrigatório
            columnType: 'int', // Tipo de coluna no banco de dados
            example: 1715193633 // Exemplo de valor
        },
        // Indica se o cachorro é real ou fictício
        real_or_fictitious: {
            type: 'string', // Tipo de dado
            isIn: ['real', 'fictitious'], // Valores permitidos
            required: true, // Campo obrigatório
            example: 'real', // Exemplo de valor
        },
        // Relacionamento com o modelo 'User'
        owner: {
            type: 'number', // tipo number
            required: true, // Campo obrigatório
        }
    },

    exits: {
        // Definição da saída de sucesso
        success: {
            description: 'New forms was created successfully.' // Alterado para inglês
        },
    },

    // Função assíncrona que lida com os inputs e exits
    fn: async function (input, exits) {
        try {
            // Usa o helper 'create' para criar um novo registro no modelo 'all_dog'
            const newForms = await sails.helpers.create.with({
                model: 'all_dog',
                data: input
            });
            // Retorna a saída de sucesso com status 201 e o novo registro criado
            return exits.success(newForms);
        } catch (error) {
            // Retorna um erro de servidor com a mensagem de erro
            return exits.error({ error: error.message });
        }
    }
};

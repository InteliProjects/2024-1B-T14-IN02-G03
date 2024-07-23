module.exports = {
    // Nome amigável do controlador
    friendlyName: 'Create Dog Have Forms',

    // Descrição do controlador
    description: 'Create a new dog have forms.',

    inputs: {
        // Gênero do cachorro
        gender: {
            type: 'string', // Tipo de dado
            required: true, // Campo obrigatório
            maxLength: 100, // Comprimento máximo
            example: 'Macho', // Exemplo de valor
        },
        // Status de castração
        castrated: {
            type: 'string', // Tipo de dado
            required: true, // Campo obrigatório
            maxLength: 100, // Comprimento máximo
            example: 'Sim', // Exemplo de valor
        },
        // Indica se o cachorro pertence ao usuário
        belongs_to_you: {
            type: 'string', // Tipo de dado
            required: true, // Campo obrigatório
            maxLength: 100, // Comprimento máximo
            example: 'Meu tio', // Exemplo de valor
        },
        // Relacionamento com o modelo 'Have_forms'
        owner: {
            type: 'number', // Tipo numero
            required: true, // Campo obrigatório
            unique: true, // Valores únicos
        }
    },

    exits: {
        // Definição da saída de sucesso
        success: {
            description: 'New form was created successfully.' // Alterado para inglês
        },
    },

    // Função assíncrona que lida com os inputs e exits
    fn: async function (inputs, exits) {
        try {
            // Usa o helper 'create' para criar um novo registro no modelo 'dog_forms_have'
            const newForms = await sails.helpers.create.with({
                model: 'dog_forms_have',
                data: inputs
            });
            // Retorna a saída de sucesso com o status 201 (Criado)
            return exits.success(newForms);
        } catch (error) {
            // Retorna um erro de servidor com a mensagem de erro
            return exits.serverError({ error: error.message });
        }
    }
};

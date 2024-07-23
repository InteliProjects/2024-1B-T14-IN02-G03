module.exports = {
    // Nome amigável da função, usado para referência e documentação.
    friendlyName: 'Criar Formulários de Desejos de Cachorro',

    // Descrição da função, explicando o que ela faz.
    description: 'Cria um novo formulário de desejos de cachorro.',

    // Entradas necessárias para a função.
    inputs: {
        // Tamanho do cachorro: pequeno, médio, grande, etc.
        dog_size: {
            type: 'string',
            required: true,
            maxLength: 100,
            example: 'Grande',
        },
        // Tipo de pelagem do cachorro: curto, longo, médio, etc.
        coat: {
            type: 'string',
            required: true,
            maxLength: 100,
            example: 'Curto',
        },
        // Preferência de cor do dono do cachorro.
        color_preference: {
            type: 'string',
            required: true,
            maxLength: 100,
            example: 'Caramelo',
        },
        // Gênero do cachorro: macho ou fêmea.
        gender: {
            type: 'string',
            required: true,
            maxLength: 100,
            example: 'Macho',
        },
        // Idade do cachorro.
        age: {
            type: 'string',
            required: true,
            maxLength: 100,
            example: '6 a 9 meses',
        },
        // Raça do cachorro.
        breed: {
            type: 'string',
            required: true,
            maxLength: 100,
            example: 'Golden Retriever',
        },
        // ID do dono do cachorro, único para cada dono.
        owner: {
            type: 'number',
            required: true,
            unique: true,
        }
    },

    // Saídas da função.
    exits: {
        // Sucesso: novo formulário foi criado com sucesso.
        success: {
            description: 'Novo formulário foi criado com sucesso.'
        },
        // Inválido: entrada inválida fornecida.
        invalid: {
            description: 'Entrada inválida fornecida.'
        },
        // Erro: um erro inesperado ocorreu.
        error: {
            description: 'Ocorreu um erro inesperado.'
        },
    },

    // Função principal que executa a lógica da criação do formulário.
    fn: async function (inputs, exits) {
        try {
            // Chama o helper do Sails para criar um novo formulário usando os dados de entrada.
            const newForms = await sails.helpers.create.with({
                model: 'dog_forms_want',
                data: inputs
            });
            // Retorna sucesso com o novo formulário criado.
            return exits.success(newForms);
        } catch (error) {
            // Se a exceção for marcada como inválida, retorna uma saída de inválido com o erro.
            if (error.exit === 'invalid') {
                return exits.invalid({ error: error.message });
            }
            // Se não, retorna uma saída de erro com a mensagem de erro.
            return exits.error({ error: error.message });
        }
    }
};

module.exports = {
  friendlyName: 'Create Record', // Nome amigável para o método

  description: 'Creates a new record in the specified model.', // Descrição curta do propósito do método

  inputs: { // Entradas esperadas pelo método
    model: { // Modelo no qual o registro será criado
      type: 'string', // Tipo de dado esperado
      required: true, // Obrigatório
      description: 'The model in which the record will be created.' // Descrição do parâmetro
    },
    data: { // Dados a serem adicionados ao modelo
      type: 'ref', // Tipo de dado esperado
      required: true, // Obrigatório
      description: 'Data to be added to the model.' // Descrição do parâmetro
    }
  },

  exits: { // Saídas possíveis do método
    success: { // Sucesso na criação do registro
      description: 'The new record was created successfully.' // Mensagem de sucesso
    },
    error: { // Erro na criação do registro
      description: 'There was an error creating the record.' // Mensagem de erro
    }
  },

  fn: async function (inputs, exits) { // Função principal do método
    try { // Bloco try-catch para tratamento de erros
      const createdRecord = await sails.models[inputs.model].create(inputs.data).fetch(); // Tentativa de criar o registro
      return exits.success(createdRecord); // Retorna o registro criado com sucesso
    } catch (error) { // Tratamento de erro
      return exits.error({ // Retorna o erro com detalhes
        message: 'Error creating record: ' + error.message, // Mensagem de erro detalhada
        error: error // Detalhes do erro
      });
    }
  }
};
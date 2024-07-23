module.exports = {
  friendlyName: 'Read Records', // Nome amigável para o método

  description: 'Retrieves records from a model. If an ID is provided, retrieves a single record.', // Descrição curta do propósito do método

  inputs: { // Entradas esperadas pelo método
    model: { // Modelo do qual os registros serão recuperados
      type: 'string', // Tipo de dado esperado
      required: true, // Obrigatório
      description: 'The model from which records will be retrieved.' // Descrição do parâmetro
    },
    id: { // ID do registro a ser recuperado
      type: 'number', // Tipo de dado esperado
      required: false, // Não obrigatório
      description: 'The ID of the record to retrieve. If not provided, all records will be returned.' // Descrição do parâmetro
    }
  },

  fn: async function (inputs, exits) { // Função principal do método
    if (!sails.models[inputs.model]) { // Verifica se o modelo existe
      return exits.error({ // Retorna erro se o modelo não existir
        message: 'Model not found: ' + inputs.model, // Mensagem de erro detalhada
        error: 'Model does not exist' // Detalhe do erro
      });
    }
    try { // Bloco try-catch para tratamento de erros
      let records; // Variável para armazenar os registros recuperados
      if (inputs.id) { // Verifica se um ID foi fornecido
        records = await sails.models[inputs.model].findOne({ id: inputs.id }); // Recupera um único registro pelo ID
        if (!records) { // Verifica se o registro foi encontrado
          return exits.notFound({ message: 'Record not found.' }); // Retorna indicação de que o registro não foi encontrado
        }
      } else { // Se nenhum ID foi fornecido, recupera todos os registros
        records = await sails.models[inputs.model].find();
      }
      return exits.success(records); // Retorna os registros recuperados com sucesso
    } catch (error) { // Tratamento de erro
      return exits.error({ // Retorna o erro com detalhes
        message: 'Error retrieving records: ' + error.message, // Mensagem de erro detalhada
        error: error // Detalhes do erro
      });
    }
  }
};

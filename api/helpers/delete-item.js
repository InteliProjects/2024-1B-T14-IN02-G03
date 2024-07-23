module.exports = {
  friendlyName: 'Delete Record', // Nome amigável para o método

  description: 'Deletes a record by its ID in the specified model.', // Descrição curta do propósito do método

  inputs: { // Entradas esperadas pelo método
    model: { // Modelo que guarda o registro a ser deletado
      type: 'string', // Tipo de dado esperado
      required: true, // Obrigatório
      description: 'Model that holds the record to be deleted.' // Descrição do parâmetro
    },
    id: { // ID do registro a ser deletado
      type: 'number', // Tipo de dado esperado
      required: true, // Obrigatório
      description: 'ID of the record to be deleted.' // Descrição do parâmetro
    }
  },

  exits: { // Saídas possíveis do método
    success: { // Sucesso na deleção do registro
      description: 'The record was deleted successfully.' // Mensagem de sucesso
    },
    notFound: { // Registro não encontrado
      description: 'No record found with the provided ID.', // Mensagem explicativa
      responseType: 'notFound' // Resposta indicando que o recurso não foi encontrado
    },
    error: { // Erro na deleção do registro
      description: 'Error deleting the record.', // Mensagem explicativa
      responseType: 'serverError' // Resposta indicando um erro do lado do servidor
    }
  },

  fn: async function(inputs, exits) { // Função principal do método
    try { // Bloco try-catch para tratamento de erros
      const deletedRecord = await sails.models[inputs.model].destroyOne({ id: inputs.id }); // Tentativa de deletar o registro
      if (!deletedRecord) { // Verifica se o registro foi realmente deletado
        return exits.notFound({ message: 'Record not found.' }); // Retorna indicação de que o registro não foi encontrado
      }
      return exits.success({ message: 'Record deleted successfully!' }); // Retorna sucesso na deleção
    } catch (error) { // Tratamento de erro
      return exits.error({ // Retorna o erro com detalhes
        message: 'Error deleting record: ' + error.message, // Mensagem de erro detalhada
        error: error // Detalhes do erro
      });
    }
  }
};

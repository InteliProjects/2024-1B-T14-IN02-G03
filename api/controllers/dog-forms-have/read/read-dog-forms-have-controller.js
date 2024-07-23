module.exports = {
  // Nome amigável do controlador
  friendlyName: 'DogHave Forms Controller',

  // Descrição do controlador
  description: 'Controller for handling doghave forms data.',

  inputs: {
    id: {
        type: 'number',
        required: false, // O ID deve ser obrigatório para excluir um registro
        description: 'The ID of the user forms to delete.'
    }
},

  exits: {
    // Definição da saída de sucesso
    success: {
      description: 'Returns the requested records or all if no specific ID is provided.' // Alterado para inglês
    },
    // Definição da saída quando não encontrar o registro
    notFound: {
      description: 'No record found with the provided ID.', // Alterado para inglês
      responseType: 'notFound'
    },
    // Definição da saída para erro interno no servidor
    serverError: {
      description: 'Internal server error.', // Alterado para inglês
      responseType: 'serverError'
    }
  },

  // Função assíncrona que lida com os inputs e exits
  fn: async function (inputs, exits) {
    try {
      // Obtém o ID dos parâmetros de entrada, pode ser indefinido se não fornecido
      const id = inputs.id;
      // Usa o helper 'read' para ler os registros no modelo 'dog_forms_have'
      const result = await sails.helpers.read.with({
        model: 'dog_forms_have',
        id: id ? parseInt(id) : undefined // Garante que o ID, se fornecido, seja um número
      });

      // Se nenhum registro foi encontrado, lança o erro 'notFound'
      if (!result) {
        throw 'notFound';
      }

      // Retorna a saída de sucesso com os registros encontrados
      return exits.success(result);
    } catch (error) {
      // Retorna um erro de servidor com a mensagem de erro
      return exits.serverError({ error: 'Error retrieving doghave(s): ' + error.message });
    }
  }
};

module.exports = {
  // Nome amigável do controlador
  friendlyName: 'General Forms Controller',
  // Descrição do controlador
  description: 'Controller for handling general forms data.',

  inputs: {
    id: {
        type: 'number',
        required: false, 
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
      // Obtém o ID dos parâmetros de entrada
      const id = inputs.id; // ID pode ser undefined se não for fornecido
      // Usa o helper 'read' para obter os registros do modelo 'general_forms'
      const result = await sails.helpers.read.with({
        model: 'general_forms',
        id: id ? parseInt(id) : undefined // Garante que o ID, se fornecido, seja um número
      });

      // Se nenhum resultado for encontrado, lança o erro 'notFound'
      if (!result) {
        throw 'notFound';
      }
      // Retorna os registros em formato JSON
      return exits.success(result);
    } catch (error) {
      // Retorna um erro de servidor com a mensagem de erro
      return exits.serverError({ error: 'Error retrieving general(s): ' + error.message });
    }
  }
};

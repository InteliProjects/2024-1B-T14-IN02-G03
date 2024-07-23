module.exports = {
  friendlyName: 'User Forms Controller', // Nome amigável para o método

  description: 'Controller for handling user forms data.', // Descrição curta do propósito do método

  inputs: {
    id: {
      type: 'number',
      required: false,
      description: 'The ID of the user to look up.'
    }
  },
  exits: { // Saídas possíveis do método
    success: { // Sucesso na recuperação dos dados das formas do usuário
      description: 'Retorna os registros solicitados ou todos se nenhum ID específico for fornecido.' // Mensagem de sucesso
    },
    notFound: { // Registro não encontrado
      description: 'Nenhum registro encontrado com o ID fornecido.', // Mensagem explicativa
      responseType: 'notFound' // Resposta indicando que o recurso não foi encontrado
    },
    serverError: { // Erro interno do servidor
      description: 'Erro interno no servidor.', // Mensagem explicativa
      responseType: 'serverError' // Resposta indicando um erro do lado do servidor
    }
  },

  fn: async function (inputs, exits) { // Função principal do método
    try { // Bloco try-catch para tratamento de erros
      const id = inputs.id; // ID das formas do usuário a serem buscadas, pode ser indefinido se não for fornecido
      const result = await sails.helpers.read.with({ // Tentativa de buscar as formas do usuário
        model: 'user_forms', // Modelo de dados a ser usado
        id: id ? parseInt(id) : undefined // Garante que o ID, se fornecido, seja um número
      });

      if (!result) { // Verifica se o resultado está vazio
        throw 'notFound'; // Lança exceção indicando que o registro não foi encontrado
      }
      return exits.success(result); // Retorna os resultados encontrados
    } catch (error) { // Tratamento de erro
      return exits.serverError({ error: 'Error retrieving user(s): ' + error.message }); // Retorna mensagem de erro com status HTTP 500
    }
  }
};

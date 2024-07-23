module.exports = {
  friendlyName: 'Had Forms Controller', // Nome amigável para o método

  description: 'Controlador para manipulação de dados de formulários de tiver.', // Descrição curta do propósito do método

  inputs: {
    id: {
        type: 'number',
        required: false, // O ID deve ser obrigatório para excluir um registro
        description: 'The ID of the user forms to delete.'
    }
},

  exits: { // Saídas possíveis do método
    success: { // Sucesso na recuperação dos registros
      description: 'Retorna os registros solicitados ou todos se nenhum ID específico for fornecido.' // Mensagem de sucesso
    },
    notFound: { // Nenhum registro encontrado com o ID fornecido
      description: 'Nenhum registro encontrado com o ID fornecido.', // Mensagem explicativa
      responseType: 'notFound' // Resposta indicando que o recurso não foi encontrado
    },
    serverError: { // Erro interno no servidor
      description: 'Erro interno no servidor.', // Mensagem explicativa
      responseType: 'serverError' // Resposta indicando um erro do lado do servidor
    }
  },

  fn: async function(inputs, exits) { // Função principal do método
    try { // Bloco try-catch para tratamento de erros
      const id = inputs.id; // ID pode ser indefinido se não for fornecido
      const result = await sails.helpers.read.with({ // Tenta ler os dados
        model: 'had_forms', // Modelo de dados a ser usado
        id: id? parseInt(id) : undefined // Garante que o ID, se fornecido, seja um número
      });

      if (!result) { // Verifica se os dados foram encontrados
        throw 'notFound'; // Lança um erro indicando que o registro não foi encontrado
      }
      return exits.success(result); // Retorna os dados encontrados
    } catch (error) { // Tratamento de erro
      return exits.serverError({ error: 'Erro ao recuperar o(s) formulário(s) de tiver: ' + error.message }); // Retorna erro com detalhes
    }
  }
};

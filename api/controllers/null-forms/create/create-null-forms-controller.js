// api/controllers/NullFormsController.js

module.exports = {
  friendlyName: 'Create Null Forms', // Nome amigável para o método

  description: 'Cria um novo formulário nulo.', // Descrição curta do propósito do método

  inputs: { // Entradas esperadas pelo método
    dont_want: { // Resenha sobre o motivo de não querer
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Não quero ter pois não gosto.' // Exemplo de valor
    },

    user: { // ID do usuário
      type: 'number', // Tipo de dado esperado
      required: true, // Obrigatório
      example: 1 // Exemplo de valor
    }
  },

  exits: { // Saídas possíveis do método
    success: { // Sucesso na criação do formulário nulo
      description: 'Nova resenha foi criada com sucesso.' // Mensagem de sucesso
    },
    invalid: { // Saída em caso de campos inválidos
      description: 'Um ou mais campos são inválidos'
    },
    error: { // Saída em caso de erro geral
      description: 'Houve um erro na criação do formulário'
    }
  },

  fn: async function (inputs, exits) { // Função principal do método
    try { // Bloco try-catch para tratamento de erros

      // Chama o helper de criação se a validação passar
      const newUser = await sails.helpers.create.with({ // Criação do novo usuário
        model: 'null_forms', // Modelo de dados a ser usado
        data: inputs // Passa apenas inputs, não inputs.body
      });

      return exits.success(newUser); // Retorna o novo usuário criado
    } catch (error) { // Tratamento de erro
      if (error.exit === 'invalid') {
        return exits.invalid({ error: error.message });
      }
      return exits.error({ error: error.message }); // Retorna mensagem de erro
    }
  }
};

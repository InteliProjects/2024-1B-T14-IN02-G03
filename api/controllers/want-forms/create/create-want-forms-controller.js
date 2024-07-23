module.exports = {
    friendlyName: 'Create Want Forms', // Nome amigável para o método
  
    description: 'Cria um novo formulário de desejo.', // Descrição curta do propósito do método
  
    inputs: { // Entradas esperadas pelo método
      nickname: { // Apelido
        type: 'string', // Tipo de dado
        required: true, // Campo obrigatório
        maxLength: 100, // Comprimento máximo
        example: 'Rex' // Exemplo de valor
      },
      pretend: { // Pretende ter um cachorro
        type: 'string', // Tipo de dado
        required: true, // Campo obrigatório
        maxLength: 100, // Comprimento máximo
        example: 'Sim' // Exemplo de valor
      },
      include: { // Incluir um cachorro
        type: 'string', // Tipo de dado
        required: true, // Campo obrigatório
        maxLength: 100, // Comprimento máximo
        example: 'Sim' // Exemplo de valor
      },
      what_personality: { // Personalidade desejada
        type: 'string', // Tipo de dado
        required: true, // Campo obrigatório
        maxLength: 100, // Comprimento máximo
        example: 'Calmo' // Exemplo de valor
      },
      research_expenses: { // Despesas de pesquisa
        type: 'string', // Tipo de dado
        required: true, // Campo obrigatório
        maxLength: 100, // Comprimento máximo
        example: 'Acredito que 2000' // Exemplo de valor
      },
      user: { // Relacionamento com o modelo 'User'
        type: 'number',// Modelo relacionado
        required: true, // Campo obrigatório
      }
    },
  
    exits: { // Saídas possíveis do método
      success: { // Sucesso na criação do formulário de desejo
        description: 'Novo formulário de desejo foi criado com sucesso.' // Mensagem de sucesso
      },
      serverError: { // Erro interno do servidor
        description: 'Algo deu errado ao tentar criar o formulário de desejo.', // Mensagem explicativa
        responseType: 'serverError' // Resposta indicando um erro do lado do servidor
      }
    },
  
    fn: async function(inputs, exits) { // Função principal do método
      try { // Bloco try-catch para tratamento de erros
        const newForms = await sails.helpers.create.with({ // Tentativa de criar o novo formulário de desejo
          model: 'want_forms', // Modelo de dados a ser usado
          data: inputs // Dados a serem inseridos
        });
        return exits.success(newForms); // Retorna o novo formulário de desejo com status HTTP 201
      } catch (error) { // Tratamento de erro
        return exits.serverError({ error: error.message }); // Retorna mensagem de erro com status HTTP 500
      }
    }
  };
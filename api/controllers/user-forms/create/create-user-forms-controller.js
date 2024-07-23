module.exports = {
    friendlyName: 'Create userForms', // Nome amigável para o método
  
    description: 'Create a new user form.', // Descrição curta do propósito do método
  
    inputs: { // Entradas esperadas pelo método
      social_name: { // Nome social do usuário
        type: 'string', // Tipo de dado esperado
        defaultsTo: '', // Obrigatório
        maxLength: 100, // Tamanho máximo do campo
        example: 'Afonsinho Carrara' // Exemplo de valor
      },
      cellphone: { // Celular do usuário
        type: 'string', // Tipo de dado esperado
        defaultsTo: '', // Obrigatório
        maxLength: 100, // Tamanho máximo do campo
        example: '(92)99216-9101' // Exemplo de valor
      },
      first_name: { // Primeiro nome do usuário
        type: 'string', // Tipo de dado esperado
        defaultsTo: '', // Obrigatório
        maxLength: 100, // Tamanho máximo do campo
        example: 'Afonsinho' // Exemplo de valor
      },
      last_name: { // Sobrenome do usuário
        type: 'string', // Tipo de dado esperado
        defaultsTo: '',// Obrigatório
        maxLength: 100, // Tamanho máximo do campo
        example: 'Carrara' // Exemplo de valor
      },
      email: {
        type: 'string', // Tipo de dado (string)
        required: true, // Campo obrigatório
        unique: true, // Valores únicos
        isEmail: true, // Verificação de formato de e-mail
        example: 'peixoto@gmail.com', // Exemplo de valor
      },
      id_users: { // ID do usuário
        type: 'number', // Tipo de dado esperado
        required: true, // Obrigatório
        example: 1 // Exemplo de valor
      }
    },
    exits: { // Saídas possíveis do método
      success: { // Sucesso na criação das formas do usuário
        description: 'New form was created successfully.' // Mensagem de sucesso
      },
      invalidInput: { // Input inválido
        description: 'The provided input is invalid.', // Mensagem explicativa
        responseType: 'badRequest' // Resposta indicando que o input é inválido
      },
      serverError: { // Erro interno do servidor
        description: 'There was a problem creating the user form.', // Mensagem explicativa
        responseType: 'serverError' // Resposta indicando um erro do lado do servidor
      }
    },
  
    fn: async function(inputs, exits) { // Função principal do método
      try { // Bloco try-catch para tratamento de erros
        const newForm = await sails.helpers.create.with({ // Tentativa de criar os formulários do usuário
          model: 'user_forms', // Modelo de dados a ser usado
          data: inputs // Dados do usuário a serem inseridos
        });
  
        return exits.success(newForm); // Retorna os novos formulários criados com sucesso
      } catch (error) { // Tratamento de erro
        if (error.code === 'E_UNIQUE') {
          return exits.invalidInput({ error: 'Cellphone number must be unique.' }); // Retorna mensagem de erro de unicidade com status HTTP 400
        }
        return exits.serverError({ error: 'Error creating user form: ' + error.message }); // Retorna mensagem de erro com status HTTP 500
      }
    }
  };
  
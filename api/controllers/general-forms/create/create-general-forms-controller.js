module.exports = {
  friendlyName: 'Create General Forms', // Nome amigável para o método

  description: 'Criar um novo formulário geral.', // Descrição curta do propósito do método

  inputs: {
    // Idade do usuário
    age: {
      type: 'number', // Tipo de dado
      required: true, // Campo obrigatório
      columnType: 'int', // Tipo de coluna no banco de dados
      example: 1715193633 // Exemplo de valor
    },
    // Educação do usuário
    education: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      example: 'Colegio Avenidas', // Exemplo de valor
      maxLength: 100, // Comprimento máximo
    },
    // Tipo de moradia
    type_of_housing: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Casa', // Exemplo de valor
    },
    // Constituição familiar
    family_constitution: {
      type: "string", // Tipo de dado
      maxLength: 50, // Comprimento máximo
      required: true, // Campo obrigatório
      example: 'Pai, mae, filho', // Exemplo de valor
    },
    // Renda
    income: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      example: 'De 1.412 até 4.236', // Exemplo de valor
    },
    // Morando na casa atual
    live_in_this_home: {
      type: 'number', // Tipo de dado
      required: true, // Campo obrigatório
      columnType: 'int', // Tipo de coluna no banco de dados
      example: 1, // Exemplo de valor
    },
    // País
    country: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Brasil' // Exemplo de valor
    },
    // Estado
    state: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'São Paulo' // Exemplo de valor
    },
    // Cidade
    city: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'São Paulo' // Exemplo de valor
    },
    // Bairro
    neighborhood: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Jardins' // Exemplo de valor
    },
    // Escolha de formulário
    choice_of_form: {
      type: 'string', // Tipo de dado
      isIn: ['have', 'had', 'want'], // Valores permitidos
      required: true, // Campo obrigatório
      example: 'have', // Exemplo de valor
    },
  },

  exits: { // Saídas possíveis do método
    success: { // Sucesso na criação do novo formulário
      description: 'Novo formulário criado com sucesso.' // Mensagem de sucesso
    },
  },

  fn: async function (input, exits) { // Função principal do método
    try {
      const newForms = await sails.helpers.create.with({ // Tentativa de criação do novo formulário
        model: 'general_forms', // Modelo de dados a ser usado
        data: input // Dados do novo formulário
      });
      return exits.success(newForms); // Retorna o novo formulário criado com status 201
    } catch (error) { // Tratamento de erro
      return exits.error({ error: error.message }); // Retorna erro com status 500
    }
  }
};

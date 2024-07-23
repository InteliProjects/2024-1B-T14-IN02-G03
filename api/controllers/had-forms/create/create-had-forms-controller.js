module.exports = {
  friendlyName: 'Create Had Forms', // Nome amigável para o método

  description: 'Cria um novo formulário de tiver.', // Descrição curta do propósito do método

  inputs: { // Entradas esperadas pelo método
    dogs_name: { // Nome do cachorro
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Rex' // Exemplo de valor
    },
    dogs_personality: { // Personalidade do cachorro
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Bravo' // Exemplo de valor
    },
    time_with_you: { // Tempo com o usuário
      type: 'number', // Tipo de dado
      required: true, // Campo obrigatório
      columnType: 'int', // Tipo de coluna no banco de dados
      example: 1 // Exemplo de valor
    },
    first_dog: { // Primeiro cachorro
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim' // Exemplo de valor
    },
    dog_pets:{
      type: 'number', // Tipo de dado
      required:true, // Campo obrigatório
      columnType:'int', // Tipo de coluna no banco de dados
      example: 1, // Exemplo de valor
    },
    // Outros pets
    cat_pets:{
      type: 'number', // Tipo de dado
      required:true, // Campo obrigatório
      columnType:'int', // Tipo de coluna no banco de dados
      example: 1, // Exemplo de valor
    },
    pet_age: { // Idade do pet
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: '<3 meses', // Exemplo de valor
    },
    castrated: { // Status de castração
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim' // Exemplo de valor
    },
    breed: { // Raça do cachorro
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Pitbull' // Exemplo de valor
    },
    where_came_from: { // Origem do cachorro
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Rua' // Exemplo de valor
    },
    pet_price: { // Preço do pet
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: '50 a 100', // Exemplo de valor
    },
    why: { // Motivo
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Amor' // Exemplo de valor
    },
    characteristics: { // Características
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Peludo' // Exemplo de valor
    },
    name_decision: { // Decisão do nome
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Rex' // Exemplo de valor
    },
    most_like: { // O que mais gosta
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Carinhoso' // Exemplo de valor
    },
    dont_like: { // O que menos gosta
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Bravo' // Exemplo de valor
    },
    veterinary: { // Veterinário
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Dr. Avenidas' // Exemplo de valor
    },
    stopped_living: { // Parou de viver
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Nao' // Exemplo de valor
    },
    belonged_to_you: { // Pertencia ao usuário
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim' // Exemplo de valor
    },
    other:{
      type: 'string', // Tipo de dado
      required:false, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Não há outra raça', // Exemplo de valor
    },
    user: { // Relacionamento com o modelo 'User'
      type: 'number',// Modelo relacionado
      required: true, // Campo obrigatório
    }
  },

  exits: { // Saídas possíveis do método
    success: { // Sucesso na criação do novo formulário de tiver
      description: 'Novo formulário criado com sucesso.' // Mensagem de sucesso
    }
  },

  fn: async function(input, exits) { // Função principal do método
    try { // Bloco try-catch para tratamento de erros
      const newForms = await sails.helpers.create.with({ // Tenta criar o novo formulário
        model: 'had_forms', // Modelo de dados a ser usado
        data: input // Dados do novo formulário
      });
      return exits.success(newForms); // Retorna o novo formulário criado com status 201
    } catch (error) { // Tratamento de erro
      return exits.error({ error: error.message }); // Retorna erro com status 500
    }
  }
};

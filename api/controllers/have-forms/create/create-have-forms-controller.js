module.exports = {
  friendlyName: 'Create Have Forms', // Nome amigável para o método

  description: 'Cria um novo formulário de ter.', // Descrição curta do propósito do método

  inputs: { // Entradas esperadas pelo método
    time_with_dog: { // Tempo passado com o cachorro
      type: 'number', // Tipo de dado
      required: true, // Campo obrigatório
      example: 1 // Exemplo de valor
    },
    first_dog: { // Primeiro cachorro
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim' // Exemplo de valor
    },
    other_pets: { // Outros pets
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Nao' // Exemplo de valor
    },
    dogs_age: { // Idade do cachorro
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      example: '>1' // Exemplo de valor
    },
    breed: { // Raça do cachorro
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Golden Retriever' // Exemplo de valor
    },
    where_get: { // Onde adquiriu
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Petshop' // Exemplo de valor
    },
    paid_to_acquire: { // Pagou para adquirir
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim' // Exemplo de valor
    },
    age_reached: { // Idade alcançada
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: '<1', // Exemplo de valor
    },
    dog_personality: { // Personalidade do cachorro
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Bravo' // Exemplo de valor
    },
    why_do_have: { // Motivo para ter
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Gosto de cachorros' // Exemplo de valor
    },
    others: { // Outros
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Nao' // Exemplo de valor
    },
    characteristics: { // Características
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Carinhoso e brincalhao' // Exemplo de valor
    },
    decision: { // Decisão
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Meu pai decidiu' // Exemplo de valor
    },
    couldnt_keep: { // Não conseguiu manter
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Nao' // Exemplo de valor
    },
    how_vet: { // Como foi ao veterinário
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Veterinario' // Exemplo de valor
    },
    say_about: { // O que dizer sobre
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Meu cachorro é divertido' // Exemplo de valor
    },
    user: { // Relacionamento com o modelo 'User'
      type: 'number', // tipo numero
      required: true, // Campo obrigatório
      via: 'haveForms' // Nome do atributo no modelo 'User' que faz referência a este modelo
    }
  },

  exits: { // Saídas possíveis do método
    success: { // Sucesso na criação do formulário de ter
      description: 'Novos formulários foram criados com sucesso.' // Mensagem de sucesso
    }
  },

  fn: async function(input, exits) { // Função principal do método
    try { // Bloco try-catch para tratamento de erros
      const newForms = await sails.helpers.create.with({ // Tenta criar o novo formulário de ter
        model: 'have_forms', // Modelo de dados a ser usado
        data: input // Dados a serem inseridos
      });
      return exits.success(newForms); // Retorna o novo formulário com status HTTP 201
    } catch (error) { // Tratamento de erro
      return exits.error({ error: error.message }); // Retorna mensagem de erro com status HTTP 500
    }
  }
};

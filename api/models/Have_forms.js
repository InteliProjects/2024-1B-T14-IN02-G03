// Exporta a definição do modelo
module.exports = {
  // Nome da tabela no banco de dados
  tableName: "have_forms",
  // Definição dos atributos do modelo
  attributes: {
    // ID do registro
    id: {
      type: 'number', // Tipo de dado
      autoIncrement: true, // Incrementa automaticamente
      unique: true, // Valores únicos
      columnName: 'have_forms_id', // Nome da coluna no banco de dados
      columnType: 'serial', // Tipo de coluna no banco de dados
    },
    // Tempo com o cachorro
    time_with_dog:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: '<1', // Exemplo de valor
    },
    // Primeiro cachorro
    first_dog:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim', // Exemplo de valor
    },
    // Outros pets
    other_pets:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Nao', // Exemplo de valor
    },
    // Idade do cachorro
    dogs_age:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      example: '>1', // Exemplo de valor
    },
    // Raça do cachorro
    breed:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Golden Retriever', // Exemplo de valor
    },
    // Onde adquiriu
    where_get:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Petshop', // Exemplo de valor
    },
    // Pagou para adquirir
    paid_to_acquire:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim', // Exemplo de valor
    },
    // Idade alcançada
    age_reached:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: '3 a 6 meses', // Exemplo de valor
    },
    // Personalidade do cachorro
    dog_personality:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Bravo', // Exemplo de valor
    },
    // Motivo para ter
    why_do_have:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Gosto de cachorros', // Exemplo de valor
    },
    // Outros
    others:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Nao', // Exemplo de valor
    },
    // Características
    characteristics:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Carinhoso e brincalhao', // Exemplo de valor
    },
    // Decisão
    decision:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Meu pai decidiu', // Exemplo de valor
    },
    // Não conseguiu manter
    couldnt_keep:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Nao', // Exemplo de valor
    },
    // Como foi ao veterinário
    how_vet:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Veterinario', // Exemplo de valor
    },
    // O que dizer sobre
    say_about:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Meu cachorro é divertido', // Exemplo de valor
    },
    // Relacionamento com o modelo 'User'
    user: {
      model: 'user_forms', // Modelo relacionado
      columnName: 'user_id', // Nome da coluna no banco de dados
      required: true // Campo obrigatório
    }
  }
};

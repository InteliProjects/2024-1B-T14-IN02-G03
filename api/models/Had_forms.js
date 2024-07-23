// Exporta a definição do modelo
module.exports = {
  // Nome da tabela no banco de dados
  tableName: "hads_forms",
  // Definição dos atributos do modelo
  attributes: {
    // ID do registro
    id: {
      type: 'number', // Tipo de dado
      autoIncrement: true, // Incrementa automaticamente
      unique: true, // Valores únicos
      columnName: 'had_forms_id', // Nome da coluna no banco de dados
      columnType: 'serial', // Tipo de coluna no banco de dados
    },
    // Nome do cachorro
    dogs_name:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Rex', // Exemplo de valor
      
    },
    // Personalidade do cachorro
    dogs_personality:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Bravo', // Exemplo de valor
    },
    // Tempo com o usuário
    time_with_you:{ 
      type: 'number', // Tipo de dado
      required:true, // Campo obrigatório
      columnType:'int', // Tipo de coluna no banco de dados
      example: 1, // Exemplo de valor
    },
    // Primeiro cachorro
    first_dog:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim', // Exemplo de valor
    },
    // Outros pets
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
    // Idade do pet
    pet_age:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: '<3 meses', // Exemplo de valor
    },
    // Status de castração
    castrated:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim', // Exemplo de valor
    },
    // Raça do cachorro
    breed:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Pitbull', // Exemplo de valor
    },
    // Origem do cachorro
    where_came_from:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Rua', // Exemplo de valor
    },
    // Preço do pet
    pet_price:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: '50 a 100', // Exemplo de valor
    },
    // Motivo
    why:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Amor', // Exemplo de valor
    },
    // Características
    characteristics:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Peludo', // Exemplo de valor
    },
    // Decisão do nome
    name_decision:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Rex', // Exemplo de valor
    },
    // O que mais gosta
    most_like:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Carinhoso', // Exemplo de valor
    },
    // O que menos gosta
    dont_like:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Bravo', // Exemplo de valor
    },
    // Veterinário
    veterinary:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Dr. Avenidas', // Exemplo de valor
    },
    // Parou de viver
    stopped_living :{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Nao', // Exemplo de valor
    },
    // Pertencia ao usuário
    belonged_to_you:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim', // Exemplo de valor
    },
    // Pertencia ao usuário
    other:{
      type: 'string', // Tipo de dado
      required:false, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Não há outra raça', // Exemplo de valor
    },
    // Relacionamento com o modelo 'User'
    user: {
      model: 'user_forms', // Modelo relacionado
      columnName: 'user_id', // Nome da coluna no banco de dados
      required: true, // Campo obrigatório
    }
  }
};

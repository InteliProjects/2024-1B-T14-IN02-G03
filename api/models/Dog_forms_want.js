// Exporta a definição do modelo
module.exports = {
  // Nome da tabela no banco de dados
  tableName: "dogs_forms_want",
  // Definição dos atributos do modelo
  attributes: {
    // ID do registro
    id: {
      type: 'number', // Tipo de dado
      autoIncrement: true, // Incrementa automaticamente
      unique: true, // Valores únicos
      columnName: 'dog_forms_want_id', // Nome da coluna no banco de dados
      columnType: 'serial', // Tipo de coluna no banco de dados
    },
    // Tamanho do cachorro
    dog_size: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Grande', // Exemplo de valor
    },
    // Tipo de pelagem
    coat: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Curto', // Exemplo de valor
    },
    // Preferência de cor
    color_preference: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Caramelo', // Exemplo de valor
    },
    // Gênero do cachorro
    gender: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Macho', // Exemplo de valor
    },
    // Idade do cachorro
    age: {
      type: 'string',
      required: true,
      maxLength: 100,
      example: '6 a 9 meses',
    },
    // Raça do cachorro
    breed: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Golden Retriever', // Exemplo de valor
    },
    // Relacionamento com o modelo 'Want_forms'
    owner: {
      model: 'Want_forms', // Modelo relacionado
      columnName: 'owner_id', // Nome da coluna no banco de dados
      required: true, // Campo obrigatório
      unique: true, // Valores únicos
    }
  },
};

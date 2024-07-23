// Exporta a definição do modelo
module.exports = {
  // Nome da tabela no banco de dados
  tableName: "dogs_forms_have",
  // Definição dos atributos do modelo
  attributes: {
    // ID do registro
    id:{
      type: 'number', // Tipo de dado
      autoIncrement: true, // Incrementa automaticamente
      unique: true, // Valores únicos
      columnName: 'dog_forms_have_id', // Nome da coluna no banco de dados
      columnType: 'serial', // Tipo de coluna no banco de dados
    },
    // Gênero do cachorro
    gender: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Macho', // Exemplo de valor
    },
    // Status de castração
    castrated: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim', // Exemplo de valor
    },
    // Indica se o cachorro pertence ao usuário
    belongs_to_you: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Meu tio', // Exemplo de valor
    },
    // Relacionamento com o modelo 'Have_forms'
    owner: {
      model: 'Have_forms', // Modelo relacionado
      columnName: 'owner_id', // Nome da coluna no banco de dados
      required: true, // Campo obrigatório
      unique: true, // Valores únicos
    }
  },
}

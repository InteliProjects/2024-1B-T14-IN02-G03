// Exporta a definição do modelo
module.exports = {
  // Nome da tabela no banco de dados
  tableName: "nulls_forms",
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
    // Não quer
    dont_want:{
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Nao, quero', // Exemplo de valor
    },
    // Relacionamento com o modelo 'User'
    user: {
      model: 'user_forms', // Modelo relacionado
      columnName: 'user_id', // Nome da coluna no banco de dados
      required: true, // Campo obrigatório
    }
  },
};

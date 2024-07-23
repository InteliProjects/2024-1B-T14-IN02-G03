// Exporta a definição do modelo
module.exports = {
  // Nome da tabela no banco de dados
  tableName: "wants_forms",
  // Definição dos atributos do modelo
  attributes: {
    // ID do registro
    id: {
      type: 'number', // Tipo de dado
      autoIncrement: true, // Incrementa automaticamente
      unique: true, // Valores únicos
      columnName: 'owner_id', // Nome da coluna no banco de dados
      columnType: 'serial', // Tipo de coluna no banco de dados
    },
    

    // Nickname
    nickname:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Rex', // Exemplo de valor
    },
    // Pretende ter um cachorro
    pretend:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim', // Exemplo de valor
    },
    // Inclui um cachorro
    include:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Sim', // Exemplo de valor
    },
    // Personalidade desejada
    what_personality:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Calmo', // Exemplo de valor
    },
    // Despesas de pesquisa
    research_expenses:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Penso que 2000', // Exemplo de valor
    },
    // Relacionamento com o modelo 'User'
    user: {
      model: 'user_forms', // Modelo relacionado
      columnName: 'user_id', // Nome da coluna no banco de dados
      required: true, // Campo obrigatório
    },
    // Relacionamento com o modelo 'Dog_forms_want'
    owner: {  
      collection: 'Dog_forms_want', // Coleção relacionada
      via: 'owner' // Via de relacionamento
    },
  },
};

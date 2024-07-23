module.exports = {
  tableName: 'all_dogs',
  attributes: {
    id:{
      type: 'number', // Tipo de dado
      autoIncrement: true, // Incrementa automaticamente
      unique: true, // Valores únicos
      columnName: 'dog_id', // Nome da coluna no banco de dados
      columnType: 'serial', // Tipo de coluna no banco de dados
    },
    dog_name:{
      type: 'string', // Tipo de dado
      maxLength: 100, // Comprimento máximo
      example: 'Rex', // Exemplo de valor
      defaultsTo: 'Sem nome' // Valor padrão
    },
    gender:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      example: 'Macho', // Exemplo de valor
    },
    breed:{
      type: 'string', // Tipo de dado
      required:true, // Campo obrigatório
      example: 'Vira-lata', // Exemplo de valor
    },
    age: {
      type: 'number', // Tipo de dado
      required:true, // Campo obrigatório
      columnType: 'int', // Tipo de coluna no banco de dados
      example: 1715193633 // Exemplo de valor
    },
    real_or_fictitious:{
      type:'string', // Tipo de dado
      isIn:['real', 'fictitious'], // Valores permitidos
      required:true, // Campo obrigatório
      example:'real', // Exemplo de valor
    },
    owner: {
      model: 'user_forms', // Modelo relacionado
      columnName: 'owner_id', // Nome da coluna no banco de dados
      required: true, // Campo obrigatório
    }
  },

};


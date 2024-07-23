// Exporta a definição do modelo
module.exports = {
  // Nome da tabela no banco de dados
  tableName : "users",
  // Definição dos atributos do modelo
  attributes: {
    // Comentando o ID por causa que estava dando erro ao enviar o post
    // ID do registro
    id: {
      type: 'number', // Tipo de dado
      autoIncrement: true, // Incrementa automaticamente
      unique: true, // Valores únicos
      columnName: 'user_id', // Nome da coluna no banco de dados
      columnType: 'serial', // Tipo de coluna no banco de dados, preferencialmente 'serial'
    },
    // Primeiro nome
    first_name: {
      type: 'string', // Tipo de dado
      defaultsTo: '',
      maxLength: 20, // Comprimento máximo
      example: 'Marco', // Exemplo de valor
    },
    // Sobrenome
    last_name: {
      type: 'string', // Tipo de dado
      defaultsTo: '', 
      maxLength: 20, // Comprimento máximo
      example: 'Avenidas', // Exemplo de valor
    },
    // Nome
    social_name: {
      type: 'string', // Tipo de dado
      defaultsTo: '', // Valor padrão
      maxLength: 120, // Comprimento máximo
      example: 'Marco Avenidas Afonsinho' // Exemplo de valor
    },
    // Celular
    cellphone: {
      type: 'string', // Tipo de dado (alterado para string)
      required: true, // Campo obrigatório
      unique: true, // Valores únicos
      example: '11999999999', // Exemplo de valor
    },
    //email
    email: {
      type: 'string', // Tipo de dado (string)
      required: true, // Campo obrigatório
      unique: true, // Valores únicos
      isEmail: true, // Verificação de formato de e-mail
      example: 'peixoto@gmail.com', // Exemplo de valor
    },
    // Relacionamentos com outros modelos
    had_forms: {  
      collection: 'Had_forms', // Coleção relacionada
      via: 'user' // Via de relacionamento
    },
    null_forms: {  
      collection: 'Null_forms', // Coleção relacionada
      via:'user' // Via de relacionamento
    },
    want_forms: {  
      collection: 'Want_forms', // Coleção relacionada
      via: 'user' // Via de relacionamento
    },
    have_forms: {  
      collection: 'Have_forms', // Coleção relacionada
      via: 'user' // Via de relacionamento
    },
  }
};

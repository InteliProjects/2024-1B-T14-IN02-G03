// Exporta a definição do modelo
module.exports = {
  // Nome da tabela no banco de dados
  tableName: "general_forms",
  // Definição dos atributos do modelo
  attributes: {
    // ID do registro
    id: {
      type: 'number', // Tipo de dado
      autoIncrement: true, // Incrementa automaticamente
      unique: true, // Valores únicos
      columnName: 'user_forms_id', // Nome da coluna no banco de dados
      columnType: 'serial', // Tipo de coluna no banco de dados
    },
    // Idade do usuário
    age: {
      type: 'number', // Tipo de dado
      required: true, // Campo obrigatório
      columnType: 'int', // Tipo de coluna no banco de dados
      example: 1715193633 // Exemplo de valor
    },
    // Educação do usuário
    education: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      example: 'Colegio Avenidas', // Exemplo de valor
      maxLength: 100, // Comprimento máximo
    },
    // Tipo de moradia
    type_of_housing: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Casa', // Exemplo de valor
    },
    // Constituição familiar
    family_constitution: {
      type: "string", // Tipo de dado
      maxLength: 50, // Comprimento máximo
      required: true, // Campo obrigatório
      example: 'Pai, mae, filho', // Exemplo de valor
    },
    // Renda
    income: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      example: 'De 1.412 até 4.236', // Exemplo de valor
    },
    // Morando na casa atual
    live_in_this_home: {
      type: 'number', // Tipo de dado
      required: true, // Campo obrigatório
      columnType: 'int', // Tipo de coluna no banco de dados
      example: 1, // Exemplo de valor
    },
    // Escolha de formulário
    choice_of_form: {
      type: 'string', // Tipo de dado
      isIn: ['have', 'had', 'want'], // Valores permitidos
      required: true, // Campo obrigatório
      example: 'have', // Exemplo de valor
    },
    // País
    country: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Brasil' // Exemplo de valor
    },
    // Estado
    state: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'São Paulo' // Exemplo de valor
    },
    // Cidade
    city: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'São Paulo' // Exemplo de valor
    },
    // Bairro
    neighborhood: {
      type: 'string', // Tipo de dado
      required: true, // Campo obrigatório
      maxLength: 100, // Comprimento máximo
      example: 'Jardins' // Exemplo de valor
    },
  }
};

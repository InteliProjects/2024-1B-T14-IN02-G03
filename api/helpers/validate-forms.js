module.exports = {
    friendlyName: 'Validate Forms', // Nome amigável para o helper
    description: 'Helper para validar campos de formulários dinamicamente', // Descrição do que o helper faz
  
    inputs: {
      fields: { // Parâmetro que contém os campos a serem validados
        type: 'ref', // Tipo "ref" significa que pode ser qualquer tipo de dado
        required: true, // Este parâmetro é obrigatório
        description: 'Campos a serem validados' // Descrição do parâmetro
      },
      rules: { // Parâmetro que contém as regras de validação para os campos
        type: 'ref', // Tipo "ref" para permitir regras flexíveis
        required: true, // Este parâmetro é obrigatório
        description: 'Regras de validação para os campos' // Descrição do parâmetro
      }
    },
  
    exits: {
      success: {
        description: 'Todos os campos são válidos' // Descrição da saída em caso de sucesso
      },
      invalid: {
        description: 'Um ou mais campos são inválidos' // Descrição da saída em caso de campos inválidos
      }
    },
  
    fn: async function (inputs, exits) {
      const { fields, rules } = inputs; // Desestruturação para obter os campos e regras
  
      // Itera sobre cada campo e seu respectivo valor
      for (const [field, value] of Object.entries(fields)) {
        // Verifica se o campo é obrigatório conforme as regras
        if (rules[field].required) {
          if (typeof value === 'string') { // Se o valor for uma string
            if (!value.trim() || value.trim().length === 0) { // Verifica se está vazio ou apenas com espaços em branco
              return exits.invalid(new Error(`O campo ${field} é obrigatório.`)); // Sai com erro se for inválido
            }
          } else if (value === null || value === undefined || value.toString().trim().length === 0) { // Para outros tipos
            return exits.invalid(new Error(`O campo ${field} é obrigatório.`)); // Sai com erro se for inválido
          }
        }
  
        // Verifica se o campo excede o comprimento máximo permitido
        if (rules[field].maxLength && typeof value === 'string' && value.length > rules[field].maxLength) {
          return exits.invalid(new Error(`O campo ${field} excede o comprimento máximo de ${rules[field].maxLength} caracteres.`)); // Sai com erro se for inválido
        }
      }
  
      // Se todas as validações passarem
      return exits.success({ message: 'Validação bem-sucedida!' }); // Sai com sucesso
    }
  };
  
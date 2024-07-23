module.exports = {

    friendlyName: 'To lowercase',
    // Nome amigável da função, descrevendo o que ela faz.

    description: 'Convert a string to lowercase.',
    // Descrição da função, explicando o que ela faz.

    inputs: {
      text: {
        type: 'string',
        required: true,
        description: 'The text to convert to lowercase'
        // Entrada da função, especificando o tipo (string), se é obrigatória (required) e uma descrição.
      }
    },

    exits: {
      success: {
        outputFriendlyName: 'Lowercase text',
        outputDescription: 'The text converted to lowercase.'
        // Saída da função, especificando o nome amigável (outputFriendlyName) e uma descrição.
      },
    },

    fn: async function (inputs, exits) {
      // Função principal que será executada quando a função for chamada.
      // Converte o texto para minúsculas
      const lowercaseText = inputs.text.toLowerCase();
      // Retorna o texto em minúsculas
      return exits.success(lowercaseText);
    }

};

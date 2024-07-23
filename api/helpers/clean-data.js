module.exports = {
  description: 'Remove espaços extras e caracteres especiais dos dados de entrada no geral.',

  inputs: {
    data: {
      type: 'ref',
      required: true,
      description: 'Os dados de entrada para serem limpos.'
    }
  },

  fn: async function (inputs, exits) {
    try {
      // Tratar strings dentro do objeto data
      for (let key in inputs.data) {
        if (typeof inputs.data[key] === 'string') {
          // Remove espaços extras no início e no final
          inputs.data[key] = inputs.data[key].trim();
          // Remove caracteres especiais, exceto alguns permitidos
          inputs.data[key] = inputs.data[key].replace(/[^a-zA-Z0-9 áéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕçÇ.,-]/g, '');
        }
      }
      return exits.success(inputs.data);
    } catch (error) {
      return exits.error(error);
    }
  }
};
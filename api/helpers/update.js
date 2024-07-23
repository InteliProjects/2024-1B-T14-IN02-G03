module.exports = {
  friendlyName: 'Update Record', // Nome amigável para o método

  description: 'Update a record by its ID in the specified model.', // Descrição curta do propósito do método

  inputs: { // Entradas esperadas pelo método
    model: { // Modelo que guarda o registro a ser atualizado
      type: 'string', // Tipo de dado esperado
      required: true, // Obrigatório
      description: 'The model holding the record to be updated.' // Descrição do parâmetro
    },
    id: { // ID a ser atualizado
      type: 'number', // Tipo de dado esperado
      required: true, // Obrigatório
      description: 'The ID to be updated.' // Descrição do parâmetro
    },
    data: { // Data a ser atualizada
      type: 'ref', // Tipo de dado esperado
      required: true, // Obrigatório
      description: 'The data to be updated.' // Descrição do parâmetro
    }
  },

  fn: async function(inputs, exits) { // Função principal do método
    try { // Bloco try-catch para tratamento de erros
      const updatedRecord = await sails.models[inputs.model].updateOne({ id: inputs.id }).set(inputs.data); // Tentativa de atualizar o registro
      if (!updatedRecord) { // Verifica se o registro foi realmente atualizado
        return exits.notFound({ message: 'Record not found.' }); // Retorna indicação de que o registro não foi encontrado
      }
      return exits.success({ message: 'Record updated successfully!', data: updatedRecord }); // Retorna sucesso na atualização
    } catch (error) { // Tratamento de erro
      return exits.error({ // Retorna o erro com detalhes
        message: 'Error updating record: ' + error.message, // Mensagem de erro detalhada
        error: error // Detalhes do erro
      });
    }
  }
};

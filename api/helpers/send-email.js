module.exports = {
  // Nome amigável do helper
  friendlyName: 'Enviar Email',
  // Descrição do que o helper faz
  description: 'Envia um e-mail para um usuário usando um serviço de e-mail configurado.',

  // Definição das entradas que a função aceita
  inputs: {
    destinatario: {
      type: 'string',       // Tipo de dado esperado é uma string
      isEmail: true,        // Validação para garantir que é um e-mail válido
      required: true,       // Este campo é obrigatório
      description: 'O endereço de e-mail do destinatário.' // Descrição do campo
    },
    assunto: {
      type: 'string',       // Tipo de dado esperado é uma string
      required: true,       // Este campo é obrigatório
      description: 'O assunto do e-mail.' // Descrição do campo
    },
    mensagem: {
      type: 'string',       // Tipo de dado esperado é uma string
      required: true,       // Este campo é obrigatório
      description: 'A mensagem principal do e-mail.' // Descrição do campo
    }
  },

  // Definição das saídas possíveis da função
  exits: {
    success: {
      description: 'E-mail enviado com sucesso.' // Descrição da saída de sucesso
    },
    erro: {
      description: 'Falha ao enviar e-mail.' // Descrição da saída de erro
    }
  },

  // Função principal que executa a lógica de envio do e-mail
  fn: async function ({destinatario, assunto, mensagem}, exits) {
    // Importa o módulo nodemailer para envio de e-mails
    const nodemailer = require('nodemailer');
    
    // Configuração do transportador (transporter) para o serviço de e-mail Sendgrid
    const transporter = nodemailer.createTransport({
      service: 'Sendgrid', // Serviço de e-mail a ser usado
      auth: {
        user: 'seu_usuario', // Usuário de autenticação no serviço de e-mail
        pass: 'sua_senha'    // Senha de autenticação no serviço de e-mail
      }
    });

    // Definição das opções do e-mail
    const mailOptions = {
      from: 'seu-email@example.com', // Remetente do e-mail
      to: destinatario,              // Destinatário do e-mail
      subject: assunto,              // Assunto do e-mail
      text: mensagem                 // Corpo do e-mail em texto plano
    };

    // Envia o e-mail usando o transportador configurado
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        // Caso ocorra um erro, chama a saída de erro com a mensagem apropriada
        return exits.erro({
          message: 'Não foi possível enviar o e-mail: ' + error.message
        });
      } else {
        // Caso o e-mail seja enviado com sucesso, chama a saída de sucesso com a resposta do serviço de e-mail
        return exits.success({
          message: 'E-mail enviado com sucesso: ' + info.response
        });
      }
    });
  }
};

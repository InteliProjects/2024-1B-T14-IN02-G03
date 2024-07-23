const assert = require("assert");
const sinon = require("sinon");
const controller = require("../../../api/controllers/user-forms/create/create-user-forms-controller");

// Definindo um objeto de formulário para ser usado nos testes
const FORM = {
  social_name: "Marco Ruas",
  cellphone: "31998401058",
  first_name: "Marco",
  last_name: "Avenidas",
  id_users: 123
};

// Descreve a suite de testes para o controlador CreateUserFormsController
describe("CreateUserFormsController", () => {
  let createHelperStub;

  // Antes de cada teste, cria um stub para a função 'create' dos helpers do Sails
  beforeEach(() => {
    createHelperStub = sinon.stub();
    sails.helpers = {
      create: {
        with: createHelperStub
      }
    };
  });

  // Após cada teste, restaura o comportamento original das funções stubbed
  afterEach(() => {
    sinon.restore();
  });

  // Teste para verificar se um formulário é criado com sucesso
  it("Deve criar um novo formulário com sucesso", async () => {
    // Configura o stub para resolver com o objeto FORM
    createHelperStub.resolves(FORM);
    const inputs = FORM;
    const exits = {
      success: sinon.stub().returns(FORM),
      invalidInput: sinon.stub(),
      serverError: sinon.stub()
    };

    // Executa a função do controlador com os inputs e exits definidos
    await controller.fn(inputs, exits);

    // Verifica se a função create foi chamada uma vez com os parâmetros corretos
    assert.strictEqual(createHelperStub.calledOnce, true);
    assert.strictEqual(createHelperStub.calledWith({ model: 'user_forms', data: inputs }), true);
    // Verifica se a saída de sucesso foi chamada uma vez com o objeto FORM
    assert.strictEqual(exits.success.calledOnce, true);
    assert.strictEqual(exits.success.calledWith(FORM), true);
    // Verifica se a saída de erro não foi chamada
    assert.strictEqual(exits.invalidInput.called, false);
    assert.strictEqual(exits.serverError.called, false);
  });

  // Teste para verificar se ocorre um erro quando a criação do formulário falhar
  it("Deve retornar um erro se a criação do formulário falhar", async () => {
    const errorMessage = "Erro ao criar formulário";
    // Configura o stub para rejeitar com uma mensagem de erro
    createHelperStub.rejects(new Error(errorMessage));
    const inputs = FORM;
    const exits = {
      success: sinon.stub(),
      invalidInput: sinon.stub(),
      serverError: sinon.stub().returns({ error: errorMessage })
    };

    // Executa a função do controlador com os inputs e exits definidos
    await controller.fn(inputs, exits);

    // Verifica se a função create foi chamada uma vez com os parâmetros corretos
    assert.strictEqual(createHelperStub.calledOnce, true);
    assert.strictEqual(createHelperStub.calledWith({ model: 'user_forms', data: inputs }), true);
    // Verifica se a saída de sucesso não foi chamada
    assert.strictEqual(exits.success.called, false);
    // Verifica se a saída de erro foi chamada uma vez com a mensagem de erro correta
    assert.strictEqual(exits.serverError.calledOnce, true);
    assert.strictEqual(exits.serverError.calledWith({ error: 'Error creating user form: ' + errorMessage }), true);
  });

  // Teste para verificar se ocorre um erro de unicidade quando o número de celular já existe
  it("Deve retornar um erro de input inválido se o número de celular já existir", async () => {
    const uniqueError = new Error("Cellphone number must be unique.");
    uniqueError.code = 'E_UNIQUE';
    // Configura o stub para rejeitar com um erro de unicidade
    createHelperStub.rejects(uniqueError);
    const inputs = FORM;
    const exits = {
      success: sinon.stub(),
      invalidInput: sinon.stub().returns({ error: 'Cellphone number must be unique.' }),
      serverError: sinon.stub()
    };

    // Executa a função do controlador com os inputs e exits definidos
    await controller.fn(inputs, exits);

    // Verifica se a função create foi chamada uma vez com os parâmetros corretos
    assert.strictEqual(createHelperStub.calledOnce, true);
    assert.strictEqual(createHelperStub.calledWith({ model: 'user_forms', data: inputs }), true);
    // Verifica se a saída de sucesso não foi chamada
    assert.strictEqual(exits.success.called, false);
    // Verifica se a saída de invalidInput foi chamada uma vez com a mensagem de erro correta
    assert.strictEqual(exits.invalidInput.calledOnce, true);
    assert.strictEqual(exits.invalidInput.calledWith({ error: 'Cellphone number must be unique.' }), true);
    // Verifica se a saída de serverError não foi chamada
    assert.strictEqual(exits.serverError.called, false);
  });

});


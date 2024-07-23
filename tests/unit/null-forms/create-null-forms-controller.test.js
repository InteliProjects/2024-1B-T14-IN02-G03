const assert = require("assert");
const sinon = require("sinon");
const controller = require("../../../api/controllers/null-forms/create/create-null-forms-controller");

// Definindo um objeto de formulário para ser usado nos testes
const FORM = {
  dont_want: "Não quero por causa do cheiro dele.",
  user: "1",
};

// Descreve a suite de testes para o controlador CreateNullFormsController
describe("CreateNullFormsController", () => {
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
      error: sinon.stub(),
    };

    // Executa a função do controlador com os inputs e exits definidos
    await controller.fn(inputs, exits);

    // Verifica se a função create foi chamada uma vez com os parâmetros corretos
    assert.strictEqual(createHelperStub.calledOnce, true);
    assert.strictEqual(createHelperStub.calledWith({ model: 'null_forms', data: inputs }), true);
    // Verifica se a saída de sucesso foi chamada uma vez com o objeto FORM
    assert.strictEqual(exits.success.calledOnce, true);
    assert.strictEqual(exits.success.calledWith(FORM), true);
    // Verifica se a saída de erro não foi chamada
    assert.strictEqual(exits.error.called, false);
  });

  // Teste para verificar se ocorre um erro quando a criação do formulário falha
  it("Deve retornar um erro se a criação do formulário falhar", async () => {
    const errorMessage = "Erro ao criar formulário";
    // Configura o stub para rejeitar com uma mensagem de erro
    createHelperStub.rejects(new Error(errorMessage));
    const inputs = FORM;
    const exits = {
      success: sinon.stub(),
      error: sinon.stub().returns({ error: errorMessage }),
    };

    // Executa a função do controlador com os inputs e exits definidos
    await controller.fn(inputs, exits);

    // Verifica se a função create foi chamada uma vez com os parâmetros corretos
    assert.strictEqual(createHelperStub.calledOnce, true);
    assert.strictEqual(createHelperStub.calledWith({ model: 'null_forms', data: inputs }), true);
    // Verifica se a saída de sucesso não foi chamada
    assert.strictEqual(exits.success.called, false);
    // Verifica se a saída de erro foi chamada uma vez com a mensagem de erro correta
    assert.strictEqual(exits.error.calledOnce, true);
    assert.strictEqual(exits.error.calledWith({ error: errorMessage }), true);
  });

  // Teste para verificar se ocorre um erro "inválido" quando a criação do formulário falha com 'invalid'
  it("Deve retornar um erro inválido se a criação do formulário falhar com 'invalid'", async () => {
    const errorMessage = "Campos inválidos";
    const error = new Error(errorMessage);
    error.exit = 'invalid';
    // Configura o stub para rejeitar com um erro específico de 'invalid'
    createHelperStub.rejects(error);
    const inputs = FORM;
    const exits = {
      success: sinon.stub(),
      invalid: sinon.stub().returns({ error: errorMessage }),
      error: sinon.stub(),
    };

    // Executa a função do controlador com os inputs e exits definidos
    await controller.fn(inputs, exits);

    // Verifica se a função create foi chamada uma vez com os parâmetros corretos
    assert.strictEqual(createHelperStub.calledOnce, true);
    assert.strictEqual(createHelperStub.calledWith({ model: 'null_forms', data: inputs }), true);
    // Verifica se a saída de sucesso não foi chamada
    assert.strictEqual(exits.success.called, false);
    // Verifica se a saída de inválido foi chamada uma vez com a mensagem de erro correta
    assert.strictEqual(exits.invalid.calledOnce, true);
    assert.strictEqual(exits.invalid.calledWith({ error: errorMessage }), true);
    // Verifica se a saída de erro não foi chamada
    assert.strictEqual(exits.error.called, false);
  });
});

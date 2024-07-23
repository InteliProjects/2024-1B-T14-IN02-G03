const assert = require("assert");
const sinon = require("sinon");
const controller = require("../../../api/controllers/want-forms/create/create-want-forms-controller");

// Definindo um objeto de formulário para ser usado nos testes
const FORM = {
  characteristics: "Carinhoso e brincalhão",
  user: "1",
  live_with_dog: "Sim",
  nickname: "Rex",
  pretend: "Sim",
  include: "Sim",
  what_personality: "Calmo",
  research_expenses: 'Penso que 2000',
  choice_of_form: "want_forms",
  id_users: 123
};

// Descreve a suite de testes para o controlador CreateWantFormsController
describe("CreateWantFormsController", () => {
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
      serverError: sinon.stub()
    };

    // Executa a função do controlador com os inputs e exits definidos
    await controller.fn(inputs, exits);

    // Verifica se a função create foi chamada uma vez com os parâmetros corretos
    assert.strictEqual(createHelperStub.calledOnce, true);
    assert.strictEqual(createHelperStub.calledWith({ model: 'want_forms', data: inputs }), true);
    // Verifica se a saída de sucesso foi chamada uma vez com o objeto FORM
    assert.strictEqual(exits.success.calledOnce, true);
    assert.strictEqual(exits.success.calledWith(FORM), true);
    // Verifica se a saída de erro não foi chamada
    assert.strictEqual(exits.serverError.called, false);
  });

  // Teste para verificar se ocorre um erro quando a criação do formulário falha
  it("Deve retornar um erro se a criação do formulário falhar", async () => {
    const errorMessage = "Erro ao criar formulário";
    // Configura o stub para rejeitar com uma mensagem de erro
    createHelperStub.rejects(new Error(errorMessage));
    const inputs = FORM;
    const exits = {
      success: sinon.stub(),
      serverError: sinon.stub().returns({ error: errorMessage })
    };

    // Executa a função do controlador com os inputs e exits definidos
    await controller.fn(inputs, exits);

    // Verifica se a função create foi chamada uma vez com os parâmetros corretos
    assert.strictEqual(createHelperStub.calledOnce, true);
    assert.strictEqual(createHelperStub.calledWith({ model: 'want_forms', data: inputs }), true);
    // Verifica se a saída de sucesso não foi chamada
    assert.strictEqual(exits.success.called, false);
    // Verifica se a saída de erro foi chamada uma vez com a mensagem de erro correta
    assert.strictEqual(exits.serverError.calledOnce, true);
    assert.strictEqual(exits.serverError.calledWith({ error: errorMessage }), true);
  });

});

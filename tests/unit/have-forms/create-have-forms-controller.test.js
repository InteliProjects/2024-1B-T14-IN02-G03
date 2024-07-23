const assert = require("assert");
const sinon = require("sinon");
const controller = require("../../../api/controllers/have-forms/create/create-have-forms-controller");

// Definindo um objeto de formulário para ser usado nos testes
const FORM = {
    id_users: 123,
    time_with_dog: "2",
    first_dog: "Sim",
    other_pets: "Não",
    dogs_age: "4",
    breed: "Golden Retriever",
    where_get: "Petshop",
    paid_to_acquire: "Sim",
    age_reached: "3 a 6 meses",
    dog_personality: "Brincalhão e carinhoso",
    why_do_have: "Gosto de cachorros",
    others: "Nenhum",
    characteristics: "Peludo e gordinho",
    decision: "Minha mae que quis adotar",
    couldnt_keep: "Nao",
    how_vet: "2 a 3 vezes por ano",
    say_about: "Muito divertido e carinhoso",
    user: "1",
};

// Descreve a suite de testes para o controlador CreateWantFormsController
describe("CreateHaveFormsController", () => {
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
    assert.strictEqual(createHelperStub.calledWith({ model: 'have_forms', data: inputs }), true);
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
    assert.strictEqual(createHelperStub.calledWith({ model: 'have_forms', data: inputs }), true);
    // Verifica se a saída de sucesso não foi chamada
    assert.strictEqual(exits.success.called, false);
    // Verifica se a saída de erro foi chamada uma vez com a mensagem de erro correta
    assert.strictEqual(exits.error.calledOnce, true);
    assert.strictEqual(exits.error.calledWith({ error: errorMessage }), true);
  });

});
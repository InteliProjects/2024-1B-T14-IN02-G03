const assert = require("assert");
const sinon = require("sinon");
const controller = require("../../../api/controllers/had-forms/create/create-had-forms-controller");

// Definindo um objeto de formulário para ser usado nos testes
const FORM = {
  dogs_name: "Pipoca",
  dogs_personality: "É um cachorro muito brincalhão que adora fazer bagunça",
  time_with_you: "4",
    first_dog: "Sim",
    dog_pets: "2",
    cat_pets: "1",
    pet_age: "2 anos ou mais",
    castrated: "Sim",
    breed: "Vira-lata",
    where_came_from: "Ganhei de presente de aniversário",
    pet_price: "500 a 1000",
    why: "Ele me escolheu",
    characteristics: "Ele era muito fofo e brincalhão",
    name_decision: "Você",
    most_like: "Ele era carinhoso",
    dont_like: "Ele era muito bagunceiro",
    veterinary: "Dr. José da Silva",
    stopped_living: "Sim",
    belonged_to_you: "Não",
    user: "1",
    id_users: 123
};

// Descreve a suite de testes para o controlador CreateWantFormsController
describe("CreateHadFormsController", () => {
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
    assert.strictEqual(createHelperStub.calledWith({ model: 'had_forms', data: inputs }), true);
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
    assert.strictEqual(createHelperStub.calledWith({ model: 'had_forms', data: inputs }), true);
    // Verifica se a saída de sucesso não foi chamada
    assert.strictEqual(exits.success.called, false);
    // Verifica se a saída de erro foi chamada uma vez com a mensagem de erro correta
    assert.strictEqual(exits.error.calledOnce, true);
    assert.strictEqual(exits.error.calledWith({ error: errorMessage }), true);
  });

});
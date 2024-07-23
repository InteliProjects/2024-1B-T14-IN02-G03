const assert = require("assert");
const sinon = require("sinon");
const controller = require("../../../api/controllers/dog-forms-want/create/create-dog-forms-want-controller");

const FORM = {
    dog_size: "Grande",
    coat: "Curto",
    color_preference: "Caramelo",
    gender: "Macho",
    age: 1,
    breed: "Golden Retriever",
    owner: "1",
};

describe("CreateDogDormsWantController", () => {
    let createHelperStub;

    beforeEach(() => {
        createHelperStub = sinon.stub();
        sails.helpers = {
            create: {
                with: createHelperStub
            }
        };
    });

    afterEach(() => {
        sinon.restore();
    });

    it("Deve criar um novo formulário com sucesso", async () => {
        createHelperStub.resolves(FORM);
        const inputs = FORM;
        const exits = {
            success: sinon.stub().returns(FORM),
            error: sinon.stub(),
        };

        await controller.fn(inputs, exits);

        assert.strictEqual(createHelperStub.calledOnce, true);
        assert.strictEqual(createHelperStub.calledWith({ model: 'dog_forms_want', data: inputs }), true);
        assert.strictEqual(exits.success.calledOnce, true);
        assert.strictEqual(exits.success.calledWith(FORM), true);
        assert.strictEqual(exits.error.called, false);
    });

    it("Deve retornar um erro se a criação do formulário falhar", async () => {
        const errorMessage = "Erro ao criar formulário";
        createHelperStub.rejects(new Error(errorMessage));
        const inputs = FORM;
        const exits = {
            success: sinon.stub(),
            error: sinon.stub().returns({ error: errorMessage }),
        };

        await controller.fn(inputs, exits);

        assert.strictEqual(createHelperStub.calledOnce, true);
        assert.strictEqual(createHelperStub.calledWith({ model: 'dog_forms_want', data: inputs }), true);
        assert.strictEqual(exits.success.called, false);
        assert.strictEqual(exits.error.calledOnce, true);
        assert.strictEqual(exits.error.calledWith({ error: errorMessage }), true);
    });

    it("Deve retornar um erro inválido se a criação do formulário falhar com 'invalid'", async () => {
        const errorMessage = "Campos inválidos";
        const error = new Error(errorMessage);
        error.exit = 'invalid';
        createHelperStub.rejects(error);
        const inputs = FORM;
        const exits = {
            success: sinon.stub(),
            invalid: sinon.stub().returns({ error: errorMessage }),
            error: sinon.stub(),
        };

        await controller.fn(inputs, exits);

        assert.strictEqual(createHelperStub.calledOnce, true);
        assert.strictEqual(createHelperStub.calledWith({ model: 'dog_forms_want', data: inputs }), true);
        assert.strictEqual(exits.success.called, false);
        assert.strictEqual(exits.invalid.calledOnce, true);
        assert.strictEqual(exits.invalid.calledWith({ error: errorMessage }), true);
        assert.strictEqual(exits.error.called, false);
    });
});

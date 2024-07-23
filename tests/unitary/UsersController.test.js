// test/unit/UserController.test.js
// assert compara resultados
const assert = require('assert');
const controller = require('../../api/controllers/UserController');
const sinon = require ("sinon");

//mockar = criar resposta falsa, imitar uma resposta que deveria ter
const { mockAsync, RESPONSE, USER, FILE } = require('../util/');

describe('UserController', () => {
    it('Deve criar usuário com sucesso', async () => {
        // ... (seu teste completo)
    });

    it('Deve logar usuário com sucesso', async () => {
        // ... (seu teste completo)
    });
});
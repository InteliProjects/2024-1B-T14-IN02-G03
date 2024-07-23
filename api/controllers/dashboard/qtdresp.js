const Had_forms = require("../../models/Had_forms");

module.exports = {
  fn: async function(req, res){
    try {
      const hadDogForms = 12;

      return res.view('pages/other/dashboard', {
        hadDogForms: hadDogForms,
      });
    } catch(e) {
      return e;
    }
  }
};

module.exports = {
    // Nome da tabela no banco de dados
    tableName: "QtdRespostas",
    // Definição dos atributos do modelo
    attributes: {

      QtdResp: {
        JaTive: 14,
        QueroTer:20,
        Null:12,
        NaoTenho: 7

      },
  }
};
  
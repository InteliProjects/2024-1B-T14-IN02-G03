const { requiresAuth } = require('express-openid-connect');
const { auth } = require('express-openid-connect');

module.exports.routes = {
  // Rotas das Views
  "/": { view: "pages/homepage" },

  // Rotas dos Formulários
  "/generalforms": { view: "pages/forms/forms-general", policy: 'isAuthenticated' },
  "/submit-have-forms": { view: "pages/forms/forms-have", policy: 'isAuthenticated' },
  "/submit-null-forms": { view: "pages/forms/forms-null", policy: 'isAuthenticated' },
  "/submit-want-forms": { view: "pages/forms/forms-want", policy: 'isAuthenticated' },
  "/submit-had-forms": { view: "pages/forms/forms-had", policy: 'isAuthenticated' },
  "/tela-de-conclusao": { view: "pages/others/forms-respondido", policy: 'isAuthenticated' },
  "/teste": {view: "pages/doc", policy: 'isAuthenticated' },

  // Rotas de Usuário/Administrador
  "/dashboard": { view: "pages/admin/dashboard", policy: 'isAuthenticated' },
  'GET /admin/form-responses': 'DashboardController.getFormResponses',

  // Endpoints para o modelo Users_forms
  "POST /users-forms": { action: "user-forms/create/create-user-forms-controller", policy: 'isAuthenticated' },
  "GET /users-forms": { action: "user-forms/read/read-user-forms-controller", policy: 'isAuthenticated' },
  "GET /users-forms/:id": { action: "user-forms/read/read-user-forms-controller", policy: 'isAuthenticated' },

  // Endpoints para o modelo General_forms
  "POST /general-forms": { action: "general-forms/create/create-general-forms-controller", policy: 'isAuthenticated' },
  "GET /general-forms": { action: "general-forms/read/read-general-forms-controller", policy: 'isAuthenticated' },
  "GET /general-forms/:id": { action: "general-forms/read/read-general-forms-controller", policy: 'isAuthenticated' },

  // Endpoints para o modelo Have_forms
  "POST /have-forms": { action: "have-forms/create/create-have-forms-controller", policy: 'isAuthenticated' },
  "GET /have-forms": { action: "have-forms/read/read-have-forms-controller", policy: 'isAuthenticated' },
  "GET /have-forms/:id": { action: "have-forms/read/read-have-forms-controller", policy: 'isAuthenticated' },

  // Endpoints para o modelo Had_forms
  "POST /had-forms": { action: "had-forms/create/create-had-forms-controller", policy: 'isAuthenticated' },
  "GET /had-forms": { action: "had-forms/read/read-had-forms-controller", policy: 'isAuthenticated' },
  "GET /had-forms/:id": { action: "had-forms/read/read-had-forms-controller", policy: 'isAuthenticated' },

  // Endpoints para o modelo Want_forms
  "POST /want-forms": { action: "want-forms/create/create-want-forms-controller", policy: 'isAuthenticated' },
  "GET /want-forms": { action: "want-forms/read/read-want-forms-controller", policy: 'isAuthenticated' },
  "GET /want-forms/:id": { action: "want-forms/read/read-want-forms-controller", policy: 'isAuthenticated' },

  // Endpoints para o modelo Null_forms
  "POST /null-forms": { action: "null-forms/create/create-null-forms-controller", policy: 'isAuthenticated' },
  "GET /null-forms": { action: "null-forms/read/read-null-forms-controller", policy: 'isAuthenticated' },
  "GET /null-forms/:id": { action: "null-forms/read/read-null-forms-controller", policy: 'isAuthenticated' },

  // Endpoints para o modelo Dog_forms_have
  "POST /dog-forms-have": { action: "dog-forms-have/create/create-dog-forms-have-controller", policy: 'isAuthenticated' },
  "GET /dog-forms-have": { action: "dog-forms-have/read/read-dog-forms-have-controller", policy: 'isAuthenticated' },
  "GET /dog-forms-have/:id": { action: "dog-forms-have/read/read-dog-forms-have-controller", policy: 'isAuthenticated' },

  // Endpoints para o modelo Dog_forms_want
  "POST /dog-forms-want": { action: "dog-forms-want/create/create-dog-forms-want-controller", policy: 'isAuthenticated' },
  "GET /dog-forms-want": { action: "dog-forms-want/read/read-dog-forms-want-controller", policy: 'isAuthenticated' },
  "GET /dog-forms-want/:id": { action: "dog-forms-want/read/read-dog-forms-want-controller", policy: 'isAuthenticated' },

  // Endpoints para o modelo All_Dog
  "POST /all-dogs": { action: "all-dog/create/create-all-dogs-controller", policy: 'isAuthenticated' },
  "GET /all-dogs": { action: "all-dog/read/read-all-dogs-controller", policy: 'isAuthenticated' },
  "GET /all-dogs/:id": { action: "all-dog/read/read-all-dogs-controller", policy: 'isAuthenticated' },


  '/callback': '/',

  //'/profile':   'AuthController.profile',

  //Reports:
  "GET /QtdResp": {view: "pages/others/dashboard", policy: 'isAuthenticated'},
  

};

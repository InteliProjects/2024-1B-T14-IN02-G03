module.exports = async function(req, res, proceed) {
  if (req.oidc && req.oidc.isAuthenticated()) {
    return proceed(); // O usuário está autenticado, continue
  }
  // O usuário não está autenticado, redirecionar ou responder com um erro
  return res.redirect('/login');
};
  

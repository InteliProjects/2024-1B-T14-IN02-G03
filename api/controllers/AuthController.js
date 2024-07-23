module.exports = {
  welcome: async function (req, res) {
    return res.json({ message: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out' });
  },

  profile: async function (req, res) {
    return res.json(req.oidc.user);
  },
};

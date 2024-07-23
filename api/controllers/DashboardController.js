// api/controllers/AdminController.js
module.exports = {
  getFormResponses: async function (req, res) {
    try {
      const haveCount = await Have_forms.count();
      const hadCount = await Had_forms.count();
      const wantCount = await Want_forms.count();
      const nullCount = await Null_forms.count()

      return res.json({
        have: haveCount,
        had: hadCount,
        want: wantCount,
        null: nullCount
      });
    } catch (error) {
      return res.serverError(error);
    }
  },
};

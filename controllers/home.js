module.exports = {
  home,
};

async function home(req, res) {
  res.render("home", {
    title: "Your Projects",
  });
}

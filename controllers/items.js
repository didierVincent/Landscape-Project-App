const Item = require("../models/Item");
const Project = require("../models/Project");
const User = require("../models/User");

module.exports = {
  index,
  add,
};

async function index(req, res) {
  const user = await User.findById(req.user.id);
  const projectID = req.params.id;
  const project = user.projects.find((p) => p._id == projectID);
  const projects = await Project.find({});
  console.log(
    "PROJECTS LOG BELOW --- PROJECTS LOG BELOW --- PROJECTS LOG BELOW"
  );
  console.log(projects);
  const items = await Item.find({});
  res.render("project-builder/add-items", {
    title: "Items Page",
    user,
    projects,
    items,
    projectID,
  });
}

async function add(req, res) {
  try {
    const user = await User.findById(req.user.id);
    const projectID = req.params.id;
    const project = user.projects.find((p) => p._id == projectID);
    console.log("XOXOXOXOXOXOXOXOXOXOXOX");
    console.log(project);
    const newItem = new Item(req.body);
    const addPrice = req.body.Price;
    project.Total_Project_Cost.push(addPrice);
    project.Items.push(newItem);
    await user.save();

    res.redirect(`/your-projects/project-builder/${projectID}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("index", { title: "Home", errorMsg: err.message });
  }
}

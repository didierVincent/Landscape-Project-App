const Item = require("../models/Item");
const Project = require("../models/Project");
const User = require("../models/User");

module.exports = {
  index,
  add,
  deleteItem,
};

async function index(req, res) {
  const user = await User.findById(req.user.id);
  const projectID = req.params.projectID;
  const project = user.projects.find((p) => p._id == projectID);
  let TPC = project.Total_Project_Cost.reduce((a, b) => a + b, 0);
  const projects = await Project.find({});
  console.log(
    "PROJECTS LOG BELOW --- PROJECTS LOG BELOW --- PROJECTS LOG BELOW"
  );
  console.log(projects);
  const items = await Item.find({});
  res.render("project-builder/add-items", {
    title: "Items Page",
    user,
    project,
    items,
    projectID,
    TPC,
  });
}

async function add(req, res) {
  try {
    const user = await User.findById(req.user.id);
    const projectID = req.params.projectID;
    const project = user.projects.find((p) => p._id == projectID);
    console.log("XOXOXOXOXOXOXOXOXOXOXOX");
    console.log(project);
    const newItem = new Item(req.body);
    const addPrice = req.body.Price;
    project.Total_Project_Cost.push(addPrice);
    project.Items.push(newItem);
    await user.save();

    res.redirect(`/your-projects/${user._id}/project-builder/${projectID}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("index", { title: "Home", errorMsg: err.message });
  }
}

async function deleteItem(req, res) {
  try {
    const user = await User.findOne({ _id: req.user.id });
    let item = user.projects
      .id(req.params.projectID)
      .Items.id(req.params.itemID);
    let itemCost = item.Price;
    user.projects.id(req.params.projectID).Items.remove(req.params.itemID);
    let itemIdx = user.projects
      .id(req.params.projectID)
      .Total_Project_Cost.indexOf(itemCost);
    user.projects
      .id(req.params.projectID)
      .Total_Project_Cost.splice(itemIdx, 1);
    await user.save();

    res.redirect(
      `/your-projects/${user._id}/project-builder/${req.params.projectID}`
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
}

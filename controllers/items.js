const Item = require("../models/Item");
const Project = require("../models/Project");
const User = require("../models/User");

module.exports = {
  index,
  add,
  deleteItem,
};

async function index(req, res) {
  try {
    const user = await User.findById(req.user.id);
    const projectID = req.params.projectID;
    const project = user.projects.find((p) => p._id == projectID);
    let TPC = project.Total_Project_Cost.reduce((a, b) => a + b, 0);
    const projects = await Project.find({});
    const items = await Item.find({});
    res.render("project-builder/add-items", {
      title: "Items Page",
      user,
      project,
      items,
      projectID,
      TPC,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function add(req, res) {
  try {
    // locate current user and current project
    const user = await User.findById(req.user.id);
    const projectID = req.params.projectID;
    const project = user.projects.find((p) => p._id == projectID);
    // create new Item from form inputs, then add to user's current project and save
    const newItem = new Item(req.body);
    
    project.Items.push(newItem);
    // add price to TPC for sum
    const addPrice = req.body.Price;
    project.Total_Project_Cost.push(addPrice);

    await user.save();

    res.redirect(`/your-projects/${user._id}/project-builder/${projectID}`);
  } catch (err) {
    res.status(500).send(err.message);
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

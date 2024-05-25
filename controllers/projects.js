const Item = require("../models/Item");
const Project = require("../models/Project");
const User = require("../models/User");

module.exports = {
  showProjects,
  createNewProject,
  showNewProject,
  deleteProject,
  updateProjectName,
};

async function showProjects(req, res) {
  res.render("projects/index", {
    title: "Your Projects",
  });
}

async function showNewProject(req, res) {
  const user = await User.findById(req.user.id);
  const projectID = req.params.projectID;
  let project = user.projects.find((p) => p._id == projectID);
  let TPC = project.Total_Project_Cost.reduce((a, b) => a + b, 0);

  res.render("project-builder/project-builder", {
    title: "Project Builder",
    user,
    projectID,
    project,
    TPC,
  });
}

async function updateProjectName(req, res) {
  try {
    const user = await User.findOne({ _id: req.user.id });
    user.projects.id(req.params.projectID).Name = req.body.Name;
    await user.save();
    res.redirect(
      `/your-projects/${user._id}/project-builder/${req.params.projectID}`
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function createNewProject(req, res) {
  try {
    const newProject = new Project(req.body);
    const user = await User.findById(req.user.id);
    user.projects.push(newProject);
    await user.save();
    res.redirect(`/your-projects/${user._id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
async function deleteProject(req, res) {
  try {
    const user = await User.findOne({ _id: req.user.id });
    user.projects.remove(req.params.projectID);
    await user.save();
    res.redirect(`/your-projects/${user._id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const Item = require("../models/Item");
const Project = require("../models/Project");
const User = require("../models/User");

module.exports = {
  index,
  create,
  showNewProject,
  // delete: deleteProject,
};

async function index(req, res) {
  const user = await User.findById(req.user.id);
  const projects = await Project.find({});
  // const projectID = req.params.id; // can't use... no params in route
  // const project = user.projects.find((p) => p._id == projectID);
  // const TPC = project.Total_Project_Cost.reduce((a, b) => a + b, 0);
  console.log(".INDEX LOG");
  console.log(user.projects);
  res.render("projects/index", {
    title: "Your Projects",
    // user,
    // projectID,
    // project,
    // TPC,
  });
}

async function showNewProject(req, res) {
  const user = await User.findById(req.user.id);
  const projectID = req.params.id;
  const project = user.projects.find((p) => p._id == projectID);
  console.log("======= req.params.id LOG =======");
  console.log(projectID);
  console.log("======= showNewProject LOG =======");
  const TPC = project.Total_Project_Cost.reduce((a, b) => a + b, 0);

  res.render("project-builder/project-builder", {
    title: "Project Builder",
    user,
    projectID,
    project,
    TPC,
  });
}

async function create(req, res) {
  try {
    const newProject = new Project(req.body);
    // console.log("OXOXOXOXOXOX new project below OXOXOXOXOXOX");
    // console.log(newProject);
    const user = await User.findById(req.user.id);
    // console.log("OXOXOXOXOXOX user log below OXOXOXOXOXOX");
    // console.log(user);
    user.projects.push(newProject);
    await user.save();
    res.redirect("/your-projects");
    // console.log("OXOXOXOXOXOX NEW user log below OXOXOXOXOXOX");
    // console.log(user);
  } catch (err) {
    console.log(err);
    res.render("index", { title: "Home", errorMsg: err.message });
  }
}

// old code: was to create new project with a POST method but not inside user schema

// async function create(req, res) {
//   try {
//     const newProject = new Project(req.body);
//     await newProject.save().then((newProject) => {
//       console.log(newProject);
//     });
//     res.redirect(`/your-projects/project-builder/${newProject._id}`);
//   } catch (err) {
//     // Typically some sort of validation error
//     console.log(err);
//     res.render("/your-projects", { errorMsg: err.message });
//   }
// }

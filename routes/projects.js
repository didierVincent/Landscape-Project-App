var express = require("express");
var router = express.Router();
const projectsCtrl = require("../controllers/projects");
const itemsCtrl = require("../controllers/items");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /your-projects
router.get("/:userID", ensureLoggedIn, projectsCtrl.showProjects);

// POST /your-projects
router.post("/:userID/", ensureLoggedIn, projectsCtrl.createNewProject);

router.get(
  "/:userID/project-builder/:projectID",
  ensureLoggedIn,
  projectsCtrl.showNewProject
);

router.get(
  "/:userID/project-builder/:projectID/add-items",
  ensureLoggedIn,
  itemsCtrl.index
);

router.post(
  "/:userID/project-builder/:projectID/add-items",
  ensureLoggedIn,
  itemsCtrl.add
);

router.put(
  "/:userID/project-builder/:projectID",
  ensureLoggedIn,
  projectsCtrl.updateProjectName
);
router.delete(
  "/:userID/project-builder/:projectID",
  ensureLoggedIn,
  projectsCtrl.deleteProject
);

router.delete(
  "/:userID/project-builder/:projectID/items/:itemID",
  ensureLoggedIn,
  itemsCtrl.deleteItem
);

module.exports = router;

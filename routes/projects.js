var express = require("express");
var router = express.Router();
const projectsCtrl = require("../controllers/projects");
const itemsCtrl = require("../controllers/items");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /your-projects
router.get("/", ensureLoggedIn, projectsCtrl.index);

// POST /your-projects
router.post("/project-builder/:id", ensureLoggedIn, projectsCtrl.create);

router.get("/project-builder/:id", ensureLoggedIn, projectsCtrl.showNewProject);

router.get("/project-builder/:id/add-items", ensureLoggedIn, itemsCtrl.index);

router.post("/project-builder/:id/add-items", ensureLoggedIn, itemsCtrl.add);

module.exports = router;

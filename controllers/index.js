const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const newRegForm = require('./regForm');
const newUserReg = require('./newUser');






router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use('/register', newRegForm);
router.use('/register/login', newUserReg);

module.exports = router;
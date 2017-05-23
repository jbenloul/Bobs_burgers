var express = require("express");
var router = express.Router();

var burgers = require("../models/burger.js");


router.get("/", function(req, res) {
    burgers.all(function(data) {
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render('index', burgerObj)
    })
});

router.post("/", function(req, res) {
  burgers.create([
   "burger_name", "burger_descript"
  ], [
    req.body.name, req.body.description
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    eaten: req.body.eaten
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;

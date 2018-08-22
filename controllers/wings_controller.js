var express = require("express");
var wing = require("../models/wing");

var router = express.Router();

router.get("/", function(req, res){
    wing.all(function(data){
        var hbsObject = {
            wings: data
        };

        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("api/wings", function(req,res){
    wing.create([
        "name"
    ], [
        req.body.name, 
    ], function(result) {
        res.json({id: result.insertId})
    });
});

router.put("api/cats/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    wing.update({
        eaten: req.body.eaten
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
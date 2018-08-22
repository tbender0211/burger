var orm = require("../config/orm");

var wing = {
    
    all: function(cb) {
        orm.all("wings", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("wings", cols, vals, function(res){
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("wings", objColVals, condition, function(res){
            cb(res);
        })
    }
};

module.exports = wing;
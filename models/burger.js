const orm = require("../config/orm");

let burger = {
    
    selectAll: function(table, cb) {
        orm.selectAll(table, function(res) {
            cb(res);
        });
    },
    
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        })
    },
   
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;
};

module.exports = burger;
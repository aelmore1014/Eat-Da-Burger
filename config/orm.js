var connection = require ('./connection.js');
//This generates SQL syntax
function printQuestionMarks(num) {
var arr = [];

 for (var i = 0; i < num; i++) {
arr.push("?");
}

return arr.toString();
}


//This also generates SQL syntax 
function objToSql(ob) {
var arr = [];

for (var key in ob) {
arr.push(key + "=" + ob[key]);
}

return arr.toString();
}

//This creates an ORM object
var orm = {
	// This will return all rows from a certain table
	selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
    if (err) {
    throw err;
    }
cb(result);
    });
},


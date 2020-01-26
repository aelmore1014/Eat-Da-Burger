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


//this will insert one table entry
insertOne: function(table, cols, vals, cb) {
  
    var queryString = "INSERT INTO " + table;

queryString += " (";  
queryString += cols.toString();
queryString += ") ";
queryString += "VALUES (";
queryString += printQuestionMarks(vals.length);
queryString += ") ";

connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }

      
    cb(result);
    });
},

//This allows you to update a single table value
updateOne: function(table, objColVals, condition, cb) {
    
    var queryString = "UPDATE " + table;

queryString += " SET ";
queryString += objToSql(objColVals);
queryString += " WHERE ";
queryString += condition;

connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }


cb(result);
    });
}
};
module.exports = orm;
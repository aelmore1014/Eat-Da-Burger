const connection = require("../config/connection");


function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}


function objToSql(ob) {
    var arr = [];
  
    
    for (var key in ob) {
      var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
       
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        
        arr.push(key + "=" + value);
      }
    }
   
    return arr.toString();
  }

let orm = {
  
    selectAll: function(table, cb) {
        let qS = "SELECT * FROM " + table + ";";
        connection.query(qS, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    
    insertOne: function(table, cols, vals, cb) {
   
        let qS = "INSERT INTO " + table;
        qS += " (";
        qS += cols.toString();
        qS += ") ";
        qS += "VALUES (";
        qS += printQuestionMarks(vals.length);
        qS += ") ";
        console.log('input: ', vals)
        connection.query(qS, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    
    updateOne: function(table, objColVals, condition, cb) {
        let qS = "UPDATE burgers SET ";
        qS += objToSql(objColVals);
        qS += " WHERE ";
        qS += condition;

        console.log(qS);

        connection.query(qS, function(err, result) {
            if (err) throw err;
            cb(result);
        })

    }
}

module.exports = orm;
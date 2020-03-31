
DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;
USE burgers;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
    devoured BOOLEAN,
	PRIMARY KEY (id)
);

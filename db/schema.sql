CREATE DATABASE bobs_burgers;
USE bobs_burgers;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(64) NOT NULL,
	burger_descript varchar(128),
	eaten BOOLEAN DEFAULT false,
	tima_date TIMESTAMP,
	PRIMARY KEY (id)
);
 
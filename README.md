# find-me
The application is made using node js and mysql.
The node js dependencies are express, ejs, body-parser and mysql.
For the database:-
  create database find_me;
  use find_me;
  create table users(
	  id int NOT NULL AUTO_INCREMENT,
    username varchar(200),
    email varchar(45) NOT NULL,
    password varchar(45) NOT NULL,
    PRIMARY KEY (id)  
  );

The first puzzle will be solved when you fill the correct pin which is visible when you select the text "Read between these line".
The answer to second puzzle is "The quick brown fox jumps over the lazy dog".

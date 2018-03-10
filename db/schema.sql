-- Create Database --
create database tacos_db;
-- Use Database --
use tacos_db;

-- Create Table --
create table tacos (
  id int(3) not null auto_increment,
  taco_name varchar(100),
  gromphed boolean,
  primary key (id)
);

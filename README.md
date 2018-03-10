# Taco Tuesday
A NodeJS / ExpressJS / HandlebarsJS / MySQL / ORM Application

## Description

Taco Tuesday is a simple Node/Express/Handlebars/MySQL/ORM application with a taco theme.  The application utilizes a database of tacos (taco name and gromphed (eaten) status) and renders a single page view displaying each taco's status (on the menu or gromphed).  Users are allowed to add tacos (insert into database) or change the gromphed status of any taco by clicking the appropriate button.  Clicking buttons (add taco or change gromph status) submits AJAX requests to the database via a model/controller implementation via the Node server and Express application.  Views are generated using Handlebars.

## Architecture

![Architecture](https://github.com/awyand/taco-tuesday/blob/master/taco-tuesday-arch.png)

## Packages
This application uses the following NPM pakages:
* [mysql](https://www.npmjs.com/package/mysql)
* [express](https://www.npmjs.com/package/express)
* [handlebars](https://www.npmjs.com/package/express-handlebars)
* [body-parser](https://www.npmjs.com/package/body-parser)

# **Groupomania**

![!badge-Groupomania](https://badgen.net/badge/Goupomania/News-Feed/orange) 
![!OpenClassRooms](https://badgen.net/badge/Projet_7/OC/purple)

Est une entreprise spécialisée dans la grande distribution, est en pleine expansion et compte actuellementplus de 600 collaborateurs.


1️⃣ `CONTEXTE`

* Suite à un un ralentissement de la productivité et une baisse de la motivation et de l’implication des employés. 

* La direction a réagi et a mis en place et a optée pour des mesures d’
amélioration de la communication entre collègues, via un nouveau projet numérique. 

* La création d’un réseau social interne, moderne et ludique, qui permettra aux employés de se connaître dans un cadre plus informel.

2️⃣ `PERIMÈTRE`

**Les exigences émises par le comité de pilotage sont les suivantes** :

* la présentation des fonctionnalités doit être simple.

* la création d’un compte doit être simple et possible depuis un téléphone mobile.

* le profil doit contenir très peu d’informations pour que sa complétion soit rapide.

* la suppression du compte doit être possible.

* l’accès à un forum où les salariés publient des contenus multimédias doit être présent.

* l’accès à un forum où les salariés publient des textes doit être présent.

* les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés;
* le ou la chargé-e de communication Groupomania doit pouvoir modérer les interactions entre
employés.

* la chargé-e de communication **Groupomania** doit pouvoir afficher les dernières **messages** des salariés.

---

## **Front-end**

Build with: 

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?-style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?-style=for-the-badge&logo=bootstrap&logoColor=white) ![SASS](https://img.shields.io/badge/Sass-hotpink.svg?-style=for-the-badge&logo=SASS&logoColor=white)

---
## **S E T U P**

1️⃣ `Go to the project`

in your terminal enter :
```node
cd groupomania front
```

2️⃣`Installation of the dependencies`

Installing the *dependencies* needed to run the project : 🏃‍♂️

```node
npm install
```

3️⃣ `Start the front`

```node
npm run serve
```

Once this command is launched the server 
will be available at :

http://localhost:8080 📬

___

# **Back-end**  

Build with:  

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?-style=for-the-badge&logo=mysql&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?-style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?-style=for-the-badge&logo=node.js&logoColor=white)  ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?-style=for-the-badge&logo=Sequelize&logoColor=white)   ![JWT](https://img.shields.io/badge/JWT-black?-style=for-the-badge&logo=JSON%20web%20tokens)

---
## **S E T U P**

1️⃣ `Backend launch & its dependencies`  
To launch the backend you must go via your terminal in the folder and installing the *dependencies* needed to run the project : 🏃‍♂️

```node
cd groupomania back
npm install
```

Inside the project you will find a sql file containing the database.

```node
npm run start
```


2️⃣ `Database`  
The **database** of this project has been realized with **sequelize**.
### 🚨 what is sequelize ?

Sequelize 🧬
-
*Sequelize* is a promise-based Node.js ORM for 

- **Postgres**, 
- **MySQL**, 
- **MariaDB**, 
- **SQLite** and 
- **Microsoft SQL Server**. 

It features solid transaction support, relations, eager and lazy loading, read replication and more.

Sequelize follows Semantic Versioning and supports *Node v10* and above.

sequelize-cli
-

*sequelize-cli* is is a command line interface for *sequelize*
it allows versioning of your database by keeping track of changes and evolution of your database throughout your project.
sequelize-cli is used for data migration and database bootstrapping

To begin it is necessary to connect to **mysql** with your usual login and password.  
[For more Information 🤔](https://dev.mysql.com/doc/)

Then create your **database** called **groupomania** via mysql  with the commands :
```sql
CREATE DATABASE groupomania;
```
selected it with :
```sql
USE groupomania;
```

 Or on **phpmyadmin** by starting your server with **xampp** **lampp** **mampp**.

Be aware that it is also possible to create your database with `sequelize` from the terminal with the command :
```
npx sequelize-cli db:create groupomania
```

Then from the project terminal without the backend part run the command :
```sql
npx sequelize-cli init
```

This command creates 4 folders 🗃️

- **config** folder with the *config.json* file 
- **migrations** folder 
- **seeders** folder and 
- **models** folder containing an *index.js* file.


In the json file of the config folder created by the previous command, replace the default name of database 
```json
  "development": {
    "username": "root",
    "password": null,
"database": "database_dev",
  "host": "127.0.0.1",
    "dialect": "mysql"
  },
```
by :

```json
 "development": {
    "username": "root",
    "password": null,
    "database": "groupomania",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```
The default dialect is `mysql` you can change by the one you use.

You can enter a password, but **don't forget** to create an `.env` file in the root of the project to **protect your information**.

3️⃣ `Sequelize Commands`

when your database is created generate the models of the `users` and `posts` tables. 

the command used to generate the user table :

```sql
sequelize-cli model:generate --name User --attributes firstName:string, lastName:string, email:string, password:string,imageUrl:text,admin:boolean
```

commands used for the post table
```sql
sequelize-cli model:generate --name Post --attributes userId:integer,content:text,imageUrl:text
```

list of commands and description of sequelize actions to be performed
[🧬🧾 More information of sequelize documentation](https://devdocs.io/sequelize~6-manual/)

```
sequelize db:migrate                        Run pending migrations

sequelize db:migrate:undo                   Reverts a migration

sequelize db:migrate:undo:all               Revert all migrations ran

sequelize seed:generate                     Generates a new seed file

sequelize db:seed                           Run specified seeder

sequelize db:create                         Create database specified by configuration

sequelize db:drop                           Drop database specified by configuration

sequelize init                              Initializes project

sequelize init:migrations                   Initializes migrations

sequelize init:models                       Initializes models

sequelize init:seeders                      Initializes seeders

sequelize migration:generate                Generates a new migration file

sequelize migration:create                  Generates a new migration file

sequelize model:generate                    Generates a model and its migration

sequelize model:create                      Generates a model and its migration
```

4️⃣ `Database Export File ` 

Inside the project you will find a sql file containing the database.

Once imported you will be able to use all the features.

5️⃣ `Launch 🚀`

you can now start the project with the command :

```node
npm run start
```


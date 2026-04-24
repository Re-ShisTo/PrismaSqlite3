## Prisma installation with CLI

1. Initiate npm.

```bash
npm init -y
```

2. Install prisma.

```bash
npm i prisma --save-dev
```

3. Install prisma client.

```bash
npm i @prisma/client
```

4. Install prisma adapter for any SQL.

```bash
npm install @prisma/adapter-better-sqlite3 better-sqlite3
```

5. Initiate prisma with data source provider for any SQL.

```bash
npx prisma init --datasource-provider sqlite
```

6. If you dont provide any data source prvider then by default it set the provider as PostgreSQL.

```bash
npx prisma init
```

7. Initiate Migration. It is required to run each time for any structural change made in the prisma file.

```bash
npx prisma migrate dev --name init
```

8. Generate Connection for the first time or after any modification.

```bash
npx prisma generate
```

9. Import A reference of PrismaClient, BetterSqlite/<SQL you used>.

```js
const { PrismaClient } = require("@prisma/client");
const {
  prismaBetterSqlite,
  PrismaBetterSqlite3,
} = require("@prisma/adapter-better-sqlite3");
```

10. Load the <SQL> with the path url in adapter and enclosure the dapter in PrismaClient.

```js
const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });
```

11. Before running any function in .js file check if there is a output path for the generated client in schema.prisma fiel. If it's there then delete it. Also check if the privider has "prisma-client-js".
```js
generator client {
  provider = "prisma-client-js"
}
```

12. Then run:

```bash
npx prisma generate
node index.js
```

13. `Precaution` check if you called the main() function in your .js file.

---

## Migration of program from SQLite to mySQL

1. Create a brach with git.

```bash
git checkout -b mySQL
```

2. Connectto to mySQL.

```bash
mysql -u root -p -h 127.0.0.1
```

3. Create the database.

```bash
create database prisma2;
```

4. Change database_url in .env file

```js
DATABASE_URL = "mysql://<user>:<passowrd>@localhost:<port>/<name>";
```

5. Now install mysql adapter MariaDB in prisma.

```bash
npm install @prisma/adapter-mariadb mysql2
```

6. Delete the whole migrations folder and change the database db provider to "mysql". Then run prisma migrate for new migration changes.

```bash
npx prisma migrate dev --name switch_to_mysql
```

7. Load the PrismaMariadb from mariaDB adapter and define new url for the adapter.

```js
const { PrismaMariaDB } = require("@prisma/adapter-mariadb");
const adapter = new PrismaMariaDB({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "#CP77#7053R#",
  database: "prisma2",
});
```

8. Finally generate prisma and run the js file.

```bash
npx prisma generate
node index.js
```

## Prisma installation with CLI

1. Initiate npm

```bash
npm init -y
```

2. Install prisma

```bash
npm i prisma --save-dev
```

3. Install prisma client

```bash
npm i @prisma/client
```

4. Install prisma adapter for any SQL

```bash
npm i @prisma/client-better-sqlite better-sqlite3
```

5. Initiate prisma with data source provider for any SQL

```bash
npx prisma init --datasource-provider sqlite
```

6. If you dont provide any data source prvider then by default it set the provider as PostgreSQL

```bash
npx prisma init
```

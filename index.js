const { PrismaClient } = require("@prisma/client");
const {
  prismaBetterSqlite,
  PrismaBetterSqlite3,
} = require("@prisma/adapter-better-sqlite3");

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
  } catch (error) {
    console.log(error.mesage(error) || error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

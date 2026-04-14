const { PrismaClient } = require("@prisma/client");
const {
  prismaBetterSqlite,
  PrismaBetterSqlite3,
} = require("@prisma/adapter-better-sqlite3");

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    const newContact = await prisma.contact.create({
      data: {
        name: "Joyeta Ranjan Chakma",
        email: "joyetaranjachakma@email.com",
        message: "I am a bharal",
      },
    });
    console.log("Contact Loaded", newContact);
  } catch (error) {
    console.log(error.message || error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

const { PrismaClient } = require("@prisma/client");
const {
  prismaBetterSqlite,
  PrismaBetterSqlite3,
} = require("@prisma/adapter-better-sqlite3");

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    // Insert 3 authors with 10 books total
    // const author1 = await prisma.author.create({
    //   data: {
    //     name: "J.K. Rowling",
    //     bio: "British author famous for the Harry Potter series",
    //     books: {
    //       create: [
    //         {
    //           title: "Harry Potter and the Philosopher's Stone",
    //           isbn: "9780747532699",
    //           publishedAt: new Date("1997-06-26"),
    //         },
    //         {
    //           title: "Harry Potter and the Chamber of Secrets",
    //           isbn: "9780747538493",
    //           publishedAt: new Date("1998-07-02"),
    //         },
    //         {
    //           title: "Harry Potter and the Prisoner of Azkaban",
    //           isbn: "9780747542155",
    //           publishedAt: new Date("1999-07-08"),
    //         },
    //       ],
    //     },
    //   },
    //   include: { books: true },
    // });
    // console.log("Author 1 created:", author1.name, "with", author1.books.length, "books");

    // const author2 = await prisma.author.create({
    //   data: {
    //     name: "George R.R. Martin",
    //     bio: "American novelist known for A Song of Ice and Fire series",
    //     books: {
    //       create: [
    //         {
    //           title: "A Game of Thrones",
    //           isbn: "9780553103540",
    //           publishedAt: new Date("1996-08-01"),
    //         },
    //         {
    //           title: "A Clash of Kings",
    //           isbn: "9780553108033",
    //           publishedAt: new Date("1998-11-10"),
    //         },
    //         {
    //           title: "A Storm of Swords",
    //           isbn: "9780553106633",
    //           publishedAt: new Date("2000-08-08"),
    //         },
    //         {
    //           title: "A Feast for Crows",
    //           isbn: "9780553801507",
    //           publishedAt: new Date("2005-10-17"),
    //         },
    //       ],
    //     },
    //   },
    //   include: { books: true },
    // });
    // console.log("Author 2 created:", author2.name, "with", author2.books.length, "books");

    // const author3 = await prisma.author.create({
    //   data: {
    //     name: "Stephen King",
    //     bio: "American horror fiction writer",
    //     books: {
    //       create: [
    //         {
    //           title: "The Shining",
    //           isbn: "9780385333312",
    //           publishedAt: new Date("1977-01-28"),
    //         },
    //         {
    //           title: "It",
    //           isbn: "9780451191144",
    //           publishedAt: new Date("1986-09-15"),
    //         },
    //         {
    //           title: "The Stand",
    //           isbn: "9780385333481",
    //           publishedAt: new Date("1978-10-03"),
    //         },
    //       ],
    //     },
    //   },
    //   include: { books: true },
    // });
    // console.log("Author 3 created:", author3.name, "with", author3.books.length, "books");

    // // Verify all data
    // const allAuthors = await prisma.author.findMany({
    //   include: { books: true },
    // });
    // console.log("\nAll authors and books:", allAuthors);

    //query all authors with their books
    const authorsWithBooks = await prisma.author.findMany({
      include: { books: true },
    });
    console.log("\nAuthors with their books:", authorsWithBooks);

    //update book 9 isbn
    const updatedBook = await prisma.book.update({
      where: { id: 9 },
      data: { isbn: "9780451191145" },
    });
    console.log("\nUpdated Book 9:", updatedBook);
  } catch (error) {
    console.log(error.message || error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

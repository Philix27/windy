import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

// if (process.env.NODE_ENV === "production") {
//   globalThis.prisma = client;
// }

export default prismaClient;
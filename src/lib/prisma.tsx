import { PrismaClient } from "@prisma/client";

// const globalForPrisma = global as unknown as {
//     prisma: PrismaClient | undefined;
// };

// export const prisma =
//     globalForPrisma.prisma ??
//     new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

declare global {
    // TypeScript global var
    var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma ?? new PrismaClient({
    log: ["query", "error"],
});

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
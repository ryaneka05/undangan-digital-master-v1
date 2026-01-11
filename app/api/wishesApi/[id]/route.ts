import { prisma } from "@/lib/prisma";


export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        const numericId = Number(id);

        if (isNaN(numericId)) {
            return Response.json(
                { error: "Invalid ID" },
                { status: 400 }
            );
        }

        const data = await prisma.wishesInvitationGuest.findUnique({
            where: {
                id: numericId,
            },
        });

        if (!data) {
            return Response.json(
                { error: "Data not found" },
                { status: 404 }
            );
        }

        return Response.json(data);
    } catch (err: any) {
        console.error("API ERROR:", err);
        return Response.json({ error: err.message ?? "Internal Server Error" }, { status: 500 });
    }
}
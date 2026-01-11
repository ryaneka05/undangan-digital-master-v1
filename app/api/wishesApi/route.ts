import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const data = await prisma.wishesInvitationGuest.findMany({
            orderBy: { createDateTime: "desc" },
        });
        return Response.json(data);
    } catch (err: any) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const body = await request.json();

    const data = await prisma.wishesInvitationGuest.create({
        data: {
            invitationId: body.invitationId,
            name: body.name,
            message: body.message,
            attending: body.attending,
        },
    });

    return Response.json(data);
}

export async function DELETE(request: Request) {
    const { id } = await request.json();

    const result = await prisma.wishesInvitationGuest.delete({
        where: { id: Number(id) },
    });

    return Response.json(result);
}
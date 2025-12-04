import { getInvitationConfig } from "@/lib/getInvitationConfig";
import UndanganClient from "@/app/page";

export default async function UndanganPage({ params, }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const config = getInvitationConfig(slug);

    return <UndanganClient config={config}/>;
}
import { getInvitationConfig } from "@/lib/getInvitationConfig";
import UndanganClient from "@/components/common/UndanganClient";

export const dynamic = "force-dynamic";

export default async function UndanganPage({ params, }: { params: Promise<{ slug: string }>; }) {
    const { slug } = await params;
    console.log('Cek ini slug',slug);
    const config = getInvitationConfig(slug);

    return <UndanganClient config={config}/>;
}
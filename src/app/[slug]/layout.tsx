import type { Metadata } from "next";
import { getInvitationConfig } from "@/lib/getInvitationConfig";
import defaultConfig from "@/config/default";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    // Ambil config sesuai slug (atau fallback ke default)
    const config = getInvitationConfig(slug) ?? defaultConfig;

    return {
        title: config.data.title,
        metadataBase: new URL('https://www.salawase-studio.com'),
        description: config.data.description,

        openGraph: {
            title: config.data.title,
            description: config.data.description,
            url: config.data.url,
            siteName: config.data.siteName,
            images: [
                {
                    url: config.data.ogImage,
                    width: 1200,
                    height: 630,
                    alt: config.data.title,
                },
            ],
            locale: "id_ID",
            type: "website",
        },

        icons: {
            icon: config.data.favicon,
        },
    };
}

export default function SlugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

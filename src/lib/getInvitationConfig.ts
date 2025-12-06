import defaultConfig from "@/config/default";
import { allInvitationConfigs } from "@/config";

export function getInvitationConfig(slug?: string) {
    console.log('🔍 [getInvitationConfig] Slug requested:', slug);
    console.log('📂 Available configs:', allInvitationConfigs.map(c => ({
        slug: c.slug,
        title: c.data?.title
    })));

    if (!slug) {
        console.log('⚠️ No slug provided, using default');
        return defaultConfig;
    }

    const found = allInvitationConfigs.find((item) => item.slug === slug);

    if (found) {
        console.log('✅ Config found for slug:', slug);
        return found;
    } else {
        console.log('❌ Config NOT found for slug:', slug);
        console.log('🔄 Falling back to default config');
        return defaultConfig;
    }
}
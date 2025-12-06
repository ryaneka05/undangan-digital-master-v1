// src/config/index.ts
import ibnuAnih from "./config-ibnu-anih"; // ✅ Ini bener

export const allInvitationConfigs = [
    ibnuAnih,
]

// src/lib/getInvitationConfig.ts
import defaultConfig from "@/config/default";
import { allInvitationConfigs } from "@/config"; // ✅ Pakai dari index.ts

export function getInvitationConfig(slug?: string) {
    console.log('🔍 Available configs:', allInvitationConfigs.map(c => c.slug));
    
    const found = allInvitationConfigs.find(
        (item) => item.slug === slug
    );

    return found ?? defaultConfig;
}
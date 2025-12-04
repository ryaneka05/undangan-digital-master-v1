import defaultConfig from "@/config/default";
import { allInvitationConfigs } from "@/config";
import { InvitationConfig } from "@/types/InvitationConfig";



export function getInvitationConfig(slug?: string): InvitationConfig {
    const found = allInvitationConfigs.find(
        (item) => item.slug === slug
    );

    return found ?? defaultConfig;
}

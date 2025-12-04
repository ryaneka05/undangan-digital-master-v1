"use client";

import { createContext, useContext } from "react";
import { InvitationConfig } from "@/types/InvitationConfig";
import defaultConfig from "@/config/default";

export const InvitationContext = createContext<InvitationConfig>(defaultConfig);

export function useInvitation() {
    const ctx = useContext(InvitationContext);

    if (!ctx) {
        throw new Error("useInvitation harus dipakai di dalam Provider");
    }

    return ctx;
}

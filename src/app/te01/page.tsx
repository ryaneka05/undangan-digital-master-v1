"use client";

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import Layout from "@/components/Layout";
import MainContent from '@/components/MainContent';

export default function UndanganPage() {    
    const [isInvitationOpen, setIsInvitationOpen] = useState(false);
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
            {!isInvitationOpen ? (
                <LandingPage onOpenInvitation={() => setIsInvitationOpen(true)}/>
            ) : (
                <Layout>
                    <MainContent/>
                </Layout>
            )}
        </AnimatePresence>
    );
}
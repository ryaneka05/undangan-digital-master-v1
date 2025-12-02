"use client";
export const dynamic = "force-dynamic";
import config from '@/config/config';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Playfair_Display } from "next/font/google";
import FlowerFrame from "@/components/common/FlowerFrame"

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"]
});

const LandingPage = ({ onOpenInvitation }: { onOpenInvitation: () => void }) => {
    /* Get Param Guest */
    const searchParams = useSearchParams();
    const getGuestName = decodeURIComponent(searchParams.get("to") || "Nama Tamu");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen relative overflow-hidden "
        >
            {/* Background */}
            <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#022545] bg-cover overflow-hidden">

                {/* Main Content with Decorative Background */}
                <div className="relative z-10 text-white min-h-screen flex flex-col items-center bg-[url('/assets/images/bg-blue.jpg')] bg-cover bg-center bg-no-repeat w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">

                    {/* Decorative Flower */}
                    <FlowerFrame />

                    {/* Space */}
                    <div className="flex flex-col gap-4 mb-40 sm:mb-35 items-center"></div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-md"
                    >
                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <p className="text-center tracking-[0.5em] uppercase font-serif text-sm sm:text-sm md:text-sm">
                                    The Wedding Of
                                </p>
                            </div>
                        </motion.div>

                        {/* Couple Names */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                        >
                            <div className="space-y-1 py-2 sm:py-3">
                                <h1 className={`${playfair.className} tracking-wide text-5xl md:text-6xl sm:text-4xl leading-tight`}>
                                    {config.data.groomNicknameName}
                                    <span className="mx-2 sm:mx-3">&</span>
                                    {config.data.brideNicknameName}
                                </h1>
                            </div>
                        </motion.div>

                        {/* Date */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col gap-4 mb-6 sm:mb-8 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-2 sm:py-3">
                                <p className="text-center tracking-wide font-serif text-lg sm:text-sm md:text-lg">
                                    {config.data.date}
                                </p>
                            </div>
                        </motion.div>

                        {/* Space */}
                        <div className="flex flex-col gap-4 mb-10 sm:mb-10 items-center"></div>

                        {/* Guest */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col gap-4 mb-4 sm:mb-4 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-2 sm:py-3">
                                <p className="text-center font-serif">
                                    Kepada Yth :
                                </p>
                                <p className="text-center font-serif">
                                    Bapak/Ibu/Saudara/i
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-2 sm:py-3">
                                <p className="text-center font-serif tracking-[0.3em] text-xl">
                                    {getGuestName}
                                </p>
                            </div>
                        </motion.div>

                        {/* Open Invitation Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.18 }}
                            className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onOpenInvitation}
                                className="group relative w-50 bg-[#e4c389] text-white px-2 py-3 sm:px-8 sm:py-3 rounded-full shadow-lg hover:bg-[#ebbd6d] transition-all duration-200">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <img
                                        src="/assets/icons/ic-open-envelope.png"
                                        alt="icon"
                                        className="w-5 h-5"
                                    />
                                    <span className="text-center font-serif text-sm">
                                        Buka Undangan
                                    </span>
                                </span>
                                <div className="absolute inset-0 from-[#ebbd6d] to-[#e4c389] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default LandingPage;
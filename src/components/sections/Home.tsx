import { motion } from 'framer-motion';
import { useInvitation } from "@/context/InvitationContext";
import { Playfair_Display } from "next/font/google";
import FlowerFrame from "@/components/common/FlowerFrame"

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"]
});


export default function Home() {
    const config = useInvitation();
    return (
        <section id="home">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen relative overflow-hidden "
            >
                <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
                    <div className="relative z-10 text-white min-h-screen flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">

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
                                className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
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
                                className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                            >
                                <div className="space-y-1 py-2 sm:py-3">
                                    <h1 className={`${playfair.className} tracking-wide text-5xl md:text-6xl sm:text-4xl leading-tight`}>
                                        {config.data.groomNicknameName}
                                        <span className="mx-2 sm:mx-3">&</span>
                                        {config.data.brideNicknameName}
                                    </h1>
                                </div>
                            </motion.div>
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

                        {/* Thanks */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col gap-4 mb-6 sm:mb-8 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-2 sm:py-3">
                                <p className="text-center font-serif">
                                    Terimakasih telah menjadi bagian di hari istimewa kami
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
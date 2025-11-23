import { motion } from "framer-motion";
import FlowerFrame from "@/components/common/FlowerFrame";
import config from '@/config/config';
import { Playfair_Display, Mea_Culpa } from "next/font/google";
import WishesFormCard from "../cards/WishesFormCard";
import WishesListCard from "../cards/WishesListCard"

export default function Wishes() {
    return (
        <section id="wishes">
            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="min-h-screen relative"
                >
                    <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
                        <div className="relative z-10 text-white min-h-screen flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">
                            {/* Decorative Flower */}
                            <FlowerFrame />

                            {/* Main Content */}
                            <div className="relative z-10 text-white flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4 mt-5 mb-5">
                                <div className="inline-flex flex-col items-center space-y-1 px-5 sm:px-6 py-0 sm:py-0 overflow-hidden">
                                    <WishesFormCard />
                                </div>
                                <div>
                                    <WishesListCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
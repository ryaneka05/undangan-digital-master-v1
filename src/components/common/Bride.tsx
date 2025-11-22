import { motion } from 'framer-motion';
import FlowerFrame from "@/components/common/FlowerFrame"
import config from '@/config/config';
import Image from 'next/image';
import { Playfair_Display } from "next/font/google";
import { Mea_Culpa } from "next/font/google";

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"]
});

const meaCulpa = Mea_Culpa({
    weight: "400",
    variable: "--font-mea-culpa",
    subsets: ["latin"],
});

export default function Bride() {
    return (
        <section id="couple">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen relative overflow-hidden "
            >
                <div className="relative flex flex-col items-center justify-center min-h-screen w-full">

                    {/* Decorative Flower */}
                    <FlowerFrame />

                    {/* Main Content */}
                    <div className="relative z-10 text-white flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">

                        {/* Space */}
                        <div className="flex flex-col gap-4 mb-10 sm:mb-10 items-center"></div>

                        {/* Salam Arabic */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-4 mb-2 sm:mb-2 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                    اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اَللهِ وَبَرَكَاتُهُ
                                </p>
                            </div>
                        </motion.div>

                        {/* Salam indonesia */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col gap-4 mb-3 sm:mb-3 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                    <em>Assalamu`alaikum Warahmatullaahi Wabarakaatuh</em>
                                </p>
                            </div>
                        </motion.div>

                        {/* Opening */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col gap-4 mb-10 sm:mb-10 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                    Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
                                </p>
                            </div>
                        </motion.div>

                        {/* Bride Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <div className="relative w-48 h-64 md:w-60 md:h-80 overflow-hidden rounded-full border-[6px] border-white shadow-lg">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src="/assets/images/bride-image.jpg"
                                            alt="Foto pengantin"
                                            width={500}
                                            height={700}
                                            className="object-cover w-full h-full"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bride Nickname */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.12 }}
                            className="flex flex-col gap-4 items-center"
                        >
                            <div className="space-y-1 py-2 sm:py-3">
                                <h1 className={`${meaCulpa.className} tracking-wide text-3xl md:text-4xl sm:text-2xl leading-tight`}>
                                    {config.data.brideNicknameName}
                                </h1>
                            </div>
                        </motion.div>

                        {/* Bride FullName */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                        >
                            <div className="space-y-1 py-2 sm:py-3">
                                <h2 className="text-center font-serif tracking-wide text-3xl md:text-4xl sm:text-2xl leading-tight text-[#e2a234]">
                                    {config.data.brideFullNameName}
                                </h2>
                            </div>
                        </motion.div>

                        {/* Parent Bride */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.18 }}
                            className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-20 sm:px-20 py-0 sm:py-0">
                                <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                    {config.data.parentBrideDescription}
                                </p>
                            </div>
                        </motion.div>

                        {/* Space */}
                        <div className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"></div>

                        {/* Parent Bride */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.21 }}
                            className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-20 sm:px-20 py-0 sm:py-0">
                                <h1 className={`${playfair.className} text-5xl md:text-6xl sm:text-4xl leading-tight text-[#e2a234]`}>
                                    &
                                </h1>
                            </div>
                        </motion.div>

                        {/* Space */}
                        <div className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"></div>

                        {/* Groom Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.24 }}
                            className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <div className="relative w-48 h-64 md:w-60 md:h-80 overflow-hidden rounded-full border-[6px] border-white shadow-lg">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src="/assets/images/groom-image.jpg"
                                            alt="Foto pengantin"
                                            width={500}
                                            height={700}
                                            className="object-cover w-full h-full"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Groom Nickname */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.27 }}
                            className="flex flex-col gap-4 items-center"
                        >
                            <div className="space-y-1 py-2 sm:py-3">
                                <h1 className={`${meaCulpa.className} tracking-wide text-3xl md:text-4xl sm:text-2xl leading-tight`}>
                                    {config.data.groomNicknameName}
                                </h1>
                            </div>
                        </motion.div>

                        {/* Groom FullName */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.30 }}
                            className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                        >
                            <div className="space-y-1 py-2 sm:py-3">
                                <h2 className="text-center font-serif tracking-wide text-3xl md:text-4xl sm:text-2xl leading-tight text-[#e2a234]">
                                    {config.data.groomFullNameName}
                                </h2>
                            </div>
                        </motion.div>

                        {/* Groom Bride */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.33 }}
                            className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-20 sm:px-20 py-0 sm:py-0">
                                <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                    {config.data.parentGroomDescription}
                                </p>
                            </div>
                        </motion.div>

                        {/* Space */}
                        <div className="flex flex-col gap-4 mb-20 sm:mb-20 items-center"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
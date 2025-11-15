import { motion } from 'framer-motion';
import FlowerFrame from "@/components/common/FlowerFrame"

export default function OpeningVerse() {
    return (
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

                    {/* Ayat Tittle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                    >
                        <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                            <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                <em>QS. Ar-Rum Ayat 21</em>
                            </p>
                        </div>
                    </motion.div>

                    {/* Ayat Arabic */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                    >
                        <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                            <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                            </p>
                        </div>
                    </motion.div>

                    {/* Ayat Indonesia */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                    >
                        <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                            <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                <em>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</em>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
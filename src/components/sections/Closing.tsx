import { motion } from "framer-motion"
import FlowerFrame from "@/components/common/FlowerFrame"
import { useInvitation } from "@/context/InvitationContext";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"]
});

export default function Closing() {
    const config = useInvitation();
    return (
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
                    <div className="flex flex-col gap-4 mb-50 sm:mb-50 items-center"></div>

                    {/* Main Content */}
                    <div className="relative z-10 text-white flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">
                        <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                            <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
                            </p>
                        </div>
                    </div>

                    {/* Space */}
                    <div className="flex flex-col gap-4 mb-10 sm:mb-10 items-center"></div>

                    {/* Best regards */}
                    <div className="relative z-10 text-white flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">
                        <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                            <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                Hormat Kami Yang Mengundang
                            </p>
                        </div>
                    </div>

                    {/* Bride */}
                    <div className="relative z-10 text-white flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">
                        <div className="space-y-1 py-2 sm:py-3">
                            <h1 className={`${playfair.className} tracking-wide text-3xl md:text-4xl sm:text-2xl leading-tight`}>
                                {config.data.groomNicknameName}
                                <span className="mx-2 sm:mx-3">&</span>
                                {config.data.brideNicknameName}
                            </h1>
                        </div>
                    </div>

                    <div className="absolute bottom-25 w-full flex flex-col items-center z-20">
                        {/* Creator */}
                        <div className="relative z-10 text-white flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                    Made with ❤️ by Salawase Studio
                                </p>
                            </div>
                        </div>

                        {/* Space */}
                        <div className="flex flex-col gap-4 mb-2 sm:mb-2 items-center"></div>

                        {/* Sosial Media*/}
                        <div className="relative z-10 text-white flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4 mb-2 sm:mb-2">
                            <div className="inline-flex items-center">

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/6287889202950"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                >
                                    <img
                                        src="/assets/icons/sosmed/ic-whatsapp.png"
                                        alt="whatsapp"
                                        className="w-5 h-5"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Music copyright */}
                        <div className="relative z-10 text-white flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <p className="text-center font-serif text-xs sm:text-xs md:text-xs">
                                    Music:
                                </p>
                                <p className="text-center font-serif text-xs sm:text-xs md:text-xs">
                                    {config.data.audio.title}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
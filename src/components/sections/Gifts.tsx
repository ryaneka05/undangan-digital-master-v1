import { motion } from "framer-motion";
import FlowerFrame from "@/components/common/FlowerFrame";
import config from '@/config/config';
import { Playfair_Display, Mea_Culpa } from "next/font/google";
import AccountCard from "@/components/cards/AccountCard";
import GiftAddress from "@/components/cards/GiftAddress";

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"]
});

const meaCulpa = Mea_Culpa({
    weight: "400",
    variable: "--font-mea-culpa",
    subsets: ["latin"],
});

export default function Gifts() {
    return (
        <section id="gifts">
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

                        {/* Main Content */}
                        <div className="relative z-10 text-white flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-0 sm:px-4">
                            <div className="inline-flex flex-col items-center space-y-1 px-5 sm:px-6 py-0 sm:py-0">
                                <img
                                    src="/assets/icons/ic-gift.png"
                                    alt="gift"
                                    className="w-20 h-20 mb-5 sm:mb-5"
                                ></img>

                                <h1 className={`${playfair.className} tracking-wide text-2xl md:text-3xl sm:text-xl leading-tight mb-5 sm:mb-5`}>
                                    Wedding Gift
                                </h1>

                                <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                    <p className="text-center font-serif text-sm sm:text-sm md:text-sm mb-10 sm:mb-10">
                                        Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih untuk kami, dapat melalui:
                                    </p>
                                </div>

                                {config.data.banks.map((item, idx) => (
                                    <AccountCard
                                        key={idx}
                                        bankName={item.bank}
                                        rekNo={item.accountNumber}
                                        accountName={item.accountName}
                                        waNo={item.waConfirm}
                                    />
                                ))}

                                {config.data.sendGifts.map((item, idx) => (
                                    <GiftAddress
                                        key={idx}
                                        recipientName={item.recipientName}
                                        address={item.addressSendGifts}
                                        waNo={item.waConfirmGifts}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
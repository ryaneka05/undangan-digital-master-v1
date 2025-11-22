import { motion } from 'framer-motion';
import { Playfair_Display } from "next/font/google";
import { Mea_Culpa } from "next/font/google";
import Image from 'next/image';
import { useState } from "react";

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"]
});

const meaCulpa = Mea_Culpa({
    weight: "400",
    variable: "--font-mea-culpa",
    subsets: ["latin"],
});

interface CardProps {
    recipientName: string;
    address: string;
    waNo: string;
}

export default function GiftAddress({ recipientName, address, waNo }: CardProps) {
    const [copied, setCopied] = useState(false);
    const textCopy = address;
    const handleCopy = () => {
        navigator.clipboard.writeText(textCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="bg-white/50 backdrop-blur-xs shadow-md rounded-2xl overflow-hidden p-2 w-95 h-fit mb-5">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row">
                    <div className="flex flex-col justify-center items-center w-full">
                        <div>
                            <h1 className={`${playfair.className} tracking-wide text-lg md:text-xl sm:text-lg leading-tight mb-1 sm:mb-1`}>
                                Wedding Gift
                            </h1>
                        </div>
                        <div>
                            <img
                                src="/assets/icons/ic-gift.png"
                                alt="ic-card-bank"
                                className="h-10 w-10 mb-1.5"
                            />
                        </div>
                        <div className="flex-row justify-center text-center mb-5">
                            <p className="font-serif text-sm sm:text-sm md:text-sm">
                                Anda dapat mengirim kado ke:
                            </p>
                            <p className="font-serif text-sm sm:text-sm md:text-sm">
                                {address}
                            </p>
                        </div>
                        <div className="group relative w-20 bg-blue-950 text-white px-2 py-1 sm:px-2 sm:py-1 mb-2.5 rounded-xl shadow-lg">
                            <span className="relative z-10 flex items-center justify-center cursor-pointer gap-2"
                                onClick={handleCopy} >
                                {!copied && (
                                    <img
                                        src="/assets/icons/ic-copy.png"
                                        alt="ic-copy"
                                        className="w-4 h-4"
                                    />)}
                                <span className="text-center font-serif text-sm">
                                    {copied ? "Copied!" : "Copy"}
                                </span>
                            </span>
                        </div>
                        <div className="group relative w-45 bg-blue-950 text-white px-2 py-1 sm:px-2 sm:py-1 mb-2.5 rounded-xl shadow-lg">
                            <a
                                href={`https://wa.me/${waNo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="relative z-10 flex items-center justify-start cursor-pointer gap-2">
                                    <img
                                        src="/assets/icons/ic-wa-button.png"
                                        alt="ic-wa"
                                        className="w-4 h-4"
                                    />
                                    <span className="text-center font-serif text-sm">
                                        Konfirmasi WhatsApp
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
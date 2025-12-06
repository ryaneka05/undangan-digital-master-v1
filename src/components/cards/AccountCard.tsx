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
    bankName: string;
    rekNo: string;
    accountName: string;
    waNo: string;
}

export default function AccountCard({ bankName, rekNo, accountName, waNo }: CardProps) {
    const [copied, setCopied] = useState(false);
    const textCopy = rekNo;

    const handleCopy = () => {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textCopy)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                })
                .catch(err => {
                    console.error("Clipboard error:", err);
                    fallbackCopy(textCopy);
                });
        } else {
            fallbackCopy(textCopy);
        }
    };

    const fallbackCopy = (text: string) => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            const success = document.execCommand("copy");
            if (success) {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            } else {
                alert("Gagal menyalin text.");
            }
        } catch (err) {
            console.error("Fallback copy error:", err);
        }
        document.body.removeChild(textarea);
    };

    const iconBank = () => {
        let icName = "";
        if (bankName == "BRI") {
            icName = "ic-bri.png"
        } else if (bankName == "BCA") {
            icName = "ic-bca.png"
        } else if (bankName == "BNI") {
            icName = "ic-bni.png"
        } else if (bankName == "Mandiri") {
            icName = "ic-mandiri.png"
        }
        return icName;
    }

    const src = `/icons/bank/${iconBank()}`;

    return (
        <div className="bg-white/50 backdrop-blur-xs shadow-md rounded-2xl overflow-hidden p-2 w-85 sm:w-85 md:w-95 h-fit mb-5">
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-end-safe">
                    <img
                        src={src}
                        alt={bankName}
                        className="w-30 h-10"
                    />
                </div>
                <div className="flex flex-row justify-end-safe">
                    <div className="h-1 bg-black w-1/2">
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-full">
                            <div>
                                <img
                                    src="/icons/ic-card-bank.png"
                                    alt="ic-card-bank"
                                    className="h-15 w-15"
                                />
                            </div>
                            <div className="group relative w-20 bg-blue-950 text-white px-2 py-1 sm:px-2 sm:py-1 mb-2.5 rounded-xl shadow-lg">
                                <span className="relative z-10 flex items-center justify-center cursor-pointer gap-2"
                                    onClick={handleCopy} >
                                    {!copied && (
                                        <img
                                            src="/icons/ic-copy.png"
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
                                            src="/icons/ic-wa-button.png"
                                            alt="ic-wa"
                                            className="w-4 h-4"
                                        />
                                        <span className="text-center font-serif text-xs md:text-sm sm:text-xs">
                                            Konfirmasi WhatsApp
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="mt-3 mb-1">
                                <p className="text-right font-serif text-sm sm:text-sm md:text-sm">
                                    No. Rekening
                                </p>
                            </div>
                            <div>
                                <h1 className="text-right font-bold text-sm sm:text-sm md:text-sm mb-2">
                                    {rekNo}
                                </h1>
                            </div>
                            <div className="mb-1">
                                <p className="text-right font-serif text-sm sm:text-sm md:text-sm">
                                    Atas Nama
                                </p>
                            </div>
                            <div>
                                <h1 className="text-right font-bold uppercase text-sm sm:text-sm md:text-sm mb-2">
                                    {accountName}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
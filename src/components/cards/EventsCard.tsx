import { motion } from 'framer-motion';
import { Playfair_Display } from "next/font/google";
import { Mea_Culpa } from "next/font/google";
import Image from 'next/image';

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
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    address: string;
    image: string;
}

export default function EventsCard({ title, date, startTime, endTime, location, address, image }: CardProps) {
    return (
        <div className="border-5 border-[#EBBD6D] bg-white shadow-md rounded-xl overflow-hidden w-85 h-120 mb-10">
            <div className="relative flex flex-col items-center justify-center">

                {/* Space */}
                <div className="flex flex-col gap-4 mb-1 sm:mb-1 items-center"></div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.30 }}
                    className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                >
                    <div className="space-y-1 py-2 sm:py-3">
                        <h2 className="text-center font-serif tracking-wide text-3xl md:text-4xl sm:text-2xl leading-tight text-[#e2a234]">
                            {title}
                        </h2>
                    </div>
                </motion.div>

                {/* Date */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.30 }}
                    className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                >
                    <div className="space-y-1 py-2 sm:py-3">
                        <h2 className="text-center font-serif tracking-wide text-xl md:text-xl sm:text-xl leading-tight text-black">
                            {date}
                        </h2>
                    </div>
                </motion.div>

                {/* time */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.30 }}
                    className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                >
                    <div className="space-y-1 py-2 sm:py-3">
                        <h2 className="text-center font-serif tracking-wide text-xl md:text-xl sm:text-xl leading-tight text-black">
                            {`${startTime} - ${endTime}`}
                        </h2>
                    </div>
                </motion.div>

                {/* Icon Location */}
                <img
                    src={image}
                    alt="icon"
                    className="w-15 h-15"
                />

                {/* Location Name */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.30 }}
                    className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                >
                    <div className="space-y-1 py-2 sm:py-3">
                        <h2 className="text-center font-serif tracking-wide text-xl md:text-xl sm:text-xl leading-tight text-black">
                            {location}
                        </h2>
                    </div>
                </motion.div>

                {/* Address */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.30 }}
                    className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
                >
                    <div className="space-y-1 py-2 sm:py-3">
                        <h2 className="text-center font-serif tracking-wide text-md md:text-md sm:text-md leading-tight text-black">
                            {address}
                        </h2>
                    </div>
                </motion.div>

                {/* button Maps */}
                <motion.a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-50 bg-[#e4c389] text-white px-2 py-3 sm:px-8 sm:py-3 rounded-full shadow-lg hover:bg-[#ebbd6d] transition-all duration-200">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        <img
                            src="/icons/ic-pin.png"
                            alt="icon"
                            className="w-5 h-5"
                        />
                        <span className="text-center font-serif text-sm">
                            Google Maps
                        </span>
                    </span>
                    <div className="absolute inset-0 from-[#ebbd6d] to-[#e4c389] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.a>
            </div>
        </div>
    );
}

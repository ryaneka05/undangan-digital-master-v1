import React from "react";
import { motion } from 'framer-motion';

interface AddToCalendarButtonGoogle {
    title: string;
    description?: string;
    location?: string;
    startDate: string; // format: YYYY-MM-DD HH:mm
    endDate: string;   // format: YYYY-MM-DD HH:mm
}

export default function AddToCalendarButtonGoogle({ title, description = "", location = "", startDate, endDate }: AddToCalendarButtonGoogle) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const googleUrl =
        `https://calendar.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(title)}` +
        `&details=${encodeURIComponent(description)}` +
        `&location=${encodeURIComponent(location)}` +
        `&dates=${start.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"}` +
        `%2F${end.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"}`;

    return (
        <div>
            {/* Save to Calendar */}
            <motion.div
                initial={{ opacity: 0 }
                }
                animate={{ opacity: 1 }}
                transition={{ delay: 0.18 }}
                className="flex flex-col gap-4 mb-0 sm:mb-0 items-center"
            >
                <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={googleUrl}
                    target="_blank"
                    className="group relative w-60 bg-[#e4c389] text-white px-2 py-3 sm:px-8 sm:py-3 rounded-full shadow-lg hover:bg-[#ebbd6d] transition-all duration-200">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        <span className="text-center font-serif text-sm">
                            SIMPAN DI KALENDER
                        </span>
                    </span>
                    <div className="absolute inset-0 from-[#ebbd6d] to-[#e4c389] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.a>
            </motion.div>
        </div>
    );
}
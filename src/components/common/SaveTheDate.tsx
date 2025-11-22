import { motion } from 'framer-motion';
import FlowerFrame from "@/components/common/FlowerFrame"
import Image from 'next/image';
import config from '@/config/config';
import { useEffect, useState } from "react";
import AddToCalendarButton from './AddToCalendarButtonGoogle';

export default function SaveTheDate() {
    const targetDate = new Date(config.data.dateTime.replace(" ", "T")).getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer)
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate])

    return (
        <section id="date">
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

                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <p className="text-center tracking-\[0.1em\] font-serif text-lg sm:text-lg md:text-lg">
                                    Save The Date
                                </p>
                            </div>
                        </motion.div>

                        {/* greetings */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <p className="text-center font-serif text-sm sm:text-sm md:text-sm">
                                    Kami mengundang Anda untuk menghadiri hari bahagia kami
                                </p>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col gap-4 mb-5 sm:mb-5 items-center"
                        >
                            <div className="inline-flex flex-col items-center space-y-1 px-4 sm:px-6 py-0 sm:py-0">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-\[0px\] border-white shadow-lg">
                                    <motion.div
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src="/assets/images/img-pengantin.jpg"
                                            alt="Foto pengantin"
                                            width={500}
                                            height={700}
                                            className="object-cover w-full h-full"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Countdown */}
                        <div className="flex justify-center gap-4 sm:gap-6 mb-5 sm:mb-5">
                            {/* Item Time */}
                            {[
                                { label: "Hari", value: timeLeft.days },
                                { label: "Jam", value: timeLeft.hours },
                                { label: "Menit", value: timeLeft.minutes },
                                { label: "Detik", value: timeLeft.seconds },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex flex-col items-center bg-white shadow-lg px-4 py-3 rounded-lg min-w-[70px]"
                                >
                                    <span className="text-2xl font-bold text-[#b68d5c]">
                                        {item.value}
                                    </span>
                                    <span className="text-xs text-gray-500">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Add To Calendar */}
                        <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 mb-5 sm:mb-5">
                            <AddToCalendarButton
                                title="Pernikahan Andi & Sinta"
                                description="Acara pernikahan Andi & Sinta."
                                location="Gedung Serbaguna Jakarta"
                                startDate="2025-06-15 10:00"
                                endDate="2025-06-15 13:00"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

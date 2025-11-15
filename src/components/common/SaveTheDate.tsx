"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
    date: string; // contoh: "2024-12-24T16:16:00"
}

export default function SaveTheDate({ date }: CountdownProps) {
    const targetDate = new Date(date).getTime();
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
                clearInterval(timer);
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
    }, [targetDate]);

    return (
        <div className="w-full text-center py-10 px-4 bg-[#f6efe7] rounded-xl shadow-md">
            {/* Save The Date Title */}
            <h2 className="text-3xl font-serif font-bold text-[#b68d5c] mb-2">
                Save The Date
            </h2>

            <p className="text-gray-700 font-light mb-6">
                Kami mengundang Anda untuk menghadiri hari bahagia kami
            </p>

            {/* Countdown */}
            <div className="flex justify-center gap-4 sm:gap-6">

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

            {/* Wedding Date */}
            <p className="mt-6 text-gray-700 font-medium text-lg">
                {new Date(date).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
        </div>
    );
}

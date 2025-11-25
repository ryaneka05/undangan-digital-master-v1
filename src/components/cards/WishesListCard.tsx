import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock, CheckCircle, XCircle, HelpCircle } from 'lucide-react'
import { formatEventDate } from '@/lib/formatEventDate';

export default function WishesListCard() {
    // Example wishes - replace with your actual data
    const [wishes, setWishes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWishes = async () => {
            try {
                const res = await fetch("/api/wishesApi");
                const data = await res.json();
                setWishes(data);
            } catch(error) {
                console.error("Gagal fetch:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWishes();

        const interval = setInterval(fetchWishes, 5000);
        return () => clearInterval(interval);
    }, []);

    const getAttendanceIcon = (status: string) => {
        switch (status) {
            case 'attending':
                return <CheckCircle className="w-4 h-4 text-emerald-500" />;
            case 'not-attending':
                return <XCircle className="w-4 h-4 text-rose-500" />;
            case 'maybe':
                return <HelpCircle className="w-4 h-4 text-amber-500" />;
            default:
                return null;
        }
    };

    const colors = [
        "bg-gradient-to-r from-rose-400 to-pink-400",
        "bg-gradient-to-r from-purple-400 to-violet-500",
        "bg-gradient-to-r from-blue-400 to-cyan-500",
        "bg-gradient-to-r from-emerald-400 to-lime-500",
        "bg-gradient-to-r from-amber-400 to-orange-500",
    ];

    function getColorForName(name: string) {
        let sum = 0;
        for (let i = 0; i < name.length; i++) {
            sum += name.charCodeAt(i);
        }
        return colors[sum % colors.length];
    }

    return (
        <div className="relative bg-white/50 backdrop-blur-xs shadow-md rounded-2xl py-6 w-85 sm:w-96 h-[350px] overflow-y-auto my-scroll">
            <div className="flex flex-col animate-scrollY gap-2">
                <div className="flex flex-col justify-center items-center w-full">
                    {wishes.map((wish, index) => (
                        <motion.div
                            key={wish.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative w-[350px]"
                        >
                            {/* Background gradient */}
                            <div className="flex inset-0 bg-linear-to-r from-rose-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

                            {/* Card content */}
                            <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-100/50 shadow-md mb-2">
                                {/* Header */}
                                <div className="flex items-start space-x-3 mb-2">
                                    {/* Avatar */}
                                    <div className="flex shrink-0">
                                        <div className={`w-8 h-8 rounded-full bg-linear-to-r flex items-center justify-center text-white text-sm font-medium ${getColorForName(wish.name)}`}>
                                            {wish.name[0].toUpperCase()}
                                        </div>
                                    </div>

                                    {/* Name, Time, and Attendance */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                            <h4 className="font-medium text-gray-800 text-sm truncate">
                                                {wish.name}
                                            </h4>
                                            {getAttendanceIcon(wish.attending)}
                                        </div>
                                        <div className="flex items-center space-x-1 text-gray-500 text-xs">
                                            <Clock className="w-3 h-3" />
                                            <time className="truncate">
                                                {formatEventDate(wish.createDateTime)}
                                            </time>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                                    {wish.message}
                                </p>

                                {/* Optional: Time indicator for recent messages */}
                                {Date.now() - new Date(wish.createDateTime).getTime() < 3600000 && (
                                    <div className="absolute top-2 right-2">
                                        <span className="px-2 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-medium">
                                            New
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
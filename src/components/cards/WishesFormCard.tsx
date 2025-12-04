import { motion, AnimatePresence } from "framer-motion";
import { useInvitation } from "@/context/InvitationContext"; 
import { Playfair_Display } from "next/font/google";
import { Mea_Culpa } from "next/font/google";
import { useState } from "react";
import { runConfetti } from "@/lib/confetti";
import useSWR, { mutate } from "swr";
import {
    Calendar,
    Clock,
    ChevronDown,
    User,
    MessageCircle,
    Send,
    Smile,
    CheckCircle,
    XCircle,
    HelpCircle,
} from 'lucide-react'

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"]
});

const meaCulpa = Mea_Culpa({
    weight: "400",
    variable: "--font-mea-culpa",
    subsets: ["latin"],
});

export default function WishesFormCard() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [guestName, setGuestName] = useState('');
    const [attendance, setAttendance] = useState('');
    const [newWish, setNewWish] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const config = useInvitation();

    const options = [
        { value: 'ATTENDING', label: 'Ya, saya akan hadir' },
        { value: 'NOT_ATTENDING', label: 'Tidak, saya tidak bisa hadir' },
        { value: 'MAYBE', label: 'Mungkin, saya akan konfirmasi nanti' }
    ];

    const handleSubmit = async () => {
        if (!guestName || !attendance || !newWish) {
            alert("Semua field wajib diisi.");
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/wishesApi", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    invitationId: parseInt(config.data.userId),
                    name: guestName,
                    message: newWish,
                    attending: attendance
                })
            });

            const data = await res.json();

            if (!res.ok) {
                setIsSubmitting(false);
                throw new Error(data.error || "Gagal mengirim data");
            }

            await mutate("/api/wishesApi");

            setGuestName("");
            setNewWish("");
            setAttendance("");
            setShowConfetti(true);
            runConfetti();            

        } catch (error) {
            alert("Gagal mengirim data!")
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white/50 backdrop-blur-xs shadow-md rounded-2xl overflow-hidden p-2 w-85 sm:w-85 md:w-95 h-fit mb-5">
            {/* Wishes Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl mx-auto mt-5"
            >
                <div className='space-y-2'>
                    {/* Name Input */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-700 text-sm mb-1">
                            <User className="w-4 h-4" />
                            <span>Nama Kamu</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Masukan nama kamu..."
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                            required
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-2 relative"
                    >
                        <div className="flex items-center space-x-2 text-gray-700 text-sm mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>Apakah kamu hadir?</span>
                        </div>

                        {/* Custom Select Button */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
                        >
                            <span className={attendance ? 'text-gray-700' : 'text-gray-400'}>
                                {attendance ?
                                    options.find(opt => opt.value === attendance)?.label
                                    : 'Pilih kehadiran...'}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {/* Dropdown Options */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden"
                                >
                                    {options.map((option) => (
                                        <motion.button
                                            key={option.value}
                                            type="button"
                                            onClick={() => {
                                                setAttendance(option.value);
                                                setIsOpen(false);
                                            }}
                                            whileHover={{ backgroundColor: 'rgb(219, 234, 254)' }}
                                            className={`w-full px-4 py-2.5 text-left transition-colors
                                        ${attendance === option.value
                                                    ? 'bg-blue-50 text-blue-600'
                                                    : 'text-gray-700 hover:bg-blue-50'
                                                }`}
                                        >
                                            {option.label}
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Wish Textarea */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-gray-700 text-sm mb-1">
                                <MessageCircle className="w-4 h-4" />
                                <span>Harapan kamu</span>
                            </div>
                            <textarea
                                placeholder="Kirimkan harapan dan doa untuk kedua mempelai..."
                                value={newWish}
                                onChange={(e) => setNewWish(e.target.value)}
                                className="w-full h-32 p-4 rounded-xl  text-gray-700 bg-white/50 border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none transition-all duration-200"
                                required
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <Smile className="w-5 h-5" />
                        <span className="text-sm">Berikan Doa Anda</span>
                    </div>
                    <motion.button
                        onClick={handleSubmit}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200
                    ${isSubmitting
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'bg-blue-900 hover:bg-blue-800'}`}
                    >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Sedang Mengirim...' : 'Kirimkan Doa'}</span>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
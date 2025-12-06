import { motion } from "framer-motion"
export default function FlowerFrame() {
    return (
        <>
            {/* Bunga Kiri Atas */}
            <motion.img
                src="/images/frame-tl.png"
                alt="Bunga kiri atas"
                className="absolute top-0 left-0 w-60 h-50 md:w-60 md:h-50 lg:w-50 opacity-90 pointer-events-none select-none"
                initial={{ opacity: 0, x: -100, y: -100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Bunga Kanan Bawah */}
            <motion.img
                src="/images/frame-br.png"
                alt="Bunga kanan bawah"
                className="absolute bottom-0 right-0 w-60 h-50 md:w-60 md:h-50 lg:w-50 opacity-90 pointer-events-none select-none"
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            />
        </>
    )
}
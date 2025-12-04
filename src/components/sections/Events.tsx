import { motion } from 'framer-motion';
import FlowerFrame from "@/components/common/FlowerFrame"
import Card from '../cards/EventsCard';
import { useInvitation } from "@/context/InvitationContext";

export default function Event() {
    const config = useInvitation();
    return (
        <section id="location">
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
                        {config.data.agenda.map((item, idx) => (
                            <Card
                                key={idx}
                                title={item.title}
                                date={item.date}
                                startTime={item.startTime}
                                endTime={item.endTime}
                                location={item.location}
                                address={item.address}
                                image={item.icImage}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
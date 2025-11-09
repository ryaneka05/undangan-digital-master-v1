import Hero from '@/components/Hero'
import Events from '@/components/Events'
import Location from '@/components/Location';
import Wishes from '@/components/Wishes';
import Gifts from '@/components/Gifts';

export default function MainContent() {
    return (
        <>
            <Hero />
            <Events />
            <Location />
            <Gifts />
            <Wishes />
        </>
    )
}
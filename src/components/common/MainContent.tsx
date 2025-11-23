import Home from '@/components/sections/Home'
import Hero from '@/components/sections/Hero'
import Events from '@/components/sections/Events'
import Location from '@/components/sections/Location';
import Wishes from '@/components/sections/Wishes';
import Gifts from '@/components/sections/Gifts';
import Closing from '../sections/Closing';

export default function MainContent() {
    return (
        <>
            <Home />
            <Hero />
            <Events />
            <Gifts />
            <Wishes />
            <Closing />
        </>
    )
}
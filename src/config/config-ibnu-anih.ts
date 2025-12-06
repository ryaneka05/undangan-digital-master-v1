import { InvitationConfig } from "@/types/InvitationConfig";
const config: InvitationConfig = {
    slug: "ibnu-anih",
    data: {
        title: "Pernikahan Ibnu & Anih",
        description: "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.",
        userId: "2",
        url: "https://salawase-studio.vercel.app/ibnu-anih",
        siteName: "Salawase-Studio",
        groomNicknameName: "Ibnu",
        brideNicknameName: "Anih",
        groomFullNameName: "Ibnu Malik",
        brideFullNameName: "Anih Handayani",
        parentGroom: "Bapak Sarman & Ibu Wartinah",
        parentGroomDescription: "Putra dari Bapak Sarman & Ibu Wartinah",
        parentBride: "Bapak Ra'i dan Ibu Odah",
        parentBrideDescription: "Putri dari Bapak Ra'i dan Ibu Odah",
        coupleImage: "/assets/images/couple-image-ibnu-anih.jpg",
        groomImage: "/assets/images/groom-image-ibnu.jpg",
        brideImage: "/assets/images/bride-image-anih.jpg",
        dateTime: "2025-12-26 08:00:00",
        startDateTime: "2025-12-26 08:00",
        endDateTime: "2025-12-26 17:30",
        date: "26 Desember 2025",
        maps_url: "https://maps.app.goo.gl/ta5WVpZ8Deu5V6wVA",
        maps_embed:
            "https://maps.app.goo.gl/ta5WVpZ8Deu5V6wVA",
        time: "08:00 - 17:30 WIB",
        location: "Kediaman Mempelai Wanita",
        address: "Kp Babakan Loa, Ds Sawarna Timur, Kec Bayah Kab. Lebak",
        ogImage: "/assets/images/couple-image-ibnu-anih.jpg",
        favicon: "/assets/images/favicon.ico",
        agenda: [
            {
                title: "Akad Nikah",
                date: "26 Desember 2025",
                startTime: "08:00",
                endTime: "Selesai",
                location: "Kediaman Mempelai Wanita",
                address: "Kp Babakan Loa, Ds Sawarna Timur, Kec Bayah Kab. Lebak",
                icImage: "/assets/icons/ic-building.png",
            },
            {
                title: "Resepsi Nikah",
                date: "26 Desember 2025",
                startTime: "09:00",
                endTime: "Selesai",
                location: "Kediaman Mempelai Wanita",
                address: "Kp Babakan Loa, Ds Sawarna Timur, Kec Bayah Kab. Lebak",
                icImage: "/assets/icons/ic-building.png",
            }
        ],
        audio: {
            src: "/assets/audio/AriLasso-CintaTerakhir.mp3", // or /audio/nature-sound.mp3
            title: "Ari Lasso - Cinta Terakhir", // or Nature Sound
            autoplay: true,
            loop: true,
            toastDuration: 276000,
        },
        banks: [
            {
                bank: "BCA",
                accountNumber: "1670860686",
                accountName: "Anih Handayani",
                waConfirm: "081907863151",
            },
            {
                bank: "BCA",
                accountNumber: "1670784017",
                accountName: "Ibnu Malik",
                waConfirm: "081284157829",
            },
        ],
        sendGifts: [
            {
                recipientName: "Anih Handayani",
                addressSendGifts: "Puri Harmoni Pasir Mukti Jl Pinus 2 C28 No 21",
                waConfirmGifts: "081907863151",
            }
        ]
    }
};

export default config;
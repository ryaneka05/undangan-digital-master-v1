import { InvitationConfig } from "@/types/InvitationConfig";
const config: InvitationConfig = {
    slug: "dandi-nisa",
    data: {
        title: "Ngunduh Mantu Dandi & Nisa",
        description: "Kami mengundang Anda untuk turut merayakan momen istimewa ini.",
        userId: "4",
        url: "https://salawase-studio.vercel.app/dandi-nisa",
        siteName: "Salawase-Studio",
        groomNicknameName: "Nisa", 
        brideNicknameName: "Dandi",
        groomFullNameName: "Retno Nisa'i fibarkati", 
        brideFullNameName: "Dandi Pratama Putra",
        parentGroom: "Bapak Wahyu Basuki dan Ibu Nurul Aina",
        parentGroomDescription: "Putri dari Wahyu Basuki dan Ibu Nurul Aina", 
        parentBride: "Bapak Zarkani & Ibu Yeniar", 
        parentBrideDescription: "Putra dari Bapak Zarkani & Ibu Yeniar",
        coupleImage: "/images/cover.png",
        groomImage: "/images/bride-image-animation-without-flower.png", //groom-image-animation-without-flower.png
        brideImage: "/images/groom-image-animation-without-flower.png", //bride-image-animation-without-flower.png
        dateTime: "2026-03-25 09:00:00",
        startDateTime: "2026-03-25 09:00",
        endDateTime: "2026-03-25 17:30",
        date: "25 Maret 2026",
        maps_url: "-4.054197, 103.924805",
        maps_embed:
            "-4.054197, 103.924805",
        time: "09:00 - 17:30 WIB",
        location: "Kediaman Mempelai Laki-Laki",
        address: "Desa suka merindu, Jln lintas Sumatra RT 03,semidang aji, ulu ogan KAB. Ogan komering ulu, Sumatra Selatan ( Rumah mempelai laki-laki )",
        ogImage: "/images/cover.png",
        favicon: "/images/favicon.ico",
        agenda: [
            {
                title: "Ngunduh Mantu",
                date: "25 Maret 2026",
                startTime: "09:00",
                endTime: "Selesai",
                location: "Kediaman Mempelai Laki-Laki",
                address: "Desa suka merindu, Jln lintas Sumatra RT 03,semidang aji, ulu ogan KAB. Ogan komering ulu, Sumatra Selatan",
                icImage: "/icons/ic-building.png",
                maps_url: "https://www.google.com/maps?q=-4.054197, 103.924805",
                maps_embed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.834280615833!2d103.92222977497555!3d-4.054196795919554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDMnMTUuMSJTIDEwM8KwNTUnMjkuMyJF!5e0!3m2!1sen!2sid!4v1773240750761!5m2!1sen!2sid",
            }
        ],
        audio: {
            src: "/audio/rossa-ft-afgan_kamu-yang-kutunggu.mp3", // or /audio/nature-sound.mp3
            title: "Rossa ft Afgan-Kamu Yang Kutunggu", // or Nature Sound
            autoplay: true,
            loop: true,
            toastDuration: 276000,
        },
        banks: [
            {
                bank: "BSI",
                accountNumber: "8556504340",
                accountName: "A/n Dandi Pratama Putra",
                waConfirm: "081271729966",
            }
        ],
        sendGifts: [
            {
                recipientName: "A/n Dandi Pratama Putra",
                addressSendGifts: "Desa suka merindu, Jln lintas Sumatra RT 03,semidang aji, ulu ogan KAB. Ogan komering ulu, Sumatra Selatan",
                waConfirmGifts: "081271729966", // Belum Fix
            }
        ]
    }
};

export default config;
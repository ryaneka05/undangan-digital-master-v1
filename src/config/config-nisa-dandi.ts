import { InvitationConfig } from "@/types/InvitationConfig";
const config: InvitationConfig = {
    slug: "nisa-dandi",
    data: {
        title: "Pernikahan Nisa & Dandi",
        description: "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.",
        userId: "3",
        url: "https://salawase-studio.vercel.app/nisa-dandi",
        siteName: "Salawase-Studio",
        groomNicknameName: "Dandi",
        brideNicknameName: "Nisa",
        groomFullNameName: "Dandi Pratama Putra",
        brideFullNameName: "Retno Nisa'i fibarkati",
        parentGroom: "Bapak Zarkani & Ibu Yeniar",
        parentGroomDescription: "Putra dari Bapak Zarkani & Ibu Yeniar",
        parentBride: "Bapak Wahyu Basuki dan Ibu Nurul Aina",
        parentBrideDescription: "Putri dari Wahyu Basuki dan Ibu Nurul Aina",
        coupleImage: "/images/cover.png",
        groomImage: "/images/groom-image-animation-without-flower.png", //groom-image-animation-without-flower.png
        brideImage: "/images/bride-image-animation-without-flower.png", //bride-image-animation-without-flower.png
        dateTime: "2026-02-05 08:00:00",
        startDateTime: "2026-02-05 08:00",
        endDateTime: "2026-02-08 17:30",
        date: "05 Februari 2026",
        maps_url: "-4.151080,104.189454",
        maps_embed:
            "-4.151080,104.189454",
        time: "08:00 - 17:30 WIB",
        location: "Kediaman Mempelai Wanita",
        address: "Jln.Ayani, Lr air semambu kemelak bindung langit ( Rumah mempelai Wanita)",
        ogImage: "/images/cover.png",
        favicon: "/images/favicon.ico",
        agenda: [
            {
                title: "Akad Nikah",
                date: "05 Februari 2026",
                startTime: "10:00",
                endTime: "Selesai",
                location: "Kediaman Mempelai Wanita",
                address: "Jln.Ayani, Lr air semambu kemelak bindung langit",
                icImage: "/icons/ic-building.png",
                maps_url: "https://www.google.com/maps?q=-4.151142,104.189449",
                maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d994.8375739411043!2d104.18897717818757!3d-4.151341270426986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1768117382297!5m2!1sen!2sid",
            },
            {
                title: "Resepsi Nikah",
                date: "08 Februari 2026",
                startTime: "08:00",
                endTime: "Selesai",
                location: "Kediaman Mempelai Wanita",
                address: "Jln.Ayani, Lr air semambu kemelak bindung langit",
                icImage: "/icons/ic-building.png",
                maps_url: "https://www.google.com/maps?q=-4.151142,104.189449",
                maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d994.8375739411043!2d104.18897717818757!3d-4.151341270426986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1768117382297!5m2!1sen!2sid",
            }
        ],
        audio: {
            src: "/audio/rossa-ft-afgan_kamu-yang-kutunggu.mp3", // or /audio/nature-sound.mp3
            title: "Rossa ft Afgan - Kamu Yang Kutunggu", // or Nature Sound
            autoplay: true,
            loop: true,
            toastDuration: 276000,
        },
        banks: [
            {
                bank: "BRI",
                accountNumber: "328601013575508",
                accountName: "Rento nisya'ifibi Barkati",
                waConfirm: "087721980039",
            },
        ],
        sendGifts: [
            {
                recipientName: "Rento nisya'ifibi Barkati",
                addressSendGifts: "Jln.Ayani, Lr air semambu kemelak bindung langit",
                waConfirmGifts: "087721980039",
            }
        ]
    }
};

export default config;
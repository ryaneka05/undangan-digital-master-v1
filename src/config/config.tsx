const config = {
    data: {
        title: "Pernikahan Fulan & Fulana", // Nanti ini otomatis
        description:
            "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.", // Nanti ini dibikin random
        groomNicknameName: "Dilan",
        brideNicknameName: "Millea",
        groomFullNameName: "Dilan Pratama",
        brideFullNameName: "Milea Pratiwi",        
        parentGroom: "Bapak Groom & Ibu Groom",
        parentGroomDescription: "Putri Pertama dari Bapak Groom Dan Ibu Groom",
        parentBride: "Bapak Bride & Ibu Bride",
        parentBrideDescription: "Putri Pertama dari Bapak Bride Dan Ibu Bride",
        dateTime: "2025-11-16 08:00:00",
        date: "11 November 2025",
        maps_url: "https://goo.gl/maps/abcdef",
        maps_embed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d106.8270733147699!3d-6.175392995514422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4f1b6d7b1e7%3A0x2e69f4f1b6d7b1e7!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1633666820004!5m2!1sid!2sid",
        time: "16:16 - 17:30 WIB",
        location: "Grand Ballroom, Hotel Majesty",
        address: "Jl. Jend. Sudirman No.1, Jakarta",
        ogImage: "/assets/images/og-image.jpg",
        favicon: "/assets/images/favicon.ico",
        agenda: [
            {
                title: "Akad Nikah",
                date: "2024-12-24",
                startTime: "16:16",
                endTime: "17:30",
                location: "Grand Ballroom, Hotel Majesty",
                address: "Jl. Jend. Sudirman No.1, Jakarta",
                icImage: "/assets/icons/ic-building.png",
            },
            {
                title: "Resepsi Nikah",
                date: "2024-12-24",
                startTime: "16:16",
                endTime: "17:30",
                location: "Grand Ballroom, Hotel Majesty",
                address: "Jl. Jend. Sudirman No.1, Jakarta",
                icImage: "/assets/icons/ic-building.png",
            }
        ],
        audio: {
            src: "/assets/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
            title: "Fulfilling Humming", // or Nature Sound
            autoplay: true,
            loop: true,
            toastDuration: 3000,
        },
        banks: [
            {
                bank: "BRI",
                accountNumber: "1234567890",
                accountName: "FULAN",
                waConfirm: "081234567890",
            },
            {
                bank: "BRI",
                accountNumber: "0987654321",
                accountName: "FULANA",
                waConfirm: "081234567890",
            }
        ]
    }
};

export default config;
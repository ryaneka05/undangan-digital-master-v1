export interface AgendaItem {
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    address: string;
    icImage: string;
}

export interface BankItem {
    bank: string;
    accountNumber: string;
    accountName: string;
    waConfirm: string;
}

export interface GiftItem {
    recipientName: string;
    addressSendGifts: string;
    waConfirmGifts: string;
}

export interface AudioConfig {
    src: string;
    title: string;
    autoplay: boolean;
    loop: boolean;
    toastDuration: number;
}

export interface InvitationData {
    title: string;
    description: string;
    userId: string;
    url: string,
    siteName: string,

    groomNicknameName: string;
    brideNicknameName: string;
    groomFullNameName: string;
    brideFullNameName: string;

    parentGroom: string;
    parentGroomDescription: string;
    parentBride: string;
    parentBrideDescription: string;

    coupleImage: string;
    groomImage: string;
    brideImage: string;

    dateTime: string;
    startDateTime: string;
    endDateTime: string;
    date: string;

    maps_url: string;
    maps_embed: string;

    time: string;
    location: string;
    address: string;

    ogImage: string;
    favicon: string;

    agenda: AgendaItem[];
    audio: AudioConfig;
    banks: BankItem[];
    sendGifts: GiftItem[];
}

export interface InvitationConfig {
    slug: string;
    data: InvitationData;
}

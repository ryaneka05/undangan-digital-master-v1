import React, { useState, useEffect, useRef } from "react";

interface AddToCalendarButtonDropDown {
    title: string;
    description?: string;
    location?: string;
    startDate: string; // format: YYYY-MM-DD HH:mm
    endDate: string;   // format: YYYY-MM-DD HH:mm
}

export default function AddToCalendarButtonDropDown({ title, description = "", location = "", startDate, endDate }: AddToCalendarButtonDropDown) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const start = new Date(startDate);
    const end = new Date(endDate);

    // --- Google Calendar URL ---
    const googleUrl =
        `https://calendar.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(title)}` +
        `&details=${encodeURIComponent(description)}` +
        `&location=${encodeURIComponent(location)}` +
        `&dates=${start.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"}` +
        `%2F${end.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"}`;

    // --- Yahoo Calendar URL ---
    const yahooUrl =
        `https://calendar.yahoo.com/?v=60` +
        `&TITLE=${encodeURIComponent(title)}` +
        `&ST=${start.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"}` +
        `&ET=${end.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"}` +
        `&DESC=${encodeURIComponent(description)}` +
        `&in_loc=${encodeURIComponent(location)}`;

    // --- ICS file for Apple / Outlook ---


    const downloadICS = () => {
        const startICS = new Date(startDate).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
        const endICS = new Date(endDate).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

        const icsContent = `
            BEGIN:VCALENDAR
            BEGIN:VEVENT
            DTSTAMP:${start}
            DTSTART:${start}
            DTEND:${end}
            SUMMARY:${title}
            DESCRIPTION:${description}
            LOCATION:${location}
            END:VEVENT
            END:VCALENDAR
            VERSION:2.0
            `.trim();

        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${title.replace(/\s+/g, "_")}.ics`;
        link.click();

        URL.revokeObjectURL(url);
    }

    // Tutup dropdown saat klik di luar
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setOpen(!open)}
                className="px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                Simpan ke Kalender ▼
            </button>

            {open && (
                <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-20">
                    <ul className="py-2 text-sm text-gray-700">
                        <li>
                            <a
                                href={googleUrl}
                                target="_blank"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Google Calendar
                            </a>
                        </li>

                        <li>
                            <button
                                onClick={downloadICS}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                Apple Calendar (ICS)
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={downloadICS}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                Outlook Calendar (ICS)
                            </button>
                        </li>

                        <li>
                            <a
                                href={yahooUrl}
                                target="_blank"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Yahoo Calendar
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
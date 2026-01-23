import React, { useEffect, useState } from "react";

export default function Loader() {
    const [show, setShow] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFade(true);
        }, 2500);

        const hideTimer = setTimeout(() => {
            setShow(false);
        }, 3000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!show) return null;

    return (
        <div
            id="spinner"
            className={`w-100 vh-100 bg-white position-fixed top-50 start-50 translate-middle
            d-flex align-items-center justify-content-center
            ${fade ? "opacity-0" : "opacity-100"}`}
            style={{ transition: "opacity 0.5s ease" }}
        >
            <div className="spinner-grow text-primary" role="status"></div>
        </div>
    );
}

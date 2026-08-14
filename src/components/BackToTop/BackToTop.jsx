import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import {
    BackToTopButton,
    ArrowIcon,
} from "./BackToTop.styled";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <BackToTopButton
            type="button"
            $visible={visible}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <ArrowIcon>
                <FiArrowUp />
            </ArrowIcon>
        </BackToTopButton>
    );
}
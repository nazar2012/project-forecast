import { useState } from "react";
import { FiX, FiCheck } from "react-icons/fi";

import {
    Overlay,
    ModalWrapper,
    CloseButton,
    Title,
    Description,
    ColorInput,
    ColorSuggestions,
    ColorSuggestion,
    ColorSquare,
    ColorName,
    CheckIcon,
    ApplyButton,
    NoResults,
} from "./ColorModal.styled";

const COLORS = [
    {
        name: "Orange",
        value: "#ffb36c",
    },
    {
        name: "Blue",
        value: "#6caeff",
    },
    {
        name: "Light Blue",
        value: "#87cefa",
    },
    {
        name: "Dark Blue",
        value: "#4169e1",
    },
    {
        name: "Purple",
        value: "#a66cff",
    },
    {
        name: "Violet",
        value: "#8a2be2",
    },
    {
        name: "Green",
        value: "#6cff91",
    },
    {
        name: "Dark Green",
        value: "#228b22",
    },
    {
        name: "Red",
        value: "#ff6c6c",
    },
    {
        name: "Pink",
        value: "#ff6cba",
    },
    {
        name: "Yellow",
        value: "#ffd66c",
    },
    {
        name: "Cyan",
        value: "#6ce5ff",
    },
    {
        name: "Black",
        value: "#111111",
    },
    {
        name: "White",
        value: "#ffffff",
    },
];

export default function ColorModal({
    onClose,
    onColorChange,
    currentColor,
}) {
    const [color, setColor] = useState(
        currentColor || "#ffb36c"
    );

    const [input, setInput] = useState("");

    const suggestions =
        input.trim() === ""
            ? COLORS
            : COLORS.filter((item) =>
                item.name
                    .toLowerCase()
                    .includes(
                        input.toLowerCase()
                    )
            );

    const handleSelect = (item) => {
        setColor(item.value);
        setInput(item.name);
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleApply = () => {
        if (!color) return;

        localStorage.setItem(
            "accentColor",
            color
        );

        if (onColorChange) {
            onColorChange(color);
        }

        onClose();
    };

    const handleOverlayClick = (event) => {
        if (
            event.target === event.currentTarget
        ) {
            onClose();
        }
    };

    return (
        <Overlay onClick={handleOverlayClick}>
            <ModalWrapper>
                <CloseButton
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <FiX />
                </CloseButton>

                <Title>
                    Choose your color
                </Title>

                <Description>
                    Pick the accent color for your
                    website.
                </Description>

                <ColorInput
                    type="text"
                    placeholder="Type a color..."
                    value={input}
                    onChange={handleInputChange}
                />

                <ColorSuggestions>
                    {suggestions.length > 0 ? (
                        suggestions.map((item) => (
                            <ColorSuggestion
                                key={item.name}
                                type="button"
                                $selected={
                                    color === item.value
                                }
                                onClick={() =>
                                    handleSelect(item)
                                }
                            >
                                <ColorSquare
                                    $color={item.value}
                                />

                                <ColorName>
                                    {item.name}
                                </ColorName>

                                {color === item.value && (
                                    <CheckIcon>
                                        <FiCheck />
                                    </CheckIcon>
                                )}
                            </ColorSuggestion>
                        ))
                    ) : (
                        <NoResults>
                            No colors found
                        </NoResults>
                    )}
                </ColorSuggestions>

                <ApplyButton
                    type="button"
                    onClick={handleApply}
                >
                    Apply color
                </ApplyButton>
            </ModalWrapper>
        </Overlay>
    );
}
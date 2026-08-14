import { FiMoon, FiSun } from "react-icons/fi";
import {
    Toggle,
    ToggleCircle,
    Icon,
} from "./ThemeToggle.styled";

export default function ThemeToggle({ darkMode, onToggle }) {
    return (
        <Toggle
            type="button"
            $dark={darkMode}
            onClick={onToggle}
            aria-label="Toggle theme"
        >
            <Icon $active={!darkMode}>
                <FiSun />
            </Icon>

            <ToggleCircle $dark={darkMode}>
                {darkMode ? <FiMoon /> : <FiSun />}
            </ToggleCircle>

            <Icon $active={darkMode}>
                <FiMoon />
            </Icon>
        </Toggle>
    );
}
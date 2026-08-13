import {
    StatusBadge,
    StatusIcon,
    StatusText,
} from "./WeatherStatus.styled";

export default function WeatherStatus({
    description = "",
}) {
    const weather = description.toLowerCase();

    let icon = "☀️";
    let text = "Clear";

    if (
        weather.includes("thunderstorm") ||
        weather.includes("storm")
    ) {
        icon = "⛈️";
        text = "Storm";
    } else if (weather.includes("snow")) {
        icon = "❄️";
        text = "Snow";
    } else if (
        weather.includes("rain") ||
        weather.includes("drizzle")
    ) {
        icon = "🌧️";
        text = "Rain";
    } else if (
        weather.includes("fog") ||
        weather.includes("mist") ||
        weather.includes("haze")
    ) {
        icon = "🌫️";
        text = "Fog";
    } else if (weather.includes("cloud")) {
        icon = "☁️";
        text = "Cloudy";
    }

    return (
        <StatusBadge>
            <StatusIcon>{icon}</StatusIcon>
            <StatusText>{text}</StatusText>
        </StatusBadge>
    );
}
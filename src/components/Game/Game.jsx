import { useCallback, useEffect, useRef, useState } from "react";
import {
    FiBookOpen,
    FiChevronLeft,
    FiChevronRight,
    FiHeart,
    FiRefreshCw,
    FiStar,
    FiX,
    FiZap,
} from "react-icons/fi";

import {
    GameOverlay,
    GameWrapper,
    GameHeader,
    GameTitle,
    CloseButton,
    GameContent,
    GameBoard,
    BoardTop,
    Stat,
    StatLabel,
    StatValue,
    WeatherBadge,
    Player,
    GameObject,
    LightningZone,
    Combo,
    GameMessage,
    StartScreen,
    StartIcon,
    StartTitle,
    StartText,
    DifficultyTitle,
    DifficultyButtons,
    DifficultyButton,
    GameOver,
    FinalScore,
    NewRecord,
    ResultStats,
    ResultItem,
    ResultLabel,
    ResultValue,
    ResultButtons,
    ResultButton,
    SecondaryButton,
    JournalToggle,
    Journal,
    JournalHeader,
    JournalTitle,
    JournalClose,
    JournalPages,
    JournalPage,
    JournalPageTitle,
    Achievement,
    AchievementIcon,
    AchievementInfo,
    AchievementName,
    AchievementDescription,
    AchievementLocked,
    JournalNavigation,
    PageButton,
    PageNumber,
    WeatherCollection,
    WeatherItem,
    WeatherIcon,
    WeatherName,
    GameHint,
    DifficultyBadge,
} from "./Game.styled";

const GAME_TIME = 60;

const difficulties = {
    easy: {
        name: "Easy",
        time: 60,
        lives: 3,
        spawnRate: 2000,
        score: 10,
        dangerChance: 0.25,
    },

    medium: {
        name: "Medium",
        time: 60,
        lives: 3,
        spawnRate: 1400,
        score: 15,
        dangerChance: 0.45,
    },

    hard: {
        name: "Hard",
        time: 60,
        lives: 2,
        spawnRate: 900,
        score: 20,
        dangerChance: 0.65,
    },
};

const weatherTypes = [
    {
        id: "sun",
        name: "Sunny",
        icon: "☀️",
        color: "#ffd166",
    },
    {
        id: "rain",
        name: "Rain",
        icon: "🌧️",
        color: "#60a5fa",
    },
    {
        id: "wind",
        name: "Wind",
        icon: "💨",
        color: "#94a3b8",
    },
    {
        id: "storm",
        name: "Storm",
        icon: "⛈️",
        color: "#a78bfa",
    },
    {
        id: "snow",
        name: "Snow",
        icon: "❄️",
        color: "#bae6fd",
    },
];

const achievements = [
    {
        id: "first",
        icon: "🏆",
        name: "First Forecast",
        description: "Play your first Weather Rush game.",
    },
    {
        id: "sun",
        icon: "☀️",
        name: "Sun Chaser",
        description: "Collect 100 sunny objects.",
    },
    {
        id: "rain",
        icon: "💧",
        name: "Rain Collector",
        description: "Collect 100 rain drops.",
    },
    {
        id: "storm",
        icon: "⚡",
        name: "Storm Survivor",
        description: "Dodge 50 lightning strikes.",
    },
    {
        id: "combo",
        icon: "🔥",
        name: "Combo Master",
        description: "Reach a x10 combo.",
    },
];

const collection = [
    {
        id: "clear",
        icon: "☀️",
        name: "Clear",
    },
    {
        id: "cloudy",
        icon: "🌤️",
        name: "Cloudy",
    },
    {
        id: "rain",
        icon: "🌧️",
        name: "Rain",
    },
    {
        id: "storm",
        icon: "⛈️",
        name: "Storm",
    },
    {
        id: "snow",
        icon: "❄️",
        name: "Snow",
    },
    {
        id: "rainbow",
        icon: "🌈",
        name: "Rainbow",
    },
];

const createDefaultStats = () => ({
    games: 0,

    bestScores: {
        easy: 0,
        medium: 0,
        hard: 0,
    },

    bestCombo: 0,

    sun: 0,
    rain: 0,
    stormDodged: 0,
    rainbow: 0,
});

const getInitialStats = () => {
    try {
        const saved = localStorage.getItem("weatherGameStats");

        if (!saved) {
            return createDefaultStats();
        }

        const parsed = JSON.parse(saved);

        return {
            games: Number(parsed.games) || 0,

            bestScores: {
                easy: Number(parsed.bestScores?.easy) || 0,
                medium: Number(parsed.bestScores?.medium) || 0,
                hard: Number(parsed.bestScores?.hard) || 0,
            },

            bestCombo: Number(parsed.bestCombo) || 0,

            sun: Number(parsed.sun) || 0,
            rain: Number(parsed.rain) || 0,
            stormDodged: Number(parsed.stormDodged) || 0,
            rainbow: Number(parsed.rainbow) || 0,
        };
    } catch {
        return createDefaultStats();
    }
};

const getRandomWeather = () => {
    return weatherTypes[
        Math.floor(Math.random() * weatherTypes.length)
    ];
};

const getRandomPosition = () => ({
    x: Math.random() * 82 + 6,
    y: Math.random() * 72 + 12,
});

const createObject = (weather, difficulty) => {
    const position = getRandomPosition();

    const isDanger =
        weather.id === "storm" &&
        Math.random() <
        difficulties[difficulty].dangerChance;

    return {
        id: `${Date.now()}-${Math.random()}`,
        type: weather.id,
        icon: weather.icon,
        x: position.x,
        y: position.y,
        danger: isDanger,
    };
};

export default function Game({ onClose }) {
    const boardRef = useRef(null);

    const playerRef = useRef({
        x: 50,
        y: 50,
    });

    const keysRef = useRef({});

    const scoreRef = useRef(0);
    const comboRef = useRef(0);
    const livesRef = useRef(3);

    const collectedRef = useRef({
        sun: 0,
        rain: 0,
        stormDodged: 0,
        rainbow: 0,
    });

    const gameStartedRef = useRef(false);
    const difficultyRef = useRef(null);

    const gameLoopRef = useRef(null);
    const spawnRef = useRef(null);
    const collisionRef = useRef(null);
    const lightningRef = useRef(null);
    const lightningIdRef = useRef(null);

    const endGameRef = useRef(null);

    const [difficulty, setDifficulty] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [lives, setLives] = useState(3);
    const [timeLeft, setTimeLeft] = useState(GAME_TIME);

    const [player, setPlayer] = useState({
        x: 50,
        y: 50,
    });

    const [objects, setObjects] = useState([]);
    const [lightning, setLightning] = useState(null);

    const [collected, setCollected] = useState({
        sun: 0,
        rain: 0,
        stormDodged: 0,
        rainbow: 0,
    });

    const [weather, setWeather] = useState(
        weatherTypes[0]
    );

    const [message, setMessage] = useState("");

    const [journalOpen, setJournalOpen] =
        useState(false);

    const [journalPage, setJournalPage] =
        useState(0);

    const [stats, setStats] =
        useState(getInitialStats);

    const clearGameTimers = useCallback(() => {
        if (gameLoopRef.current) {
            cancelAnimationFrame(
                gameLoopRef.current
            );

            gameLoopRef.current = null;
        }

        if (spawnRef.current) {
            clearInterval(spawnRef.current);

            spawnRef.current = null;
        }

        if (collisionRef.current) {
            clearInterval(
                collisionRef.current
            );

            collisionRef.current = null;
        }

        if (lightningRef.current) {
            clearTimeout(
                lightningRef.current
            );

            lightningRef.current = null;
        }

        lightningIdRef.current = null;
    }, []);

    const saveStats = useCallback(
        (
            finalScore,
            finalCombo,
            finalCollected,
            selectedDifficulty
        ) => {
            setStats((previous) => {
                const updated = {
                    ...previous,

                    games:
                        (previous.games || 0) + 1,

                    bestScores: {
                        ...previous.bestScores,

                        [selectedDifficulty]:
                            Math.max(
                                previous
                                    .bestScores?.[
                                selectedDifficulty
                                ] || 0,
                                finalScore
                            ),
                    },

                    bestCombo: Math.max(
                        previous.bestCombo || 0,
                        finalCombo
                    ),

                    sun:
                        (previous.sun || 0) +
                        (finalCollected.sun || 0),

                    rain:
                        (previous.rain || 0) +
                        (finalCollected.rain || 0),

                    stormDodged:
                        (previous.stormDodged || 0) +
                        (finalCollected.stormDodged || 0),

                    rainbow:
                        (previous.rainbow || 0) +
                        (finalCollected.rainbow || 0),
                };

                try {
                    localStorage.setItem(
                        "weatherGameStats",
                        JSON.stringify(updated)
                    );
                } catch {
                    // localStorage may be unavailable.
                }

                return updated;
            });
        },
        []
    );

    const endGame = useCallback(() => {
        if (
            !gameStartedRef.current ||
            !difficultyRef.current
        ) {
            return;
        }

        const selectedDifficulty =
            difficultyRef.current;

        const finalScore = scoreRef.current;
        const finalCombo = comboRef.current;

        const finalCollected = {
            ...collectedRef.current,
        };

        gameStartedRef.current = false;

        setGameStarted(false);
        setGameOver(true);

        clearGameTimers();

        saveStats(
            finalScore,
            finalCombo,
            finalCollected,
            selectedDifficulty
        );
    }, [
        clearGameTimers,
        saveStats,
    ]);

    endGameRef.current = endGame;

    const resetGame = useCallback(
        (selectedDifficulty) => {
            const config =
                difficulties[selectedDifficulty];

            clearGameTimers();

            scoreRef.current = 0;
            comboRef.current = 0;
            livesRef.current =
                config.lives;

            collectedRef.current = {
                sun: 0,
                rain: 0,
                stormDodged: 0,
                rainbow: 0,
            };

            playerRef.current = {
                x: 50,
                y: 50,
            };

            setScore(0);
            setCombo(0);
            setLives(config.lives);
            setTimeLeft(config.time);

            setObjects([]);
            setLightning(null);
            setMessage("");

            setPlayer({
                x: 50,
                y: 50,
            });

            setCollected({
                sun: 0,
                rain: 0,
                stormDodged: 0,
                rainbow: 0,
            });

            setWeather(weatherTypes[0]);
        },
        [clearGameTimers]
    );

    const startGame = useCallback(
        (selectedDifficulty) => {
            resetGame(selectedDifficulty);

            difficultyRef.current =
                selectedDifficulty;

            gameStartedRef.current = true;

            setDifficulty(
                selectedDifficulty
            );

            setGameStarted(true);
            setGameOver(false);
        },
        [resetGame]
    );

    useEffect(() => {
        if (!gameStarted) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((previous) => {
                if (previous <= 1) {
                    clearInterval(timer);

                    if (
                        endGameRef.current
                    ) {
                        endGameRef.current();
                    }

                    return 0;
                }

                return previous - 1;
            });
        }, 1000);

        return () =>
            clearInterval(timer);
    }, [gameStarted]);

    useEffect(() => {
        if (
            !gameStarted ||
            !difficulty
        ) {
            return;
        }

        const config =
            difficulties[difficulty];

        spawnRef.current = setInterval(() => {
            const nextWeather =
                getRandomWeather();

            setWeather(nextWeather);

            setObjects((previous) => {
                const nextObject =
                    createObject(
                        nextWeather,
                        difficulty
                    );

                return [
                    ...previous.slice(-9),
                    nextObject,
                ];
            });

            if (
                nextWeather.id === "storm" &&
                Math.random() <
                config.dangerChance
            ) {
                const position =
                    getRandomPosition();

                const lightningId =
                    Date.now();

                lightningIdRef.current =
                    lightningId;

                setLightning({
                    id: lightningId,
                    x: position.x,
                    y: position.y,
                });

                if (lightningRef.current) {
                    clearTimeout(
                        lightningRef.current
                    );
                }

                lightningRef.current =
                    setTimeout(() => {
                        if (
                            lightningIdRef.current !==
                            lightningId
                        ) {
                            return;
                        }

                        setLightning(null);
                        lightningRef.current =
                            null;

                        collectedRef.current = {
                            ...collectedRef.current,

                            stormDodged:
                                collectedRef
                                    .current
                                    .stormDodged +
                                1,
                        };

                        setCollected(
                            collectedRef.current
                        );
                    }, 1200);
            }
        }, config.spawnRate);

        return () => {
            if (spawnRef.current) {
                clearInterval(
                    spawnRef.current
                );

                spawnRef.current = null;
            }
        };
    }, [
        gameStarted,
        difficulty,
    ]);

    useEffect(() => {
        if (!gameStarted) {
            return;
        }

        const handleKeyDown = (event) => {
            const key =
                event.key.length === 1
                    ? event.key.toLowerCase()
                    : event.key;

            keysRef.current[key] = true;
        };

        const handleKeyUp = (event) => {
            const key =
                event.key.length === 1
                    ? event.key.toLowerCase()
                    : event.key;

            keysRef.current[key] = false;
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        window.addEventListener(
            "keyup",
            handleKeyUp
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

            window.removeEventListener(
                "keyup",
                handleKeyUp
            );
        };
    }, [gameStarted]);

    useEffect(() => {
        if (!gameStarted) {
            return;
        }

        const movePlayer = () => {
            const currentDifficulty =
                difficultyRef.current;

            const speed =
                currentDifficulty === "hard"
                    ? 1
                    : currentDifficulty ===
                        "medium"
                        ? 0.9
                        : 0.8;

            let { x, y } =
                playerRef.current;

            if (
                keysRef.current.ArrowLeft ||
                keysRef.current.a
            ) {
                x -= speed;
            }

            if (
                keysRef.current.ArrowRight ||
                keysRef.current.d
            ) {
                x += speed;
            }

            if (
                keysRef.current.ArrowUp ||
                keysRef.current.w
            ) {
                y -= speed;
            }

            if (
                keysRef.current.ArrowDown ||
                keysRef.current.s
            ) {
                y += speed;
            }

            x = Math.max(
                4,
                Math.min(96, x)
            );

            y = Math.max(
                8,
                Math.min(92, y)
            );

            playerRef.current = {
                x,
                y,
            };

            setPlayer({
                x,
                y,
            });

            gameLoopRef.current =
                requestAnimationFrame(
                    movePlayer
                );
        };

        gameLoopRef.current =
            requestAnimationFrame(
                movePlayer
            );

        return () => {
            if (gameLoopRef.current) {
                cancelAnimationFrame(
                    gameLoopRef.current
                );

                gameLoopRef.current = null;
            }
        };
    }, [gameStarted]);

    useEffect(() => {
        if (
            !gameStarted ||
            !difficulty
        ) {
            return;
        }

        const config =
            difficulties[difficulty];

        collisionRef.current =
            setInterval(() => {
                const currentPlayer =
                    playerRef.current;

                setObjects((previous) => {
                    const remaining = [];

                    let nextScore =
                        scoreRef.current;

                    let nextCombo =
                        comboRef.current;

                    let nextLives =
                        livesRef.current;

                    let nextCollected = {
                        ...collectedRef.current,
                    };

                    let changed = false;
                    let hitDanger = false;
                    let pointsGained = 0;

                    previous.forEach(
                        (object) => {
                            const dx =
                                object.x -
                                currentPlayer.x;

                            const dy =
                                object.y -
                                currentPlayer.y;

                            const distance =
                                Math.sqrt(
                                    dx * dx +
                                    dy * dy
                                );

                            if (
                                distance < 7
                            ) {
                                changed = true;

                                if (
                                    object.danger
                                ) {
                                    nextLives =
                                        Math.max(
                                            0,
                                            nextLives -
                                            1
                                        );

                                    nextCombo = 0;
                                    hitDanger = true;
                                } else {
                                    const points =
                                        config.score +
                                        nextCombo * 2;

                                    nextScore +=
                                        points;

                                    nextCombo += 1;

                                    pointsGained +=
                                        points;

                                    nextCollected[
                                        object.type
                                    ] =
                                        (nextCollected[
                                            object.type
                                        ] || 0) + 1;
                                }

                                return;
                            }

                            remaining.push(
                                object
                            );
                        }
                    );

                    if (changed) {
                        scoreRef.current =
                            nextScore;

                        comboRef.current =
                            nextCombo;

                        livesRef.current =
                            nextLives;

                        collectedRef.current =
                            nextCollected;

                        setScore(nextScore);
                        setCombo(nextCombo);
                        setLives(nextLives);
                        setCollected(
                            nextCollected
                        );

                        if (hitDanger) {
                            setMessage(
                                "⚡ Storm hit!"
                            );
                        } else if (
                            pointsGained > 0
                        ) {
                            setMessage(
                                `+${pointsGained}`
                            );
                        }

                        if (
                            nextLives <= 0 &&
                            endGameRef.current
                        ) {
                            setTimeout(() => {
                                endGameRef.current();
                            }, 0);
                        }
                    }

                    return remaining;
                });
            }, 50);

        return () => {
            if (
                collisionRef.current
            ) {
                clearInterval(
                    collisionRef.current
                );

                collisionRef.current = null;
            }
        };
    }, [
        gameStarted,
        difficulty,
    ]);

    useEffect(() => {
        if (!message) {
            return;
        }

        const timeout =
            setTimeout(() => {
                setMessage("");
            }, 600);

        return () =>
            clearTimeout(timeout);
    }, [message]);

    useEffect(() => {
        return () => {
            gameStartedRef.current = false;

            clearGameTimers();

            window.removeEventListener(
                "keydown",
                () => { }
            );

            window.removeEventListener(
                "keyup",
                () => { }
            );
        };
    }, [clearGameTimers]);

    const handleBoardClick = (
        event
    ) => {
        if (!gameStarted) {
            return;
        }

        const rect =
            boardRef.current?.getBoundingClientRect();

        if (!rect) {
            return;
        }

        const x =
            ((event.clientX -
                rect.left) /
                rect.width) *
            100;

        const y =
            ((event.clientY -
                rect.top) /
                rect.height) *
            100;

        playerRef.current = {
            x: Math.max(
                4,
                Math.min(96, x)
            ),

            y: Math.max(
                8,
                Math.min(92, y)
            ),
        };

        setPlayer(
            playerRef.current
        );
    };

    const getBestScore = () => {
        if (!difficulty) {
            return 0;
        }

        return (
            stats.bestScores?.[
            difficulty
            ] || 0
        );
    };

    const isNewRecord =
        gameOver &&
        score > 0 &&
        score >= getBestScore();

    const achievementUnlocked = (
        achievement
    ) => {
        if (achievement.id === "first") {
            return stats.games > 0;
        }

        if (achievement.id === "sun") {
            return stats.sun >= 100;
        }

        if (achievement.id === "rain") {
            return stats.rain >= 100;
        }

        if (achievement.id === "storm") {
            return (
                stats.stormDodged >= 50
            );
        }

        if (achievement.id === "combo") {
            return stats.bestCombo >= 10;
        }

        return false;
    };

    return (
        <GameOverlay
            onClick={onClose}
        >
            <GameWrapper
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <GameHeader>
                    <GameTitle>
                        <span>🌦️</span>
                        Weather Rush
                    </GameTitle>

                    <CloseButton
                        type="button"
                        onClick={onClose}
                        aria-label="Close game"
                    >
                        <FiX />
                    </CloseButton>
                </GameHeader>

                <GameContent>
                    <GameBoard
                        ref={boardRef}
                        $weather={weather.id}
                        onClick={
                            handleBoardClick
                        }
                    >
                        {!gameStarted &&
                            !gameOver && (
                                <StartScreen>
                                    <StartIcon>
                                        🌦️
                                    </StartIcon>

                                    <StartTitle>
                                        Weather Rush
                                    </StartTitle>

                                    <StartText>
                                        Survive changing
                                        weather, collect
                                        bonuses and build
                                        the highest combo.
                                    </StartText>

                                    <DifficultyTitle>
                                        Choose difficulty
                                    </DifficultyTitle>

                                    <DifficultyButtons>
                                        <DifficultyButton
                                            type="button"
                                            $active={
                                                difficulty ===
                                                "easy"
                                            }
                                            $difficulty="easy"
                                            onClick={() =>
                                                startGame(
                                                    "easy"
                                                )
                                            }
                                        >
                                            Easy
                                        </DifficultyButton>

                                        <DifficultyButton
                                            type="button"
                                            $active={
                                                difficulty ===
                                                "medium"
                                            }
                                            $difficulty="medium"
                                            onClick={() =>
                                                startGame(
                                                    "medium"
                                                )
                                            }
                                        >
                                            Medium
                                        </DifficultyButton>

                                        <DifficultyButton
                                            type="button"
                                            $active={
                                                difficulty ===
                                                "hard"
                                            }
                                            $difficulty="hard"
                                            onClick={() =>
                                                startGame(
                                                    "hard"
                                                )
                                            }
                                        >
                                            Hard
                                        </DifficultyButton>
                                    </DifficultyButtons>

                                    <GameHint>
                                        Easy · Medium · Hard
                                    </GameHint>
                                </StartScreen>
                            )}

                        {gameStarted && (
                            <>
                                <BoardTop>
                                    <Stat>
                                        <StatLabel>
                                            Score
                                        </StatLabel>

                                        <StatValue>
                                            {score}
                                        </StatValue>
                                    </Stat>

                                    <Stat>
                                        <StatLabel>
                                            Combo
                                        </StatLabel>

                                        <StatValue>
                                            x{combo}
                                        </StatValue>
                                    </Stat>

                                    <Stat>
                                        <StatLabel>
                                            Time
                                        </StatLabel>

                                        <StatValue
                                            $danger={
                                                timeLeft <=
                                                10
                                            }
                                        >
                                            {timeLeft}s
                                        </StatValue>
                                    </Stat>

                                    <Stat>
                                        <StatLabel>
                                            Lives
                                        </StatLabel>

                                        <StatValue>
                                            {Array.from({
                                                length:
                                                    difficulties[
                                                        difficulty
                                                    ].lives,
                                            }).map(
                                                (_, index) => (
                                                    <FiHeart
                                                        key={
                                                            index
                                                        }
                                                        fill={
                                                            index <
                                                                lives
                                                                ? "currentColor"
                                                                : "none"
                                                        }
                                                    />
                                                )
                                            )}
                                        </StatValue>
                                    </Stat>
                                </BoardTop>

                                <WeatherBadge>
                                    {weather.icon}{" "}
                                    {weather.name}
                                </WeatherBadge>

                                <DifficultyBadge
                                    $difficulty={
                                        difficulty
                                    }
                                >
                                    {
                                        difficulties[
                                            difficulty
                                        ].name
                                    }
                                </DifficultyBadge>

                                {combo >= 3 && (
                                    <Combo>
                                        🔥 COMBO x
                                        {combo}
                                    </Combo>
                                )}

                                {message && (
                                    <GameMessage>
                                        {message}
                                    </GameMessage>
                                )}

                                <Player
                                    style={{
                                        left: `${player.x}%`,
                                        top: `${player.y}%`,
                                    }}
                                >
                                    <FiStar />
                                </Player>

                                {objects.map(
                                    (object) => (
                                        <GameObject
                                            key={
                                                object.id
                                            }
                                            $danger={
                                                object.danger
                                            }
                                            style={{
                                                left: `${object.x}%`,
                                                top: `${object.y}%`,
                                            }}
                                        >
                                            {
                                                object.icon
                                            }
                                        </GameObject>
                                    )
                                )}

                                {lightning && (
                                    <LightningZone
                                        style={{
                                            left: `${lightning.x}%`,
                                            top: `${lightning.y}%`,
                                        }}
                                    >
                                        <FiZap />
                                    </LightningZone>
                                )}

                                <GameHint>
                                    WASD / arrows · tap
                                    to move
                                </GameHint>
                            </>
                        )}

                        {gameOver && (
                            <GameOver>
                                <StartIcon>
                                    {lives <= 0
                                        ? "⚡"
                                        : "🏆"}
                                </StartIcon>

                                <StartTitle>
                                    {lives <= 0
                                        ? "Storm got you!"
                                        : "Weather Complete!"}
                                </StartTitle>

                                <DifficultyBadge
                                    $difficulty={
                                        difficulty
                                    }
                                >
                                    {
                                        difficulties[
                                            difficulty
                                        ].name
                                    }
                                </DifficultyBadge>

                                {isNewRecord && (
                                    <NewRecord>
                                        NEW RECORD!
                                    </NewRecord>
                                )}

                                <FinalScore>
                                    {score}
                                </FinalScore>

                                <ResultStats>
                                    <ResultItem>
                                        <ResultLabel>
                                            Best score
                                        </ResultLabel>

                                        <ResultValue>
                                            {Math.max(
                                                score,
                                                getBestScore()
                                            )}
                                        </ResultValue>
                                    </ResultItem>

                                    <ResultItem>
                                        <ResultLabel>
                                            Best combo
                                        </ResultLabel>

                                        <ResultValue>
                                            x
                                            {Math.max(
                                                combo,
                                                stats.bestCombo
                                            )}
                                        </ResultValue>
                                    </ResultItem>
                                </ResultStats>

                                <ResultButtons>
                                    <ResultButton
                                        type="button"
                                        onClick={() =>
                                            startGame(
                                                difficulty
                                            )
                                        }
                                    >
                                        <FiRefreshCw />
                                        Play again
                                    </ResultButton>

                                    <SecondaryButton
                                        type="button"
                                        onClick={() => {
                                            clearGameTimers();

                                            gameStartedRef.current =
                                                false;

                                            difficultyRef.current =
                                                null;

                                            setGameStarted(
                                                false
                                            );

                                            setGameOver(
                                                false
                                            );

                                            setDifficulty(
                                                null
                                            );
                                        }}
                                    >
                                        Change difficulty
                                    </SecondaryButton>

                                    <SecondaryButton
                                        type="button"
                                        onClick={onClose}
                                    >
                                        Close
                                    </SecondaryButton>
                                </ResultButtons>
                            </GameOver>
                        )}
                    </GameBoard>

                    <JournalToggle
                        type="button"
                        onClick={() =>
                            setJournalOpen(
                                (value) =>
                                    !value
                            )
                        }
                        aria-label="Open weather journal"
                    >
                        <FiBookOpen />
                        <span>Journal</span>
                    </JournalToggle>

                    {journalOpen && (
                        <Journal>
                            <JournalHeader>
                                <JournalTitle>
                                    <FiBookOpen />
                                    Weather Journal
                                </JournalTitle>

                                <JournalClose
                                    type="button"
                                    onClick={() =>
                                        setJournalOpen(
                                            false
                                        )
                                    }
                                >
                                    <FiX />
                                </JournalClose>
                            </JournalHeader>

                            <JournalPages>
                                {journalPage ===
                                    0 && (
                                        <JournalPage>
                                            <JournalPageTitle>
                                                Achievements
                                            </JournalPageTitle>

                                            {achievements.map(
                                                (
                                                    achievement
                                                ) => {
                                                    const unlocked =
                                                        achievementUnlocked(
                                                            achievement
                                                        );

                                                    return (
                                                        <Achievement
                                                            key={
                                                                achievement.id
                                                            }
                                                            $unlocked={
                                                                unlocked
                                                            }
                                                        >
                                                            <AchievementIcon>
                                                                {unlocked ? (
                                                                    achievement.icon
                                                                ) : (
                                                                    <AchievementLocked>
                                                                        🔒
                                                                    </AchievementLocked>
                                                                )}
                                                            </AchievementIcon>

                                                            <AchievementInfo>
                                                                <AchievementName>
                                                                    {unlocked
                                                                        ? achievement.name
                                                                        : "Unknown weather"}
                                                                </AchievementName>

                                                                <AchievementDescription>
                                                                    {unlocked
                                                                        ? achievement.description
                                                                        : "Keep playing to discover this achievement."}
                                                                </AchievementDescription>
                                                            </AchievementInfo>
                                                        </Achievement>
                                                    );
                                                }
                                            )}
                                        </JournalPage>
                                    )}

                                {journalPage ===
                                    1 && (
                                        <JournalPage>
                                            <JournalPageTitle>
                                                Statistics
                                            </JournalPageTitle>

                                            <Achievement>
                                                <AchievementIcon>
                                                    🎮
                                                </AchievementIcon>

                                                <AchievementInfo>
                                                    <AchievementName>
                                                        Games played
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Total Weather Rush
                                                        sessions
                                                    </AchievementDescription>
                                                </AchievementInfo>

                                                <AchievementName>
                                                    {
                                                        stats.games
                                                    }
                                                </AchievementName>
                                            </Achievement>

                                            <Achievement>
                                                <AchievementIcon>
                                                    🏆
                                                </AchievementIcon>

                                                <AchievementInfo>
                                                    <AchievementName>
                                                        Easy best
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Best Easy score
                                                    </AchievementDescription>
                                                </AchievementInfo>

                                                <AchievementName>
                                                    {
                                                        stats
                                                            .bestScores
                                                            .easy
                                                    }
                                                </AchievementName>
                                            </Achievement>

                                            <Achievement>
                                                <AchievementIcon>
                                                    🌦️
                                                </AchievementIcon>

                                                <AchievementInfo>
                                                    <AchievementName>
                                                        Medium best
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Best Medium score
                                                    </AchievementDescription>
                                                </AchievementInfo>

                                                <AchievementName>
                                                    {
                                                        stats
                                                            .bestScores
                                                            .medium
                                                    }
                                                </AchievementName>
                                            </Achievement>

                                            <Achievement>
                                                <AchievementIcon>
                                                    ⛈️
                                                </AchievementIcon>

                                                <AchievementInfo>
                                                    <AchievementName>
                                                        Hard best
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Best Hard score
                                                    </AchievementDescription>
                                                </AchievementInfo>

                                                <AchievementName>
                                                    {
                                                        stats
                                                            .bestScores
                                                            .hard
                                                    }
                                                </AchievementName>
                                            </Achievement>

                                            <Achievement>
                                                <AchievementIcon>
                                                    🔥
                                                </AchievementIcon>

                                                <AchievementInfo>
                                                    <AchievementName>
                                                        Best combo
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Highest combo reached
                                                    </AchievementDescription>
                                                </AchievementInfo>

                                                <AchievementName>
                                                    x
                                                    {
                                                        stats.bestCombo
                                                    }
                                                </AchievementName>
                                            </Achievement>

                                            <Achievement>
                                                <AchievementIcon>
                                                    ☀️
                                                </AchievementIcon>

                                                <AchievementInfo>
                                                    <AchievementName>
                                                        Sun objects
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Total collected
                                                    </AchievementDescription>
                                                </AchievementInfo>

                                                <AchievementName>
                                                    {
                                                        stats.sun
                                                    }
                                                </AchievementName>
                                            </Achievement>

                                            <Achievement>
                                                <AchievementIcon>
                                                    💧
                                                </AchievementIcon>

                                                <AchievementInfo>
                                                    <AchievementName>
                                                        Rain drops
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Total collected
                                                    </AchievementDescription>
                                                </AchievementInfo>

                                                <AchievementName>
                                                    {
                                                        stats.rain
                                                    }
                                                </AchievementName>
                                            </Achievement>
                                        </JournalPage>
                                    )}

                                {journalPage ===
                                    2 && (
                                        <JournalPage>
                                            <JournalPageTitle>
                                                Weather Collection
                                            </JournalPageTitle>

                                            <WeatherCollection>
                                                {collection.map(
                                                    (
                                                        item
                                                    ) => {
                                                        const unlocked =
                                                            item.id ===
                                                            "clear" ||
                                                            item.id ===
                                                            "cloudy" ||
                                                            (item.id ===
                                                                "rain" &&
                                                                stats.rain >
                                                                0) ||
                                                            (item.id ===
                                                                "storm" &&
                                                                stats.stormDodged >
                                                                0) ||
                                                            (item.id ===
                                                                "rainbow" &&
                                                                stats.rainbow >
                                                                0);

                                                        return (
                                                            <WeatherItem
                                                                key={
                                                                    item.id
                                                                }
                                                                $unlocked={
                                                                    unlocked
                                                                }
                                                            >
                                                                <WeatherIcon>
                                                                    {unlocked
                                                                        ? item.icon
                                                                        : "?"}
                                                                </WeatherIcon>

                                                                <WeatherName>
                                                                    {unlocked
                                                                        ? item.name
                                                                        : "Unknown"}
                                                                </WeatherName>
                                                            </WeatherItem>
                                                        );
                                                    }
                                                )}
                                            </WeatherCollection>
                                        </JournalPage>
                                    )}
                            </JournalPages>

                            <JournalNavigation>
                                <PageButton
                                    type="button"
                                    disabled={
                                        journalPage ===
                                        0
                                    }
                                    onClick={() =>
                                        setJournalPage(
                                            (
                                                page
                                            ) =>
                                                Math.max(
                                                    0,
                                                    page -
                                                    1
                                                )
                                        )
                                    }
                                >
                                    <FiChevronLeft />
                                </PageButton>

                                <PageNumber>
                                    {journalPage +
                                        1}{" "}
                                    / 3
                                </PageNumber>

                                <PageButton
                                    type="button"
                                    disabled={
                                        journalPage ===
                                        2
                                    }
                                    onClick={() =>
                                        setJournalPage(
                                            (
                                                page
                                            ) =>
                                                Math.min(
                                                    2,
                                                    page +
                                                    1
                                                )
                                        )
                                    }
                                >
                                    <FiChevronRight />
                                </PageButton>
                            </JournalNavigation>
                        </Journal>
                    )}
                </GameContent>
            </GameWrapper>
        </GameOverlay>
    );
}
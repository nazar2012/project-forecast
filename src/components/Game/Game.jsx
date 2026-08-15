import { useCallback, useEffect, useRef, useState } from "react";
import {
    FiBookOpen,
    FiChevronLeft,
    FiChevronRight,
    FiHeart,
    FiPlay,
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
    StartButton,
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
} from "./Game.styled";

const GAME_TIME = 60;

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
        description: "Collect 100 sunny shards.",
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
        id: "rainbow",
        icon: "🌈",
        name: "Lucky Rainbow",
        description: "Catch a rainbow bonus.",
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

const getRandomWeather = () =>
    weatherTypes[
    Math.floor(Math.random() * weatherTypes.length)
    ];

const getRandomPosition = () => ({
    x: Math.random() * 82 + 6,
    y: Math.random() * 72 + 12,
});

const createObject = (weather) => {
    const position = getRandomPosition();

    const isDanger =
        weather.id === "storm" &&
        Math.random() > 0.45;

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
    const playerRef = useRef({ x: 50, y: 50 });
    const keysRef = useRef({});
    const gameLoopRef = useRef(null);
    const spawnRef = useRef(null);
    const lightningRef = useRef(null);

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

    const [stats, setStats] = useState(() => {
        const saved = localStorage.getItem(
            "weatherGameStats"
        );

        if (saved) {
            try {
                return JSON.parse(saved);
            } catch {
                return {
                    games: 0,
                    bestScore: 0,
                    bestCombo: 0,
                    sun: 0,
                    rain: 0,
                    stormDodged: 0,
                    rainbow: 0,
                };
            }
        }

        return {
            games: 0,
            bestScore: 0,
            bestCombo: 0,
            sun: 0,
            rain: 0,
            stormDodged: 0,
            rainbow: 0,
        };
    });

    const resetGame = useCallback(() => {
        setScore(0);
        setCombo(0);
        setLives(3);
        setTimeLeft(GAME_TIME);
        setObjects([]);
        setLightning(null);
        setMessage("");
        setGameOver(false);

        setCollected({
            sun: 0,
            rain: 0,
            stormDodged: 0,
            rainbow: 0,
        });

        playerRef.current = {
            x: 50,
            y: 50,
        };

        setPlayer({
            x: 50,
            y: 50,
        });

        setWeather(weatherTypes[0]);
    }, []);

    const saveStats = useCallback(
        (finalScore, finalCombo, collectedData) => {
            setStats((previous) => {
                const updated = {
                    ...previous,

                    games: previous.games + 1,

                    bestScore: Math.max(
                        previous.bestScore,
                        finalScore
                    ),

                    bestCombo: Math.max(
                        previous.bestCombo,
                        finalCombo
                    ),

                    sun:
                        previous.sun +
                        (collectedData.sun || 0),

                    rain:
                        previous.rain +
                        (collectedData.rain || 0),

                    stormDodged:
                        previous.stormDodged +
                        (collectedData.stormDodged || 0),

                    rainbow:
                        previous.rainbow +
                        (collectedData.rainbow || 0),
                };

                localStorage.setItem(
                    "weatherGameStats",
                    JSON.stringify(updated)
                );

                return updated;
            });
        },
        []
    );

    const startGame = useCallback(() => {
        resetGame();
        setGameStarted(true);
    }, [resetGame]);

    const endGame = useCallback(() => {
        setGameStarted(false);
        setGameOver(true);

        if (gameLoopRef.current) {
            cancelAnimationFrame(
                gameLoopRef.current
            );
        }

        if (spawnRef.current) {
            clearInterval(spawnRef.current);
        }

        if (lightningRef.current) {
            clearTimeout(lightningRef.current);
        }

        saveStats(
            score,
            combo,
            collected
        );
    }, [
        score,
        combo,
        collected,
        saveStats,
    ]);

    useEffect(() => {
        if (!gameStarted) return;

        const timer = setInterval(() => {
            setTimeLeft((previous) => {
                if (previous <= 1) {
                    clearInterval(timer);
                    return 0;
                }

                return previous - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [gameStarted]);

    useEffect(() => {
        if (
            gameStarted &&
            timeLeft <= 0
        ) {
            endGame();
        }
    }, [
        timeLeft,
        gameStarted,
        endGame,
    ]);

    useEffect(() => {
        if (!gameStarted) return;

        spawnRef.current = setInterval(() => {
            const nextWeather =
                getRandomWeather();

            setWeather(nextWeather);

            setObjects((previous) => {
                const nextObject =
                    createObject(nextWeather);

                return [
                    ...previous.slice(-7),
                    nextObject,
                ];
            });

            if (
                nextWeather.id === "storm" &&
                Math.random() > 0.4
            ) {
                const position =
                    getRandomPosition();

                setLightning({
                    id: Date.now(),
                    x: position.x,
                    y: position.y,
                });

                lightningRef.current =
                    setTimeout(() => {
                        setLightning(null);
                    }, 1200);
            }
        }, 1700);

        return () => {
            clearInterval(
                spawnRef.current
            );
        };
    }, [gameStarted]);

    useEffect(() => {
        if (!gameStarted) return;

        const handleKeyDown = (event) => {
            keysRef.current[event.key] = true;
        };

        const handleKeyUp = (event) => {
            keysRef.current[event.key] = false;
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
        if (!gameStarted) return;

        const movePlayer = () => {
            const speed = 0.8;

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
            cancelAnimationFrame(
                gameLoopRef.current
            );
        };
    }, [gameStarted]);

    useEffect(() => {
        if (!gameStarted) return;

        const collisionTimer =
            setInterval(() => {
                setObjects((previous) => {
                    const remaining = [];

                    previous.forEach((object) => {
                        const dx =
                            object.x -
                            playerRef.current.x;

                        const dy =
                            object.y -
                            playerRef.current.y;

                        const distance =
                            Math.sqrt(
                                dx * dx +
                                dy * dy
                            );

                        if (distance < 7) {
                            if (object.danger) {
                                setLives((value) =>
                                    Math.max(
                                        0,
                                        value - 1
                                    )
                                );

                                setCombo(0);

                                setMessage(
                                    "⚡ Storm hit!"
                                );
                            } else {
                                const points =
                                    10 +
                                    combo * 2;

                                setScore(
                                    (value) =>
                                        value +
                                        points
                                );

                                setCombo(
                                    (value) =>
                                        value + 1
                                );

                                setCollected(
                                    (previousCollected) => ({
                                        ...previousCollected,

                                        [object.type]:
                                            (previousCollected[
                                                object.type
                                            ] || 0) + 1,
                                    })
                                );

                                setMessage(
                                    `+${points}`
                                );
                            }

                            return;
                        }

                        remaining.push(object);
                    });

                    return remaining;
                });
            }, 70);

        return () =>
            clearInterval(
                collisionTimer
            );
    }, [
        gameStarted,
        combo,
    ]);

    useEffect(() => {
        if (
            lives <= 0 &&
            gameStarted
        ) {
            endGame();
        }
    }, [
        lives,
        gameStarted,
        endGame,
    ]);

    useEffect(() => {
        if (!message) return;

        const timeout =
            setTimeout(() => {
                setMessage("");
            }, 600);

        return () =>
            clearTimeout(timeout);
    }, [message]);

    useEffect(() => {
        return () => {
            if (gameLoopRef.current) {
                cancelAnimationFrame(
                    gameLoopRef.current
                );
            }

            if (spawnRef.current) {
                clearInterval(
                    spawnRef.current
                );
            }

            if (lightningRef.current) {
                clearTimeout(
                    lightningRef.current
                );
            }
        };
    }, []);

    const handleBoardClick = (event) => {
        if (!gameStarted) return;

        const rect =
            boardRef.current?.getBoundingClientRect();

        if (!rect) return;

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

    const isNewRecord =
        score > 0 &&
        score >= stats.bestScore;

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
            return stats.stormDodged >= 50;
        }

        if (achievement.id === "rainbow") {
            return stats.rainbow >= 1;
        }

        if (achievement.id === "combo") {
            return stats.bestCombo >= 10;
        }

        return false;
    };

    return (
        <GameOverlay onClick={onClose}>
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
                        onClick={handleBoardClick}
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

                                    <StartButton
                                        type="button"
                                        onClick={
                                            startGame
                                        }
                                    >
                                        <FiPlay />
                                        Play
                                    </StartButton>

                                    <GameHint>
                                        Use WASD / Arrow Keys
                                        or tap the field
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
                                            {[0, 1, 2].map(
                                                (index) => (
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
                                    {weather.icon}
                                    {weather.name}
                                </WeatherBadge>

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
                                    WASD / arrows ·
                                    tap to move
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
                                                stats.bestScore
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

                                    <ResultItem>
                                        <ResultLabel>
                                            Sun collected
                                        </ResultLabel>

                                        <ResultValue>
                                            {
                                                collected.sun
                                            }
                                        </ResultValue>
                                    </ResultItem>

                                    <ResultItem>
                                        <ResultLabel>
                                            Rain collected
                                        </ResultLabel>

                                        <ResultValue>
                                            {
                                                collected.rain
                                            }
                                        </ResultValue>
                                    </ResultItem>
                                </ResultStats>

                                <ResultButtons>
                                    <ResultButton
                                        type="button"
                                        onClick={
                                            startGame
                                        }
                                    >
                                        <FiRefreshCw />
                                        Play again
                                    </ResultButton>

                                    <SecondaryButton
                                        type="button"
                                        onClick={
                                            onClose
                                        }
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
                        <span>
                            Journal
                        </span>
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
                                                        Games
                                                        played
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Your
                                                        total
                                                        Weather
                                                        Rush
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
                                                        Best
                                                        score
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Your
                                                        highest
                                                        score
                                                    </AchievementDescription>
                                                </AchievementInfo>

                                                <AchievementName>
                                                    {
                                                        stats.bestScore
                                                    }
                                                </AchievementName>
                                            </Achievement>

                                            <Achievement>
                                                <AchievementIcon>
                                                    🔥
                                                </AchievementIcon>

                                                <AchievementInfo>
                                                    <AchievementName>
                                                        Best
                                                        combo
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Highest
                                                        combo
                                                        reached
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
                                                        Sun
                                                        shards
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Total
                                                        collected
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
                                                        Rain
                                                        drops
                                                    </AchievementName>

                                                    <AchievementDescription>
                                                        Total
                                                        collected
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
                                                Weather
                                                Collection
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
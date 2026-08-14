import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import {
  NewsSection,
  NewsContainer,
  NewsContent,
  NewsTitle,
  CategoryButtons,
  CategoryButton,
  NewsCards,
  NewsCard,
  NewsCardImage,
  NewsCardTitle,
  NewsButton,
} from "./News.styled";

const API_URL =
  "https://reactproject-gsav.onrender.com/api/news";

const categories = [
  "All",
  "Nature",
  "Weather",
  "Animals",
  "Science",
];

const getCategoryText = (article) => {
  return `
    ${article.title || ""}
    ${article.description || ""}
    ${article.content || ""}
  `.toLowerCase();
};

const matchesCategory = (article, category) => {
  if (category === "All") {
    return true;
  }

  const text = getCategoryText(article);

  const keywords = {
    Nature: [
      "nature",
      "forest",
      "tree",
      "trees",
      "plant",
      "plants",
      "flower",
      "flowers",
      "ocean",
      "sea",
      "river",
      "mountain",
      "earth",
      "wildlife",
      "landscape",
      "environment",
    ],

    Weather: [
      "weather",
      "rain",
      "rainy",
      "storm",
      "snow",
      "snowy",
      "wind",
      "windy",
      "temperature",
      "climate",
      "hurricane",
      "tornado",
      "flood",
      "heat",
      "cold",
      "sunny",
      "cloud",
      "cloudy",
    ],

    Animals: [
      "animal",
      "animals",
      "dog",
      "dogs",
      "cat",
      "cats",
      "bird",
      "birds",
      "lion",
      "tiger",
      "bear",
      "elephant",
      "fish",
      "whale",
      "dolphin",
      "horse",
      "pet",
      "pets",
      "wildlife",
    ],

    Science: [
      "science",
      "scientist",
      "scientists",
      "research",
      "researchers",
      "study",
      "space",
      "nasa",
      "planet",
      "planets",
      "technology",
      "experiment",
      "discovery",
      "discover",
      "physics",
      "biology",
      "chemistry",
      "medical",
    ],
  };

  return keywords[category].some((keyword) =>
    text.includes(keyword)
  );
};

export default function News({
  darkMode,
  accentColor,
}) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] =
    useState(false);

  const [error, setError] = useState(false);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  // -----------------------------
  // ANIMATION
  // -----------------------------

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.25,
        }
      );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // -----------------------------
  // LOAD NEWS
  // -----------------------------

  const loadNews = async (
    pageNumber = 1
  ) => {
    try {
      if (pageNumber === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      setError(false);

      const response = await fetch(
        `${API_URL}?page=${pageNumber}`
      );

      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status}`
        );
      }

      const data = await response.json();

      if (
        data.status !== "ok" ||
        !Array.isArray(data.articles) ||
        data.articles.length === 0
      ) {
        throw new Error(
          "Новости не найдены"
        );
      }

      setArticles(
        (previousArticles) => {
          const existingUrls = new Set(
            previousArticles.map(
              (article) => article.url
            )
          );

          const newArticles =
            data.articles.filter(
              (article) =>
                article.url &&
                !existingUrls.has(
                  article.url
                )
            );

          return [
            ...previousArticles,
            ...newArticles,
          ];
        }
      );

      setPage(pageNumber);
    } catch (error) {
      console.error(
        "Ошибка загрузки новостей:",
        error
      );

      if (pageNumber === 1) {
        setError(true);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // -----------------------------
  // FIRST LOAD
  // -----------------------------

  useEffect(() => {
    loadNews(1);
  }, []);

  // -----------------------------
  // FILTER
  // -----------------------------

  const filteredArticles =
    articles.filter((article) =>
      matchesCategory(
        article,
        activeCategory
      )
    );

  // -----------------------------
  // NEXT PAGE
  // -----------------------------

  const handleNext = async () => {
    if (loadingMore) {
      return;
    }

    const nextPage = page + 1;

    try {
      setLoadingMore(true);

      const response = await fetch(
        `${API_URL}?page=${nextPage}`
      );

      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status}`
        );
      }

      const data = await response.json();

      if (
        data.status !== "ok" ||
        !Array.isArray(data.articles) ||
        data.articles.length === 0
      ) {
        console.log(
          "Больше новостей нет"
        );

        return;
      }

      setArticles(
        (previousArticles) => {
          const existingUrls = new Set(
            previousArticles.map(
              (article) => article.url
            )
          );

          const newArticles =
            data.articles.filter(
              (article) =>
                article.url &&
                !existingUrls.has(
                  article.url
                )
            );

          return [
            ...previousArticles,
            ...newArticles,
          ];
        }
      );

      setPage(nextPage);
    } catch (error) {
      console.error(
        "Ошибка загрузки новостей:",
        error
      );
    } finally {
      setLoadingMore(false);
    }
  };

  // -----------------------------
  // CATEGORY
  // -----------------------------

  const handleCategoryChange = (
    category
  ) => {
    setActiveCategory(category);
  };

  // -----------------------------
  // RENDER
  // -----------------------------

  return (
    <NewsSection
      ref={sectionRef}
      $dark={darkMode}
    >
      <NewsContainer>
        <NewsContent
          className={
            isVisible ? "visible" : ""
          }
        >
          <NewsTitle $dark={darkMode}>
            News
          </NewsTitle>

          <CategoryButtons>
            {categories.map(
              (category) => (
                <CategoryButton
                  key={category}
                  type="button"
                  $active={
                    activeCategory ===
                    category
                  }
                  $dark={darkMode}
                  $accent={accentColor}
                  onClick={() =>
                    handleCategoryChange(
                      category
                    )
                  }
                >
                  {category}
                </CategoryButton>
              )
            )}
          </CategoryButtons>

          {loading ? (
            <NewsTitle $dark={darkMode}>
              Loading...
            </NewsTitle>
          ) : error ? (
            <>
              <NewsTitle $dark={darkMode}>
                Something went wrong
              </NewsTitle>

              <NewsButton
                type="button"
                $accent={accentColor}
                onClick={() =>
                  loadNews(1)
                }
              >
                Try again
                <FiArrowRight />
              </NewsButton>
            </>
          ) : filteredArticles.length ===
            0 ? (
            <>
              <NewsTitle $dark={darkMode}>
                No news in this category
              </NewsTitle>

              <NewsButton
                type="button"
                $accent={accentColor}
                onClick={() =>
                  setActiveCategory(
                    "All"
                  )
                }
              >
                Show all
                <FiArrowRight />
              </NewsButton>
            </>
          ) : (
            <>
              <NewsCards>
                {filteredArticles.map(
                  (article) => (
                    <NewsCard
                      key={article.url}
                    >
                      <NewsCardImage
                        src={
                          article.urlToImage
                        }
                        alt={
                          article.title ||
                          "News"
                        }
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />

                      <NewsCardTitle
                        $dark={darkMode}
                      >
                        {article.title}
                      </NewsCardTitle>
                    </NewsCard>
                  )
                )}
              </NewsCards>

              <NewsButton
                type="button"
                $accent={accentColor}
                onClick={handleNext}
                disabled={loadingMore}
              >
                {loadingMore
                  ? "Loading..."
                  : "See more"}

                <FiArrowRight />
              </NewsButton>
            </>
          )}
        </NewsContent>
      </NewsContainer>
    </NewsSection>
  );
}
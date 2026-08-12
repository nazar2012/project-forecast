import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import {
  NewsSection,
  NewsContainer,
  NewsContent,
  NewsLabel,
  NewsTitle,
  NewsCards,
  NewsCard,
  NewsCardImage,
  NewsCardTitle,
  NewsButton,
} from "./News.styled";

const API_URL =
  "https://reactproject-gsav.onrender.com/api/news";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Анимация при появлении секции
  useEffect(() => {
    const observer = new IntersectionObserver(
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

  // Загрузка новостей
  const loadNews = async (pageNumber = 1) => {
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
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if (
        data.status !== "ok" ||
        !Array.isArray(data.articles) ||
        data.articles.length === 0
      ) {
        throw new Error("Новости не найдены");
      }

      setArticles((previousArticles) => {
        const existingUrls = new Set(
          previousArticles.map((article) => article.url)
        );

        const newArticles = data.articles.filter(
          (article) =>
            article.url && !existingUrls.has(article.url)
        );

        return [...previousArticles, ...newArticles];
      });

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

  // Первая загрузка
  useEffect(() => {
    loadNews(1);
  }, []);

  // See more
  const handleNext = async () => {
    if (loadingMore) return;

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
        console.log("Больше новостей нет");
        return;
      }

      setArticles((previousArticles) => {
        const existingUrls = new Set(
          previousArticles.map(
            (article) => article.url
          )
        );

        const newArticles = data.articles.filter(
          (article) =>
            article.url &&
            !existingUrls.has(article.url)
        );

        return [
          ...previousArticles,
          ...newArticles,
        ];
      });

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

  return (
    <NewsSection ref={sectionRef}>
      <NewsContainer>
        <NewsContent
          className={isVisible ? "visible" : ""}
        >
          <NewsLabel>NEWS</NewsLabel>

          {loading ? (
            <NewsTitle>Loading...</NewsTitle>
          ) : error ? (
            <>
              <NewsTitle>
                Something went wrong
              </NewsTitle>

              <NewsButton
                type="button"
                onClick={() => loadNews(1)}
              >
                Try again
                <FiArrowRight />
              </NewsButton>
            </>
          ) : (
            <>
              <NewsTitle>
                Interacting with our pets
              </NewsTitle>

              <NewsCards>
                {articles.map((article) => (
                  <NewsCard key={article.url}>
                    <NewsCardImage
                      src={article.urlToImage}
                      alt={article.title || "News"}
                    />

                    <NewsCardTitle>
                      {article.title}
                    </NewsCardTitle>
                  </NewsCard>
                ))}
              </NewsCards>

              <NewsButton
                type="button"
                onClick={handleNext}
                disabled={loadingMore}
              >
                {loadingMore
                  ? "Loading..."
                  : "See more"}
              </NewsButton>
            </>
          )}
        </NewsContent>
      </NewsContainer>
    </NewsSection>
  );
}
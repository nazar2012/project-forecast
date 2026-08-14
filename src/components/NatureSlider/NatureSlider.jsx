import { useEffect, useState } from "react";

import {
  NatureSection,
  NatureHeader,
  NatureTitle,
  PauseButton,
  Slider,
  Slide,
  Dots,
  Dot,
  Loading,
  ErrorMessage,
} from "./NatureSlider.styled";

const API_KEY =
  import.meta.env.VITE_PIXABAY_API_KEY;

export default function NatureSlider({
  darkMode,
  accentColor = "#ffb56c",
}) {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] =
    useState(0);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState(false);
  const [isPaused, setIsPaused] =
    useState(false);

  useEffect(() => {
    const loadNatureImages = async () => {
      try {
        setLoading(true);
        setError(false);

        const url =
          `https://pixabay.com/api/?key=${API_KEY}` +
          `&q=beautiful+nature` +
          `&image_type=photo` +
          `&orientation=horizontal` +
          `&per_page=7` +
          `&safesearch=true`;

        const response =
          await fetch(url);

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
            `HTTP error: ${response.status}`
          );
        }

        if (
          !Array.isArray(data.hits) ||
          data.hits.length === 0
        ) {
          throw new Error(
            "Nature images not found"
          );
        }

        const loadedImages =
          data.hits.map((item) => ({
            id: item.id,
            url: item.webformatURL,
            largeUrl:
              item.largeImageURL,
            alt:
              item.tags ||
              "Beautiful nature",
          }));

        setImages(loadedImages);
        setActiveIndex(0);
      } catch (error) {
        console.error(
          "Ошибка загрузки изображений:",
          error
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadNatureImages();
  }, []);

  useEffect(() => {
    if (
      images.length === 0 ||
      isPaused
    ) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === images.length - 1
          ? 0
          : current + 1
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [images, isPaused]);

  const getPosition = (index) => {
    let difference =
      index - activeIndex;

    if (
      difference >
      images.length / 2
    ) {
      difference -= images.length;
    }

    if (
      difference <
      -images.length / 2
    ) {
      difference += images.length;
    }

    return difference;
  };

  if (loading) {
    return (
      <NatureSection $dark={darkMode}>
        <NatureHeader>
          <NatureTitle $dark={darkMode}>
            Beautiful nature
          </NatureTitle>
        </NatureHeader>

        <Loading $dark={darkMode}>
          Loading...
        </Loading>
      </NatureSection>
    );
  }

  if (error) {
    return (
      <NatureSection $dark={darkMode}>
        <NatureHeader>
          <NatureTitle $dark={darkMode}>
            Beautiful nature
          </NatureTitle>
        </NatureHeader>

        <ErrorMessage $dark={darkMode}>
          Failed to load images.
        </ErrorMessage>
      </NatureSection>
    );
  }

  return (
    <NatureSection $dark={darkMode}>
      <NatureHeader>
        <NatureTitle $dark={darkMode}>
          Beautiful nature
        </NatureTitle>

        <PauseButton
          $dark={darkMode}
          type="button"
          onClick={() =>
            setIsPaused(
              (prev) => !prev
            )
          }
        >
          {isPaused
            ? "▶ Continue"
            : "Ⅱ Pause"}
        </PauseButton>
      </NatureHeader>

      <Slider>
        {images.map(
          (image, index) => {
            const position =
              getPosition(index);

            return (
              <Slide
                key={image.id}
                $position={position}
                onClick={() =>
                  setActiveIndex(index)
                }
              >
                <img
                  src={image.url}
                  alt={image.alt}
                />
              </Slide>
            );
          }
        )}
      </Slider>

      <Dots>
        {images.map(
          (image, index) => (
            <Dot
              key={image.id}
              type="button"
              $active={
                index === activeIndex
              }
              $dark={darkMode}
              $accentColor={
                accentColor
              }
              aria-label={`Go to slide ${index + 1
                }`}
              aria-current={
                index === activeIndex
                  ? "true"
                  : undefined
              }
              onClick={() =>
                setActiveIndex(index)
              }
            />
          )
        )}
      </Dots>
    </NatureSection>
  );
}
import { useQuery } from "@tanstack/react-query";
import { ChartNoAxesCombined, LoaderCircle, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { searchCar } from "../../services/vizucar/VizucarService";
import compact from "../assets/images/category_compact.png";
import coupe from "../assets/images/category_coupe.png";
import sport from "../assets/images/category_sport.png";
import suv from "../assets/images/category_suv.png";

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  gearbox: string;
  transmission: string;
  cylinders: number;
  color: string | null;
  class: string;
  fueltype: string;
  imageUrl: string | null;
  imageSize: string | null;
};

export default function Home() {
  const [keyword, setKeyword] = useState<string>();
  const [visibleCars, setVisibleCars] = useState<Car[]>([]);
  const [copiedImageId, setCopiedImageId] = useState<number | null>(null);
  const [suggestion, setSuggestion] = useState<boolean>(true);
  const [responseStats, setResponseStats] = useState<{
    min: number | null;
    max: number | null;
    average: number | null;
  }>({
    min: null,
    max: null,
    average: null,
  });

  const categories = [
    { name: "sport", image: sport },
    { name: "coupe", image: coupe },
    { name: "SUV", image: suv },
    { name: "compact", image: compact },
  ];

  const { data, error, isLoading } = useQuery({
    queryKey: [searchCar, keyword],
    queryFn: async () => {
      const startTime = performance.now();
      const result = await searchCar(keyword as string);
      const endTime = performance.now();
      const responseTime = endTime - startTime;

      // Calcul des statistiques
      const newMin =
        responseStats.min === null
          ? responseTime
          : Math.min(responseStats.min, responseTime);
      const newMax =
        responseStats.max === null
          ? responseTime
          : Math.max(responseStats.max, responseTime);
      const newAverage =
        responseStats.average === null
          ? responseTime
          : (responseStats.average + responseTime) / 2;

      setResponseStats({
        min: newMin,
        max: newMax,
        average: newAverage,
      });

      return result;
    },
    enabled: !!keyword,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setKeyword(category); // Met à jour le mot-clé avec la catégorie sélectionnée
    setSuggestion(false); // Masque les suggestions après sélection
  };

  const handleImageLoadError = (carId: number) => {
    setVisibleCars((prev) => prev.filter((car) => car.id !== carId));
  };

  const handleImageClick = (carId: number, imageUrl: string | null) => {
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl).then(
        () => {
          setCopiedImageId(carId);
          setTimeout(() => {
            setCopiedImageId(null);
          }, 800);
        },
        (err) => {
          console.error("Échec de la copie", err);
        }
      );
    }
  };

  useEffect(() => {
    if (keyword === "") {
      setVisibleCars([]);
      setSuggestion(true);
    }
  }, [keyword]);

  useEffect(() => {
    if (isLoading) {
      setVisibleCars([]);
      setSuggestion(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const carsWithImages = data.filter((car: Car) => car.imageUrl);
      setVisibleCars(carsWithImages);
      setSuggestion(false);
    }
  }, [data]);

  return (
    <div className="Home">
      <div className="nav">
        <div className="link">
          <ChartNoAxesCombined size={18} />
          <a href="/metrics">Performance Metrics</a>
        </div>
      </div>
      <div className="top-container">
        <div className="search-bar">
          <input
            id="search-input"
            value={keyword}
            onChange={handleChange}
            type="text"
            placeholder="Search..."
          />
          <Search size={23} className="search-logo" />
        </div>
        {responseStats.min !== null &&
          responseStats.max !== null &&
          responseStats.average !== null && (
            <div className="response-stats-container">
              <div className="response-stat-tag">
                <span className="stat-value">
                  Min: {responseStats.min.toFixed(2)} ms
                </span>
              </div>
              <div className="response-stat-tag">
                <span className="stat-value">
                  Max: {responseStats.max.toFixed(2)} ms
                </span>
              </div>
              <div className="response-stat-tag">
                <span className="stat-value">
                  Average: {responseStats.average.toFixed(2)} ms
                </span>
              </div>
            </div>
          )}
      </div>
      <div>
        {suggestion && (
          <div className="suggestions-grid">
            {categories.map((category) => (
              <div
                key={category.name}
                className="category-item"
                onClick={() => handleCategoryClick(category.name)}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay">
                  <p className="category-name">{category.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {isLoading && <LoaderCircle className="spin-animation" />}
        {error && <p className="error">Error: {error.message}</p>}
        <div className="cars-list-container">
          <ul className="cars-list">
            {Array.isArray(visibleCars) &&
              visibleCars.map(
                (car: Car) =>
                  car.imageUrl && (
                    <li key={car.id} className="car-item">
                      <div style={{ position: "relative" }}>
                        <img
                          src={car.imageUrl}
                          data-car-id={car.id}
                          alt={`${car.make} ${car.model}`}
                          className="car-image"
                          onError={() => handleImageLoadError(car.id)}
                          loading="lazy"
                          onClick={() => handleImageClick(car.id, car.imageUrl)}
                        />
                        {copiedImageId === car.id && (
                          <div className="copied-message">Copied</div>
                        )}
                      </div>
                    </li>
                  )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}

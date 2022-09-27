import { Carousel } from "@mantine/carousel";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons";
import { imdbapi } from "../../../../../api/api";
import { useEffect, useState } from "react";

const MainCarousel = () => {
  const [topMovies, setTopMovies] = useState([]);
  const key = "k_69jime14";
  const fetchMovies = async () => {
    try {
      const result = await imdbapi.get(`/en/API/Title/${key}/tt1375666`);
      const data = result.data;
      console.log(data.similars);
      setTopMovies(data.similars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Carousel
        sx={{ maxWidth: 800 }}
        mx="0"
        height={520}
        controlSize={50}
        nextControlIcon={<IconChevronRight size={24} />}
        previousControlIcon={<IconChevronLeft size={24} />}
      >
        {topMovies.map((item) => {
          return (
            <Carousel.Slide key={item.id}>
              <img
                style={{ width: "100%", verticalAlign: "middle" }}
                src={item.image}
                alt={item.fullTitle}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};

export default MainCarousel;

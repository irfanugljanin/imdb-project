import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";
import { imdbapi } from "../../../../../api/api";
import { useEffect, useState } from "react";
// import dummy from "../../../../../data.json";

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
        sx={{ maxWidth: 640 }}
        mx="0"
        height={400}
        nextControlIcon={<IconArrowRight size={16} />}
        previousControlIcon={<IconArrowLeft size={16} />}
      >
        {topMovies.map((item) => {
          return (
            <Carousel.Slide key={item.id}>
              <img
                style={{ maxHeight: "100%" }}
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

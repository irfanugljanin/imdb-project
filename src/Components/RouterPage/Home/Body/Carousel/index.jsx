import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";
import { imdbapi } from "../../../../../api/api";
import { useEffect, useState } from "react";
import dummy from "../../../../../data.json";

const MainCarousel = () => {
  const [topMovies, setTopMovies] = useState([]);
  const key = "k_69jime14";
  const fetchMovies = async () => {
    try {
      // const result = await imdbapi.get(`/en/API/ComingSoon/${key}/`);
      // const data = result.data;
      console.log(dummy);
      setTopMovies(dummy.items);
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
              <img src={item.image} alt={item.fullTitle} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};

export default MainCarousel;

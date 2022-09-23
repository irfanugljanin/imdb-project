import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";

const MainCarousel = () => {
  return (
    <div>
      <Carousel
        sx={{ maxWidth: 640 }}
        mx="auto"
        height={400}
        nextControlIcon={<IconArrowRight size={16} />}
        previousControlIcon={<IconArrowLeft size={16} />}
      >
        <Carousel.Slide></Carousel.Slide>
        <Carousel.Slide></Carousel.Slide>
        <Carousel.Slide></Carousel.Slide>
      </Carousel>
      );
    </div>
  );
};

export default MainCarousel;

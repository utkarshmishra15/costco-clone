import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

export default function SimpleSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          borderRadius: "80px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "grey", borderRadius: "80px" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 500,
        settings: {
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  let arr = [
    "https://bfasset.costco-static.com/56O3HXZ9/at/vtpq3hj299xz8b2rxmrfp/m_25w03337_hero_dec_connection.jpg",
    "https://bfasset.costco-static.com/56O3HXZ9/at/9qwk24v9kkmmc6krs667spgz/m_25w04087_hero_samsung.jpg?auto=webp&format=jpg",
    "https://cdn.bfldr.com/56O3HXZ9/at/srgrpf838bmbq6xp4bctf56k/m_25w04088_hero_apparel.jpg?auto=webp&format=jpg",
    
    "https://cdn.bfldr.com/56O3HXZ9/at/8rqkw3pr4v5s48jnt5rfgqrj/m_25w04092_hero_ring.jpg?auto=webp&format=jpg",
    "https://cdn.bfldr.com/56O3HXZ9/at/8cm36bnnh4pxmb4jvb33bccm/m_25w04263_hero_macbook_air_15_update.jpg?auto=webp&format=jpg",
    "https://cdn.bfldr.com/56O3HXZ9/at/bjnwcp849b6q3n59mh326w8/m_25w04192_hero_nespresso.jpg?auto=webp&format=jpg",
   
  ];

  return (
    <Box p={["8", "8", "8", "8"]} pt={[3, 3, 3, 3]} pb={[8, 8, 8, 8]}>
      <Slider {...settings}>
        {arr.map((elem, i) => (
          <img src={elem} alt="slider" key={i} />
        ))}
      </Slider>
    </Box>
  );
}

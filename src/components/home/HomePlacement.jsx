// import React from "react";
// import { Grid, Card, CardMedia } from "@mui/material";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import image1 from "../../common/image/placement3.png";
// import image2 from "../../common/image/Capgemini-Logo.png";
// import image3 from "../../common/image/comtug-logo.png";
// import image4 from "../../common/image/Google.png";
// import image5 from "../../common/image/infosy.png";
// import image6 from "../../common/image/Intel logo.png";
// import image7 from "../../common/image/microsoft.jpg";
// import image8 from "../../common/image/tata.png";
// import image9 from "../../common/image/facebook.jpeg";
// import image10 from "../../common/image/flipkart.png";
// import image11 from "../../common/image/hp.png";
// import image12 from "../../common/image/window.png";

// import styles from "../../common/css/home/homeplacement.module.css";

// function HomePlacementPage() {
//   const images = [
//     image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12
//   ];

//   return (
//     <Grid container alignItems="center" justifyItems='center' className={styles.carouselContainer}>
//       <Carousel
//         showArrows
//         showIndicators
//         infiniteLoop
//       >
//         {images.map((image, index) => (
//           <div key={index} className={styles.carouselItem}>
//             <img
//               src={image}
//               alt={`Image ${index + 1}`}
//             />
//           </div>
//         ))}
//       </Carousel>
//     </Grid>
//   );
// }

// export default HomePlacementPage;



import React from 'react';
import { Carousel } from 'react-carousel-minimal';
// import image1 from "../../common/image/placement3.png";

const HomePlacementPage = () => {
  const data = [
    {
      image: "https://grt.edu.in/wp-content/uploads/2022/03/IMG_20210313_105303-scaled.jpg",
      caption: "High Placement"
    },
    {
      image: "https://www.rec.ac.in/images/p.jpg",
      caption: "Proper Training"
    },
    {
      image: "https://www.kcmcollege.com/wp-content/uploads/2022/04/pre-placement-training-program-kcm-college-bangalore-4.jpg",
      caption: "Resume Builtup"
    },
    {
      image: "https://rru.ac.in/wp-content/uploads/2024/01/Website-Slider.jpg",
      caption: "Center of Excellence"
    },
    {
      image: "https://manifoldkerala.com/wp-content/uploads/2021/03/campus-placements.jpg",
      caption: "Easy Placements"
    },
    {
      image: "https://www.fostiima.org/blog/wp-content/uploads/2019/08/curriculum-the-focal-point-of-management-institute-in-delhi.jpg",
      caption: "Top Management Institutes"
    },
    {
      image: "https://www.ndimdelhi.org/wp-content/uploads/2023/08/12-900x400.jpg",
      caption: "Project Management"
    },
    {
      image: "https://media.collegedekho.com/media/img/institute/crawled_images/None/Lawn%20pic.jpg",
      caption: "Average Packages"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{
        margin:"1rem 1rem 1rem 1rem",
        textAlign: "center",
        maxWidth: "100%",
        maxHeight: "50%",
        overflow: 'hidden'
      }}>

        <Carousel
          data={data}
          time={2000}
          width="100%"
          height="30rem"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            width:"100%",
            // height:"80%",
            overflow: 'hidden'
          }}
        />
      </div>

    </div>
  );
};

export default HomePlacementPage;

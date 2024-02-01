import React, { useRef } from 'react';
import styles from '../../common/css/gal.module.css';

import img1 from "../../common/image/1.jpg";
import img2 from "../../common/image/2.jpg";
import img3 from "../../common/image/3.jpg";
import img4 from "../../common/image/4.jpg";
import img5 from "../../common/image/5.jpg";
import img6 from "../../common/image/6.jpg";
import img7 from "../../common/image/7.jpg";
import img8 from "../../common/image/8.jpg";
import img9 from "../../common/image/9.jpg";
import img10 from "../../common/image/10.jpg";
import img11 from "../../common/image/11.jpg";
import img12 from "../../common/image/12.jpg";
import img13 from "../../common/image/13.jpg";
import img14 from "../../common/image/14.jpg";
import img15 from "../../common/image/15.jpg";
import img16 from "../../common/image/16.jpg";
import img17 from "../../common/image/17.jpg";
import img18 from "../../common/image/18.jpg";
import img19 from "../../common/image/19.jpg";
import img20 from "../../common/image/20.jpg";
import img21 from "../../common/image/21.jpg";
import img22 from "../../common/image/22.jpg";
import img23 from "../../common/image/23.png";
import img24 from "../../common/image/24.jpg";
import img25 from "../../common/image/25.png";

const Gallery = () => {
  const slideRef = useRef(null);

  const handleNextClick = () => {
    const items = slideRef.current.querySelectorAll(`.${styles.item}`);
    console.log(">>>>>>>>>>>>>",items)
    if (items.length >= 2) {
      slideRef.current.appendChild(items[0].cloneNode(true));
      slideRef.current.appendChild(items[1].cloneNode(true));
      slideRef.current.removeChild(items[0]);
      slideRef.current.removeChild(items[1]);
    }
    
  };

  const handlePrevClick = () => {
    const items = slideRef.current.querySelectorAll(`.${styles.item}`);
    if (items.length >= 2) {
      slideRef.current.prepend(items[items.length - 2].cloneNode(true));
      slideRef.current.prepend(items[items.length - 1].cloneNode(true));
      slideRef.current.removeChild(items[items.length - 2]);
      slideRef.current.removeChild(items[items.length - 1]);
    }
  };


  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div className={styles.container}>
        <div className={styles.slide} ref={slideRef}>
          <div className={styles.item} style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp5310238.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>FUNCTION</div>
              <div className={styles.des}>"A college's infrastructure is the foundation upon which knowledge is built, creating an environment where students can flourish and dreams can become reality."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://media.bizj.us/view/img/12384261/qubein-arena-high-point-universityaerial-i*900xx5464-3074-0-283.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>WELCOME TO OUR COLLEGE</div>
              <div className={styles.des}>"Quality college infrastructure is not just about buildings; it's about creating spaces that inspire creativity, foster collaboration, and promote a culture of continuous learning."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VtaW5hcnxlbnwwfHwwfHx8MA%3D%3D)' }}>
            <div className={styles.content}>
              <div className={styles.name}>SEMINAR</div>
              <div className={styles.des}>"A well-equipped college infrastructure is like a canvas where students paint their dreams, and each facility is a brushstroke shaping the landscape of their academic journey."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/812/618/desktop-wallpaper-university-college-campus.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>CAMPUS INSIDE</div>
              <div className={styles.des}>"The infrastructure of a college is the silent architect of success, providing the backdrop for intellectual growth, personal development, and the pursuit of excellence."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://media.istockphoto.com/id/530807376/photo/students-on-travel-in-paris-tour-eiffel-outdoor-lesson.jpg?s=612x612&w=0&k=20&c=7PI_1f9ldUjAr-JebhnhXSGqMeNsZBnoVThWJNnLX38=)' }}>
            <div className={styles.content}>
              <div className={styles.name}>STUDY TOURS</div>
              <div className={styles.des}>"In the tapestry of education, the infrastructure of a college forms the threads that weave together a rich and vibrant learning experience for students."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/1209519.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>CAMPUS OUTSIDE</div>
              <div className={styles.des}>"Colleges with modern and innovative infrastructure empower students to navigate the complexities of the future, preparing them for challenges yet to come."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://w0.peakpx.com/wallpaper/32/996/HD-wallpaper-stylish-interior-hotel-room-double-room-double-room-gray-interior-modern-interior-design.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>HOSTELS</div>
              <div className={styles.des}>"The physical and technological infrastructure of a college is the scaffolding that supports the aspirations of students, allowing them to climb the ladder of knowledge and achievement."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://content-calpoly-edu.s3.amazonaws.com/artdesign/1/images/computerlab.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>LABS</div>
              <div className={styles.des}>"An investment in college infrastructure is an investment in the dreams of countless students, creating an environment where aspirations can take flight and soar to new heights."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://wallpaperswide.com/download/stuttgart_city_library_germany-wallpaper-3840x2160.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>LIBRARY</div>
              <div className={styles.des}>"Colleges that prioritize cutting-edge infrastructure are not just institutions; they are beacons of progress, guiding students toward a future filled with possibilities."!</div>
              <button>See More</button>
            </div>
          </div>
        </div>

        <div className={styles.button}>
          <button className={styles.prev} onClick={handlePrevClick}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className={styles.next} onClick={handleNextClick}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>



      <div className={styles.second}>

        <div className={styles.second_page}>

          <div className={styles.gallery}>
            <div className={styles.image_container}>
              <img src={img1} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img2} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img3} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img4} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img5} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img6} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img7} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img8} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img9} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img10} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img11} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img12} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img13} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img14} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img15} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img16} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img17} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img18} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img19} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img20} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img21} alt="college_pictures" />
            </div>
            <div className={styles.tall}>
              <img src={img22} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img23} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img24} alt="college_pictures" />
            </div>
            <div className={styles.image_container}>
              <img src={img25} alt="college_pictures" />
            </div>
          </div>

        </div>
      </div>

    </>
  );
};
export default Gallery;


import React, { useRef } from 'react';
import styles from '../../common/css/gal.module.css';

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
          <div className={styles.item} style={{ backgroundImage: 'url(https://cutewallpaper.org/28/concert-wallpaper-background/16093518.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>FUNCTION</div>
              <div className={styles.des}>"A college's infrastructure is the foundation upon which knowledge is built, creating an environment where students can flourish and dreams can become reality."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://media.foxbusiness.com/BrightCove/854081161001/202005/2920/854081161001_6158004154001_6158002314001-vs.jpg)' , overflowX:"hidden" }}>
            <div className={styles.content}>
              <div className={styles.name}>WELCOME TO OUR COLLEGE</div>
              <div className={styles.des}>"Quality college infrastructure is not just about buildings; it's about creating spaces that inspire creativity, foster collaboration, and promote a culture of continuous learning."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://c0.wallpaperflare.com/preview/528/333/291/people-sitting-inside-room.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>SEMINAR</div>
              <div className={styles.des}>"A well-equipped college infrastructure is like a canvas where students paint their dreams, and each facility is a brushstroke shaping the landscape of their academic journey."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?cs=srgb&dl=pexels-pixabay-159775.jpg&fm=jpg)'  }}>
            <div className={styles.content}>
              <div className={styles.name}>CAMPUS INSIDE</div>
              <div className={styles.des}>"The infrastructure of a college is the silent architect of success, providing the backdrop for intellectual growth, personal development, and the pursuit of excellence."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://e1.pxfuel.com/desktop-wallpaper/533/286/desktop-wallpaper-study-abroad-abroad.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>STUDY TOURS</div>
              <div className={styles.des}>"In the tapestry of education, the infrastructure of a college forms the threads that weave together a rich and vibrant learning experience for students."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://w0.peakpx.com/wallpaper/179/205/HD-wallpaper-chapel-england-cambridge-university-college.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>CAMPUS OUTSIDE</div>
              <div className={styles.des}>"Colleges with modern and innovative infrastructure empower students to navigate the complexities of the future, preparing them for challenges yet to come."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://vistapointe.net/images/hostel-6.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>HOSTELS</div>
              <div className={styles.des}>"The physical and technological infrastructure of a college is the scaffolding that supports the aspirations of students, allowing them to climb the ladder of knowledge and achievement."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://servinformatica.com/galeria/noticias/como-mantener-un-aula-de-informatica-como-el-primer-dia_104_1_870x580.jpg)' }}>
            <div className={styles.content}>
              <div className={styles.name}>LABS</div>
              <div className={styles.des}>"An investment in college infrastructure is an investment in the dreams of countless students, creating an environment where aspirations can take flight and soar to new heights."</div>
              <button>See More</button>
            </div>
          </div>
          <div className={styles.item} style={{ backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/526/8/1002/library-interior-interior-design-books-wallpaper-preview.jpg)' }}>
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

    </>
  );
};
export default Gallery;


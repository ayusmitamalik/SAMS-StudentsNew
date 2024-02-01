import React, { useState } from "react";
import styles from "../../common/css/announcement.module.css";

const HorizontalScrollingAnnouncement = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const announcementContainer = document.getElementById("announcement_container");
    setScrollPosition(announcementContainer.scrollLeft);
  };

  return (
    <div className={styles.announcement_container} id={styles.announcement_container} onScroll={handleScroll}>
      <div className={styles.announcement_wrapper}>
        <div className={styles.announcement} style={{ transform: `translateX(-${scrollPosition}px)` }}>
          <div className={styles.announcement_content}>
            <p>Today the office will remain closed ,may commence from tommorow.</p>
          </div>
        </div>
      </div>
      <div className={styles.announcement_wrapper}>
        <div className={styles.announcement} style={{ transform: `translateX(-${scrollPosition}px)` }}>
          <div className={styles.announcement_content}>
            <p>The 1st/3rd/5th/7th semester results are out.</p>
          </div>
        </div>
      </div>
      <div className={styles.announcement_wrapper}>
        <div className={styles.announcement} style={{ transform: `translateX(-${scrollPosition}px)` }}>
          <div className={styles.announcement_content}>
            <p>The 2nd/4th/6th/8th semester registration is started.</p>
          </div>
        </div>
      </div>
      <div className={styles.announcement_wrapper}>
        <div className={styles.announcement} style={{ transform: `translateX(-${scrollPosition}px)` }}>
          <div className={styles.announcement_content}>
            <p>There will be an orienteation progrm on 30th Jan.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HorizontalScrollingAnnouncement;
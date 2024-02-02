import React from 'react';
import styles from "../../common/css/cont.module.css";
const TeacherContactInfo = () => {
  return (
    <div id={styles.teacher_contact_info}>
      <h1>Teacher Contact Info</h1>
      <br></br>
      <div class={styles.teacher_card}>
        <h2>Riya</h2>
        <p>Email: riya@example.com</p>
        <p>Phone: 555-555-5555</p>
        <p>Office Hours: Monday 1-2pm, Wednesday 3-4pm</p>
      </div>
      <div class={styles.teacher_card}>
        <h2>Tina</h2>
        <p>Email: Tina@example.com</p>
        <p>Phone: 555-555-5556</p>
        <p>Office Hours: Tuesday 10-11am, Thursday 2-3pm</p>
      </div>
      <div class={styles.teacher_card}>
        <h2>Reo</h2>
        <p>Email: Reo@example.com</p>
        <p>Phone: 555-555-5556</p>
        <p>Office Hours: Tuesday 10-11am, Thursday 2-3pm</p>
      </div>
      <div class={styles.teacher_card}>
        <h2>Joy</h2>
        <p>Email: riya@example.com</p>
        <p>Phone: 555-555-5555</p>
        <p>Office Hours: Monday 1-2pm, Wednesday 3-4pm</p>
      </div>
      <div class={styles.teacher_card}>
        <h2>Smith</h2>
        <p>Email: Tina@example.com</p>
        <p>Phone: 555-555-5556</p>
        <p>Office Hours: Tuesday 10-11am, Thursday 2-3pm</p>
      </div>
      <div class={styles.teacher_card}>
        <h2>Anjali</h2>
        <p>Email: Reo@example.com</p>
        <p>Phone: 555-555-5556</p>
        <p>Office Hours: Tuesday 10-11am, Thursday 2-3pm</p>
      </div>
    </div>
  );
};

export default TeacherContactInfo;
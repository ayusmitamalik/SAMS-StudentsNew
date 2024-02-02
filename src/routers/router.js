import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../components/student/index";
import Feedback from "../components/Feedback/Feedback";
import Hometext from '../components/home/hometext'

import NoticePage from "../components/notice/index";
import DepartmentPage from "../components/department/index";
import StudentAdmissionForm from "../components/Admission/admission";
import HorizontalScrollingAnnouncement from "../components/Announcement/announcement";
import TeacherContactInfo from "../components/Contact/contact";
import Signin from '../components/Signup/signin'
import Signup from '../components/Signup/signup'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/hometex" element={<Hometext />} />

        <Route path="/notice" element={<NoticePage />} />
        <Route path="/department" element={<DepartmentPage />} />

        <Route path="/admission" element={<StudentAdmissionForm />} />
        <Route path="/announcement" element={<HorizontalScrollingAnnouncement />} />
        <Route path="/contact" element={<TeacherContactInfo />} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
    </Router>
  );
};

export default AppRouter
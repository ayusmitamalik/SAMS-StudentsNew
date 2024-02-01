import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../components/student/index";
import Feedback from "../components/Feedback/Feedback";
import Hometext from '../components/home/hometext'

import NoticePage from "../components/notice/index";
import DepartmentPage from "../components/department/index";
import StudentAdmissionForm from "../components/Admission/admission";
import HorizontalScrollingAnnouncement from "../components/Announcement/announcement";
import TeacherContactInfo from "../components/Contact/cont";

import StudentProfile from "../common/studentProfileIndex/studentProfileIndex";
import RegistrationForm from "../components/studentRedg/studentRedg"
import Homenoticeboard from"../components/home/homeNoticeBoard";

// home page route 
import HomeCoursesOffered from "../components/home/homeCoursesOffered";


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
        <Route path="/cont" element={<TeacherContactInfo />} />


        <Route path="/profile" element={<StudentProfile />}/>
        <Route path="/studentRedg" element={<RegistrationForm />}/>
        <Route path = "/homenotice" element= {<Homenoticeboard/>}/>
       
        {/* home page router */}
        <Route path = "/courses" elements= {<HomeCoursesOffered/>}/>

      </Routes>
    </Router>
  );
};

export default AppRouter
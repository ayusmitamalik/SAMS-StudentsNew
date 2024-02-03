import React from "react";
import style from "../../common/css/faculty/faculty.module.css";
import Avatar from '@mui/material/Avatar';



function FacultyPage() {
  return (
      <>
        
          <div className={style.sidebar}>
            <div className={style.avtar}>
          <Avatar src="/broken-image.jpg" />
          </div>
          <div className={style.item}><a href="/info"><i className={style.line}></i>Personal Info</a></div>
            <header>
              <div className={style.closebtn}>
                <i className={style.item}></i>
              </div>
              <div className={style.head}>
              <h1>BRANCHES</h1></div>
            </header>

            <div className={style.menu}>
              <div className={style.item}><a href="/cse"><i className={style.line}></i>CSE</a></div>
              <div className={style.item}><a href="/civil"><i className={style.line}></i>CIVIL</a></div>
              <div className={style.item}><a href="/ele"><i className={style.line}></i>ELE</a></div>
              <div className={style.item}><a href="/etc"><i className={style.line}></i>ETC</a></div>
              <div className={style.item}><a href="/me"><i className={style.line}></i>ME</a></div>
              <div className={style.item}><a href="/mba"><i className={style.line}></i>MBA</a></div>
              <div className={style.item}><a href="/mca"><i className={style.line}></i>MCA</a></div>
              <div className={style.item}><a href="/bse"><i className={style.line}></i>B.SH</a></div>
            </div>
          </div>
      </>

  )
}

export default FacultyPage;



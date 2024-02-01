import React from "react";
import style from "../../common/css/faculty/faculty.module.css";
import bigimg from "../../common/image/homebg.jpg"


function FacultyPage() {
    return (
        <>
          
            <div className={style.sidebar}>
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
            <div className={style.bigphoto}>
                        <img src={bigimg} alt=""  height="250px" width="100%" xs={12} sm={6} />
                        {/* <h1 className={style.textphoto}></h1>  */}
                    </div> 
        </>

    )
}

export default FacultyPage;



import React from "react";
import style from "../../../common/css/faculty/me.module.css";
import FacultyPage from "../sidebar";
import me1 from "../../../common/image/lizum1.jpg";
import me2 from "../../../common/image/sagar.jpg";
import me3 from "../../../common/image/puja 1.jpg";
import me4 from "../../../common/image/saisruti.jpg";
import me5 from "../../../common/image/jass3.jpg";

function MePage() {
    return (
        <>
            <FacultyPage />

            <div className={style.heading}><h2>MECHANICAL ENGINEERING</h2></div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. Lizum Bala</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b> M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b> HOD</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Engineering Mechanics
                        Compressible Fluid and gas Dynamics
                        Automobile Engineering
                        Design of Machine Element</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={me1} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>

            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={me2} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Mr. Sagar Kalia</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />Automobile Engineering
                        Rapid Manufacturing process
                        Basic Manufacturing process
                        Production Designing and Production
                        Tooling</p>

                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. Puja Jena</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />Mechanics of Solid
                        Mechanism and machines
                        Kinematics and Dynamics of machines
                        Power Plant Engineering</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={me3} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={me4} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Miss. Sai Sruti</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Basic Mechanical Engineering
                        Fluid Mechanics & Hydraulic Machines
                        Rapid Manufacturing process
                        Green Technology</p>

                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. Jasmine Pal</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Engineering Mechanics
                        Basic Mechanical Engineering
                        Green Technology
                        Mechanics of Solid
                    </p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={me5} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


        </>

    )
}

export default MePage;
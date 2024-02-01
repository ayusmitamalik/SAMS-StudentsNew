import React from "react";
import style from "../../../common/css/faculty/civil.module.css";
import FacultyPage from "../sidebar";
import civil1 from "../../../common/image/ayusmita.jpg";
import civil2 from "../../../common/image/preeti.jpg";
import civil3 from "../../../common/image/debasis.jpg";
import civil4 from "../../../common/image/krishna.jpg";
import civil5 from "../../../common/image/dharitri.jpg";

function CivilPage() {
    return (
        <>
            <FacultyPage />

            <div className={style.heading}><h2>CIVIL ENGINEERING</h2></div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. Ayusmita Malik</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b> M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b> HOD</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Mechanics of Solid
                        Surveying
                        Design of Concrete Structure
                        Design of steel structure
                        Structural Analysis – 1
                        Structural Analysis – 2
                        Estimating Costing and
                        Professional Practice</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={civil1} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>

            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={civil2} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Miss. Preeti Chaurasia</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />Basics of Civil Engineering,
                        Mechanics of Solid, Design
                        Of concrete Structures,
                        Design Of Steel Structures,
                        Structural Analysis-I,
                        Structural Analysis-II,
                        Prestressed Concrete,
                        Transportation Engineering</p>

                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Mr. Debasis Sahu</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br />Basic Civil Engineering,
                        Mechanics of Solid, Fluid
                        Mechanics & hydraulic

                        Machine, Structural Analysis-
                        1, Design of Concrete

                        Structures, Design of Steel
                        Structure.</p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={civil3} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


            <div className={style.section1}>

                <div className={style.bar1}>
                    <div className={style.photo1}>
                        <img src={civil4} alt="" height="250px" width="250px" />
                    </div>
                </div>
                <div className={style.bar2}>
                    <h2 className={style.name1}> Mr. Krishna Panda</h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b> AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br /><br /> Basics of Civil Engineering,
                        Mechanics of solids,
                        Structural Analysis-I ,Design
                        of Concrete Structures,,
                        Structural Analysis -II, Design
                        of Steel Structures.</p>

                </div>

            </div>

            <div className={style.section}>
                <div className={style.bar1}>
                    <h2 className={style.name}> Miss. Dharitri </h2>
                    <div className={style.line}></div>
                    <p><b>QUALIFICATION:</b>M.TECH
                        (Structural
                        Engineering)</p><br></br>
                    <p><b>DESIGNATION:</b>AssistantProfessor</p><br></br>
                    <p><b>SUBJECTS TEACHING:</b><br></br><br></br>Fluid Mechanics & Hydraulics
                        Engineering, Concrete
                        Technology, Transportation
                        Engineering, Geotechnical
                        Engineering, Water & Waste
                        Water Engineering.
                        </p>

                </div>
                <div className={style.bar1}>
                    <div className={style.photo}>
                        <img src={civil5} alt="" height="250px" width="250px" />
                    </div>
                </div>
            </div>


        </>

    )
}

export default CivilPage;
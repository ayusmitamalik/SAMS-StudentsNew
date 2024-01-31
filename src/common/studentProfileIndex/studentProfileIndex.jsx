import React from "react";
import style from "../css/studentProfile/studentProfile.module.css";

//icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

//edit
import { useState } from "react";

export default function StudentProfile({ edit = false }) {

    const [formData, setFormData] = useState({
        role: "",
        email: "",
        gender: "",
        name: "",
        skills: "",
    });

    const [editMode, setEdit] = useState(edit);

    return (
        <div class="profile-box" style= {{backgroundColor:'	#006666'}}>
            <div className={style.container} style={{ backgroundColor: '#b2d8d8', marginLeft: '119px' }}>
                <h2 style={{ display: 'flex', justifyContent: 'center', color: '#004c4c', fontSize: '50px', paddingTop: '2%' }}>Student Profile</h2>

                <form className={style.profile}>
                    <div className={style.leftSection}>
                        <div className={style.profilePicture} style={{ border: '7px outset teal' }}>
                            <img src="https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" alt="Profile Picture" />
                            <input type="file" id="image" name="image" />
                        </div>

                        <p style={{ fontFamily: 'Pixelify Sans' }}>
                            <label htmlFor="role"><b>Role</b></label><br />
                            <input type="text" id="role" name="role" placeholder="Your role.." value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
                        </p>

                        <p style={{ fontFamily: 'Pixelify Sans' }}>
                            <label htmlFor="email"><b>Email</b></label><br />
                            <input type="text" id="email" name="email" placeholder="Your email.." value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </p>



                        <p style={{ fontFamily: 'Pixelify Sans', marginLeft: '-100px' }}>
                            <label htmlFor="gender"><b>Gender</b></label><br />
                            <select id="gender" name="gender" value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </p>

                    </div>

                    <div className={style.rightSection}>
                        <div className={style.studentDetails}>
                            {/* <p><b>Address</b></p>
                            <input type="text" id="address" name="address" placeholder="Your address.." />

                            <p><b>Hobbies</b></p>
                            <input type="text" id="hobbies" name="hobbies" placeholder="Your hobbies.." />

                            <p><b>Job</b></p>
                            <input type="text" id="job" name="job" placeholder="Your job.." /> */}

                            <p style={{ fontFamily: 'Pixelify Sans' }}><b>Name</b></p>
                            <input type="text" id="name" name="name" placeholder="Your full name.." value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                            <p style={{ fontFamily: 'Pixelify Sans' }}><b>Skills</b></p>
                            <input type="text" id="skills" name="skills" placeholder="Your skills.." value={formData.skills}
                                onChange={(e) => setFormData({ ...formData, skills: e.target.value })} />
                        </div>

                        <div className={style.socialMedia}>
                            <h3 style={{ color: '#004c4c', fontFamily: 'Segoe UI' }}>SOCIAL MEDIA</h3>
                            <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon fontSize="large" />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon fontSize="large" />
                            </a>
                            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                <XIcon fontSize="large" />
                            </a>
                        </div>
                    </div>


                    {/* edit */}
                    {edit ? (
                        <button type="button" onClick={() => setFormData({ role: "", email: "", gender: "", name: "", skills: "" })}>
                            Cancel
                        </button>
                    ) : (
                        <button type="button" onClick={() => setEdit(true)}>
                            Edit
                        </button>
                    )}

                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        </div>
    );
}

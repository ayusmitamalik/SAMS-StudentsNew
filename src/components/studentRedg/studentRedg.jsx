import React, { useState } from 'react';
import style from "../../common/css/studentRedg/studentRedg.module.css";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        zipCode: '',
        adharcardNumber: '',
        panNumber: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can add your logic for submitting the form data to the server or any other actions
    };

    return (
        <div className={style.profileBox}>
            <h1 style={{
                textAlign: 'center', color: '#ffdc73',
                fontSize: '45px', marginTop:'10px'
            }}>Registration Form</h1>
            <div className={style.containerBox} style={{backgroundColor:'#bf9b30'}}>
                <h2 style={{ textAlign: 'center', color: '#006666', marginTop: '-10px', fontSize: '30px' }}>Student Information</h2>
                <div className={style.inputBox}>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    /><br />
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    /><br />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    /><br />
                    <input
                        type="date"
                        placeholder="Date of Birth"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    /><br />
                </div>
            </div>

            <div className={style.containerBox} style={{backgroundColor:'#bf9b30'}}>
                <h2 style={{ textAlign: 'center', color: '#006666', marginTop: '-10px', fontSize: '30px' }}>Address Section</h2>
                <div className={style.inputBox}>
                    <input
                        type="text"
                        placeholder="Address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        placeholder="State"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    /><br />
                    
                    <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                        <option value="">Select Country</option>
                        <option value="USA">United States</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra ">Andorra</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Korea">Korea</option>
                        <option value="Libya">Libya</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Morocco">Morocco</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands, The">Netherlands, The</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Peru">Peru</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Korea (South Korea)">Republic of Korea (South Korea)</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select><br />
                    <input
                        type="text"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        placeholder="Zip Code"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    /><br />
                </div>
            </div>

            <div className={style.containerBox} style={{backgroundColor:'#bf9b30'}}>
                <h2 style={{ textAlign: 'center', color: '#006666', marginTop: '-10px', fontSize: '30px' }}>Document Section</h2>
                <div className={style.inputBox}>
                    <input
                        type="text"
                        placeholder="Adharcard Number"
                        value={formData.adharcardNumber}
                        onChange={(e) => setFormData({ ...formData, adharcardNumber: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        placeholder="PAN Number"
                        value={formData.panNumber}
                        onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                    /><br />
                </div>
            </div>

            <div className={style.containerBox} style={{backgroundColor:'#bf9b30'}}>
                <h2 style={{ textAlign: 'center', color: '#006666', marginTop: '-10px', fontSize: '30px' }}>Password Section</h2>
                <div className={style.inputBox}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    /><br />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    /><br />
                </div>
            </div>

            <button onClick={handleSubmit} style={{ marginTop: '20px', marginBottom: '20px', backgroundColor: '#004c4c', width: '500px', border:'3px solid #bf9b30', marginRight:'270px'}}>Submit</button>
        </div >
    );
};

export default RegistrationForm;
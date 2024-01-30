import React from 'react';
import "../../common/css/admission.css";

function StudentAdmissionForm() {
  return (
    
    <form>
      <h1>College Admission Form</h1>
      <fieldset>
        <legend>Personal Information</legend>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required />
      </fieldset>

      <fieldset>
        <legend>Address Information</legend>
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" required></textarea>

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" required />

        <label htmlFor="pincode">Pin Code:</label>
        <input type="text" id="pincode" name="pincode" pattern="[0-9]{6}" required />

        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" required />
      </fieldset>

      <fieldset>
        <legend>Educational Information</legend>
        <label htmlFor="qualification">Qualification:</label>

        <label htmlFor="10th">10th Board:</label>
        <input type="text" id="10th" name="10th" required />

        <label htmlFor="schoolName">School Name:</label>
        <input type="text" id="schoolName" name="schoolName" required />

        <label htmlFor="yearOfPassing">Year of Passing 10th:</label>
        <input type="number" id="yearOfPassing" name="yearOfPassing" min="1950" max="2023" required />

        <label htmlFor="percentage">Percentage in 10th:</label>
        <input type="number" id="percentage" name="percentage" min="0" max="100" step="0.01" required />

        <label htmlFor="12th">12th Board:</label>
        <input type="text" id="12th" name="12th" required />

        <label htmlFor="collegeName">College/School Name:</label>
        <input type="text" id="collegeName" name="collegeName" required />

        <label htmlFor="yearOfPassing">Year of Passing 12th:</label>
        <input type="number" id="yearOfPassing" name="yearOfPassing" min="1950" max="2023" required />

        <label htmlFor="percentage">Percentage in 12th:</label>
        <input type="number" id="percentage" name="percentage" min="0" max="100" step="0.01" required />
      </fieldset>

      <fieldset>
        <legend>Upload Documents</legend>
        <label htmlFor="photo">Upload Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/*" required />
        <label htmlFor="docs">Upload Documents:</label>
        <input type="file" id="docs" name="docs" accept=".pdf,.doc,.docx" required />
      </fieldset>

      <fieldset>
        <legend>Payment Information</legend>
        <label htmlFor="amount">Payment Amount:</label>
        <input type="number" id="amount" name="amount" min="1" required />
        <label htmlFor="transaction">Transaction ID:</label>
        <input type="text" id="transaction" name="transaction" required />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentAdmissionForm;
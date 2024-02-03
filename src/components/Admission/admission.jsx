import React, { useState } from "react";
import { Grid, Paper, TextField, Button, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import style from "../../common/css/admission.module.css"


const Admission = () => {
  const [studentData, setstudentData] = useState({
    std_regNo: "",
    std_f_name: "",
    std_m_name: "",
    std_l_name: "",
    std_gen: "",
    std_dob: "",
    std_categ: "",
    std_rel: "",
    std_dad_name: "",
    std_mom_name: "",
    std_city: "",
    std_state: "",
    std_country: "",
    std_pin: "",
    std_phone: "",
    std_email: "",
    std_per_adres: "",
    std_per_adres2: "",
    std_edu: "",
    std_passyear10: "",
    std_passyear12: "",
    std_marksheet10: "",
    std_marksheet12: "",
    std_certificate10: "",
    std_certificate12: "",
    std_perct10: "",
    std_perct12: "",
    std_status: "",
    std_adhaar: "",
    std_psphoto: "",
    std_photo: null,
  });

  const handleinputchange = (event) => {
    const { name, value } = event.target;
    setstudentData((studentData) => ({
      ...studentData,
      [name]: value,
    }));
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Grid container spacing={3} p={3}>
            <Grid item xs={12}>
              <h2>Admission Form</h2>
            </Grid>

            <Grid item xs={12} md={12}>
              <p>Registration Number</p>
              <TextField
                label="redg no."
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_regNo"
                value={studentData.std_regNo}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12}>
              <h2>Personal Details</h2>
            </Grid>
            <Grid item xs={12} md={4}>
              <p>Name</p>
              <TextField
                label="First Name"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_f_name"
                value={studentData.std_f_name}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <p>.</p>
              <TextField
                label="Middle Name"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_m_name"
                value={studentData.std_m_name}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <p>.</p>
              <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_l_name"
                value={studentData.std_l_name}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <p>DOB</p>
              <TextField
                type="date"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_dob"
                value={studentData.std_dob}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <p>Gender</p>
              <FormControl>
                <InputLabel>Select</InputLabel>
                <Select
                  name="std_gen"
                  value={studentData.std_gen}
                  onChange={handleinputchange}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <p>Category</p>
              <FormControl>
                <InputLabel>Select</InputLabel>
                <Select
                  name="std_categ"
                  value={studentData.std_categ}
                  onChange={handleinputchange}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                >
                  <MenuItem value="General">General</MenuItem>
                  <MenuItem value="OBC">OBC</MenuItem>
                  <MenuItem value="SC">SC</MenuItem>
                  <MenuItem value="ST">ST</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <p>Email id</p>
              <TextField
                label="eg:abc@gmail.com"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_email"
                value={studentData.std_email}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <p>Phone No.</p>
              <TextField
                label="Phone Number"
                type="number"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_phone"
                value={studentData.std_phone}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <p>Religion</p>
              <FormControl>
                <InputLabel>Select</InputLabel>
                <Select
                  name="std_rel"
                  value={studentData.std_rel}
                  onChange={handleinputchange}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                >
                  <MenuItem value="Buddhist">Buddhist</MenuItem>
                  <MenuItem value="Christian">Christian</MenuItem>
                  <MenuItem value="Hindu">Hindu</MenuItem>
                  <MenuItem value="Jain">Jain</MenuItem>
                  <MenuItem value="Judaism">Judaism</MenuItem>
                  <MenuItem value="Muslim">Muslim</MenuItem>
                  <MenuItem value="Sikh">Sikh</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <p>Father's Name</p>
              <TextField
                label="Mr."
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_dad_name"
                value={studentData.std_dad_name}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <p>Mother's name</p>
              <TextField
                label="Mrs."
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_mom_name"
                value={studentData.std_mom_name}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <p>Address</p>
              <TextField
                label="Address Line 1"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_per_adres"
                value={studentData.std_per_adres}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <p>.</p>
              <TextField
                label="Address Line 2"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_per_adres2"
                value={studentData.std_adres2}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="City"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_city"
                value={studentData.std_city}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="State"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_state"
                value={studentData.std_state}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Pin Code"
                type="number"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_pin"
                value={studentData.std_pin}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Country"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_country"
                value={studentData.std_country}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12}>
              <h2>Educational Details</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>10th Passing Year</p>
              <TextField
                label="2015-2022"
                type="number"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_passyear10"
                value={studentData.std_passyear10}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <p>10th Percentage</p>
              <TextField
                label="%"
                type="number"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_perct10"
                value={studentData.std_perct10}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <p>12th Passing Year</p>
              <TextField
                label="2015-2024"
                type="number"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_perct12"
                value={studentData.std_passyear12}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <p>12th Percentage</p>
              <TextField
                label="%"
                type="number"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_perct12"
                value={studentData.std_perct12}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <p>10th Marksheet </p>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_marksheet10"
                value={studentData.std_marksheet10}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <p>10th Certificate </p>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_marksheet12"
                value={studentData.std_certificate10}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <p>12th Marksheet </p>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_marksheet12"
                value={studentData.std_marksheet12}
                onChange={handleinputchange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <p>12th Certificate </p>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_certificate12"
                value={studentData.std_certificate12}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12}>
              <h2>Course/Facilities Interested</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>Course Name</p>
              <TextField
                label="eg:B.tech,M.tech,MBA,MCA"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_edu"
                value={studentData.std_edu}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <p>Status</p>
              <TextField
                label="Day Scholar/Hostel"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_status"
                value={studentData.std_status}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12}>
              <h2>Required Details</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>Adhaar Card </p>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_adhaar"
                value={studentData.std_adhaar}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <p>Passport size Photo</p>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="dense"
                name="std_psphoto"
                value={studentData.std_psphoto}
                onChange={handleinputchange}
              />
            </Grid>

            <Grid item xs={1}>
              <Button variant="contained" color="primary" fullWidth>
                Back
              </Button>
            </Grid>

            <Grid item xs={1}>
              <Button variant="contained" color="warning" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Admission;
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm,Controller } from "react-hook-form";
import * as y from "yup";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';

const schema = y.object({
    name: y.string().required("Name is requred"),
    phone: y.string()
        .required("Phone no. is required")
        .matches(/^[\d\+ \-\(\)]+$/, "Please enter a valid phone number"),
    address: y.string().required("Address is required"),
    email: y.string().email("Please enter a valid email address").required("Email is required"),
    zipcode:y.string().required("Zipcode is required"),
    country:y.string().required("Country is required"),
    gender:y.string().oneOf(['male','female'], "Gender is required"),
    preferences: y.array().required('Preferences is required'),
    password: y.string()
      .required('Password is required')
      .min(3, 'Password must be at 3 char long'),
    confirmPassword: y.string()
      .required('Confirm password is required')
      .oneOf([y.ref('password')], 'Passwords does not match'),
  });

export default function Register() {
    const { control,register, handleSubmit, formState: { errors },reset } = useForm({
        resolver: yupResolver(schema),
        onChange: data => {
            console.log(data);
        }
    });

    const onSubmit = (data, e) => alert(JSON.stringify(<pre>{data}</pre>));
    const onError = (errors, e) => console.log(errors, e);
    const resetForm=()=>{
        reset()
    }

    const MuiCheckbox = (props) => {
        const { field } = props;
        const selectedValues = field.value ?? [];
      
        const handleChange = (event) => {
          const isChecked = event.target.checked;
          const value = event.target.value;
      
          // Update the selectedValues array based on whether the checkbox is checked or unchecked
          if (isChecked) {
            selectedValues.push(value);
          } else {
            const index = selectedValues.indexOf(value);
            if (index !== -1) {
              selectedValues.splice(index, 1);
            }
          }
          field.onChange(selectedValues);
        };
      
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedValues.includes(props.value)}
                onChange={handleChange}
                value={props.value}
                color={props.color}
              />
            }
            label={props.label}
            name={props.name}
          />
        );
      };
      
    return (
        <Box sx={{display:'flex',justifyContent: 'center',backgroundColor:'blue'}}>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
                width: '40ch',
                m:'3rem',
                p:'3.5rem',
                borderRadius:'10px',
                backgroundColor:'white',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit, onError)}
            >
            <div>
                <TextField
                    required
                    label="Name"
                    {...register("name")}
                    />
            </div>
            {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}
            <div>
                <TextField
                    label="Address"
                    {...register("address")}
                    />
            </div>
            {errors.address && <p style={{color:'red'}}>{errors.address.message}</p>}
            <div>
                <TextField
                    required
                    label="Zipcode"
                    {...register("zipcode")}
                    />
            </div>
            {errors.zipcode && <p style={{color:'red'}}>{errors.zipcode.message}</p>}
            <div>
                <Box sx={{ maxWidth: '35ch' }} ml={1} mt={1} mb={1}>
                <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                        <Select {...field} sx={{ minWidth: '35ch' }}>
                        <MenuItem value="india">INDIA</MenuItem>
                        <MenuItem value="china">CHINA</MenuItem>
                        <MenuItem value="russia">RUSSIA</MenuItem>
                        <MenuItem value="japan">JAPAN</MenuItem>
                        <MenuItem value="uae">UAE</MenuItem>
                        </Select>
                    )}
                    />
                </Box>
            </div>
            {errors.country && <p style={{color:'red'}}>{errors.country.message}</p>}
            <div>
                <Box sx={{ maxWidth: '35ch' }} ml={1}>
                <Controller
                    name="radio"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup {...field}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    )}
                />
                </Box>
            </div>
            {errors.gender && <p style={{color:'red'}}>{errors.gender.message}</p>}
            <div>
                <FormLabel style={{marginLeft:'1rem'}}>Preferences</FormLabel>
                <Controller
                    name="preferences"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Box ml={1}>
                        <MuiCheckbox
                            field={field}
                            name="preferences"
                            value="red"
                            label="Red"
                            color="error"
                        />
                        <MuiCheckbox
                            field={field}
                            name="preferences"
                            value="blue"
                            label="Blue"
                            color="primary"
                        />
                        <MuiCheckbox
                            field={field}
                            name="preferences"
                            value="green"
                            label="Green"
                            color="success"
                        />
                        </Box>
                    )}
                    />

            </div>
            {errors.preferences && <p style={{color:'red'}}>{errors.preferences.message}</p>}
            <div>
                <TextField
                    label="Phone"
                    required
                    {...register("phone")}
                    />
            </div>
            {errors.phone && <p style={{color:'red'}}>{errors.phone.message}</p>}
            <div>
                <TextField
                    label="Email"
                    required
                    {...register("email")}
                    />
            </div>
            {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
            <div>
                <TextField
                    label="Password (6-8 characters)"
                    required
                    {...register("password")}
                    />
            </div>
            {errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}
            <div>
                <TextField
                    label="Verify Password"
                    required
                    {...register("confirmPassword")}
                    />
            </div>
            {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword.message}</p>}
            <Button type='submit'>Send</Button>
            <Button onClick={resetForm}>Clear</Button>
            </Box>
        </Box>
    )
}

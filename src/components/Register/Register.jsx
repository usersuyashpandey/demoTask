import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm,Controller } from "react-hook-form";
import * as y from "yup";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';

const schema = y.object({
    name: y.string().required("Please enter your name"),
    phone: y.string()
        .required("Phone no. is required")
        .matches(/^[\d\+ \-\(\)]+$/, "Please enter a valid phone number"),
    address: y.string().required("Please enter your address"),
    email: y.string().email("Please enter a valid email address").required("Please enter your email"),
    zipcode:y.string().required("Please enter your name"),
    country:y.string().required("Please select country"),
    gender:y.string().required("Please select gender"),
    preferences: y.boolean().oneOf([true], "This field is required"),
    password: y.string()
      .required('Password is mendatory')
      .min(3, 'Password must be at 3 char long'),
    confirmPassword: y.string()
      .required('Password is mandatory')
      .oneOf([y.ref('password')], 'Passwords does not match'),
  });

export default function Register() {
    const [country, setCountry] = useState('');
    const [selectedValue, setSelectedValue] = useState('a');
    const { control,register, handleSubmit, formState: { errors },reset } = useForm({
        resolver: yupResolver(schema),
      });

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const handleChangeRadio=(event)=>{
        setSelectedValue(event.target.value);
    }

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChangeRadio,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);
    const resetForm=()=>{
        reset()
    }

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
                <Box ml={1}>
                <Controller
                    name="checkbox"
                    control={control}
                    render={({ field }) => (<>
                        <FormControl component="fieldset" variant="standard" required {...register("preferences")}>
                        <FormLabel component="legend">Preferences</FormLabel>
                        <FormGroup row >
                            <FormControlLabel control={<Checkbox color='error'/>} label="Red" />
                            <FormControlLabel control={<Checkbox color='primary'/>} label="Blue" />
                            <FormControlLabel control={<Checkbox color='success'/>} label="Green" />
                        </FormGroup>
                    </FormControl>
                    </>
                    )}
                />
                </Box>
               
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

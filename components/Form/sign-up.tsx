"use client";
import React, { useState } from 'react';
import theme from "../Theme";
import { ThemeProvider } from "@mui/material/styles";
import { 
    Box, 
    Typography, 
    Grid, 
    CssBaseline, 
    Divider,
    Stack,
    InputLabel,
    InputAdornment,
    IconButton,
} from '@mui/material';
import styles from  '@/styles/layout.module.css';
import Image from "next/image";
import Link from 'next/link';
import GoogleIcon from '@/public/assets/svgs/devicon_google.svg';
import { GoogleIconComp, Fields, SignUpBtn } from "../interfaces/Buttons/Buttons";
import { GoEye, GoEyeClosed } from "react-icons/go";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const label = { inputProps: { 'aria-label': 'Checkbox' } };


const SignUp = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [valid, setValid] = useState<boolean>(true);
    const [checked, setChecked] = React.useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const handleChange = (value: string) => {
      setPhoneNumber(value);
      setValid(validatePhoneNumber(value));
    };
  
    const validatePhoneNumber = (phoneNumber: string): boolean => {
      const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
      return phoneNumberPattern.test(phoneNumber);
    };

    const handleClicks = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


  return (

    <ThemeProvider theme={theme}>

        <CssBaseline />   

            <Box width='100%'>

                <Grid container>

                    {/* Background Image */}
                    <Grid item md={5} xs={12} className={styles.imgs} sx={{display: {xs: 'none', md: 'block'}}}></Grid>

                        {/* Form */}
                        <Grid item md={7} xs={12} width='100%'>

                            <Box mt='2rem' gap={2} >

                                <Typography align='center' fontWeight='700' fontSize='2rem'> Create Account</Typography>

                                <Typography align='center' fontWeight='400' fontSize='1rem' color='#535556'> Register to join the train </Typography>

                            </Box>

                            {/* Google Signup btn */}
                            
                            <Box display='flex'  justifyContent='center' mt='2rem'>

                                <GoogleIconComp
                                    startIcon={<Image src={GoogleIcon} alt='google-icon' style={{ width: 24, height: 24, marginRight:'0.2rem' }} />}
                                    // onClick={renderProps.onClick}
                                    variant="outlined">
                                    Sign up with Google
                                </GoogleIconComp>

                            </Box>

                            {/* Divider */}
                            <Box display='flex' width='100%' alignItems='center' justifyContent='center' mt='1rem'>

                                <Divider flexItem variant="middle" sx={{ width : {md: '50%', xs: '90%'}}}> or </Divider>

                            </Box>

                            {/* Form */}
                            <form>

                                <Stack direction='column' spacing={1} className='fieldse' mt='1rem' width='100%' px='20px'>

                                    {/* Full name input field */}
                                    <InputLabel htmlFor="full-name" sx={{ color: '#000000' }}>
                                    Full name
                                    </InputLabel>
                                    <Fields
                                        required
                                        name='name'
                                        type="text"
                                        id='full-name'
                                        placeholder='Enter your full name'
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)
                                        />

                                </Stack>


                                {/* email */}

                                <Stack direction='column' spacing={1} className='field' mt='1rem' px='20px'>

                                    {/* Email input field */}

                                    <InputLabel htmlFor="full-name" sx={{ color: '#000000' }}> Email</InputLabel>

                                        <Fields
                                            required
                                            placeholder='Enter your email'
                                            name='email'
                                            type="email"
                                            id='email'
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}  
                                        />

                                </Stack>

                                 {/* Phone Number */}
                                <Stack direction='column' spacing={1} className='field' mt='1rem' px='20px'>

                                    {/* Email input field */}
                                    <InputLabel htmlFor="full-name" sx={{ color: '#000000'}}> Phone number </InputLabel>

                                    <PhoneInput
                                        country={'in'}
                                        value={phoneNumber}
                                        onChange={handleChange}
                                        inputProps={{
                                            required: true,
                                        }}
                                        inputStyle={{borderRadius: '10px', height: '3rem', border: '1px solid #ECECEC', width: '100%', 
                                        }}
                                        buttonStyle={{
                                            borderRadius: '10px 0px 0 10px',
                                            border: 'none',
                                          }}
                                          
                                        />

                                </Stack>

                                {/* Password */}
                                <Stack direction='column' spacing={1} className='field' mt='1rem' px='20px'>

                                    {/* Email input field */}
                                    <InputLabel htmlFor="password" sx={{ color: '#000000' }}> Password </InputLabel>

                                        <Fields
                                        
                                            required
                                            placeholder="Create a password"
                                            name='password'
                                            id='password'
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}    
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={

                                            <InputAdornment position="end">

                                                <IconButton

                                                    size='small'
                                                    sx={{color: '#000000', fontSize: '1rem !important', paddingRight: '20px'}}
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end">

                                                    {showPassword ? <GoEyeClosed style={{color: '#535556'}} /> : <GoEye style={{color: '#535556'}} />}

                                                </IconButton>

                                            </InputAdornment>
                                            }
                                        />

                                </Stack>

                                <Box px='1.5rem'  mt='1rem'>

                                    <Typography align='left' fontWeight='400'>By creating an account you agree with our <Link href='/' style={{color: '#3D5AF1'}}> Terms of Service </Link>, <Link href='#' style={{color: '#3D5AF1'}}>  Privacy Policy</Link></Typography>

                                </Box>

                                

                                <Box mt='1rem' px='20px'>

                                    <SignUpBtn> Create account</SignUpBtn>

                                </Box>

                                <Box mt='1.5rem'>

                                    <Typography align="center" fontWeight='400'>

                                        Already have an account? <Link href='/sign-in' style={{color: '#3D5AF1'}}>Sign in</Link>

                                    </Typography>

                                </Box>

                            </form>
                                        
                        </Grid>

                    </Grid>

                </Box>

    </ThemeProvider>
  )
}

export default SignUp
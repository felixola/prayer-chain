 {/* Google Signup btn */}
 <Box display='flex'  justifyContent='center' mt='2rem'>

 <GoogleIconComp
     startIcon={<Image src={GoogleIcon} alt='google-icon' style={{ width: 24, height: 24, marginRight:'0.5rem' }} />}
     // onClick={renderProps.onClick}
     variant="outlined">
     Sign in with Google
 </GoogleIconComp>

</Box>

{/* Divider */}
<Box display='flex' width='100%' alignItems='center' justifyContent='center' mt='1rem'>

 <Divider flexItem variant="middle" sx={{ width: ''}}> or </Divider>

</Box>

<Stack direction='column' width='100%' display='flex' alignItems='center' spacing={0}>

 <form className="forms" style={{  padding: '0px !important', }}>

     <Stack direction='column' spacing={1} className='field' mt='1rem' width='100%'>

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
             // onChange={(e) => setEmail(e.target.value)}
             />

     </Stack>

     {/* email */}

     <Stack direction='column' spacing={1} className='field' mt='1rem'>
         {/* Email input field */}
         <InputLabel htmlFor="full-name" sx={{ color: '#000000' }}>
         Email
         </InputLabel>
         <Fields
             required
             placeholder='youremail@gmail.com'
             name='email'
             type="email"
             id='email'
             // value={email}
             // onChange={(e) => setEmail(e.target.value)}   
                            
         />

     </Stack>

     {/* Phone Number */}
     <Stack direction='column' spacing={1} className='field' mt='1rem'>
         {/* Email input field */}
         <InputLabel htmlFor="full-name" sx={{ color: '#000000' }}>
         Phone number
         </InputLabel>
         <PhoneInput
             country={'in'}
             value={phoneNumber}
             onChange={handleChange}
             inputProps={{
                 required: true,
             }}
             inputStyle={{borderRadius: '10px', maxWidth:'100%', height: '3rem',}}
             buttonStyle={{
                 borderRadius: '10px 0px 0 10px',
               }}
             />

     </Stack>

     {/* Password */}
     <Stack direction='column' spacing={1} className='field' mt='1rem'>
         {/* Email input field */}
         <InputLabel htmlFor="password" sx={{ color: '#000000' }}>
         Password
         </InputLabel>
         <Fields
             required
             placeholder="Minimum 8 characters"
             name='password'
             id='password'
             // value={email}
             // onChange={(e) => setEmail(e.target.value)}    
             type={showPassword ? 'text' : 'password'}
             endAdornment={
             <InputAdornment position="end">
                 <IconButton
                 size='small'
                 sx={{color: '#000000', fontSize: '1rem !important'}}
                 aria-label="toggle password visibility"
                 onClick={handleClickShowPassword}
                 onMouseDown={handleMouseDownPassword}
                 edge="end"
                 >
                 {showPassword ? <GoEyeClosed style={{color: '#535556'}} /> : <GoEye style={{color: '#535556'}} />}
                 </IconButton>
             </InputAdornment>
             }
         />

     </Stack>

     {/* <Checkbox 
         disableRipple 
         checked={checked} 
         onChange={handleClicks} 
         sx={{
             '& .css-t8dd3m-MuiButtonBase-root-MuiCheckbox-root': {
               border: '1px solid #ECECEC', 
             },}}
         size="small"  /> */}

     <Box mt='2rem'>

         <SignUpBtn> Create account</SignUpBtn>

     </Box>

     <Box mt='1.5rem'>

         <Typography align="center" fontWeight='400'>

             Already have an account? <span style={{color: '#535556'}}>Sign In</span>

         </Typography>

     </Box>

 </form>

</Stack>



{/* <Checkbox 
                                    disableRipple 
                                    checked={checked} 
                                    onChange={handleClicks} 
                                    sx={{
                                        '& .css-t8dd3m-MuiButtonBase-root-MuiCheckbox-root': {
                                          border: '1px solid #ECECEC', 
                                        },}}
                                    size="small"  /> */}
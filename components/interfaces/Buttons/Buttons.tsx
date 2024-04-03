import { styled } from '@mui/material/styles';
import { Button, OutlinedInput } from '@mui/material';

  const GoogleIconComp = styled(Button)({ 
    color: '#000000',
    fontWeight: '500',
    borderRadius: '10px',
    border: '1px solid #ECECEC',
    // backgroundColor: '#2D3748',
    height: '3rem',
    textTransform: 'none',
    lineHeight: 1.5,
    fontSize: '1rem',
    ':hover' : {
      boxShadow: 'none',
      backgroundColor: '#E1E9FD',
      border: 'none',
    },
    '@media (max-width: 1800px)': {
      width: '50%', // Adjust width for screens smaller than 768px
    },
    '@media (max-width: 480px)': {
        width: '90%', // Further adjust width for screens smaller than 480px
    },
  });

  const Fields = styled(OutlinedInput) ({
    boxShadow: 'none', 
    borderRadius: '10px',   
    height: '3rem',
    padding: '0px !important',
    "& .MuiOutlinedInput-notchedOutline" : {  
      border: '1px solid #ECECEC',
       },
    '& ::placeholder': {
      fontWeight: '400',
      fontSize: '1rem',
      color: '#535556',
      // color: '#2D3748 !important',
      },
      "&:hover > .MuiOutlinedInput-notchedOutline" : {
        border : '2px solid #3D5AF1'
     },
     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3D5AF1', 
     },
     '@media (max-width: 1800px)': {
      width: '50%', // Adjust width for screens smaller than 768px
    },
    '@media (max-width: 480px)': {
        width: '100%', // Further adjust width for screens smaller than 480px
    },
     
  });


  const SignUpBtn = styled(Button)({ 
    color: '#FFFFFF',
    backgroundColor: '#3D5AF1',
    fontWeight: '500',
    borderRadius: '10px',
    height: '3rem',
    textTransform: 'none',
    lineHeight: 1.5,
    fontSize: '1rem',
    ':hover' : {
      boxShadow: 'none',
      // border: '1px solid #3D5AF1',
      backgroundColor: '#0C53BB',
      color: '#FFFFFF',
    },
    '@media (max-width: 1800px)': {
      width: '50%', // Adjust width for screens smaller than 768px
    },
    '@media (max-width: 480px)': {
        width: '100%', // Further adjust width for screens smaller than 480px
    },
  });



  export { GoogleIconComp, Fields, SignUpBtn }
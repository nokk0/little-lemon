import React from 'react';
import {Button,styled} from '@mui/material'
import { purple } from '@mui/material/colors';
import { colors } from '../theme';


export const CtaButton = styled(Button)(({ theme }) => ({
    color: colors.secondaryColor.four,
    backgroundColor: colors.primaryColor.two,
    borderRadius:'5px',
    width:'40vh',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '700',
    fontSize: '1.125rem',
    padding: '19px 24px',
    
    
    '&:hover': {
        // color: colors.secondaryColor.four,
        backgroundColor: colors.secondaryColor.two,
        
    },

  }));
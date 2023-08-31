import React from 'react'
import { Box, Typography } from '@mui/material'
import { navData } from '../Constants/data'
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const Component = styled(Box)(({ theme }) => ({

    display: 'flex',
    justifyContent: 'space-between',
    margin: '40px 100px 0 100px',
    overflowX: 'hidden',
    [theme.breakpoints.down('lg')]: {
        margin: '0px'
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
    cursor:pointer;
`
const Text = styled(Typography)`
    fonst-size: 14px;
    font-weight: 600;
    font-family: inherit;
`


const NavBar = () => {
    return (
        <Box style={{ background: '#fff ' }}>
            <Component>
                {
                    navData.map((data, key) => (
                        <Container key={data.id}>
                            <img src={data.url} alt="nav" style={{height:64}}/>
                            <Text >{data.text}</Text>
                        </Container>
                    ))
                }
            </Component>
        </Box>
    )
}

export default NavBar
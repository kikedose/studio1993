import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Home() {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#fff',
    }}
    >
      <Image
        src="/favicon.ico"
        width={32}
        height={32}
      />
      <Typography
        variant="h6"
        color="#000"
      >
        Next.js & MUI
      </Typography>

      <Typography
        variant="caption"
        color="#000"
      >
        Boilerplate by Enrique Domínguez
      </Typography>
    </Box>
  );
}

export default Home;

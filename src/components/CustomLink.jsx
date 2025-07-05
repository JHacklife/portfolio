import React from 'react';
import { Link, Button, Typography, Box } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

const CustomLink = ({ fuente = "", color, children, target = "_blank", dense = true }) => {
  return (
    <Link target={fuente && target} href={fuente}>
      <Button color={color} sx={{ py: dense ? 0 : 1 }} endIcon={fuente && <OpenInNew fontSize="small" />}>
        {children}
      </Button>
    </Link>
  );
}

export default CustomLink;

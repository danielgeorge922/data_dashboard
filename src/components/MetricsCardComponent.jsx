import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function MetricsCardComponent({ title, value, change }) {
  return (
    <Card sx={{ backgroundColor: '#fff' }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
        <Typography variant="body2" color="textSecondary">
          {change} compared to last month
        </Typography>
      </CardContent>
    </Card>
  );
}

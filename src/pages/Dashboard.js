import React from 'react';
import { Grid, Box } from '@mui/material';
import BarChartComponent from '../components/BarChartComponent';
import MetricsCardComponent from '../components/MetricsCardComponent';
import DataTableComponent from '../components/DataTableComponent';
import LineChartComponent from '../components/LineChartComponent.jsx';

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Metrics Cards */}
        <Grid item xs={12} md={3}>
          <MetricsCardComponent title="Total Sales" value="$3,456" change="+10%" />
        </Grid>
        <Grid item xs={12} md={3}>
          <MetricsCardComponent title="Total Profit" value="$45,200" change="+5%" />
        </Grid>
        <Grid item xs={12} md={3}>
          <MetricsCardComponent title="Total Products" value="2,450" change="+2%" />
        </Grid>
        <Grid item xs={12} md={3}>
          <MetricsCardComponent title="Total Users" value="3,456" change="+1%" />
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={8}>
          <Box sx={{ height: 300 }}>
            <BarChartComponent />
          </Box>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={4}>
          <Box sx={{ height: 300 }}>
            <LineChartComponent />
          </Box>
        </Grid>

        {/* Data Table */}
        <Grid item xs={12}>
          <DataTableComponent />
        </Grid>
      </Grid>
    </Box>
  );
}

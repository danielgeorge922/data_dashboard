import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const tableData = [
  { id: 1, name: 'Product A', price: 100, stock: 30 },
  { id: 2, name: 'Product B', price: 150, stock: 20 },
  { id: 3, name: 'Product C', price: 200, stock: 10 },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Product Name', width: 150 },
  { field: 'price', headerName: 'Price', width: 110 },
  { field: 'stock', headerName: 'Stock', width: 110 },
];

export default function DataTableComponent() {
  return (
    <div style={{ height: 300, width: '100%', backgroundColor: '#fff' }}> {/* White background added */}
      <DataGrid 
        rows={tableData} 
        columns={columns} 
        pageSize={5} 
        sx={{ 
          '& .MuiDataGrid-root': {
            backgroundColor: '#fff', // Explicitly set white background for the table area
          },
        }}
      />
    </div>
  );
}

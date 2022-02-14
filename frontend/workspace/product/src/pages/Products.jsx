import React from "react";
import Box from '@mui/material/Box';
import { Table } from 'reporting-system';
import { Button } from "@mui/material";

const Product = () => {
  function createData(id, name, price, stock) {
    return {
      id,
      name,
      price,
      stock
    };
  }

  const data = [
    createData(1, 'Produk', 'Rp. 450.000', 10),
    createData(2, 'Produk', 'Rp. 450.000', 10),
    createData(3, 'Produk', 'Rp. 450.000', 10),
    createData(4, 'Produk', 'Rp. 450.000', 10),
    createData(5, 'Produk', 'Rp. 450.000', 10),
    createData(6, 'Produk', 'Rp. 450.000', 10),
    createData(7, 'Produk', 'Rp. 450.000', 10),
    createData(8, 'Produk', 'Rp. 450.000', 10),
    createData(9, 'Produk', 'Rp. 450.000', 10),
    createData(10,'Produk', 'Rp. 450.000', 10),
    createData(11,'Produk', 'Rp. 450.000', 10),
    createData(12,'Produk', 'Rp. 450.000', 10),
  ];

  const header = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Nama produk',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: false,
      label: 'Harga',
    },
    {
      id: 'stock',
      numeric: true,
      disablePadding: false,
      label: 'Stok',
    },    
  ]
  return (
    <div>
      <Button variant="outlined">Tambah produk</Button>
      <Box sx={{ width: '100%' }}>        
        <Table data={data} header={header} title="Products"/>
      </Box>
    </div>
  )
}

export default Product;
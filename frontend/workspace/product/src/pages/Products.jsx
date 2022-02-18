import React from "react";
import Box from '@mui/material/Box';
import { Table } from 'reporting-system';
import { Button, Modal } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import './Product.scss';

const Product = () => {
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: window.innerWidth < 876 ? '90vw' : '60vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: window.innerWidth < 876 ? '650px' : '85vh'
  };
  
  function createData(id, name, price, stock, sold, buy) {
    return {
      id,
      name,
      price,
      stock,
      sold,
      buy
    };
  }

  const data = [
    createData(1, 'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(2, 'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(3, 'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(4, 'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(5, 'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(6, 'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(7, 'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(8, 'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(9, 'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(10,'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(11,'Produk', 'Rp. 450.000', 10, 5, 5),
    createData(12,'Produk', 'Rp. 450.000', 10, 5, 5),
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
      numeric: false,
      disablePadding: false,
      label: 'Harga',
    },
    {
      id: 'stock',
      numeric: false,
      disablePadding: false,
      label: 'Stok',
    },    
    {
      id: 'sold',
      numeric: false,
      disablePadding: false,
      label: 'Total penjuaan',
    },    
    {
      id: 'buy',
      numeric: false,
      disablePadding: false,
      label: 'Total pembelian',
    },    
  ]
  return (
    <React.Fragment>
      <h2>Produk</h2>
      <NavLink to="/product/add"><Button variant="outlined">Tambah produk</Button></NavLink>
      <Box sx={{ width: '100%' }}>        
        <Table 
          data={data} 
          header={header} 
          title="Products"          
          actionButton={
            {
              edit: true,
              view: true,
              show: true            
            }
          }
          checkbox={true}
          viewHandler={() => {setOpen(true);}}          
        />
      </Box>
      <Modal
        open={open}
        onClose={() => {setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="product_box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nama produk - Model produk
          </Typography>
          <Table 
            data={data} 
            header={header} 
            title="Histori pembelian"          
            actionButton={
              {
                show: false            
              }
            }
            checkbox={false}
            viewHandler={() => {setOpen(true);}}
          />
          <Button variant="outlined" onClick={() => {setOpen(false)}}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default Product;
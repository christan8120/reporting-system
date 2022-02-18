import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import { Table } from 'reporting-system';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const TransactionList = () => {
  const [value, setValue] = useState();

  const data = [
    {
      nama_produk: "Produk",
      jml_penjualan: "100",
      nl_penjualan: "Rp. 100.000.000,00",
      potongan: '1.25',
      cogs: 'Rp. 220.000,00',
      profit: 'Rp. 44.453'
    }
  ]

  const header = [
    {
      id: 'nama_produk',
      numeric: false,
      disablePadding: true,
      label: 'Nama produk',
    },
    {
      id: 'jml_penjualan',
      numeric: false,
      disablePadding: true,
      label: 'Nama produk',
    },
    {
      id: 'nl_penjualan',
      numeric: false,
      disablePadding: true,
      label: 'Nama produk',
    },
    {
      id: 'potongan',
      numeric: false,
      disablePadding: true,
      label: 'Nama produk',
    },
    {
      id: 'cogs',
      numeric: false,
      disablePadding: true,
      label: 'Nama produk',
    },
    {
      id: 'profit',
      numeric: false,
      disablePadding: true,
      label: 'Nama produk',
    }
  ]
  return (
    <div>
      <h3>Daftar transaksi</h3>
      <hr />
      
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker            
          label="Start date"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField variant="standard" {...params} />}            
          tFormat="dd/MM/yyyy"
        />
      </LocalizationProvider>
      <NavLink to="/report/add"><Button variant="outlined">Tambah transaksi</Button></NavLink>
      <Box sx={{ width: '100%', marginTop: '1rem'}}>
        <Table
          data={data}
          header={header}
          title="Transaksi"          
          actionButton={
            {
              show: false            
            }
          }
          checkbox={false}
        ></Table>
      </Box>
    </div>
  )
}

export default TransactionList;
import React from 'react'
import { Button, TextField } from "@mui/material";
import { NavLink } from 'react-router-dom';

const AddTransaction = () => {
  return (
    <div>
      <TextField
          id="standard-helperText"
          label="Nama produk"
          helperText="Required"
          variant="standard"
          fullWidth={true}
        />
      <TextField
        id="standard-helperText"
        label="Tanggal penjualan"
        helperText="Required"
        variant="standard"
        fullWidth={true}
      />

      <TextField
          error={false}
          id="standard-helperText"
          label="Diskon"
          helperText="Required"
          variant="standard"
          fullWidth={true}
        />    

      <TextField
        error={false}
        id="standard-helperText"
        label="Jenis potongan"
        helperText="Required"
        variant="standard"
        fullWidth={true}
      />    

      <TextField
          error={false}
          id="standard-helperText"
          label="Quantity"
          helperText="Required"
          variant="standard"
          fullWidth={true}
        />    

        <TextField
          error={false}
          id="standard-helperText"
          label="Catatan"
          helperText="Required"
          variant="standard"
          fullWidth={true}
        />    

        <TextField
          error={false}
          id="standard-helperText"
          label="Harga jual satuan"
          helperText="Required"
          variant="standard"
          fullWidth={true}
        />    

        <TextField
          error={false}
          id="standard-helperText"
          label="Harga beli satuan"
          helperText="Required"
          variant="standard"
          fullWidth={true}
        />    
        <NavLink to={"/report"}><Button variant="outlined" color="error">Close</Button></NavLink>
        <Button variant="outlined">Save</Button>
    </div>
  )
}

export default AddTransaction;
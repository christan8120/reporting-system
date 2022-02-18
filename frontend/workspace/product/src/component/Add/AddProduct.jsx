import { TextField } from "@mui/material";
import React from "react";

const AddProduct = () => {
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
        label="Model produk"
        helperText="Required"
        variant="standard"
        fullWidth={true}
      />

      <TextField
          error={false}
          id="standard-helperText"
          label="Harga"
          helperText="Required"
          variant="standard"
          fullWidth={true}
        />              
    </div>
  )
}

export default AddProduct;
import React from "react";
import { TextField } from "@mui/material";
import { Table } from 'reporting-system';

const AddStock = () => {
  const header = [
    {
      id: 'date',
      numeric: false,
      disablePadding: true,
      label: 'Tanggal',
    },
    {
      id: 'qty',
      numeric: false,
      disablePadding: true,
      label: 'Jumlah',
    },
    {
      id: 'harga',
      numeric: false,
      disablePadding: true,
      label: 'Harga beli satuan',
    },
    {
      id: 'note',
      numeric: false,
      disablePadding: true,
      label: 'Catatan',
    }
  ]

  const data = [
    {
      id: '1',
      date: '26 Oktober 2021',
      harga: 'Rp. 400.000',
      qty: 10,
      note: 'Ini catatannya'
    }
  ]
  return (<div>
    <Table data={data} header={header} title="Transaksi pembelian" actionButton={{show: false}} checkbox={false}/>
    <TextField
      id="standard-helperText"
      label="Tanggal"
      helperText="Required"
      variant="standard"
      fullWidth={true}
    />
    <TextField
      id="standard-helperText"
      label="Jumlah"
      helperText="Required"
      variant="standard"
      fullWidth={true}
    />
    <TextField
      id="standard-helperText"
      label="Harga"
      helperText="Required"
      variant="standard"
      fullWidth={true}
    />
    <TextField
      id="standard-helperText"
      label="Catatan"
      helperText="Required"
      variant="standard"
      fullWidth={true}
    />
  </div>)
}

export default AddStock;
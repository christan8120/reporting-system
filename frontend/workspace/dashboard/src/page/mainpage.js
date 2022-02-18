import React from "react";
import Chart from "react-apexcharts";
import { CardView, Field, Input } from "reporting-system";

import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';

import './mainpage.scss';
import { MenuItem } from "@mui/material";

const MainPage = () => {
  const [value, setValue] = React.useState(new Date());
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      tickPlacement: 'on'
    }
  }

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ];

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns}>      
        
      
        <div className="dashboard_content_option">
          <div>
            <TextField label="Store" variant="standard" select>
              <MenuItem value="1">Toko 1</MenuItem>
            </TextField>
          </div>
          <div>
          <TextField label="Merchant" variant="standard" select>
            <MenuItem value="1">Tokopedia</MenuItem>
          </TextField>
          </div>
          <div>
            <TextField label="Show by" variant="standard" select>
              <MenuItem value="1">Monthly</MenuItem>
            </TextField>
          </div>
          <div>
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
          </div>
          <div>
            <DatePicker            
              label="End date"
              openTo="day"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField variant="standard" {...params} />}            
              tFormat="dd/MM/yyyy"
            />
          </div>
        </div>
      </LocalizationProvider>
      <div className="content_summarize">
        <CardView>
          <div className="dashboard_card_header">
            <h4>transaksi</h4>
            <p>detail</p>            
          </div>
          <div className="dashboard_card_content">
            43
          </div>
        </CardView>
        <CardView>
          <div className="dashboard_card_header">
            <h4>pendapatan</h4>
            <p>detail</p>            
          </div>
          <div className="dashboard_card_content">
            43
          </div>
        </CardView>
        <CardView>
          <div className="dashboard_card_header">
            <h4>pendapatan bersih</h4>
            <p>detail</p>            
          </div>
          <div className="dashboard_card_content">
            43
          </div>
        </CardView>
        <CardView>
          <div className="dashboard_card_header">
            <h4>pengeluaran</h4>
            <p>detail</p>            
          </div>
          <div className="dashboard_card_content">
            43
          </div>
        </CardView>
        <CardView>
          <div className="dashboard_card_header">
            <h4>produk terjual</h4>
            <p>detail</p>            
          </div>
          <div className="dashboard_card_content">
            43
          </div>
        </CardView>
      </div>
      <div className="content_chart">     
        <CardView>
          <div className="header_chart">
            <h3>Grafik total transaksi</h3>
          </div>
          <div className="view_chart">
            <Chart
              options={options}
              series={series}
              width="100%"
              type="line"
            />
          </div>
        </CardView>
        <CardView>
          <div className="chart_header">
            <h3>Grafik penjualan produk</h3>
          </div>
          <div className="view_chart">
            <Chart
              options={options}
              series={series}
              width="100%"
              type="line"
            />
          </div>
        </CardView>
        <CardView>
          <div className="chart_header">
            <h3>Grafik pendapatan</h3>
          </div>
          <div className="view_chart">
            <Chart
              options={options}
              series={series}
              width="100%"
              type="line"
            />
          </div>
        </CardView>
      </div>
    </React.Fragment>
  )  
}

export default MainPage;
import React from "react";
import Chart from "react-apexcharts";
import { CardView, Field, Input } from "reporting-system";

import './mainpage.scss';

const MainPage = () => {
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
      <div className="dashboard_content_option">
        <Field label="Store">
          <Input type="text"/>
        </Field>
        <Field label="Merchant">
          <Input type="text"/>
        </Field>
        <Field label="Show graph by">
          <Input type="text"/>
        </Field>
        <Field label="Start">
          <Input type="text"/>
        </Field>
        <Field label="End">
          <Input type="text"/>
        </Field>
      </div>
      <div className="content_summarize">
        <CardView>
          <div className="dashboard_card_header">
            <h4>Total transaksi</h4>
            <p>lihat semua</p>            
          </div>
          <div className="dashboard_card_content">
            43
          </div>
        </CardView>
        <CardView>
          <div className="dashboard_card_header">
            <h4>Total pendapatan</h4>
            <p>lihat semua</p>            
          </div>
          <div className="dashboard_card_content">
            43
          </div>
        </CardView>
        <CardView>
          <div className="dashboard_card_header">
            <h4>Total pendapatan bersih</h4>
            <p>lihat semua</p>            
          </div>
          <div className="dashboard_card_content">
            43
          </div>
        </CardView>
        <CardView>
          <div className="dashboard_card_header">
            <h4>Total pengeluaran</h4>
            <p>lihat semua</p>            
          </div>
          <div className="dashboard_card_content">
            43
          </div>
        </CardView>
        <CardView>
          <div className="dashboard_card_header">
            <h4>Total produk terjual</h4>
            <p>lihat semua</p>            
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
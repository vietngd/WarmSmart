import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
// import { Grid } from "@mui/system";

const ChartsOverviewDemo = () => {
  return (
    <div className='grid grid-cols-9 pt-8'>
      <div className='col-span-2'></div>
      <div className='col-span-5'>
        <div>
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
            height={290}
            xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </div>
        <div>
          <LineChart
            series={[{ data: [40, 50, 60, 70] }, { data: [10, 20, 30, 40] }]}
            height={290}
            xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </div>
      </div>
      <div className='col-span-2'></div>
    </div>
  );
};

export default ChartsOverviewDemo;

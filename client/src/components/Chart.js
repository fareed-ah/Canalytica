import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, tweets) {
  return { time, tweets };
}

const data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined),
];
const customTheme = createMuiTheme({
  palette: {
    axis: "black",
    title: "black",
  },
  status: {
    danger: "orange",
  },
});

export default function Chart() {
  const theme = customTheme;

  return (
    <React.Fragment>
      <Title color="black">Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.axis} />
          <YAxis stroke={theme.palette.axis}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.axis }}
            >
              Tweets
            </Label>
          </YAxis>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="tweets"
            stroke={"#03A9F4"}
            strokeWidth={2.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

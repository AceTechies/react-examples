import React, { useState } from "react";
import "./WorkoutsTabScreen.css";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  CartesianGrid,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 2000,
    pv: 2400,
    amt: 1000,
  },
  {
    name: "Page B",
    uv: 5000,
    pv: 1398,
    amt: 2010,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 1290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 800,
  },
  {
    name: "Page E",
    uv: 5890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2590,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3990,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 1490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3890,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 5490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 2490,
    pv: 4300,
    amt: 2100,
  },
];
const piechartData = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 100 },
];

const areaData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const COLORS = ["#FF8134", "#016ED1", "white"];
function WorkoutsTabScreen() {
  const topContainer = () => {
    return (
      <div
        style={{
          display: "flex",
          padding: "20px 20px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "100%" }}>
          {/* name and basic details container */}
          <div className="workout_tab_topContainer">
            <img
              src="https://images.unsplash.com/photo-1587938745570-681161dcfe17?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="workout_tab_buttonContainer">
              <div style={{ padding: "0px 20px", margin: "20px 0px" }}>
                <div>
                  <h1 style={{ fontSize: "45px", margin: "0px 0px 5px 0px" }}>
                    Hello, Makise!
                  </h1>
                </div>
                <div>
                  <h4 style={{ margin: "0px" }}>
                    You have 2451 Fitness Points
                  </h4>
                </div>
              </div>
              <div style={{ padding: "0px 20px" }}>
                <Button>
                  <ArrowForwardIcon />
                </Button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", margin: "10px 0px" }}>
            {getBarGraph("./shoes.png", data, { val: "9,158", sign: "steps" })}
            {getBarGraph("./waterdrop.png", data, { val: "1,187", sign: "ml" })}
          </div>
        </div>
        {/* calorie intake section */}
        <div className="workout_tab_ai_container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ margin: "0px" }}>AI Calorie Intake</h4>
            <img src="./calories.png" alt="" />
          </div>
          <div>{getPiechart()}</div>
          <div
            style={{
              position: "absolute",
              top: "180px",
              left: "200px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ margin: "0px" }}>2551</h1>
            <h4 style={{ margin: "0px" }}>kcal</h4>
          </div>
          <div style={{ display: "flex" }}>
            {getLegends("Protiens")}
            {getLegends("Carbs")}
            {getLegends("Macro")}
          </div>
        </div>
      </div>
    );
  };
  const getLegends = (title) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1
          style={{
            margin: "0px",
            fontSize: "34px",
            color: `${
              title === "Protiens"
                ? COLORS[0]
                : title === "Carbs"
                ? COLORS[1]
                : COLORS[2]
            }`,
          }}
        >
          •
        </h1>
        <span style={{ margin: "5px 40px 0px 5px", fontWeight: "600" }}>
          {title}
        </span>
      </div>
    );
  };
  const getBarGraph = (src, data, val) => {
    return (
      <div className="barGraph_container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0px 0px 20px 0px",
          }}
        >
          <h4 style={{ margin: "0px" }}>Steps</h4>
          <img src={src} alt="" />
        </div>
        <div>
          <BarChart width={250} height={100} data={data}>
            <Bar radius={5} dataKey="uv" fill="#fff" />
          </BarChart>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ margin: "10px 0px" }}>{val.val}</h1>
          <span style={{ margin: "10px 5px 0px 5px" }}>{val.sign}</span>
        </div>
      </div>
    );
  };
  const getPiechart = () => {
    return (
      <PieChart width={800} height={280}>
        <Pie
          stroke=""
          data={piechartData}
          cx={210}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={110}
          outerRadius={150}
          fill="red"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  };
  const belowContainer = () => {
    return (
      <div style={{ display: "flex" }}>
        {/* Kickboxing section */}
        <div style={{ position: "relative", margin: "0px 20px" }}>
          <img
            style={{
              width: "340px",
              height: "400px",
              objectFit: "cover",
              borderRadius: "22px",
            }}
            src="./kickboxing.png"
            alt=""
          />
          <div className="workout_tab_kickboxing">
            <div style={{ marginTop: "40px" }}>
              <img src="./arts.png" alt="" />
            </div>
            <div>
              <h2 style={{ margin: "10px 0px", fontWeight: "500" }}>
                Upcoming exercise
              </h2>
            </div>
            <div>
              <h1
                style={{ margin: "0px", fontSize: "40px", fontWeight: "700" }}
              >
                Kickboxing
              </h1>
            </div>
            <div className="workout_kickboxing_buttonContainer">
              <Button>
                <ArrowForwardIcon />
              </Button>
            </div>
          </div>
        </div>
        {/* line graph section */}
        <div className="workout_tab_line_container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img width={20} src="./dashboard.png" alt="" />
                <h2 style={{ margin: "0px 0px 5px 10px" }}>Sandow Score</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <span>+8.2</span>
                <h4 style={{ margin: "0px 0px 0px 10px" }}>
                  Increasing Steadily
                </h4>
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: "40px", margin: "0px" }}>
                87.51 <span style={{ fontSize: "20px" }}>pts</span>
              </h1>
            </div>
          </div>
          {/* area graph section */}
          <div style={{ marginTop: "20px" }}>{areaGraph()}</div>
          <div>{filterbyDateSection()}</div>
        </div>
      </div>
    );
  };

  const [selectedDate, setSelectedDate] = useState(0);
  const filterbyDateSection = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "750px",
          backgroundColor: "#101113",
          height: "50px",
          borderRadius: "12px",
          marginLeft: "55px",
        }}
      >
        {[1, 2, 3, 4, 5].map((date, index) => {
          var val = "1w";
          switch (index) {
            case 0:
              val = "1d";
              break;
            case 1:
              val = "1w";
              break;
            case 2:
              val = "1m";
              break;
            case 3:
              val = "1y";
              break;
            case 4:
              val = "All";
              break;

            default:
              break;
          }
          return (
            <Button
              onClick={() => setSelectedDate(index)}
              style={{
                backgroundColor: `${selectedDate === index ? "#FF8134" : ""}`,
                color: "inherit",
                width: "100px",
                borderRadius: "12px",
              }}
            >
              {val}
            </Button>
          );
        })}
      </div>
    );
  };

  const areaGraph = () => {
    return (
      <div>
        <AreaChart
          width={830}
          height={250}
          data={areaData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#FF8134" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF8134" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          {/* <XAxis dataKey="name" /> */}
          <YAxis />
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="grey"
            opacity={0.3}
          />
          <Tooltip
            cursor={false}
            content={
              <div
                style={{
                  backgroundColor: "#FF8134",
                  padding: "10px",
                  width: "30px",
                  borderRadius: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>80</span>
              </div>
            }
            wrapperStyle={{ outline: "none" }}
          />
          <Area
            strokeWidth={8}
            type="monotone"
            dataKey="pv"
            stroke="#FF8134"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    );
  };
  return (
    <div>
      {topContainer()}
      {belowContainer()}
    </div>
  );
}

export default WorkoutsTabScreen;

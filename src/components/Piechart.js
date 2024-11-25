import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChart = () => {
  const data = {
    datasets: [
      {
        label: "Task Status",
        data: [80, 20],
        backgroundColor: ["#3F9142", "#142E15"], // Green and Dark Green
        hoverOffset: 4,
      },
    ],
   
  };

  const options = {
    responsive: true,
    cutout: "50%", // Creates the hollow center
    plugins: {
      legend: {
        position: "bottom", // Places the legend at the bottom
        labels: {
          usePointStyle: true, // Displays a dot instead of a rectangle
          pointStyle: "circle", // Ensures the dot is circular
          font: {
            size: 14, // Adjust font size
          },
          color: "#000", // Legend text color
        },
      },
    },
    layout: {
      padding: {
        bottom: 10, // Add padding between chart and legend
      },
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          display: "flex", // Align items in a row
          justifyContent: "center",
          gap: "20px", // Add spacing between labels
          marginTop: "10px", // Adjust spacing above legend
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#3F9142",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
          <span>Pending</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#142E15",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
          <span>Done</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

// AnimatedLineGraph.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Type Definitions
interface LineGraphDataPoint {
  xValue: number | string;
  yValue: number | string;
}

interface SingleLineData {
  data: LineGraphDataPoint[];
  name?: string;
}

interface AnimatedLineGraphProps {
  title?: string;
  data: SingleLineData[];
  xLabel?: string;
  yLabel?: string;
}

// Helper Functions for Scaling
const getXScale = (data: SingleLineData[], width: number, padding: number) => {
  const allXValues = data.flatMap((line) =>
    line.data.map((point) => Number(point.xValue))
  );
  const minX = Math.min(...allXValues);
  const maxX = Math.max(...allXValues);

  return (x: number) =>
    padding + ((x - minX) / (maxX - minX)) * (width - 2 * padding);
};

const getYScale = (data: SingleLineData[], height: number, padding: number) => {
  const allYValues = data.flatMap((line) =>
    line.data.map((point) => Number(point.yValue))
  );
  const minY = Math.min(...allYValues);
  const maxY = Math.max(...allYValues);

  return (y: number) =>
    height - padding - ((y - minY) / (maxY - minY)) * (height - 2 * padding);
};

// Axes Component
const Axes: React.FC<{
  width: number;
  height: number;
  padding: number;
  xTickCount: number;
  yTickCount: number;
  xLabel: string;
  yLabel: string;
}> = ({ width, height, padding, xTickCount, yTickCount, xLabel, yLabel }) => {
  const xTicks = Array.from(
    { length: xTickCount + 1 },
    (_, i) => padding + (i * (width - 2 * padding)) / xTickCount
  );

  const yTicks = Array.from(
    { length: yTickCount + 1 },
    (_, i) => height - padding - (i * (height - 2 * padding)) / yTickCount
  );

  const tickLength = Math.min(width, height) * 0.005; // Responsive tick length

  return (
    <g>
      {/* X Axis */}
      <line
        x1={padding}
        y1={height - padding}
        x2={width - padding}
        y2={height - padding}
        stroke="black"
      />
      {/* Y Axis */}
      <line
        x1={padding}
        y1={padding}
        x2={padding}
        y2={height - padding}
        stroke="black"
      />

      {/* X Ticks and Labels */}
      {xTicks.map((x, idx) => (
        <g key={`x-tick-${idx}`}>
          <line
            x1={x}
            y1={height - padding}
            x2={x}
            y2={height - padding + tickLength * 5}
            stroke="black"
          />
          <text
            x={x}
            y={height - padding + tickLength * 15}
            textAnchor="middle"
            fontSize={`${1.5}vw`}
            fill="black"
          >
            {idx}
          </text>
        </g>
      ))}

      {/* Y Ticks and Labels */}
      {yTicks.map((y, idx) => (
        <g key={`y-tick-${idx}`}>
          <line
            x1={padding}
            y1={y}
            x2={padding - tickLength * 5}
            y2={y}
            stroke="black"
          />
          <text
            x={padding - tickLength * 15}
            y={y + tickLength * 5}
            textAnchor="end"
            fontSize={`${1.5}vw`}
            fill="black"
          >
            {idx}
          </text>
        </g>
      ))}

      {/* X Label */}
      <text
        x={width / 2}
        y={height - padding + tickLength * 30}
        textAnchor="middle"
        fontSize={`${2}vw`}
        fill="black"
      >
        {xLabel}
      </text>

      {/* Y Label */}
      <text
        x={padding - tickLength * 30}
        y={height / 2}
        textAnchor="middle"
        fontSize={`${2}vw`}
        fill="black"
        transform={`rotate(-90, ${padding - tickLength * 30}, ${height / 2})`}
      >
        {yLabel}
      </text>
    </g>
  );
};

// Animated Line Component
const AnimatedLine: React.FC<{
  path: string;
  stroke: string;
  strokeWidth: number;
}> = ({ path, stroke, strokeWidth }) => {
  return (
    <motion.path
      d={path}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    />
  );
};

// Main AnimatedLineGraph Component
const AnimatedLineGraph: React.FC<AnimatedLineGraphProps> = ({
  title = "Multi Line Graph",
  data,
  xLabel = "X Axis",
  yLabel = "Y Axis",
}) => {
  // State for dimensions with initial values to prevent window access during SSR
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 800, // Default width (you can adjust as needed)
    height: 600, // Default height (you can adjust as needed)
  });

  // Update dimensions on client side after component mounts
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth * 0.8, // 80vw
        height: window.innerHeight * 0.6, // 60vh
      });
    };

    // Only add event listener if window is defined
    if (typeof window !== "undefined") {
      updateDimensions(); // Set initial dimensions
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  const padding = dimensions.width * 0.05; // 5% padding

  // Scales
  const xScale = getXScale(data, dimensions.width, padding);
  const yScale = getYScale(data, dimensions.height, padding);

  // Generate paths for each line
  const paths = data.map((line, idx) => {
    const path = line.data
      .map((point, i) => {
        const x = xScale(Number(point.xValue));
        const y = yScale(Number(point.yValue));
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

    // Define a color palette
    const colors = ["#ff007f", "#00bfff", "#32cd32", "#ffa500", "#800080"];
    const color = colors[idx % colors.length];

    return { path, color };
  });

  return (
    <div
      style={{
        width: "80vw",
        height: "60vh",
        margin: "0 auto",
        position: "relative",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: `${2}vh ${2}vw`,
        boxSizing: "border-box",
      }}
    >
      {title && (
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5vw",
            marginBottom: "2vh",
            color: "#333",
          }}
        >
          {title}
        </h2>
      )}
      <svg width="100%" height="100%">
        {/* Axes */}
        <Axes
          width={dimensions.width}
          height={dimensions.height}
          padding={padding}
          xTickCount={10}
          yTickCount={10}
          xLabel={xLabel}
          yLabel={yLabel}
        />

        {/* Animated Lines */}
        <g>
          {paths.map((line, idx) => (
            <AnimatedLine
              key={`line-${idx}`}
              path={line.path}
              stroke={line.color}
              strokeWidth={2}
            />
          ))}
        </g>
      </svg>

      {/* Legends */}
      <div
        style={{
          position: "absolute",
          top: `${2}vh`,
          right: `${2}vw`,
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
        }}
      >
        {data.map((line, idx) => (
          <div
            key={`legend-${idx}`}
            style={{ display: "flex", alignItems: "center" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "15px",
                height: "15px",
                backgroundColor: paths[idx].color,
                marginRight: "5px",
                borderRadius: "3px",
              }}
            ></span>
            <span style={{ fontSize: "1.5vw", color: "#333" }}>
              {line.name || `Line ${idx + 1}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLineGraph;

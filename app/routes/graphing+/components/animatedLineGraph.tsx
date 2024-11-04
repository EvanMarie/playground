// AnimatedLineGraph.tsx
import React, { useState, useEffect, useRef } from "react";
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

  // Define tick lengths using vh units
  const tickLength = 1; // 1vh

  // Define font sizes using vh units
  const labelFontSize = 1.5; // 1.5vh

  // Define axis label font size
  const axisLabelFontSize = 2; // 2vh

  return (
    <g>
      {/* X Axis */}
      <line
        x1={padding}
        y1={height - padding}
        x2={width - padding}
        y2={height - padding}
        stroke="white"
      />
      {/* Y Axis */}
      <line
        x1={padding}
        y1={padding}
        x2={padding}
        y2={height - padding}
        stroke="white"
      />

      {/* X Ticks and Labels */}
      {xTicks.map((x, idx) => (
        <g key={`x-tick-${idx}`}>
          <line
            x1={x}
            y1={height - padding}
            x2={x}
            y2={height - padding + tickLength}
            stroke="white"
          />
          <text
            x={x}
            y={height - padding + tickLength + 1} // Adjust spacing below ticks
            textAnchor="middle"
            fontSize={`${labelFontSize}vh`}
            fill="white"
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
            x2={padding - tickLength}
            y2={y}
            stroke="white"
          />
          <text
            x={padding - tickLength - 1} // Adjust spacing to the left of ticks
            y={y + tickLength / 2} // Vertically center the text
            textAnchor="end"
            fontSize={`${labelFontSize}vh`}
            fill="white"
          >
            {idx}
          </text>
        </g>
      ))}

      {/* X Label */}
      <text
        x={width / 2}
        y={height - padding + tickLength * 4} // Adjust spacing below ticks
        textAnchor="middle"
        fontSize={`${axisLabelFontSize}vh`}
        fill="white"
      >
        {xLabel}
      </text>

      {/* Y Label */}
      <text
        x={padding - tickLength * 8} // Adjust spacing to the left of Y axis
        y={height / 2}
        textAnchor="middle"
        fontSize={`${axisLabelFontSize}vh`}
        fill="white"
        transform={`rotate(-90, ${padding - tickLength * 8}, ${height / 2})`}
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
  strokeWidth: number | string;
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
    width: 800, // Default width (will be updated on client)
    height: 600, // Default height (will be updated on client)
  });

  // State for hovered data point
  const [hoveredPoint, setHoveredPoint] = useState<{
    x: number;
    y: number;
    data: LineGraphDataPoint;
  } | null>(null);

  // Ref for the container to calculate tooltip position
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Define padding using vh units (since heights and distances use vh)
  const paddingVh = 5; // 5vh padding
  const padding = paddingVh; // Using only vh for padding

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

  // Generate data points for all lines
  const dataPoints = data.flatMap((line, lineIdx) =>
    line.data.map((point, pointIdx) => {
      const x = xScale(Number(point.xValue));
      const y = yScale(Number(point.yValue));
      const color = paths[lineIdx].color;
      return { x, y, data: point, color };
    })
  );

  // Function to handle mouse events on data points
  const handleMouseEnter = (
    event: React.MouseEvent<SVGCircleElement, MouseEvent>,
    point: { x: number; y: number; data: LineGraphDataPoint }
  ) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      setHoveredPoint({
        x: point.x + containerRect.left,
        y: point.y + containerRect.top,
        data: point.data,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "98vw", // Width in vw
        height: "70vh", // Height in vh
        margin: "0 auto",
        position: "relative",
        backgroundColor: "#222d40",
        border: "0.2vh solid gray",
        borderRadius: "1vh",
        padding: `${2}vh ${2}vw`, // Padding: 2vh top/bottom, 2vw left/right
        boxSizing: "border-box",
      }}
    >
      {title && (
        <p
          style={{
            textAlign: "center",
            fontSize: "2vh", // Font size in vh
            marginBottom: "2vh",
            color: "white",
          }}
        >
          {title}
        </p>
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
              strokeWidth={"0.3vh"} // Stroke width remains in pixels for clarity
            />
          ))}
        </g>

        {/* Data Points */}
        <g>
          {dataPoints.map((point, idx) => (
            <circle
              key={`point-${idx}`}
              cx={point.x}
              cy={point.y}
              r={4} // Radius remains in pixels for clarity
              fill={point.color}
              stroke="#fff"
              strokeWidth={1}
              onMouseEnter={(e) => handleMouseEnter(e, point)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            />
          ))}
        </g>
      </svg>

      {/* Legends */}
      <div
        style={{
          position: "absolute",
          top: `${2}vh`, // Top position in vh
          right: `${2}vw`, // Right position in vw
          display: "flex",
          flexDirection: "column",
          gap: "1vh", // Gap between legend items in vh
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
                width: "1.5vh", // Width in vh
                height: "1.5vh", // Height in vh
                backgroundColor: paths[idx].color,
                marginRight: "0.5vh", // Margin right in vh
                borderRadius: "1vh",
              }}
            ></span>
            <span style={{ fontSize: "1.5vh", color: "#333" }}>
              {line.name || `Line ${idx + 1}`}
            </span>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {hoveredPoint && (
        <div
          style={{
            position: "absolute",
            top: `${(hoveredPoint.y / window.innerHeight) * 100 - 5}vh`, // Position tooltip slightly above the point
            left: `${(hoveredPoint.x / window.innerWidth) * 100 + 1}vw`, // Position tooltip to the right of the point
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "0.5vh 1vh", // Padding: 0.5vh top/bottom, 1vh left/right
            borderRadius: "0.5vh",
            pointerEvents: "none",
            fontSize: "1.2vh", // Font size in vh
            whiteSpace: "nowrap",
            transform: "translate(-50%, -100%)",
            zIndex: 10,
          }}
        >
          <div>
            <strong>X:</strong> {hoveredPoint.data.xValue}
          </div>
          <div>
            <strong>Y:</strong> {hoveredPoint.data.yValue}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedLineGraph;

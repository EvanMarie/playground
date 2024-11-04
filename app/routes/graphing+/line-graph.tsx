import AnimatedLineGraph from "./components/animatedLineGraph";

// Define your data
const sampleLineGraphData = [
  {
    name: "Line 1",
    data: [
      { xValue: 0, yValue: 0 },
      { xValue: 1, yValue: 1 },
      { xValue: 2, yValue: 2 },
      { xValue: 3, yValue: 3 },
      { xValue: 4, yValue: 4 },
      { xValue: 5, yValue: 5 },
      { xValue: 6, yValue: 6 },
      { xValue: 7, yValue: 7 },
      { xValue: 8, yValue: 8 },
      { xValue: 9, yValue: 9 },
      { xValue: 10, yValue: 10 },
    ],
  },
  {
    name: "Line 2",
    data: [
      { xValue: 0, yValue: 0 },
      { xValue: 1, yValue: 1 },
      { xValue: 2, yValue: 4 },
      { xValue: 3, yValue: 9 },
      { xValue: 4, yValue: 16 },
      { xValue: 5, yValue: 25 },
      { xValue: 6, yValue: 36 },
      { xValue: 7, yValue: 49 },
      { xValue: 8, yValue: 64 },
      { xValue: 9, yValue: 81 },
      { xValue: 10, yValue: 100 },
    ],
  },
  {
    name: "Line 3",
    data: [
      { xValue: 0, yValue: 0 },
      { xValue: 1, yValue: 1 },
      { xValue: 2, yValue: 8 },
      { xValue: 3, yValue: 27 },
      { xValue: 4, yValue: 64 },
      { xValue: 5, yValue: 125 },
      { xValue: 6, yValue: 216 },
      { xValue: 7, yValue: 343 },
      { xValue: 8, yValue: 512 },
      { xValue: 9, yValue: 729 },
      { xValue: 10, yValue: 1000 },
    ],
  },
];

const MultiLineGraphProps = {
  title: "Multi Line Graph",
  data: sampleLineGraphData,
  xLabel: "X Axis",
  yLabel: "Y Axis",
};

function App() {
  return (
    <div
      style={{
        padding: "2vh 2vw",
        backgroundColor: "#eaeaea",
        minHeight: "100vh",
      }}
    >
      <AnimatedLineGraph {...MultiLineGraphProps} />
    </div>
  );
}

export default App;

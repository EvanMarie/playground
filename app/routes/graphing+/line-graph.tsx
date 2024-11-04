import AnimatedLineGraph from "./components/animatedLineGraph";

// Define your data
const sampleLineGraphData = [
  {
    name: "Line 1",
    data: [
      { xValue: 0, yValue: 0 },
      { xValue: 1, yValue: 10 },
      { xValue: 2, yValue: 20 },
      { xValue: 3, yValue: 15 },
      { xValue: 4, yValue: 40 },
      { xValue: 5, yValue: 15 },
      { xValue: 6, yValue: 60 },
      { xValue: 7, yValue: 20 },
      { xValue: 8, yValue: 80 },
      { xValue: 9, yValue: 120 },
      { xValue: 10, yValue: 100 },
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
    <>
      <AnimatedLineGraph {...MultiLineGraphProps} />
    </>
  );
}

export default App;

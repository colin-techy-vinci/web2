import ColorBox from "../ColorBox";
function App() {
  return (
    <div
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "80px",
      }}
    >
      <ColorBox />
      <ColorBox />
      <ColorBox />
    </div>
  );
}

export default App;

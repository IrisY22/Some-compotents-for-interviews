import { useEffect, useState } from "react";

export function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  useEffect(() => {
    if (typeOfColor === "rgb") handleRandomRgbColor();
    else handleRandomHexColor();
  }, [typeOfColor]);

  function utilRandomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[utilRandomColor(hex.length)];
    }
    setColor(hexColor);
  }
  function handleRandomRgbColor() {
    const r = utilRandomColor(256);
    const g = utilRandomColor(256);
    const b = utilRandomColor(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
        }
      >
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "30px",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

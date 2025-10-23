export default function TwoColumnSample({ children }) {

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 200px" }}>
      <div
        style={{ color: "#333", backgroundColor: "yellow", padding: "40px" }}
      >
        {children}
      </div>

      <div
        style={{ color: "#333", backgroundColor: "lightblue", padding: "40px" }}
      >
        right column
      </div>
    </div>
  );
}

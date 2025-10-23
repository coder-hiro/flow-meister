import ButtonSample from "./ButtonSample";

export default function CardSample() {
  return (
    <div className={"card"}>
      <p style={{ color: "#333", backgroundColor: "orange" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <ButtonSample text="submit" type="submit" />
    </div>
  );
}

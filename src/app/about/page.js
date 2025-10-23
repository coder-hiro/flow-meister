import ButtonSample from "../../components/ui/ButtonSample";
import CardSampleSample from "../../components/ui/CardSample";

export default function About() {
  const boxClass = "box";

  return (
    <>
      <div className={boxClass}>
        <p style={{ color: "#333", backgroundColor: "pink" }}>
          This is the about page.
        </p>
        <ButtonSample />
        <hr />
        <CardSampleSample />
      </div>
    </>
  );
}

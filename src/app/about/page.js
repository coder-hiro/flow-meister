import ButtonSample from "../../components/ui/ButtonSample";
import CardSample from "../../components/ui/CardSample";
import TwoColumnSample from "../../components/layout/TwoColumnSample";
import MenuSample from "../../components/ui/MenuSample";

export default function About() {
  const boxClass = "box";

  return (
    <TwoColumnSample>
      <div className={boxClass}>
        <p style={{ color: "#333", backgroundColor: "pink" }}>
          This is the about page.
        </p>
        <ButtonSample text="button" type="button" />
        <hr />
        <CardSample />
        <hr />
        <MenuSample />
      </div>
    </TwoColumnSample>
  );
}

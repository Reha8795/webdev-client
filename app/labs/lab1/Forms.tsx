import TextFields from "./forms/TextFields";
import TextArea from "./forms/TextArea";
import RadioButtons from "./forms/RadioButtons";
import Checkboxes from "./forms/Checkboxes";
import Dropdowns from "./forms/Dropdowns";
import OtherInputTypes from "./forms/OtherInputTypes";
import Buttons from "./forms/Buttons";
import YourForm from "./forms/YourForm";

export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Forms</h4>
      <TextFields />
      <TextArea />
      <RadioButtons />
      <Checkboxes />
      <Dropdowns />
      <OtherInputTypes />
      <Buttons />
      {/* The single canonical YourForm (id wd-your-form) — imported once only */}
      <YourForm />
    </div>
  );
}

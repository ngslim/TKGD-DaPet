import SpecialItem from "./SpecialItem/SpecialItem";
import classes from "./Whyus.module.css";

const Whyus = () => {
  const simpleText =
    "Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passion. They cannot alter the state of facts and evidence.";
  return (
    <section className={classes["why-us"]}>
      <div className="container">
        <div className={classes["section-title"]}>
          <h2>Why Us</h2>
          <p>Why Choose Our Website</p>
        </div>

        <div className="row">
          <SpecialItem
            number={1}
            title="Book an Appointment"
            text={simpleText}
          />
          <SpecialItem number={2} title="Receive order" text={simpleText} />
          <SpecialItem number={3} title="Manage your pets" text={simpleText} />
        </div>
      </div>
    </section>
  );
};

export default Whyus;

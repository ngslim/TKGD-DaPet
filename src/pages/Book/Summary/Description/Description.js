// import classes from "./Description.module.css";
import { dataDescription } from "../../../../mock/book-data";
import DescriptionItem from "../DescriptionItem/DescriptionItem";

const Description = () => {
  return (
    <div className="bg-white p-3 rounded flex-fill">
      <DescriptionItem title="Vật nuôi" description={dataDescription.typePet} />
      <DescriptionItem
        title="Triệu chứng"
        description={dataDescription.description.reduce(
          (result, current) => result.value + ", " + current.value
        )}
      />
      <DescriptionItem
        title="Phòng khám"
        description={dataDescription.clinic}
      />
      <DescriptionItem title="Bác sĩ" description={dataDescription.doctor} />
      <DescriptionItem
        title="Thời gian"
        description={dataDescription.date + " at " + dataDescription.time}
      />
      <DescriptionItem
        title="Chú thích"
        description={dataDescription.comment}
      />
    </div>
  );
};

export default Description;

// import classes from "./Description.module.css";
import DescriptionItem from "../DescriptionItem/DescriptionItem";

const Description = ({ info }) => {
  const getSymptom = () => {
    const length = info.symptom.length;
    if (length === 1) {
      return info.symptom[length - 1][0].value;
    }
    if (info.symptom) {
      return info.symptom[length - 1].reduce((result, current) => {
        return result.value + ", " + current.value;
      });
    }
  };
  return (
    <div className="bg-white p-3 rounded flex-fill">
      {info.type && (
        <DescriptionItem title="Vật nuôi" description={info.type} />
      )}
      {info.symptom && (
        <DescriptionItem title="Triệu chứng">{getSymptom()}</DescriptionItem>
      )}
      <DescriptionItem title="Phòng khám" description={info.clinic.name} />
      <DescriptionItem title="Địa chỉ" description={info.clinic.address} />
      <DescriptionItem
        title="Thời gian"
        description={info.clinic.date + " at " + info.clinic.timeline}
      />
      {info.other && (
        <DescriptionItem title="Chú thích" description={info.other} />
      )}
    </div>
  );
};

export default Description;

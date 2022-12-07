// import classes from "./Description.module.css";

import DescriptionItem from "../DescriptionItem/DescriptionItem";

const data = {
  typePet: "Meo",
  description: [
    { id: 1, value: "Nôn mửa", label: "Non mua" },
    { id: 2, value: "Tiêu chảy", label: "Tieu chay" },
  ],
  clinic: "Clinic A",
  doctor: "Wandar Switch",
  date: "2022/12/07",
  time: "14:00",
  comment: "Tinh trang nguy cap",
};

const Description = () => {
  return (
    <div className="bg-white p-3 rounded flex-fill">
      <DescriptionItem title="Vật nuôi" description={data.typePet} />
      <DescriptionItem
        title="Triệu chứng"
        description={data.description.reduce(
          (result, current) => result.value + ", " + current.value
        )}
      />
      <DescriptionItem title="Phòng khám" description={data.clinic} />
      <DescriptionItem title="Bác sĩ" description={data.doctor} />
      <DescriptionItem
        title="Thời gian"
        description={data.date + " at " + data.time}
      />
      <DescriptionItem title="Chú thích" description={data.comment} />
    </div>
  );
};

export default Description;

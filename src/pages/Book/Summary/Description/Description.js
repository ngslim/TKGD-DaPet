// import classes from "./Description.module.css";

import DescriptionItem from "../DescriptionItem/DescriptionItem";

const Description = () => {
  return (
    <div className="bg-white p-3 rounded flex-fill">
      <DescriptionItem title="Vật nuôi" text="Mèo" />
      <DescriptionItem
        title="Triệu chứng"
        text="Hay ho khan, ăn ít, đi phân lỏng. Lông rụng nhiều và hay gào mỗi đêm."
      />
      <DescriptionItem title="Phòng khám" text="Family Bean" />
      <DescriptionItem title="Bác sĩ" text="Trần Văn B" />
      <DescriptionItem title="Thời gian" text="16:00 13/11/2022" />
      <DescriptionItem
        title="Chú thích"
        text="Bé đã từng bị kí sinh trùng máu, dị ứng kháng sinh, đã triệt sản."
      />
    </div>
  );
};

export default Description;

// import classes from "./Description.module.css";

import DescriptionItem from "../DescriptionItem/DescriptionItem";

const Description = () => {
  return (
    <div className="bg-white p-3 rounded flex-fill">
      <DescriptionItem title="Vật nuôi" text="Mèo" />
      <DescriptionItem
        title="Triệu chứng"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus."
      />
      <DescriptionItem title="Phòng khám" text="Lorem ipsum dolor" />
      <DescriptionItem title="Bác sĩ" text="Trần Văn B" />
      <DescriptionItem title="Thời gian" text="16:00 13/11/2022" />
      <DescriptionItem
        title="Chú thích"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus."
      />
    </div>
  );
};

export default Description;

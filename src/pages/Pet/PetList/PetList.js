import PetItem from "./PetItem/PetItem";
import classes from "./PetList.module.css";
import { useNavigate } from "react-router-dom";

const dataPetList = [
  {
    id: 1,
    name: "Grange Reddell",
    habit: "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    image: "/images/pets/pet-1.jpg",
  },
  {
    id: 2,
    name: "Roz Gilgryst",
    habit:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    image: "/images/pets/pet-2.jpg",
  },
  {
    id: 3,
    name: "Cherye Hamby",
    habit:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    image: "/images/pets/pet-3.jpg",
  },
  {
    id: 4,
    name: "Grannie Whight",
    habit: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    image: "/images/pets/pet-4.jpg",
  },
];

const PetList = () => {
  const navigate = useNavigate();

  const gotoPageNotFound = () => {
    navigate("/page-not-found");
  };

  return (
    <div className={classes["grid-pet-list"]}>
      {dataPetList.map((item, index) => {
        return (
          <PetItem
            key={index}
            name={item.name}
            text={item.habit}
            image={item.image}
            onClick={gotoPageNotFound}
          />
        );
      })}
      {/* <PetItem
        name="Tên thú cưng"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa."
        onClick={gotoPageNotFound}
      />
      <PetItem
        name="Tên thú cưng"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa."
        onClick={gotoPageNotFound}
      /> */}
    </div>
  );
};

export default PetList;

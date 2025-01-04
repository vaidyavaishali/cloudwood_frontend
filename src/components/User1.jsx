import { useSelector } from "react-redux";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import MyButton from "./MyButton";
import { updateServerState } from "./socket";

export const User1 = () => {
  const bedroom = useSelector((state) => state.bedroom);
  const kitchen = useSelector((state) => state.kitchen);

  const turnOnAll = () => {
    const newState = {
      bedroom: { light1: true, light2: true },
      kitchen: { light1: true, light2: true },
    };
    updateServerState(newState);
  };

  const turnOffAll = () => {
    const newState = {
      bedroom: { light1: false, light2: false },
      kitchen: { light1: false, light2: false },
    };
    updateServerState(newState);
  };

  return (
    <div className="w-full md:w-[80vw] lg:w-[60vw] mx-auto h-[70vh]">
      <h2 className="text-2xl text-center font-bold py-8">User 1</h2>
      <div className="flex justify-evenly flex-wrap gap-10 w-full lg:w-[90%]">
        <Bedroom className="w-1/2 " />
        <Kitchen className="w-1/2" />
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <MyButton
          label="All On"
          onClick={turnOnAll}
          isOn={bedroom.light1 && bedroom.light2 && kitchen.light1 && kitchen.light2}
        />
        <MyButton
          label="All Off"
          onClick={turnOffAll}
          isOn={!bedroom.light1 && !bedroom.light2 && !kitchen.light1 && !kitchen.light2}
        />
      </div>
    </div>
  );
};

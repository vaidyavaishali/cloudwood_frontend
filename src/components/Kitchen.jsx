import React from "react";
import { useSelector } from "react-redux";
import MyButton from "./MyButton";
import { updateServerState } from "./socket";
import Light1 from "./Light1";
import Light2 from "./Light2";

const Kitchen = () => {
    const kitchen = useSelector((state) => state.kitchen);

    const toggleLight = (light) => {
        const newState = {
            kitchen: { ...kitchen, [light]: !kitchen[light] },
        };
        updateServerState(newState);
    };

    const turnOnBoth = () => {
        const newState = {
            kitchen: { light1: true, light2: true },
        };
        updateServerState(newState);
    };

    const turnOffBoth = () => {
        const newState = {
            kitchen: { light1: false, light2: false },
        };
        updateServerState(newState);
    };

    return (
        <div className="border border-gray-500 p-4 rounded-lg w-[90%] md:w-[45%]">
            <h3 className="text-center font-semibold text-xl my-3">Kitchen</h3>
            <div className="flex justify-center flex-col gap-3">
                <Light1
                    isOn={kitchen.light1}
                    toggleLight={toggleLight}
                    lightKey="light1"
                    label="Light 1"
                />
                <Light2
                    isOn={kitchen.light2}
                    toggleLight={toggleLight}
                    lightKey="light2"
                    label="Light 2"
                />
            </div>
            <div className="w-[90%] flex flex-wrap justify-center items-center mx-auto mt-4">
                <MyButton
                    label="Both On"
                    onClick={turnOnBoth}
                    isOn={kitchen.light1 && kitchen.light2} // Both lights are on
                />
                <MyButton
                    label="Both Off"
                    onClick={turnOffBoth}
                    isOn={!kitchen.light1 && !kitchen.light2} // Both lights are off
                />
            </div>
        </div>
    );
};

export default Kitchen;

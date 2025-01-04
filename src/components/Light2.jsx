
const Light2 = ({ isOn, toggleLight, label, lightKey }) => {
  return (
    <div className="flex items-center space-x-3 justify-center gap-x-3">
    <span className="font-medium text-sm">{label}:</span>
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isOn}
          onChange={() => toggleLight(lightKey)} // Pass lightKey to toggleLight
        />
        <div
          className={`w-8 h-5 rounded-full peer transition-all 
            ${isOn ? "bg-green-500 peer-checked:after:translate-x-4" : "bg-gray-400"}
          `}
        >
          <div
            className={`absolute top-[1px] left-[-1px] h-4 w-4 bg-white rounded-full border transition-transform 
              ${isOn ? "translate-x-4" : ""}
            `}
          ></div>
        </div>
      </label>
      <span className="ml-2 text-sm font-medium text-gray-700">
        {isOn ? "ON" : "OFF"}
      </span>
    </div>
  </div> 
  );
};

export default Light2;

import React from "react";

interface ICheckbox {
  id: string;
  name: string;
  label?: string;
  onChange: (e: any) => void;
  helper?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

const Checkbox = ({ id, name, label, onChange, helper, defaultChecked, disabled }: ICheckbox) => {
  return (
    <div className="inline-flex items-center">
      <input
        id={id}
        name={name}
        type="checkbox"
        onClick={onChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="text-[#4f4f4f] w-4 h-4 bg-gray-100 border-[#9FF3FF] rounded"
      />
      <span className="ml-3 text-neutral-800 dark:text-sky-100">{label}</span>
      <div className="text-sm mt-1 text-[#858585]">{helper}</div>
    </div>
  );
};

export default Checkbox;

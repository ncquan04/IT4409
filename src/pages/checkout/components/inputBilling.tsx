import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

export interface IInputBillingProps {
    label: string;
    input?: string;
    type: "text" | "number";
    isRequired?: boolean;
    onClickOutSide?: (value: string) => void;
}

const InputBilling = ({ input = "", label, isRequired, onClickOutSide }: IInputBillingProps) => {
    const [value, setValue] = useState(input);
    const [hasFocused, setHasFocused] = useState(false);
    const [hasChanged, setHasChanged] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(wrapperRef as React.RefObject<HTMLElement>, () => {
        if (hasFocused && hasChanged) {
            onClickOutSide?.(value);
            setHasChanged(false);
        }
    });

    return (
        <div ref={wrapperRef} className="flex flex-col gap-2">
            <label className="text-base text-gray-500">
                {label}
                {isRequired && <span className="text-red-500 ml-1">*</span>}
            </label>

            <input
                value={value}
                onFocus={() => setHasFocused(true)}
                onChange={(e) => {
                    setValue(e.target.value);
                    setHasChanged(true);
                }}
                className="w-full h-12 bg-secondary rounded px-4 outline-none text-black"
                required={isRequired}
            />
        </div>
    );
};

export default InputBilling;

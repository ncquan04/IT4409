import LeftArrowIcon from "../../../icons/LeftArrowIcon";
import RightArrowIcon from "../../../icons/RightArrowIcon";

interface LeftRightNavigatorProps {
    onLeftClick: () => void;
    onRightClick: () => void;
}

const LeftRightNavigator = ({
    onLeftClick,
    onRightClick,
}: LeftRightNavigatorProps) => {
    return (
        <div className="flex flex-row gap-2">
            <button
                onClick={onLeftClick}
                className="w-12 h-12 bg-secondary rounded-full flex justify-center items-center hover:bg-gray-300 hover:cursor-pointer"
                aria-label="Navigate Left"
            >
                <LeftArrowIcon />
            </button>
            <button
                onClick={onRightClick}
                className="w-12 h-12 bg-secondary rounded-full flex justify-center items-center hover:bg-gray-300 hover:cursor-pointer"
                aria-label="Navigate Right"
            >
                <RightArrowIcon />
            </button>
        </div>
    )
}

export default LeftRightNavigator;
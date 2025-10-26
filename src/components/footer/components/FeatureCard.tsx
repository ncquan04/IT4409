interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = (props: FeatureCardProps) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center text-center max-w-[280px]">
            <div className="w-20 h-20 rounded-full bg-[#36373888] flex justify-center items-center">
                <div className="w-[58px] h-[58px] flex justify-center items-center bg-button rounded-full">
                    {props.icon }
                </div>
            </div>
            <h3 className="text-black font-semibold text-xl">{props.title}</h3>
            <p className="text-black font-medium text-sm">{props.description}</p>
        </div>
    )
}

export default FeatureCard;
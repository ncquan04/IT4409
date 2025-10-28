interface SectionTagProps {
    title: string;
}

const SectionTag = (props: SectionTagProps) => {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="w-[20px] h-[40px] rounded-sm bg-secondary2"/>
            <h2 className="text-base text-secondary2 font-semibold">{props.title}</h2>
        </div>
    );
}

export default SectionTag;
import JourneyList from "./elements/JourneyList";
import SectionTitle from "./elements/SectionTitle";

export default function Journey() {
    return (
        <div className="w-full flex flex-col pt-24 pl-[10vw]">
            <SectionTitle title="Notre aventure" />
            <div className="mt-4">
                <JourneyList />
            </div>
        </div>
    )
}
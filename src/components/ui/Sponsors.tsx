import SectionTitle from "./elements/SectionTitle";
import SponsorMarquee from "./elements/SponsorBanner";

export default function Sponsors() {
    return (
        <div className="w-full flex flex-col pt-24 pl-[10vw]">
            <SectionTitle title="Nos sponsors" />
            <div>
                <SponsorMarquee />
            </div>
        </div>
    )
}
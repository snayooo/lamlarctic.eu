import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import ContactForm from "./elements/ContactForm";
import SectionTitle from "./elements/SectionTitle";
import GoFundMeWidget from "./elements/GoFundMeWidget";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full flex flex-col pt-24 pl-[10vw]">
      <SectionTitle title="Contact" />

      {/* Main container */}
      <div className="flex flex-col-reverse md:flex-row gap-12 mt-8 mb-24 w-[85vw] md:w-auto">
        {/* Left Section (Text + Socials + GoFundMe) */}
        <div className="w-full md:w-2/5 flex flex-col space-y-4">
          <p className="text-base md:text-lg leading-relaxed">
            Nous sommes un groupe de 11 élèves et 2 professeurs du Lycée Aline
            Mayrisch de Luxembourg. En mars 2026, nous voyagerons en Laponie
            pour en apprendre davantage sur l’environnement, la nature, la
            culture sámi et le travail avec les chiens de traîneau. Vous pouvez
            nous soutenir de différentes manières: faire un don, devenir
            sponsor, acheter notre merchandising ou simplement partager notre
            projet autour de vous. Toute forme d’aide compte et contribue à
            rendre cette expérience éducative possible !
          </p>

          {/* Social links */}
          <div className="flex flex-row space-x-4">
            <Link
              href="https://www.instagram.com/lamlarctic/"
              target="_blank"
              className="inline-block"
            >
              <FaInstagram size="2rem" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61582230016401"
              target="_blank"
            >
              <FaFacebook size={"2rem"} />
            </Link>
            <Link href="" target="_blank" className="inline-block">
              <BiDonateHeart size="2rem" />
            </Link>
          </div>

          {/* GoFundMe Widget */}
          <div className="mt-2 w-full max-w-md">
            <GoFundMeWidget />
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="md:w-3/5 md:mr-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

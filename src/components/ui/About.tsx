"use client";

import Link from "next/link";
import SectionTitle from "./elements/SectionTitle";

export default function About() {
  return (
    <div className="w-full flex flex-col pt-24 pl-[10vw]">
      <SectionTitle title="À propos" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pr-6">
        {/* Qui sommes nous */}
        <div className="bg-gray-100 rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Qui sommes nous</h3>
          <p className="text-base">
            Nous sommes un groupe de 11 élèves et 2 professeurs du Lycée Aline Mayrisch au Luxembourg. 
            Dans le cadre de notre cours d&apos;option « Let's Go There! », nous cherchons à vivre des expériences uniques 
            à l&apos;étranger, découvrir de nouvelles cultures et apprendre autrement. Ce projet nous permet de combiner curiosité, apprentissage et travail d&apos;équipe.
          </p>
        </div>

        {/* Notre projet */}
        <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Notre projet</h3>
          <p className="text-base">
            En mars 2026, nous voyagerons en Laponie pour découvrir la nature, comprendre la culture sámi et travailler avec des chiens de traîneau. 
            Ce voyage pédagogique nous offre l&apos;opportunité d&apos;apprendre sur le terrain, d&apos;observer la faune et la flore locales, et de mieux comprendre l&apos;équilibre fragile entre l&apos;homme et son environnement.
          </p>
        </div>

        {/* Pourquoi ce voyage */}
        <div className="bg-neutral-100 rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Pourquoi ce voyage</h3>
          <p className="text-base">
            Ce voyage est une chance unique de vivre une aventure concrète et enrichissante. 
            Nous voulons sensibiliser notre groupe à la protection de l&apos;environnement, découvrir une culture différente, et développer des compétences en autonomie, en organisation et en collaboration. 
            Chaque activité, de l&apos;exploration des paysages à la conduite des chiens de traîneau, nous permettra d&apos;apprendre de manière pratique et ludique.
          </p>
        </div>
      </div>

      <p className="text-center text-base mt-12 pr-6">
        Pour une présentation plus détaillée de notre projet,{" "}
        <Link
          href="https://drive.google.com/file/d/1_IgIMvkClm2EmcFgWK0IgPF4j_jzHSCf/view?usp=sharing"
          target="_blank"
          className="underline"
        >
          cliquez ici
        </Link>.
      </p>
    </div>
  );
}

import SectionTitle from "@/components/ui/elements/SectionTitle";

export default function MentionsLegales() {
  return (
    <div className="w-full h-full flex flex-col pt-32 pl-6 md:pl-[10vw] pr-6 pb-24">
      <h2 className="font-bold text-center text-2xl md:text-4xl">Mentions Légales</h2>

      <div className="mt-8 space-y-6 text-base md:text-lg">
        <p>
          <strong>Éditeur du site :</strong> LAML Arctic
        </p>
        <p>
          <strong>Élèves de l'école :</strong> Lycée Aline Mayrisch, Luxembourg
        </p>
        <p>
          <strong>Contact :</strong> info@lamlarctic.eu
        </p>
        <p>
          <strong>Hébergement :</strong> Unesty Company, représentée par monsieur Collin Schneeweiß
        </p>
        <p>
          <strong>Adresse d'hébergement :</strong> Geschwister-Scholl-Platz 5
          09648 Mittweida Deutschland
        </p>
        <p>
          Toute reproduction, même partielle, du contenu de ce site est
          interdite sans autorisation préalable. Les informations fournies sont
          à titre informatif et peuvent être modifiées sans préavis.
        </p>
        <p>
          Pour toute question concernant le site, veuillez nous contacter via le
          formulaire de contact.
        </p>
      </div>
    </div>
  );
}

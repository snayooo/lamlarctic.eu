import SectionTitle from "@/components/ui/elements/SectionTitle";

export default function PolitiqueConfidentialite() {
  return (
    <div className="w-full flex flex-col pt-24 pl-6 md:pl-[10vw] pr-6 pb-24">
      <h2 className="font-bold text-center text-2xl md:text-4xl">Politique de Confidentialité</h2>
      
      <div className="mt-8 space-y-6 text-base md:text-lg">
        <p>
          La présente politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez le site Lamlarctic.
        </p>

        <p><strong>Collecte des données :</strong> Nous ne collectons que les informations que vous nous fournissez volontairement via le formulaire de contact ou lors de votre participation à nos activités.</p>

        <p><strong>Utilisation des données :</strong> Vos informations sont utilisées uniquement pour répondre à vos demandes, vous tenir informé de notre projet et améliorer nos services. Elles ne seront jamais transmises à des tiers à des fins commerciales.</p>

        <p><strong>Sécurité :</strong> Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, divulgation ou modification.</p>

        <p><strong>Durée de conservation :</strong> Vos données personnelles sont conservées uniquement le temps nécessaire pour répondre à vos demandes ou respecter nos obligations légales.</p>

        <p>
          <strong>Vos droits :</strong> Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données personnelles en nous contactant via notre formulaire de contact. Vous avez également le droit de vous opposer au traitement de vos données à tout moment.
        </p>

        <p>
          Pour toute question ou demande concernant vos données personnelles, vous pouvez nous contacter directement via le formulaire de contact de notre site.
        </p>
      </div>
    </div>
  );
}

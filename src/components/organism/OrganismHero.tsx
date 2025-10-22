import {CenteredBrandContainer} from "@/components/molecule/MoleculeContainer";
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";

const OrganismHero = ({text}: {text: string}) => {
    return (<CenteredBrandContainer>
        <AtomText variant="pageHeading" className="pageHeading">{text}</AtomText>
    </CenteredBrandContainer>);
}


export {OrganismHero};
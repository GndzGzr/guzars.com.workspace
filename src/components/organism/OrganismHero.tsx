import {CenteredBrandContainer} from "@/components/molecule/MoleculeContainer";
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";

const OrganismHero = ({headerText}: {headerText: string}) => {
    return (<CenteredBrandContainer>
        <AtomText variant="pageHeading" className="pageHeading">{headerText}</AtomText>
    </CenteredBrandContainer>);
}


export {OrganismHero};
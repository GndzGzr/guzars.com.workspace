
import { AtomLayout } from "../atom/AtomLayout";
import AtomText from "../atom/AtomText";
import { SectionHeadingContainer } from "../molecule/MoleculeContainer";
import { MoleculeThreePartGrid } from "../molecule/MoleculeGrid";
import SectionHeaderLabel from "../molecule/MoleculeLabel";
import { useI18n } from "@/hooks/usei18n";


const TimeLineGrid = () => {
    const { t } = useI18n();
    return (
        <MoleculeThreePartGrid displayBg={true}>
            <SectionHeaderLabel sectionHeader={t("sections.timeline") as string} />
            <div className="bg-green-200 p-4">Item 2</div>
            <div className="bg-blue-200 p-4">Item 3</div>
        </MoleculeThreePartGrid>
    );
};

export { TimeLineGrid };
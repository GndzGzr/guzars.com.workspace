import React from "react";
import AtomText from "../atom/AtomText";
import { AtomLayout } from "../atom/AtomLayout";
import { SectionHeadingContainer } from "../molecule/MoleculeContainer";
const SectionHeaderLabel = ({ sectionHeader }: { sectionHeader: string }) => {
    return (
        <SectionHeadingContainer>
            <AtomText family="serif" variant="sectionHeading" className="sectionHeading">{sectionHeader}</AtomText>
        </SectionHeadingContainer>
    );
};
export default SectionHeaderLabel;
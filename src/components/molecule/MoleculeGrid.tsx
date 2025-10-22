
import { JSX } from "react";
import { AtomLayout } from "../atom/AtomLayout";
import AtomText from "../atom/AtomText";
import { SectionHeadingContainer } from "../molecule/MoleculeContainer";
import SectionHeaderLabel from "../molecule/MoleculeLabel";
import { useI18n } from "@/hooks/usei18n";

interface MoleculeGridProps {
    displayBg: boolean;
    children: JSX.Element[]; // or React.ReactNode
}
const MoleculeThreePartGrid = ({ displayBg, children }: MoleculeGridProps) => {
    const {t} = useI18n();
    return (
        <>
            <AtomLayout
                height="screen"
                width="full"
                flow="grid"
                align="center"
                colNumbers="6"
                rowNumbers="6"
                gapSize="small"
                padding="small"
                margin="none"
            >

                <div className={`col-span-6 row-span-1 ${displayBg ? "bg-gray-200" : ""} w-full h-full`}>
                    {children[0]}
                </div>
                <div className={`col-span-6 row-span-4 ${displayBg ? "bg-gray-200" : ""} w-full h-full`}>
                    {children[1]}
                </div>
                <div className={`col-span-6 row-span-1 ${displayBg ? "bg-gray-200" : ""} h-24 w-full h-full`}>
                    {children[2]}
                </div>



            </AtomLayout>
        </>
    );
};

const MoleculeEightPartGrid = ({ displayBg, children }: MoleculeGridProps) => {
    const {t} = useI18n();
    return (
        <>
            <AtomLayout
                height="screen"
                width="full"
                flow="grid"
                align="center"
                colNumbers="6"
                rowNumbers="6"
                gapSize="small"
                padding="small"
                margin="none"
            >

            test
     



            </AtomLayout>
        </>
    );
};

export {MoleculeThreePartGrid, MoleculeEightPartGrid };
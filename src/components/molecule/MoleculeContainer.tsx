
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";
import { AtomLayout } from "../atom/AtomLayout";
import { Alignments } from "@/store/types/layoutType";
const CenteredBrandContainer = ({ children }: any) => {
    return (
        <AtomLayout height="screen" align="center" padding="none" margin="none" backgroundColor="none">
            {children}
        </AtomLayout>

    )
}

const SectionHeadingContainer = ({ children }: any) => {
    return (
        <AtomLayout align="left" width="full" padding="none" margin="none">
            {children}
        </AtomLayout>
    )
}


export { CenteredBrandContainer, SectionHeadingContainer };

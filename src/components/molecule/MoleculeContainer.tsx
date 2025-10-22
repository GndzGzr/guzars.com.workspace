
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";
import { AtomLayout } from "../atom/AtomLayout";
import { Alignments } from "@/store/types/layoutType";
const CenteredBrandContainer = ({ children }: any) => {
    return (
        <AtomLayout height="minScreen" align="center" verticalAlign="center" padding="none" margin="none" backgroundColor="none">
            {children}
        </AtomLayout>

    )
}

const SectionHeadingContainer = ({ children }: any) => {
    return (
        <AtomLayout align="left" width="full" verticalAlign="top" padding="none" margin="none">
            {children}
        </AtomLayout>
    )
}

const HorizontalFlowContainer = ({ children }: { children: any }) => {
    const { t } = useI18n();
    return (
        <AtomLayout
            align="start"
            verticalAlign="between"
            width="full"
            padding="none"
            flow="horizontal"
            margin="none"
            backgroundColor="none"
        >
            {children}
        </AtomLayout>
    )
}

export { CenteredBrandContainer, SectionHeadingContainer, HorizontalFlowContainer };

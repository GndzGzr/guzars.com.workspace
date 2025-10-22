
import AtomText from "@/components/atom/AtomText";
import { useI18n } from "@/hooks/usei18n";
import { AtomLayout } from "../atom/AtomLayout";

const CenteredBrandContainer = ({ children }: any) => {
    return (
        <AtomLayout align="center" padding="none" margin="none" backgroundColor="none">
            {children}
        </AtomLayout>

    )
}
export { CenteredBrandContainer };

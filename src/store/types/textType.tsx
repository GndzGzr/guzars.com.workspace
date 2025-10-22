import { JSX } from "react/jsx-dev-runtime";
type TextFamily = "sans" | "serif" | "mono" | "serif-thin" | "serif-light"  | "serif-medium" | "serif-semibold" | "serif-bold" | "serif-extrabold";
type TextVariant = "pageHeading" | "pageSubHeading" | "paragraph" | "sectionHeading";

const variantToTag: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  pageHeading: "h1",
  pageSubHeading: "h2",
  paragraph: "p",
  sectionHeading: "h2",
};


interface AtomTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  family?: TextFamily;
  className?: string;
}

export type { TextFamily, TextVariant, AtomTextProps };
export { variantToTag };


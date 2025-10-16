
import React from "react";
import { variantToTag } from "@/store/types/textType";
import { AtomTextProps,TextFamily, TextVariant } from "@/store/types/textType";
function getVariant(children: React.ReactNode, variant: TextVariant = "paragraph", family: TextFamily = "sans", className?: string) {
    const tag = variantToTag[variant] || "p";

    return React.createElement(tag, { className: `${family} ${className || ""}` }, children);
}

const AtomText: React.FC<AtomTextProps> = ({ children, variant = "paragraph", family = "sans", className }) => {
    return getVariant(children, variant, family, className);
}

export default AtomText;
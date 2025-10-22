import { send } from "process";
import {AiOutlineMenu, AiOutlineSun, AiOutlineMoon, AiOutlineGlobal} from "react-icons/ai"
import {BsSend} from "react-icons/bs";
import { AtomIconProps, TextSize } from "@/store/types/iconType";

const AtomIconSVG = {
    menu: (props: AtomIconProps) => <AiOutlineMenu color={props.color} size={props.size} />,
    modeLight: (props: AtomIconProps) => <AiOutlineSun color={props.color} size={props.size} />,
    modeDark: (props: AtomIconProps) => <AiOutlineMoon color={props.color} size={props.size} />,
    language: (props: AtomIconProps) => <AiOutlineGlobal color={props.color} size={props.size} />,
    send: (props: AtomIconProps) => <BsSend color={props.color} size={props.size} />,
}

const AtomIcon = (props: {name: keyof typeof AtomIconSVG, color: string, size: TextSize, className?: string}) => {
    const IconComponent = AtomIconSVG[props.name];
    const className = props.className || "";
    return <span className={className}>{<IconComponent name={props.name} color={props.color} size={props.size} />}</span>;
}

export default AtomIcon;

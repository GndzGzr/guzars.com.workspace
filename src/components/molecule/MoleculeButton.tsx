
import { motion } from "framer-motion";
import AtomText from "../atom/AtomText";
import { TimelineItem } from "@/store/constants/about/timeline";
interface TimeLineButtonProps {
    item: {
        id: string;
        year: string;
        title: string;
        content?: string[];
        images?: string[];
    };
    index: number;
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

const TimeLineButton = ({ item, index, currentIndex, setCurrentIndex }: TimeLineButtonProps) => {
    return (
        <motion.button
            key={item.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative group transition-all duration-500 ease-out flex-shrink-0 mx-4 md:mx-0
                }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex flex-col justify-between items-center space-y-1 md:space-y-2">
                <AtomText variant="timelineYear" family="sans"  className={`timeLineYear transition-all duration-300 whitespace-nowrap ${index === currentIndex
                ? 'activeYear'
                : 'passiveYear hover:activeYear'} ${index === currentIndex ? 'sans-medium' : ''}`}>{item.year}</AtomText>
            </div>
        </motion.button>
    );
}


export {
    TimeLineButton
}
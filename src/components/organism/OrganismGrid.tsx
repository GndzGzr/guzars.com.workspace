
import { AtomLayout } from "../atom/AtomLayout";
import AtomText from "../atom/AtomText";
import { HorizontalFlowContainer, SectionHeadingContainer } from "../molecule/MoleculeContainer";
import { MoleculeEightPartGrid, MoleculeThreePartGrid } from "../molecule/MoleculeGrid";
import SectionHeaderLabel from "../molecule/MoleculeLabel";
import { useI18n } from "@/hooks/usei18n";
import { Grids } from "../templates/GuzarsGrid";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { timelineData, TimelineItem } from "@/store/constants/about/timeline";
import { tr } from "motion/react-client";
import Image from "next/image";

import About from "@/app/[lang]/contact/page";
import { TimeLineButton } from "../molecule/MoleculeButton";




const TimeLineGrid = () => {
    const { t } = useI18n();

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderPosition = (currentIndex / (timelineData.length - 1)) * 100;
    const currentItem = timelineData[currentIndex];
    const gridDict: Record<string, JSX.Element> = {
        'today': <AboutTimeLineContentToday data={currentItem} />,
        'graduation': <AboutTimeLineContentToday data={currentItem} />,
        'university-advanced': <AboutTimeLineContentToday data={currentItem} />,
        'university-early': <AboutTimeLineContentToday data={currentItem} />,
        'college': <AboutTimeLineContentToday data={currentItem} />,
        'childhood': <AboutTimeLineContentToday data={currentItem} />,

    };
    return (
        <MoleculeThreePartGrid displayBg={false}>
            <SectionHeaderLabel sectionHeader={t("sections.timeline") as string} />
            <div className="">{gridDict[currentItem.id]}</div>
            <motion.div
                className="mt-16 px-2 timeline"

                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <div>

                    {/* Timeline Labels - Responsive */}
                    <motion.div
                        className="flex justify-between items-center mb-3 md:mb-4 overflow-x-auto md:overflow-visible"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        {timelineData.map((item, index) => (
                            <TimeLineButton
                                key={item.id}
                                item={item}
                                index={index}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                            />
                        ))}
                    </motion.div>

                    {/* Minimal Progress Bar */}
                    <motion.div
                        className="relative mb-4 md:mb-4"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        {/* Background track - responsive */}
                        <div
                            className="relative h-0.5 md:h-px bg-foreground/10"
                        >
                            {/* Active progress line */}
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-foreground/60 transition-all duration-500 ease-out"
                                style={{ width: `${sliderPosition}%` }}
                                layoutId="progress"
                            />

                            {/* Responsive markers */}
                            {timelineData.map((_, index) => {
                                const position = (index / (timelineData.length - 1)) * 100;
                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute top-1/2 w-1.5 h-1.5 md:w-1.5 md:h-1.5 rounded-full transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ${index === currentIndex
                                            ? 'bg-foreground scale-150'
                                            : 'bg-foreground/20'
                                            }`}
                                        style={{ left: `${position}%` }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 1.4 + index * 0.05 }}
                                    />
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Current Timeline Info - Responsive */}
                    <motion.div
                        className="timeline flex flex-col md:flex-row justify-between items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >



                        <motion.span

                            key={currentIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <AtomText variant="timeLineInfo" family="sans" className="timeLineInfo ">
                                {String(currentIndex + 1).padStart(2, '0')} / {String(timelineData.length).padStart(2, '0')}
                            </AtomText>
                        </motion.span>



                        <motion.span
                            key={currentItem.title}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <AtomText variant="timeLineInfo" family="sans" className="timeLineInfo">
                                {currentItem.title}
                            </AtomText>
                        </motion.span>



                    </motion.div>

                </div>
            </motion.div>



        </MoleculeThreePartGrid>
    );
};

const AboutTimeLineContentToday = ({ data }: { data: TimelineItem }) => {
    const { t } = useI18n();
    const content = data.content;
    const timelineData = t("aboutTimeline.today", { returnObjects: true }) as { first: string }[];

    return (

        <HorizontalFlowContainer>
            <div className="grid grid-cols-3 gap-4">
                <AtomText
                    variant="paragraph"
                    family="sans"
                    className="paragraph w-full col-span-1 col-start-3"
                >
                    {timelineData[0].first}
                </AtomText>

            </div>

            <Image
                src="/images/about/Main.png"
                alt="Graduation and professional growth"
                width={1000}
                height={800}
                className="rounded-lg shadow-lg h-full object-fit"
            />

        </HorizontalFlowContainer>






    );
};

export { AboutTimeLineContentToday, TimeLineGrid }
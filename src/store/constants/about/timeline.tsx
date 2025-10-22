import { Grids } from "@/components/templates/GuzarsGrid";
import { JSX } from "react";
interface TimelineItem {
    id: string;
    year: string;
    title: string;
    content: string[];
    images?: string[];
}

const timelineData: TimelineItem[] = [
    {
        id: 'today',
        year: 'Today',
        title: 'Present Day',
        content: ['aboutTimeline.today'],
        images: ["/assets/images/about/Main.png"],

    },
    {
        id: 'graduation',
        year: 'Graduation',
        title: 'Professional Experience',
        content: ['aboutTimeline.graduation.first', 'aboutTimeline.graduation.second', 'aboutTimeline.graduation.third'],
        images: ["/assets/images/about/graduation-flower.png"],
    },
    {
        id: 'university-advanced',
        year: 'Late University',
        title: 'Late University Years',
        content: ['aboutTimeline.late-university.first', 'aboutTimeline.late-university.second', 'aboutTimeline.late-university.third'],
        images: ["/assets/images/about/me3.png",
            "/assets/images/about/me2.png",
            "/assets/images/about/me1.png"
        ],
    },
    {
        id: 'university-early',
        year: 'Early University',
        title: 'Early University Years',
        content: ['aboutTimeline.early-university.first', 'aboutTimeline.early-university.second', 'aboutTimeline.early-university.third'],
        images: ["/assets/images/about/friends-photos.png"],
    },
    {
        id: 'college',
        year: 'College',
        title: 'College Years',
        content: ['aboutTimeline.college.first', 'aboutTimeline.college.second'],
        images: ["/assets/images/about/college.png",
            "/assets/images/about/music-and-me.png"
        ],
        
    },
    {
        id: 'childhood',
        year: 'Childhood',
        title: 'Childhood',
        content: ['aboutTimeline.childhood.first'],
        images: ["/assets/images/about/musti1.png",
            "/assets/images/about/omer-1.png"
        ],
    },
];

export {timelineData}
export type { TimelineItem };
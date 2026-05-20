import Bri from './assets/training-coaches/Bri.webp';
import bryantNew from './assets/26BryantNew.jpeg';
import aylinImg from './assets/26volleyball2.jpeg';
import nicole from './assets/crossfit-coaches/nicole.webp';
import eric from './assets/crossfit-coaches/eric.webp';
import coachPlaceholder from './assets/coach-placeholder.svg';

const PLACEHOLDER_BACKGROUND = [
    "Bio coming soon — profile in progress",
    "Detailed background, certifications, and experience to follow"
];

const PLACEHOLDER_HIGHLIGHTS = [
    "Career highlights coming soon",
    "Achievements and accolades to be added"
];

const PLACEHOLDER_SERVICES = [
    "Training details coming soon"
];

export const sportsCoaches = [
    {
        name: "Bri Guiste",
        image: Bri,
        title: "Softball Coach",
        background: [
            "Played softball since age 4",
            "Successful career through high school and college",
            "Took a break to get married and start a family",
            "Returned to coaching with a passion for teaching the next generation"
        ],
        highlights: [
            "2010 Idaho 5A State Champion",
            "3-time First Team All-Conference",
            "3-time team Defensive Player of the Year",
            "4 years on Varsity as leadoff hitter and starting 2nd baseman",
            "DI scholarship to Bradley University, Peoria, IL",
            "2014 Missouri Valley Conference (MVC) Champion",
            "2014 MVC All-Tournament Team",
            "Top 10 in Bradley's career hits, runs, and stolen bases",
            "Led team in hits as a junior and senior"
        ],
        services: [
            "Private softball lessons",
            "Hitting, pitching, fielding, and catching instruction",
            "Speed & agility training"
        ],
        quote: "Hard work beats talent when talent doesn't work hard. — Tim Notke"
    },
    {
        name: "Bryant Laning",
        image: bryantNew,
        title: "Wrestling & Strength Coach",
        background: [
            "Multi-sport high school athlete: football, wrestling, cross country, and track",
            "Served in the Army National Guard with deployments to Iraq, Afghanistan, and Kuwait",
            "Remedial PT instructor for his unit",
            "Six successful seasons coaching flag football",
            "Current wrestling coach for Panthers Youth Wrestling in Cabot, AR",
            "Proud husband and father of two sons"
        ],
        highlights: [
            "Coaching philosophy centered on discipline, teamwork, and resilience",
            "Passionate about helping athletes achieve their physical and mental best",
            "Active in the Cabot youth sports community"
        ],
        services: [
            "Wrestling lessons (1-on-1, 2-on-1, 4-on-1)",
            "Strength & conditioning",
            "Youth wrestling membership"
        ],
        quote: "Discipline is the bridge between goals and accomplishment. — Jim Rohn"
    },
    {
        name: "Tabitha Gossett",
        image: coachPlaceholder,
        title: "Soccer Coach",
        background: PLACEHOLDER_BACKGROUND,
        highlights: PLACEHOLDER_HIGHLIGHTS,
        services: [
            "Private soccer training (1-on-1, 2-on-1, 3-on-1)"
        ],
        quote: "The more difficult the victory, the greater the happiness in winning. — Pelé"
    },
    {
        name: "Aylin Villalobos",
        image: aylinImg,
        title: "Volleyball Coach",
        background: PLACEHOLDER_BACKGROUND,
        highlights: PLACEHOLDER_HIGHLIGHTS,
        services: [
            "Private volleyball lessons (1-on-1, 2-on-1, 3-on-1)",
            "Team volleyball training",
            "Private and small group lessons"
        ],
        quote: "You miss 100% of the shots you don't take. — Wayne Gretzky"
    },
    {
        name: "Miguel Homscher",
        image: coachPlaceholder,
        title: "Sports Coach",
        background: PLACEHOLDER_BACKGROUND,
        highlights: PLACEHOLDER_HIGHLIGHTS,
        services: PLACEHOLDER_SERVICES,
        quote: "Champions keep playing until they get it right. — Billie Jean King"
    }
];

export const crossfitCoaches = [
    {
        name: "Nicole Ruiz",
        image: nicole,
        title: "CrossFit Level 2 Trainer | Burgener Strength L1 | CrossFit Gymnastics Trainer",
        background: [
            "CrossFit Level 2 Trainer",
            "Burgener Strength Weightlifting Level 1 Coach",
            "CrossFit Gymnastics Trainer",
            "Certified CrossFit Kids Coach",
            "Adaptive & Inclusive Trainer (AIT) — certified March 2024",
            "Specializes in athletes with physiological and intellectual conditions",
            "Coaches at Powerhouse Training Complex and Powerhouse CrossFit & Combine in Cabot",
            "Leads functional fitness, Olympic weightlifting, bodybuilding, and sport-specific performance"
        ],
        services: [
            "Inclusive Group Classes",
            "Adaptive Group Classes",
            "One-on-One Training"
        ],
        quote: "Empower athletes of all backgrounds and abilities — create an inclusive environment that fosters growth, confidence, and peak performance."
    },
    {
        name: "Eric Roland",
        image: eric,
        title: "Crossfit/Hyrox Coach",
        background: PLACEHOLDER_BACKGROUND,
        highlights: PLACEHOLDER_HIGHLIGHTS,
        services: PLACEHOLDER_SERVICES,
        quote: "Strength does not come from physical capacity — it comes from an indomitable will. — Mahatma Gandhi"
    },
    {
        name: "Sarah Turner",
        image: coachPlaceholder,
        title: "Crossfit/Hyrox Coach",
        background: PLACEHOLDER_BACKGROUND,
        highlights: PLACEHOLDER_HIGHLIGHTS,
        services: PLACEHOLDER_SERVICES,
        quote: "The only bad workout is the one that didn't happen."
    },
    {
        name: "Nicole Brown",
        image: coachPlaceholder,
        title: "Crossfit/Hyrox Coach",
        background: PLACEHOLDER_BACKGROUND,
        highlights: PLACEHOLDER_HIGHLIGHTS,
        services: PLACEHOLDER_SERVICES,
        quote: "Sweat is just fat crying."
    }
];

import Bri from './assets/training-coaches/Bri.webp';
import bryantNew from './assets/26BryantNew.jpeg';
import aylinImg from './assets/26volleyball2.jpeg';
import nicole from './assets/crossfit-coaches/nicole.webp';
import eric from './assets/crossfit-coaches/eric.webp';
import sarah from './assets/Sarah.jpeg';
import nicoleBrown from './assets/nicolebrown.jpg';
import tabitha from './assets/tabitaupdated.jpg';
import miguel from './assets/miguelupdated.jpg';
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
        image: tabitha,
        title: "Soccer Coach | 16 Years of Coaching Experience",
        background: [
            "Wife and mom to Apollo and LouAnn",
            "Former semi-professional player for the Wolves (career through 2021)",
            "Former coach for Central Arkansas Alliance and The Rangers",
            "Now fully focused on training and developing the next generation of athletes",
            "Loves spending time with her family traveling, hiking, biking, and cheering on big brother at the baseball field"
        ],
        highlights: [
            "16 years of coaching experience",
            "Club coach, small group trainer, and private skills coach",
            "Former coach for Central Arkansas Alliance and The Rangers",
            "Former semi-pro player for the Wolves",
            "Trained athletes ages 6–18",
            "Focused on technical development and confidence on the ball",
            "Builds discipline, confidence, communication, resilience, and work ethic that athletes carry for life",
            "Known for her energy, competitiveness, and ability to connect with players"
        ],
        services: [
            "Private soccer lessons (1-on-1, 2-on-1, 3-on-1)",
            "Small group training",
            "Team coaching",
            "Technical & ball skills development"
        ],
        quote: "Soccer is the classroom — discipline, confidence, and resilience are the lessons you take with you."
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
        image: miguel,
        title: "Youth Baseball Trainer | Baseball & Strength Specialist",
        background: [
            "Senior at Cabot High School",
            "Playing baseball since age 4",
            "Competing in travel baseball since age 8",
            "Competed in football, wrestling, and track & field through his freshman year",
            "Pursuing his goal of playing college baseball",
            "Known for his big heart and love for family, friends, and athletes"
        ],
        highlights: [
            "Senior at Cabot High School",
            "Youth Baseball Trainer at Powerhouse Training Complex",
            "Multi-sport athlete turned baseball & strength specialist",
            "Multi-sport background built toughness, discipline, and work ethic",
            "Passionate about helping young athletes grow on and off the field",
            "Brings energy, encouragement, and a strong passion for athlete development to every session"
        ],
        services: [
            "Youth Baseball Training",
            "Strength & Conditioning",
            "One-on-One Sessions",
            "Small Group Training"
        ],
        quote: "Hard work and heart build great athletes — on the field and off."
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
        image: sarah,
        imageStyle: { objectPosition: "center 18%" },
        title: "Hyrox Coach | Veteran Coach & Educator",
        background: [
            "Married",
            "6 years of coaching and teaching experience",
            "4th year leading PTC's Summer Membership program",
            "Collegiate athlete — Soccer & Volleyball",
            "B.S. Middle Level Math & Science",
            "M.S. School Counseling",
            "Ed.S. School Leadership"
        ],
        highlights: [
            "Brings experience, energy, and a passion for helping kids grow on and off the field",
            "Returning leader in PTC's summer program",
            "Dedicated to keeping athletes active and building confidence",
            "Creates a fun, supportive environment where every child can thrive",
            "Connects with athletes of all ages through her athletics and education background",
            "Develops teamwork, resilience, and a love for learning"
        ],
        services: [
            "Hyrox Coaching",
            "Summer Membership Program",
            "Youth & Group Coaching"
        ],
        quote: "Strong athletes are built with grit, grace, and a great support system."
    },
    {
        name: "Nicole Brown",
        image: nicoleBrown,
        title: "Hyrox Coach | Therapist & Functional Fitness Athlete",
        background: [
            "Wife and mom to two active boys",
            "Licensed therapist focused on the mind–body connection",
            "Passionate Hyrox and functional fitness coach",
            "Began her personal fitness journey 1.5 years ago",
            "Built a family lifestyle around movement, discipline, and resilience",
            "Fell in love with Hyrox for the way it challenges both physical endurance and mental grit"
        ],
        highlights: [
            "Hyrox Coach with a passion for functional fitness and performance training",
            "Transformed a personal fitness journey into a coaching career",
            "Therapist with a unique focus on the connection between mindset and physical performance",
            "Brings a real-life perspective to balancing fitness, family, and goals",
            "Passionate about helping athletes build confidence, strength, endurance, and resilience"
        ],
        services: [
            "Hyrox Coaching",
            "Functional Fitness Training",
            "Mindset & Performance Coaching",
            "Group & One-on-One Training"
        ],
        quote: "True wellness goes beyond physical strength — mindset, discipline, and self-belief are what build real resilience."
    }
];

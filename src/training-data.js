import cageRentalNew from './assets/26cagerental.jpeg'
import hitTrax from '/src/assets/training/hit-trax.webp'
import hitTraxMembership from '/src/assets/training/hit-trax-membership.webp'
import turfArea from './assets/26newturf.jpg'
import teamRental from './assets/26teamrentals.jpeg'
import unlimitedMembership from '/src/assets/training/unlimited-membership.webp'
import hittingLessons from './assets/newImage6.jpeg'
import pitchingLessons from './assets/26pitchinglesson.jpg'
import fieldingLessons from './assets/26fieldinglesson.jpg'
import softballCatchingLessons from './assets/newcatcher26.png'
import softballHittingLessons from './assets/newBrihitting.jpeg'
import softballPitchingLessons from './assets/26Bri.jpeg'
import softballFieldingLessons from './assets/26softballfielding.webp'
import soccerTraining from './assets/26soccer.jpeg'
import soccerTeamRental from '/src/assets/training/soccer-team-rental.webp'
import soccerTeam from '/src/assets/training/soccer-team.webp'
import volleyballLessons from './assets/26volleyball.jpeg'
import volleyballTeamTraining from './assets/26volleyball2.jpeg'
import volleyballTeamDiscount from './assets/26volleyball3.jpeg'
import footballLessons from '/src/assets/training/football-lessons.webp'
import wrestlingLessons from '/src/assets/training/wrestling-lessons.jpeg'
import wrestlingMembership from '/src/assets/training/wrestling-membership.jpeg'
import strengthConditioning from './assets/newImage2.jpeg'
import gymnastics from '/src/assets/training/gymnastics.webp'
import coachBriNew from "./assets/newImage3.jpeg"
import mma from "/src/assets/mma.jpeg"
import briSpeed from "./assets/26Brispeed.jpeg"
import volleyballLessonsImg from "./assets/26volleyball3.jpeg"

const cageAndFieldRentals = [
    {
        title: "Batting Cage Rental",
        price: "30 min $25 · 1 hour $40 · w/ Pitching Machine $50",
        description: "14 by 14 by 70 foot hitting tunnels.",
        img: cageRentalNew,
        urlTitle1: "30 Minutes - $25",
        urlTitle2: "1 Hour - $40",
        urlTitle3: "w/ Pitching Machine - $50",
        url1: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43244-1-2-hour-cage-rental",
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43242-1-hour-cage-rental',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/116004-pitching-machine-1-hour-cage-rental'
    },
    {
        title: "HitTrax Rental",
        price: "$55 / hour",
        description: "1 hour rental includes use of the HitTrax computer system.",
        img: hitTrax,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/102824-hit_trax-1-hour-cage-rental'
    },
    {
        title: "HitTrax Monthly Membership",
        price: "$100 / month",
        description: "Membership includes HitTrax use, infield, outdoor field, cages, and pitching machine.",
        img: hitTraxMembership,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/client-memberships/6706'
    },
    {
        title: "Large Open Area",
        price: "$60 / hour",
        description: "Large open turf area to work on basic fundamentals.",
        img: turfArea,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43245-open-area'
    },
    {
        title: "Team Rentals",
        price: "1 Hour $60 · w/ Fielding Machine $70",
        description: "Indoor facility for off-season development and practices for baseball or softball teams.",

        img: teamRental,
        urlTitle1: "1 Hour - $60",
        urlTitle2: "w/ Fielding Machine - $70",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43245-open-area-indoor-infield',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/192153-open-area-w-machine-indoor-infield'
    },
    {
        title: "All Ages Unlimited Membership",
        price: "$125/month",
        description: "",
        img: unlimitedMembership,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/client-memberships/7028'
    }
];

const baseball = [
    {
        title: "Private Hitting Lessons",
        description: "1 on 1 hitting lessons with one of our qualified trainers.",
        img: hittingLessons,
        imgPosition: "center center"
    },
    {
        title: "Private Pitching Lessons",
        description: "1 on 1 pitching lessons with one of our qualified trainers.",
        img: pitchingLessons,
        imgPosition: "center center"
    },
    {
        title: "Private Fielding Lessons",
        description: "1 on 1 glove work and fielding technique with one of our qualified trainers.",
        img: fieldingLessons,
        imgPosition: "center center"
    },
    {
        title: "Private Catching Lessons",
        description: "1 on 1 catching technique with one of our qualified trainers.",
        img: softballCatchingLessons,
        imgPosition: "center 30%"
    }
];

const softball = [
    {
        title: "Softball w/ Coach Bri",
        img: softballHittingLessons,
        imgPosition: "center 10%",
        urlTitle1: "1 on 1",
        urlTitle2: "2 on 1",
        urlTitle3: "3 on 1",
        urlTitle4: "Team",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/138554-softball-training-w-coach-bri',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/102884-softball-training-2-on-1',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/117411-90-minute-softball-lesson',
        url4: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/89115-softball-team-training"
    },
    {
        title: "Private Hitting Lessons",
        description: "1 on 1 hitting lessons with one of our qualified trainers.",
        img: coachBriNew,
        urlTitle1: "30 Minutes",
        urlTitle2: "1 Hour",
        urlTitle3: "1.5 Hours",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/93416-1-2-hour-softball-lesson',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/85956-1-hour-softball-lesson',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/117411-90-minute-softball-lesson'
    },
    {
        title: "Private Pitching Lessons",
        description: "1 on 1 pitching lessons with one of our qualified trainers.",
        img: softballPitchingLessons,
        imgPosition: "center top",
        urlTitle1: "30 Minutes",
        urlTitle2: "1 Hour",
        urlTitle3: "1.5 Hours",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/93416-1-2-hour-softball-lesson',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/85956-1-hour-softball-lesson',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/117411-90-minute-softball-lesson'
    },
    {
        title: "Private Fielding Lessons",
        description: "1 on 1 glove work and fielding technique with one of our qualified trainers.",
        img: softballFieldingLessons,
        urlTitle1: "30 Minutes",
        urlTitle2: "1 Hour",
        urlTitle3: "1.5 Hours",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/93416-1-2-hour-softball-lesson',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/85956-1-hour-softball-lesson',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/117411-90-minute-softball-lesson'
    },
    {
        title: "Private Catching Lessons",
        description: "1 on 1 catching techniques with one of our qualified trainers.",
        img: softballCatchingLessons,
        imgPosition: "center 30%",
        urlTitle1: "30 Minutes",
        urlTitle2: "1 Hour",
        urlTitle3: "1.5 Hours",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/93416-1-2-hour-softball-lesson',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/85956-1-hour-softball-lesson',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/117411-90-minute-softball-lesson'
    },
];

const soccer = [
    {
        title: "Soccer Training w/ Tabitha",
        price: "(1:1) $70 · (2:1) $90 · (3:1) $120",
        description: "",
        img: soccerTraining,
        urlTitle1: '1 on 1',
        urlTitle2: '2 on 1',
        urlTitle3: '3 on 1',
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/61644-soccer-training-1-on-1',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/61710-soccer-training-2-on-1',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/61712-soccer-training-3-on-1'
    },
    {
        title: 'Indoor Soccer Team Rentals',
        price: "$60 / hour",
        description: "Indoor infield rental for soccer team practices and training.",
        img: soccerTeam,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43245-open-area-indoor-infield'
    },
    {
        title: "Indoor or Outdoor Monthly Soccer Team Rental Discount",
        price: "",
        description: "",
        img: soccerTeamRental
    }
];

const volleyball = [
    {
        title: "Volleyball Lessons",
        price: "(1:1) $70 · (2:1) $90 · (3:1) $120",
        description: "Private and small group volleyball lessons with Coach Aylin.",
        img: volleyballLessons,
        urlTitle1: '1 on 1',
        urlTitle2: '2 on 1',
        urlTitle3: '3 on 1',
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43526-volleyball-training',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/75208-volleyball-training-2-on-1',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/73759-volleyball-training-3-on-1'
    },
    {
        title: "Volleyball Team Trainings",
        price: "$180",
        description: "Team volleyball training sessions with Coach Aylin.",
        img: volleyballTeamTraining,
        imgPosition: "center 45%",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/87548-volleyball-team-training'
    },
    {
        title: "Indoor or Outdoor Monthly Volleyball Team Rental Discount",
        price: "",
        description: "",
        img: volleyballTeamDiscount,
        urlTitle1: 'Single Use',
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/117405-volleyball-indoor-area',
        urlTitle2: '4 Week Package'
    }
];

const otherSportsAndTrainings = [
    {
        title: "Speed & Agility w/ Coach Bri",
        price: "30 min $45 · 1 hour $70",
        description: "",
        img: briSpeed,
        urlTitle1: "30 Minutes - $45",
        urlTitle2: "1 Hour - $70",
        url1: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/150928-speed-and-agility-30-min",
        url2: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/45137-speed-and-agility-1-hour"
    },
    {
        title: "Private & Small Group Lessons w/ Coach Aylin",
        price: "(1:1) $70 · (2:1) $90 · (3:1) $120 · (Team) $180",
        description: "Private and small group training sessions with Coach Aylin.",
        img: volleyballLessonsImg,
        urlTitle1: "1 on 1",
        urlTitle2: "2 on 1",
        urlTitle3: "3 on 1",
        urlTitle4: "Team",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43526-volleyball-training',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/75208-volleyball-training-2-on-1',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/73759-volleyball-training-3-on-1',
        url4: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/87548-volleyball-team-training'
    },
    {
        title: "Football Lessons",
        price: "$70 / hour",
        description: "Football training by a highly qualified trainer. Private or team trainings available.",
        img: footballLessons,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/48428-football-training'
    },
    {
        title: "Wrestling Lessons",
        price: "",
        description: "Wrestling lessons by a highly specialized trainer. Private or team sessions available.",
        img: wrestlingLessons,
        urlTitle1: '1 on 1',
        urlTitle2: '2 on 1',
        urlTitle3: '4 on 1',
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140959-wrestling-training-1-on-1',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140957-wrestling-2-on-1',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140966-wrestling-4-on-1'
    },
    {
        title: "Wrestling Membership",
        img: wrestlingMembership,
        description: "Includes regulation size mat, select strength & conditioning equipment, and 2 Powerhouse Crossfit classes/week.",
        urlTitle1: "Membership",
        url1: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/client-memberships/2748"
    },
    {
        title: "Team Strength & Conditioning",
        price: "$10 / athlete · minimum of 10",
        description: "Seasonal! Contact us for more information.",
        img: strengthConditioning,
        imgPosition: "center 30%"
    },
    {
        title: "Gymnastics, Tumbling, Cheer",
        price: "$70 / hour",
        description: "",
        img: gymnastics,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43529-1-hour-private-gymnastics'
    }
];

export {
    cageAndFieldRentals,
    baseball,
    softball,
    soccer,
    volleyball,
    otherSportsAndTrainings
}
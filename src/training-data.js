import battingCage from '/src/assets/training/batting-cage.webp'
import hitTrax from '/src/assets/training/hit-trax.webp'
import hitTraxMembership from '/src/assets/training/hit-trax-membership.webp'
import turfArea from '/src/assets/training/turf-area.webp'
import cageRental from '/src/assets/training/cage-rental.webp'
import teamRental from '/src/assets/training/team-rental.webp'
import unlimitedMembership from '/src/assets/training/unlimited-membership.webp'
import hittingLessons from '/src/assets/training/hitting-lessons.webp'
import pitchingLessons from '/src/assets/training/pitching-lessons.webp'
import fieldingLessons from '/src/assets/training/fielding-lessons.webp'
import catchingLessons from '/src/assets/training/catching-lessons.webp'
import softballCatchingLessons from '/src/assets/training/softball-catching-lessons.webp'
import softballHittingLessons from '/src/assets/training/softball-hitting-lessons.webp'
import softballPitchingLessons from '/src/assets/training/softball-pitching-lessons.webp'
import softballFieldingLessons from '/src/assets/training/softball-fielding-lessons.webp'
import soccerTraining from '/src/assets/training/soccer-training.webp'
import soccerTeamRental from '/src/assets/training/soccer-team-rental.webp'
import soccerTeam from '/src/assets/training/soccer-team.webp'
import volleyballLessons from '/src/assets/training/volleyball-lessons.webp'
import volleyballTeamTraining from '/src/assets/training/volleyball-team-training.webp'
import volleyballTeamDiscount from '/src/assets/training/volleyball-team-discount.webp'
import footballLessons from '/src/assets/training/football-lessons.webp'
import wrestlingLessons from '/src/assets/training/wrestling-lessons.webp'
import strengthConditioning from '/src/assets/training/strength-conditioning.webp'
import gymnastics from '/src/assets/training/gymnastics.webp'
import coachBriNew from "/src/assets/bri-new.jpg"

const cageAndFieldRentals = [
    {
        title: "Batting Cage Rental",
        price: "$40 an hour",
        description: "14 by 14 by 70 foot hitting tunnels. Click the picture to book your rental.",
        img: battingCage,
        urlTitle1: "30 Minutes",
        urlTitle2: "1 Hour",
        url1: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43244-1-2-hour-cage-rental",
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43242-1-hour-cage-rental'
    },
    {
        title: "HitTrax Rental",
        price: "$55 an hour",
        description: "1 hr rental includes use of the HitTrax computer system",
        img: hitTrax,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/102824-hit_trax-1-hour-cage-rental'
    },
    {
        title: "HitTrax Monthly Membership",
        price: "$100 / month",
        description: "Membership includes HitTrax use, infield, outdoor field, cages, and pitching machine",
        img: hitTraxMembership,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/client-memberships/6706'
    },
    {
        title: "Large Open Area",
        price: "$60 an hour",
        description: "Large open turf area to work on basic fundamentals. Click the picture to book your rental.",
        img: turfArea,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/43245-open-area'
    },
    {
        title: "Cage Rental with Machine",
        price: "$50 an hour",
        description: "Junior Hack Attack available for rental!",
        img: cageRental,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/116004-pitching-machine-1-hour-cage-rental'
    },
    {
        title: "Team Rentals",
        price: "Starting at $180/single use or $400/4 week package",
        description: "Indoor facility for off-season development and practices for baseball or softball teams.",
        img: teamRental,
        urlTitle1: 'Baseball',
        urlTitle2: 'Softball',
        urlTitle3: 'Volleyball',
        urlTitle4: 'Basketball',
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/89114-baseball-team-training',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/89115-softball-team-training',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/87548-volleyball-team-training',
        url4: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/98749-basketball-team-training'
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
        price: "$85 / 1 hour",
        description: "1 on 1 hitting lessons with one of our qualified trainers",
        img: hittingLessons,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/41903-1-hour-baseball-pitching-lesson'
    },
    {
        title: "Private Pitching Lessons",
        price: "$85 / 1 hour",
        description: "1 on 1 pitching lessons with one of our qualified trainers.",
        img: pitchingLessons,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/41903-1-hour-baseball-pitching-lesson'
    },
    {
        title: "Fielding",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 glove work and fielding technique with a qualified trainer.",
        img: fieldingLessons
    },
    {
        title: "Catching",
        price: "$85 / 1 hour",
        description: "1 on 1 catching technique with a qualified trainer.",
        img: catchingLessons,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/55306-1-hour-catching-lesson'
    }
];

const softball = [
    {
        title: "Softball w/ Coach Bri",
        price: "(1:1) $70 / (2:1) $90 / (3:1) $120 (Team) $180 ",
        img: coachBriNew,
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
        price: "$50 half hour / $85 1 hour / $125 1.5 hours",
        description: "1 on 1 hitting lessons with one of our qualified trainers",
        img: softballHittingLessons,
        urlTitle1: "30 Minutes",
        urlTitle2: "1 Hour",
        urlTitle3: "1.5 Hours",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/93416-1-2-hour-softball-lesson',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/85956-1-hour-softball-lesson',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/117411-90-minute-softball-lesson'
    },
    {
        title: "Private Pitching Lessons",
        price: "$50 half hour / $85 1 hour / $125 1.5 hours",
        description: "1 on 1 pitching lessons with one of our qualified trainers.",
        img: softballPitchingLessons,
        urlTitle1: "30 Minutes",
        urlTitle2: "1 Hour",
        urlTitle3: "1.5 Hours",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/93416-1-2-hour-softball-lesson',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/85956-1-hour-softball-lesson',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/117411-90-minute-softball-lesson'
    },
    {
        title: "Fielding",
        price: "$50 half hour / $85 1 hour / $125 1.5 hours",
        description: "1 on 1 glove work and fielding technique with a qualified trainer.",
        img: softballFieldingLessons,
        urlTitle1: "30 Minutes",
        urlTitle2: "1 Hour",
        urlTitle3: "1.5 Hours",
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/93416-1-2-hour-softball-lesson',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/85956-1-hour-softball-lesson',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/117411-90-minute-softball-lesson'
    },
    {
        title: "Catching",
        price: "$50 half hour / $85 1 hour / $125 1.5 hours",
        description: "1 on 1 catching techniques with a qualified trainer.",
        img: softballCatchingLessons,
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
        title: "Soccer Training w/Sarah",
        price: "",
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
        title: 'Indoor Soccer Team Rentals available',
        price: "",
        description: "",
        img: soccerTeam
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
        price: "",
        description: "Schedule today!",
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
        price: "",
        description: "Contact us regarding Team Trainings",
        img: volleyballTeamTraining
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
        title: "Football Lessons",
        price: "$50 an hour",
        description: "Football training by a highly qualified trainer. Private or team trainings available.",
        img: footballLessons,
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/48428-football-training'
    },
    {
        title: "Wrestling",
        price: "",
        description: "Wrestling lessons by a highly specialized traininer.  Private or team sessions available.",
        img: wrestlingLessons,
        urlTitle1: '1 on 1',
        urlTitle2: '2 on 1',
        urlTitle3: '4 on 1',
        urlTitle4: 'Membership',
        url3: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140966-wrestling-4-on-1',
        url2: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140957-wrestling-2-on-1',
        url1: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140959-wrestling-training-1-on-1',
        url4: 'https://app.upperhand.io/customers/1047-powerhouse-training-complex/client-memberships/2748'
    },
    {
        title: "Team Strength & Conditioning",
        price: "$10/athlete minimum of 10",
        description: "Seasonal! Contact us for more information.",
        img: strengthConditioning
    },
    {
        title: "Gymnastics, Tumbling, Cheer",
        price: "$70/hour",
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
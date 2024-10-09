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

const cageAndFieldRentals = [
    {
        title: "Batting Cage Rental",
        price: "$40 an hour",
        description: "14 by 14 by 70 foot hitting tunnels. Click the picture to book your rental.",
        img: battingCage
    },
    {
        title: "HitTrax Rental",
        price: "$55 an hour",
        description: "1 hr rental includes use of the HitTrax computer system",
        img: hitTrax
    },
    {
        title: "HitTrax Monthly Membership",
        price: "$100/month",
        description: "Membership includes HitTrax use, infield, outdoor field, cages, and pitching machine",
        img: hitTraxMembership
    },
    {
        title: "Large Open Area",
        price: "$60 an hour",
        description: "Large open turf area to work on basic fundamentals. Click the picture to book your rental.",
        img: turfArea
    },
    {
        title: "Cage Rental with Machine",
        price: "$50/hour cage OR $70/hour infield use",
        description: "Junior Hack Attack available for rental!",
        img: cageRental
    },
    {
        title: "Team Rentals",
        price: "Starting at $150/single use or $400/4 week package",
        description: "Indoor facility for off-season development and practices for baseball or softball teams.",
        img: teamRental
    },
    {
        title: "All Ages Unlimited Membership",
        price: "$125/month",
        description: "",
        img: unlimitedMembership
    }
];

const baseball = [
    {
        title: "Private Hitting Lessons",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 hitting lessons with one of our qualified trainers",
        img: hittingLessons
    },
    {
        title: "Private Pitching Lessons",
        price: "$50 half hour",
        description: "1 on 1 pitching lessons with one of our qualified trainers.",
        img: pitchingLessons
    },
    {
        title: "Fielding",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 glove work and fielding technique with a qualified trainer.",
        img: fieldingLessons
    },
    {
        title: "Catching",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 catching technique with a qualified trainer.",
        img: catchingLessons
    }
];

const softball = [
    {
        title: "Private Hitting Lessons",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 hitting lessons with one of our qualified trainers",
        img: ""
    },
    {
        title: "Private Pitching Lessons",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 pitching lessons with one of our qualified trainers.",
        img: ""
    },
    {
        title: "Fielding",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 glove work and fielding technique with a qualified trainer.",
        img: ""
    },
    {
        title: "Catching",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 catching techniques with a qualified trainer.",
        img: ""
    }
];

const soccer = [
    {
        title: "Soccer Training w/Sarah",
        price: "",
        description: "Indoor Soccer Team Rentals available",
        img: ""
    },
    {
        title: "Indoor or Outdoor Monthly Soccer Team Rental Discount",
        price: "",
        description: "",
        img: ""
    }
];

const volleyball = [
    {
        title: "Volleyball Lessons",
        price: "",
        description: "Schedule today!",
        img: ""
    },
    {
        title: "Volleyball Team Trainings",
        price: "",
        description: "Contact us regarding Team Trainings",
        img: ""
    },
    {
        title: "Indoor or Outdoor Monthly Volleyball Team Rental Discount",
        price: "",
        description: "",
        img: ""
    }
];

const otherSportsAndTrainings = [
    {
        title: "Football Lessons",
        price: "$70 an hour",
        description: "Football training by a highly qualified trainer. Private or team trainings available.",
        img: ""
    },
    {
        title: "Wrestling",
        price: "$100 a month",
        description: "Seasonal! Contact us for more information.",
        img: ""
    },
    {
        title: "Strength & Conditioning",
        price: "$10/athlete minimum of 10",
        description: "Seasonal! Contact us for more information.",
        img: ""
    },
    {
        title: "Gymnastics, Tumbling, Cheer",
        price: "$70/hour",
        description: "",
        img: ""
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
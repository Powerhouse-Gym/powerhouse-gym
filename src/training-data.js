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
        img: softballHittingLessons
    },
    {
        title: "Private Pitching Lessons",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 pitching lessons with one of our qualified trainers.",
        img: softballPitchingLessons
    },
    {
        title: "Fielding",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 glove work and fielding technique with a qualified trainer.",
        img: softballFieldingLessons
    },
    {
        title: "Catching",
        price: "$50 half hour $85 1 hour",
        description: "1 on 1 catching techniques with a qualified trainer.",
        img: softballCatchingLessons
    }
];

const soccer = [
    {
        title: "Soccer Training w/Sarah",
        price: "",
        description: "",
        img: soccerTraining
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
        img: volleyballLessons
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
        img: volleyballTeamDiscount
    }
];

const otherSportsAndTrainings = [
    {
        title: "Football Lessons",
        price: "$70 an hour",
        description: "Football training by a highly qualified trainer. Private or team trainings available.",
        img: footballLessons
    },
    {
        title: "Wrestling",
        price: "$100 a month",
        description: "Seasonal! Contact us for more information.",
        img: wrestlingLessons
    },
    {
        title: "Strength & Conditioning",
        price: "$10/athlete minimum of 10",
        description: "Seasonal! Contact us for more information.",
        img: strengthConditioning
    },
    {
        title: "Gymnastics, Tumbling, Cheer",
        price: "$70/hour",
        description: "",
        img: gymnastics
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
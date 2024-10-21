import eric from '../assets/crossfit-coaches/eric.webp'
import nicole from '../assets/crossfit-coaches/nicole.webp'
import rebecca from '../assets/crossfit-coaches/rebecca.webp'
const CrossfitCoaches = () => {

    const coaches = [
        {
            name: 'Nicole Ruiz',
            img: nicole
        },
        {
            name: 'Eric Roland',
            img: eric
        },
        {
            name: 'Rebecca Ward',
            img: rebecca
        },
    ]

    const coachElements = coaches.map((coach, i) => {
        return (
            <div className='coach' key={i}>
                <img src={coach.img} alt={coach.name} className='crossfit-coach-img' />
                <h3>{coach.name}</h3>
            </div>
        )
    })

    return (
        <div className='crossfit-coaches-container'>
            <h1>Meet Our Coaches</h1>
            <div className='crossfit-coaches'>
                {coachElements}
            </div>
        </div>
    );
}

export default CrossfitCoaches;
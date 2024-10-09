

const TrainingItem = ({arr}) => {

    const trainingElements = arr.map((elem, i) => {
        return (
            <div className="training-item" key={i}>
                <h2>{elem.title}</h2>
                <img src={elem.img} />
                <p>{elem.description}</p>
                <h3>{elem.price}</h3>
            </div>
        )
    })

    return ( 
        <div className="training-container">
            {trainingElements}
        </div>
     );
}
 
export default TrainingItem;
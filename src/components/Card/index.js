import React, { useState, useEffect } from "react";
import Data from '../../assets/data.json'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux"

function Card() {

    const [fitnessData, setFitnessData] = useState([]);
    const myState = useSelector((state) => state.search)

    useEffect(() => {
        if (Data) {
            setFitnessData(Data)
        }
    }, [Data]);

    useEffect(() => {
        if (myState.length > 0) {

            let lowerCaseFilter = myState.toLowerCase().trim();
            if (!lowerCaseFilter) {
                console.log(Data);
            } else {

                const filteredData = Data.filter(item => {
                    return Object.keys(item).some(key => {
                        return item[key].toString().toLowerCase().includes(lowerCaseFilter);
                    });
                })
                setFitnessData(filteredData)

            }
        }
        
    }, [myState])

    const allData = fitnessData.map((data, i) => (
        <Draggable
            draggableId={`draggable-${i}`}
            key={`draggble-${i}`}
            index={i}
        >
            {(provided) => (
                <div className="col" {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>

                    <div className="card shadow-sm  h-100">
                        <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            src={data.videourl}
                            width="100%" height="225"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>

                            <p className="card-text">Calorieburn : {data.calorieburn}</p>
                            <p className="card-text">Difficulty : {data.difficulty}</p>
                            <p className="card-text">Equipment : {data.equipment}</p>
                            <p className="card-text">Trainingtype : {data.trainingtype}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                </div>
                                <small className="text-muted">{data.duration}</small>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </Draggable>

    ))

    const dragEnd = (result) => {
        console.log(result);
        const fitnessItem = [...fitnessData];
        const [orderedFitnessdata] = fitnessItem.splice(result.source.index, 1);
        fitnessItem.splice(result.destination.index, 0, orderedFitnessdata);

        setFitnessData(fitnessItem);
    }


    return (
        <>
            <DragDropContext onDragEnd={dragEnd}>
                <Droppable
                    droppableId="fitnessSequence"
                    direction="horizontal"
                    type="column"
                >
                    {(provided) => (
                        <section>
                            <h2 className="text-center">Training videos</h2>
                            <div className="cards" >
                                <div className="album py-5 bg-light">
                                    <div className="cardsection container">
                                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" {...provided.droppableProps} ref={provided.innerRef}>
                                            {allData}
                                            {provided.placeholder}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                </Droppable>
            </DragDropContext>



        </>
    )


}



export default Card
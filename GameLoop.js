import Constants from './Constants';


const GameLoop = (entities, { touches, dispatch, events }) => {




    console.log("Test");
    //touches.touchPress()
    touches.filter(t => t.type === "start").forEach(t => {
        //console.log(t.delta.pageX);

        let head = entities.head;
        head.position = [
            head.position[0] + entities.speed.xSpeed,
            head.position[1] + entities.speed.ySpeed
        ];
    });

    touches.filter(t => t.type === "move").forEach(t => {
        console.log("PageX: " + t.delta.pageX);
        console.log("PageY: " + t.delta.pageY);
        console.log("LocationX: " + t.delta.locationX);
        console.log("LocationY: " + t.delta.locationY);
        console.log("Timestamp: " + t.delta.timestamp);
    });

    return entities;   
}

export { GameLoop }; 
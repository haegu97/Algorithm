function solution(fees, records) {
    const parkingLot = {}
    
    const [defaultTime, defaultCost, time, timeCost] = fees
    
    records.forEach((v)=>{
        const [inTime, carNumber, type] = v.split(" ")
        const splitInTime = inTime.split(":")
        const convertedInTime = ( splitInTime[0] * 60 ) + ( Number(splitInTime[1]))
        
        if (!parkingLot[carNumber]) {
            parkingLot[carNumber] = { time: 0, carNumber }
        }
        
        parkingLot[carNumber].type = type;
        
        if (type === "IN") {
            parkingLot[carNumber].lastInTime = convertedInTime;
            return;
        }
        
        parkingLot[carNumber].time += convertedInTime - parkingLot[carNumber].lastInTime;
         
    })
    
    return Object.values(parkingLot).sort((a, b) => a.carNumber - b.carNumber).map(v=>{
        if(v.type === "IN"){
            v.time += 1439 - v.lastInTime
        }
        
        if(fees[0] > v.time){
            return fees[1]
        }
        
        return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3]
    })
    
    console.log(parkingLot)
}
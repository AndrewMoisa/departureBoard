export const graphqlQuery = `
 {
    stopPlace(id: "NSR:StopPlace:5459") {
        id
        name
        transportMode
        transportSubmode
        timeZone
        estimatedCalls(numberOfDepartures: 10) {
            predictionInaccurate
            realtimeState
            stopPositionInPattern
            forBoarding
            forAlighting
            requestStop
            cancellation
            date
            realtime
            occupancyStatus
            destinationDisplay {
                frontText
                via
            }
            aimedArrivalTime
            expectedArrivalTime
            actualArrivalTime
        }
    }
}
`;

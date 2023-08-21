interface IRating {
    range: number
    ratingType: string
    rateValues: []
    generateCountArray: (c: string) => void
}
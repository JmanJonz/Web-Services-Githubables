// create goal schema object to be used in mongoose mondel and swagger documentation
    const goalSchema = {
        "goalTitle": "Stop Picking Nose",
        "startDate": "2023/9/30",
        "completeByDate": "2024/7/30",
        "belongsToValue": "family",
        "urgentImportantRating": 7,
        "goalCompleted": false,
        "userEmail": "bogus@dumbmail.com"
    }
// export goalSchema to be used and in swagger docs
    export default goalSchema;
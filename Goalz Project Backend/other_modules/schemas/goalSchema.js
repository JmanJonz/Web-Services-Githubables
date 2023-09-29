// create goal schema object to be used in mongoose mondel and swagger documentation
    const goalSchema = {
        goalTitle: {
            type: String,
            required: true
        },
        goalOwner: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: false
        },
        completeByDate: {
            type: Date,
            required: true
        },
        belongsToValue: {
            type: String,
            required: true
        },
        urgentImportantRating: {
            type: Number,
            min: 1,
            max: 10
        },
        goalCompleted: {
            type: Boolean,
            required: true,
            default: false
        }
    }

// export goalSchema to be used in model and in swagger docs
    export default goalSchema;
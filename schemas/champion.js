export default {
    name: "champion",
    title: "Champion",
    type: "document",
    fields: [
        {
            name: "year",
            title: "Year",
            type: "date",
            options: {
                dateFormat: "YYYY",
            },
            validation: (Rule) => Rule.required().custom(date => {
                return date < '1978'
                ? 'Year must be at least 1978 or later.'
                : true;
            }),
        },
        {
            name: "championTeam",
            title: "Champion Team",
            type: "string",
        },
        {
            name: "winnerManager",
            title: "Champion Manager",
            type: "string",
        },
        {
            name: "runnerUpTeam",
            title: "Runner Up Team",
            type: "string",
        },
        {
            name: "runnerUpManager",
            title: "Runner Up Manager",
            type: "string",
        },
    ],
};

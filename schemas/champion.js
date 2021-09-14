export default {
    name: 'champion',
    title: 'Champion',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'number',
            validation: (Rule) => Rule.required().integer().min(1978).max(2050),
        },
        {
            name: 'championTeam',
            title: 'Champion Team',
            type: 'string',
        },
        {
            name: 'championManager',
            title: 'Champion Manager',
            type: 'string',
        },
        {
            name: 'runnerUpTeam',
            title: 'Runner Up Team',
            type: 'string',
        },
        {
            name: 'runnerUpManager',
            title: 'Runner Up Manager',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'year',
        }
    },
    orderings: [
        {
            title: 'Year, ASC',
            name: 'year',
            by: [
                { field: 'year', direction: 'asc' }
            ]
        },
    ],
};

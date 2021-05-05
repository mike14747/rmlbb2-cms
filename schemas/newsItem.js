export default {
    name: 'newsItem',
    title: 'News Item',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: Rule => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'blockContentText',
            validation: Rule => Rule.required(),
        },
    ],
    orderings: [
        {
            title: 'Date, New',
            name: 'dateDesc',
            by: [
                { field: 'date', direction: 'desc' }
            ]
        },
        {
            title: 'Date, Old',
            name: 'dateAsc',
            by: [
                { field: 'date', direction: 'asc' }
            ]
        },
    ],
    preview: {
        select: {
            title: 'date',
            subtitle: 'title'
        }
    },
};

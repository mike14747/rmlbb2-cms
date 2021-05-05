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
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        },
        {
            name: 'content',
            title: 'Content',
            type: 'blockContentText',
            validation: Rule => Rule.required(),
        },
        {
            name: 'active',
            title: 'Active',
            descritpion: 'Should this news items be displayed?',
            type: 'boolean',
            validation: Rule => Rule.required(),
        },
    ],
    initialValue: () => ({
        active: true,
        date: new Date().toISOString().slice(0, 10),
    }),
    preview: {
        select: {
            title: 'date',
            subtitle: 'title',
        }
    },
    orderings: [
        {
            title: 'Date, New First',
            name: 'dateDesc',
            by: [
                { field: 'date', direction: 'desc' }
            ]
        },
        {
            title: 'Date, Old First',
            name: 'dateAsc',
            by: [
                { field: 'date', direction: 'asc' }
            ]
        },
    ],
};

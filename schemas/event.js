export default {
    name: 'event',
    title: 'Upcoming Event',
    type: 'document',
    fields: [
        {
            name: 'event',
            title: 'Event',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'details',
            title: 'Event Details',
            description: 'This field is optional and not always needed. If you use it, keep it brief.',
            type: 'string',
        },
        {
            name: 'eventDate',
            title: 'Event Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        },
        {
            name: 'active',
            title: 'Active',
            descritpion: 'Should this upcoming event be displayed?',
            type: 'boolean',
            initialValue: true,
        },
    ],
    preview: {
        select: {
            title: 'eventDate',
            subtitle: 'event',
        }
    },
    orderings: [
        {
            title: 'eventDate, New First',
            name: 'dateDesc',
            by: [
                { field: 'eventDate', direction: 'desc' }
            ]
        },
        {
            title: 'eventDate, Old First',
            name: 'dateAsc',
            by: [
                { field: 'eventDate', direction: 'asc' }
            ]
        },
    ],
}

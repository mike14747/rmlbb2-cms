export default {
    name: 'links',
    title: 'Links',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The text that is visible.',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'The url for the link (including http/https).',
            validation: (Rule) => Rule.required(),
        },
    ],
};

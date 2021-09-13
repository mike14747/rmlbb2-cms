export default {
    name: 'links',
    title: 'Links',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The text that is visible',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'url',
            title: 'URL',
            type: 'string',
            description: 'The url for the link',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'active',
            title: 'Active',
            descritpion: 'Should this link be displayed?',
            type: 'boolean',
            initialValue: true,
        },
    ],
};

// Baseball America >
// Baseball-Reference >
// FanGraphs >
// Strat-O-Matic >

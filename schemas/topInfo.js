export default {
    name: 'topInfo',
    title: 'Top Info',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string',
            description: 'This is the text that will appear in the TopInfo component.',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'active',
            title: 'Active',
            descritpion: 'Should the TopInfo component be displayed?',
            type: 'boolean',
            initialValue: true,
        },
    ],
};
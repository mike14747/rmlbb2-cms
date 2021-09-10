export default {
    name: 'miscPortableText',
    title: 'Misc Portable Text',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
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
            descritpion: 'Should this content be used?',
            type: 'boolean',
            validation: Rule => Rule.required(),
        },
    ],
};

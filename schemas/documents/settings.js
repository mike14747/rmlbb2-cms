export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    __experimental_actions: [
        // 'create',
        // 'delete',
        'update',
        'publish',
    ],
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'url',
            description: 'You must include "mailto:" before the email address.',
            validation: Rule => Rule.uri({
                scheme: ['mailto']
            }),
        },
        {
            name: 'topInfoText',
            title: 'Top Info Text',
            type: 'string',
            description: 'This is the short text that will appear in the TopInfo component.',
            validation: Rule => Rule.required().min(1).max(60),
        },
        {
            name: 'topInfoActive',
            title: 'Top Info Active',
            descritpion: 'Should the TopInfo component be displayed?',
            type: 'boolean',
            initialValue: true,
        },
        {
            name: 'links',
            title: 'Links',
            description: 'Links that appear in the footer.',
            type: 'array',
            of: [{ type: 'link' }],
            validation: Rule => Rule.unique(),
        },
    ],
};

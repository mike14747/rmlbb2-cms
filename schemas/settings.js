export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'value',
            title: 'Value',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }
    ],
};

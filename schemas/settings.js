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
            type: ['string', 'number', 'boolean'],
            description: 'The value can be a string, number or boolean',
            validation: (Rule) => Rule.required(),
        }
    ],
};

// Contact Email > 'mike4747@oh.rr.com'
// Show TopInfo > true
// TopInfo Text > 'The RML has an opening!'

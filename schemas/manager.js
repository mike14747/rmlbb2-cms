export default {
    name: 'manager',
    title: 'Manager',
    type: 'document',
    fields: [
        {
            name: 'teamId',
            title: 'Team ID',
            type: 'number',
            validation: (Rule) => Rule.required().integer().min(1).max(50),
        },
        {
            name: 'team',
            title: 'Team Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'conference',
            title: 'Conference',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'American', value: 'american' },
                    { title: 'National', value: 'national' },
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'division',
            title: 'Division',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'East', value: 'east' },
                    { title: 'Central', value: 'central' },
                    { title: 'West', value: 'west' },
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'description1',
            title: 'Description (Manager 1)',
            description: 'Only needed for special situations (multiple managers, teams without managers, etc).',
            type: 'string',
        },
        {
            name: 'manager1',
            title: 'Name (Manager 1)',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'address1a',
            title: 'Address (Manager 1)',
            type: 'string',
        },
        {
            name: 'address1b',
            title: 'Address, second line (Manager 1)',
            description: 'Optional... to be used for things like PO Box, etc.',
            type: 'string',
        },
        {
            name: 'city1',
            title: 'City (Manager 1)',
            type: 'string',
        },
        {
            name: 'state1',
            title: 'State (Manager 1)',
            type: 'string',
        },
        {
            name: 'country1',
            title: 'Country (Manager 1)',
            type: 'string',
        },
        {
            name: 'zip1',
            title: 'Zip Code (Manager 1)',
            type: 'string',
        },
        {
            name: 'phone1a',
            title: 'Primary Phone (Manager 1)',
            type: 'string',
        },
        {
            name: 'phone1b',
            title: 'Secondary Phone (Manager 1)',
            description: 'Optional... most of the time it will not be used or needed.',
            type: 'string',
        },
        {
            name: 'email1a',
            title: 'Primary Email (Manager 1)',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'email1b',
            title: 'Secondary Email (Manager 1)',
            description: 'Optional... most of the time it will not be used or needed.',
            type: 'string',
        },
        {
            name: 'description2',
            title: 'Description (Manager 2)',
            description: 'Manager 2 info is obviously only to be used in those rare instances where a team has 2 managers.',
            type: 'string',
        },
        {
            name: 'manager2',
            title: 'Name (Manager 2)',
            type: 'string',
        },
        {
            name: 'address2a',
            title: 'Address (Manager 2)',
            type: 'string',
        },
        {
            name: 'address2b',
            title: 'Address, second line (Manager 2)',
            type: 'string',
        },
        {
            name: 'city2',
            title: 'City (Manager 2)',
            type: 'string',
        },
        {
            name: 'state2',
            title: 'State (Manager 2)',
            type: 'string',
        },
        {
            name: 'country2',
            title: 'Country (Manager 2)',
            type: 'string',
        },
        {
            name: 'zip2',
            title: 'Zip Code (Manager 2)',
            type: 'string',
        },
        {
            name: 'phone2a',
            title: 'Primary Phone (Manager 2)',
            type: 'string',
        },
        {
            name: 'phone2b',
            title: 'Secondary Phone (Manager 2)',
            type: 'string',
        },
        {
            name: 'email2a',
            title: 'Primary Email (Manager 2)',
            type: 'string',
        },
        {
            name: 'email2b',
            title: 'Secondary Email (Manager 2)',
            type: 'string',
        },
    ],
};

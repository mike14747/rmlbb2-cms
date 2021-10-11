export default {
    name: 'downloads',
    title: 'Downloads',
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
            name: 'downloads',
            title: 'Downloads',
            description: 'Files that appear on the downloads page.',
            type: 'array',
            of: [{ type: 'downloadFile' }],
            // validation: Rule => Rule.unique(),
        },
        {
            name: 'lzps',
            title: 'LZPs',
            description: 'LZP files that appear on the downloads page.',
            type: 'array',
            of: [{ type: 'lzpFile' }],
            validation: Rule => Rule.unique(),
        },
    ],
}

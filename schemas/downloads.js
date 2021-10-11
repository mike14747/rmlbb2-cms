export default {
    name: 'downloads',
    title: 'Downloads',
    type: 'document',
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
            of: [{ type: 'reference', to: { type: 'downloadFile' } }],
            validation: Rule => Rule.unique(),
        },
        {
            name: 'lzps',
            title: 'LZPs',
            description: 'LZP files that appear on the downloads page.',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'lzpFile' } }],
            validation: Rule => Rule.unique(),
        },
    ],
}

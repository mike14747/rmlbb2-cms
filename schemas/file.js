export default {
    name: 'fileAsset',
    title: 'File',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'file',
            title: 'File',
            type: 'file',
            validation: (Rule) => Rule.required(),
        },
    ],
}

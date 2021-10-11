export default {
    name: 'fileTypeIcon',
    title: 'File Type Icon',
    type: 'document',
    fields: [
        {
            name: 'fileType',
            title: 'File Type',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'fileType',
            media: 'icon',
        },
    },
}
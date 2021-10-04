export default {
    name: 'download',
    title: 'Download',
    type: 'document',
    validation: (Rule) =>
        Rule.custom((doc) => {
            // console.log('doc.filename:', doc.filename);
            console.log('doc.file:', doc.file);

            // const matched = doc.filename === doc.file;
            // return matched
            //     ? 'Uploaded file does not match the expected filename.'
            //     : true
            return true;
        }),
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'filename',
            title: 'Filename',
            description: 'This will be the filename which the uploaded file must have.',
            type: 'string',
            validation: (Rule) => Rule.required(),
            // validation: Rule => Rule.custom((filename, context) => {
            //     console.log('filename:', filename);
            //     console.log('context:', context);
            //     return true;
            // }),
        },
        {
            name: 'file',
            title: 'File',
            type: 'file',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'active',
            title: 'Active',
            description: 'Is this download active?',
            type: 'boolean',
            initialValue: true,
        },
    ],
    preview: {
        select: {
            title: 'name',
            subTitle: 'description',
        }
    },
    orderings: [
        {
            title: 'Download',
            name: 'name',
            by: [
                { field: 'name', direction: 'asc' }
            ]
        },
    ],
}

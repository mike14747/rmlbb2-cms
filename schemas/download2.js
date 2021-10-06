import sanityClient from 'part:@sanity/base/client';

const client = sanityClient.withConfig({ apiVersion: '2021-10-04' });

export default {
    name: 'download',
    title: 'Download',
    type: 'document',
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
        },
        {
            name: 'file',
            title: 'File',
            type: 'file',
            validation: Rule => Rule.custom(async (doc, context) => {
                const { _ref } = doc.asset
                const { filename } = context.document
                const originalFilename = await client.fetch(`*[_id == $ref][0].originalFilename`, { ref: _ref })

                return filename === originalFilename ? true : `Uploaded file ${originalFilename} does not match required filename ${filename}`
            }),
        },
        {
            name: 'active',
            title: 'Active',
            description: 'Is this download active?',
            type: 'boolean',
            initialValue: true,
        },
    ],
}
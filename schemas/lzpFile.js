import sanityClient from 'part:@sanity/base/client';

const client = sanityClient.withConfig({ apiVersion: '2021-10-08' });

export default {
    name: 'lzpFile',
    title: 'LZP File',
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
            description: 'This will be the filename which the uploaded LZP file must have.',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'reference',
            to: [{ type: 'fileTypeIcon' }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'file',
            title: 'File',
            type: 'file',
            validation: Rule => Rule.custom(async (doc, context) => {
                const { _ref } = doc.asset;
                const { filename } = context.document;
                const originalFilename = await client.fetch(`*[_id == $ref][0].originalFilename`, { ref: _ref });

                return filename === originalFilename ? true : `Uploaded file ${originalFilename} does not match required filename ${filename}`;
            }),
        },
        {
            name: 'active',
            title: 'Active',
            description: 'Is this LZP file active?',
            type: 'boolean',
            initialValue: true,
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'icon.icon',
        },
    },
    orderings: [
        {
            name: 'name',
            title: 'Name',
            by: [
                { field: 'name', direction: 'asc' }
            ]
        },
    ],
}

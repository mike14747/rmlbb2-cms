import React from 'react';

const smallIcon = () => (
    <span style={{ fontSize: '80%' }}>small</span>
);
const smallRender = props => (
    <span style={{ fontSize: '80%' }}>{props.children}</span>
);


export default {
    title: 'Block Content',
    name: 'blockContentText',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'H5', value: 'h5' },
                { title: 'H6', value: 'h6' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    {
                        title: 'Small',
                        value: 'small',
                        blockEditor: {
                            icon: smallIcon,
                            render: smallRender,
                        }
                    }
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                        ],
                    },
                ],
            },
        },
    ],
};

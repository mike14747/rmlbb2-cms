import React from 'react';

const smallIcon = () => (
    <span style={{ fontSize: '75%' }}>small</span>
);
const smallRender = props => (
    <span style={{ fontSize: '75%' }}>{props.children}</span>
);

const highlightIcon = () => (
    <span style={{ fontWeight: 'bold' }}>H</span>
);

const highlightRender = props => (
    <span style={{ color: '#232323', backgroundColor: '#fffdd0', border: '1px #ff7518 dashed', padding: '0 0.25rem' }}>{props.children}</span>
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
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Underline', 'value': 'underline' },
                    { title: 'Strike', 'value': 'strike-through' },
                    {
                        title: 'Highlight',
                        value: 'highlight',
                        blockEditor: {
                            icon: highlightIcon,
                            render: highlightRender
                        }
                    },
                    {
                        title: 'Small',
                        value: 'small',
                        blockEditor: {
                            icon: smallIcon,
                            render: smallRender,
                        }
                    },
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
        {
            name: 'table',
            title: 'Table',
            type: 'table',
            description: 'The top row is always considered the <thead> and will appear in bold.',
        },
    ],
};

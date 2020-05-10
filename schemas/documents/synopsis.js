export default {
    name: 'synopsis',
    type: 'document',
    title: 'Synopsis',
    fields: [
        {
            name: 'Paper',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'slug',
                    title: 'Slug',
                    type: 'slug',
                    description: 'Some frontends will require a slug to be set to show the project',
                    options: {
                        source: 'title',
                        maxLength: 96
                    },
                    validation: Rule => Rule.required()
                },
                {
                    name: 'paperUrl',
                    title: 'Paper URL',
                    type: 'url',
                },
                {
                    name: 'paperPublicationDate',
                    title: 'Paper publication datte',
                    type: 'date',
                },
                {
                    name: 'category',
                    title: 'Category',
                    type: 'reference',
                    to: [{ type: 'category' }]
                },
            ]
        },
        {
            name: 'Synopsis',
            type: 'object',
            fields: [
                {
                    name: 'methods',
                    title: 'Methods',
                    type: 'simplePortableText',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'keyFindings',
                    title: 'Key findings',
                    type: 'simplePortableText',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'implications',
                    title: 'Implications',
                    type: 'simplePortableText',
                    validation: Rule => Rule.required()
                }
            ]
        },
    ]
}
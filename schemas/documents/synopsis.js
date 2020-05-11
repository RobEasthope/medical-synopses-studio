export default {
    name: 'synopsis',
    type: 'document',
    title: 'Synopsis',
    fields: [
        {
            name: 'paper',
            title: 'Paper details',
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
                    validation: Rule => Rule.required()
                },
                {
                    name: 'paperPublicationDate',
                    title: 'Paper publication date',
                    type: 'date',
                },
                {
                    name: 'category',
                    title: 'Category',
                    type: 'reference',
                    to: [{ type: 'category' }],
                    validation: Rule => Rule.required()
                },
            ]
        },
        {
            name: 'synopsis',
            title: 'Synopsis',
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
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug'
        },
        prepare({ title = '' }) {
            return {
                title,
            }
        }
    }
}
export default {
    name: 'synopsis',
    type: 'document',
    title: 'Synopsis',
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
            name: 'aboutContent',
            title: 'About text',
            type: 'simplePortableText',
            validation: Rule => Rule.required()
        },
        {
            name: 'photo',

            title: 'photo',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                },
                {
                    // Editing this field will be hidden behind an "Edit"-button
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
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
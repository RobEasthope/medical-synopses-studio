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
            name: 'journal',
            type: 'string',
            title: 'Journal'
        },
    {
            name: 'content',
            title: 'Content',
            type: 'simplePortableText',
            validation: Rule => Rule.required()
        }
    ]
}
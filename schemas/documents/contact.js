export default {
  name: 'contact',
  type: 'document',
  title: 'contact',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
      description:
        'Some frontends will require a slug to be set to show the project',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'contactText',
      title: 'Contact text',
      type: 'localeSimpleRichText',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title = '' }) {
      return {
        title,
      };
    },
  },
};

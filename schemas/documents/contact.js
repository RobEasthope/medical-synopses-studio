export default {
  name: 'contact',
  title: 'Contact page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
      description:
        'Some frontends will require a slug to be set to show the project',
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainText',
      title: 'Main text',
      type: 'localeSimpleRichText',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare({ title = 'Contact page' }) {
      return {
        title,
      };
    },
  },
};

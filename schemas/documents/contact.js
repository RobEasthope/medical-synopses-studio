export default {
  name: 'contact',
  type: 'document',
  title: 'contact',
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

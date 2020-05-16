export default {
  name: 'category',
  type: 'document',
  title: 'Category',
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
      name: 'description',
      type: 'localeSimpleRichText',
      title: 'Description',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare({ title = '' }) {
      return {
        title,
      };
    },
  },
};

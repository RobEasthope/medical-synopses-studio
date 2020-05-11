export default {
  name: 'synopsis',
  type: 'document',
  title: 'Synopsis',
  fieldsets: [
    { name: 'paperDetails', title: 'Paper details' },
    { name: 'synopsis', title: 'Synopsis' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'paperDetails',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      fieldset: 'paperDetails',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200),
        validation: Rule => Rule.required(),
      },
    },
    {
      name: 'paperUrl',
      title: 'Paper URL',
      type: 'url',
      fieldset: 'paperDetails',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paperPublicationDate',
      title: 'Paper publication date',
      type: 'date',
      fieldset: 'paperDetails',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      fieldset: 'paperDetails',
      validation: Rule => Rule.required(),
    },

    {
      name: 'methods',
      title: 'Methods',
      type: 'simplePortableText',
      fieldset: 'synopsis',
      validation: Rule => Rule.required(),
    },
    {
      name: 'keyFindings',
      title: 'Key findings',
      type: 'simplePortableText',
      fieldset: 'synopsis',
      validation: Rule => Rule.required(),
    },
    {
      name: 'implications',
      title: 'Implications',
      type: 'simplePortableText',
      fieldset: 'synopsis',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      // subtitle: 'releaseDate'
    },
  },
};

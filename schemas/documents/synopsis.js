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
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      name: 'methods',
      title: 'Methods',
      type: 'localeSimpleRichText',
      fieldset: 'synopsis',
      validation: Rule => Rule.required(),
    },
    {
      name: 'keyFindings',
      title: 'Key findings',
      type: 'localeSimpleRichText',
      fieldset: 'synopsis',
      validation: Rule => Rule.required(),
    },
    {
      name: 'implications',
      title: 'Implications & conclusions',
      type: 'localeSimpleRichText',
      fieldset: 'synopsis',
      validation: Rule => Rule.required(),
    },
    {
      name: 'journal',
      title: 'Journal',
      type: 'string',
      fieldset: 'paperDetails',
      validation: Rule => Rule.required(),
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
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      fieldset: 'paperDetails',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      fieldset: 'paperDetails',
      options: {
        source: 'title.en',
        maxLength: 200,
        validation: Rule => Rule.required(),
      },
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      category0: 'category.0.title',
      category1: 'category.1.title',
      category2: 'category.2.title',
      category3: 'category.3.title',
    },
    prepare({ title, category0, category1, category2, category3 }) {
      const categories = [category0, category1, category2].filter(Boolean);
      const subtitle = categories.length > 0 ? `${categories.join(', ')}` : '';
      const hasMoreCategories = Boolean(category3);
      return {
        title,
        subtitle: hasMoreCategories ? `${subtitle}…` : subtitle,
      };
    },
  },
};

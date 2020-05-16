export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fieldsets: [
    { name: 'contactDetails', title: 'Contact details' },
    { name: 'socialMediaDetails', title: 'Social Media' },
  ],
  fields: [
    {
      name: 'email',
      title: 'Email address',
      type: 'email',
      fieldset: 'contactDetails',
    },
    {
      name: 'phoneNumber',
      title: 'Phone number',
      type: 'string',
      fieldset: 'contactDetails',
    },
    {
      name: 'twitter',
      title: 'Twitter profile',
      type: 'url',
      fieldset: 'socialMediaDetails',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn profile',
      type: 'url',
      fieldset: 'socialMediaDetails',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare({ title = 'Site wide settings' }) {
      return {
        title,
      };
    },
  },
};

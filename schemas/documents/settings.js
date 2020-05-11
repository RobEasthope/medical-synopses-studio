export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        {
            name: 'contactDetails',
            name: 'Contact details',
            type: 'object',
            fields: [
                {
                    name: 'email',
                    title: 'Email address',
                    type: 'email',
                },
                {
                    name: 'phoneNumber',
                    title: 'Phone number',
                    type: 'string',
                },
                {
                    name: 'twitter',
                    title: 'Twitter profile',
                    type: 'url',
                },
                {
                    name: 'linkedin',
                    title: 'LinkedIn profile',
                    type: 'url',
                },
            ]
        },
        
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
};
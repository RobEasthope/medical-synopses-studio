import S from '@sanity/desk-tool/structure-builder';

import { GoMailRead } from 'react-icons/go';
import { GiPlagueDoctorProfile, GiRodOfAsclepius } from 'react-icons/gi';
import { IoIosSettings } from 'react-icons/io';
import { BsFileRichtext } from 'react-icons/bs';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Synopses')
        .schemaType('synopsis')
        .icon(GiRodOfAsclepius)
        .child(S.documentTypeList('synopsis')),
      S.listItem()
        .title('Pages')
        .icon(BsFileRichtext)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About page')
                .child(
                  S.editor()
                    .id('about')
                    .schemaType('about')
                    .documentId('about')
                )
                .icon(GiPlagueDoctorProfile),
              S.listItem()
                .title('Contact page')
                .child(
                  S.editor()
                    .id('contact')
                    .schemaType('contact')
                    .documentId('contact')
                )
                .icon(GoMailRead),
            ])
        ),
      S.listItem()
        .title('settings')
        .schemaType('settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        )
        .icon(IoIosSettings),
    ]);

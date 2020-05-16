import S from '@sanity/desk-tool/structure-builder';

import { GoMailRead, GoLaw } from 'react-icons/go';
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
        .title('Categories')
        .schemaType('category')
        .icon(GiRodOfAsclepius)
        .child(S.documentTypeList('category')),
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
              S.listItem()
                .title('Legal page')
                .child(
                  S.editor()
                    .id('legal')
                    .schemaType('legal')
                    .documentId('legal')
                )
                .icon(GoLaw),
            ])
        ),
      S.listItem()
        .title('Settings')
        .schemaType('settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        )
        .icon(IoIosSettings),
    ]);

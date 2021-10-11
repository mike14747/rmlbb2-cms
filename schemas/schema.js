import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContentText from './blockContentText';
import newsItem from './newsItem';
import event from './event';
import manager from './manager';
import champion from './champion';
import miscPortableText from './miscPortableText';
import settings from './settings';
import link from './link';
import downloads from './downloads';
import downloadFile from './downloadFile';
import lzpFile from './lzpFile';
import fileTypeIcon from './fileTypeIcon';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        blockContentText,
        newsItem,
        event,
        manager,
        champion,
        miscPortableText,
        settings,
        link,
        downloads,
        downloadFile,
        lzpFile,
        fileTypeIcon,
    ]),
});

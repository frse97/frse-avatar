const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

console.log(path.resolve('./public/static/locales'));

module.exports = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['en', 'de'],
    localeSubpaths,
    localePath: path.resolve('./public/static/locales')
});
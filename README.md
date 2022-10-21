<p align="center">
  <a href="https://zootools.co">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.zootools.co/email-spell-checker/email-spell-checker-dark-mode.png?raw=true">
      <img src="https://github.zootools.co/email-spell-checker/email-spell-checker-light-mode.png?raw=true" height="128">
    </picture>
    <p align="center">
      🔐 Reduce failed authentication ⬆️ Increase emails delivery ⚡️ Built for speed
    </p>
    <h1 align="center">The best way to check a misspelled email address in JavaScript</h1>
    <p align="center">
      <b>Email Spell Checker</b> is the <strong>easiest way to reduce misspelled email addresses in your web apps and server</strong>. Used in production by companies to validate thousands of mispelled emails daily.
    </p>
  </a>
</p>

<p align="center">
  <img src="assets/typesense_books_demo.gif?raw=true" alt="Typesense Demo" width="459" />
</p>

# @zootools/email-spell-checker

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

<b>Email Spell Checker</b> is a lightweight JavaScript module written in TypeScript that suggests a right domain when your users misspell it in an email address.

At [ZooTools](https://zootools.co), we validate thousands of emails daily with mailSpellChecker and it helped up to reduce by 30% bounced emails.

## The features your deserve

We rewrote and improve [mailcheck.js](https://github.com/mailcheck/mailcheck), a great module that is not longer maintained (7+ years old).

- 🔋 <b>Updated</b>: 39+ popular domains, and 66+ modern TLDs out-of-the-box and continuously updated.
- 💙 <b>TypeScript</b>: Fully written in TypeScript, cause we know you love it and we too.
- ⚡️ <b>Lighting fast</b>: Highly performance email checking using `js-levenshtein`, one of the fastest string distance JS modules.
- ⚙️ <b>Extensible</b>: Allows to pass your custom rules and domains. Tweak it as you need.
- 🔨 <b>5 minutes migration</b>: Same API and functions as mailcheck to migrate in <5 minutes.

## Some good use cases

- User authentication (login, signup, email recovery).
- Backend email validation.
- Newsletter subscriptions.

## Getting started

### Installation

_Install with npm:_

```bash
npm i @zootools/email-spell-checker --save
```

_Install with yarn:_

```bash
yarn add @zootools/email-spell-checker
```

### Usage

```js
import emailSpellChecker from '@zootools/email-spell-checker';

const suggestedEmail = emailSpellChecker.run({
  email: 'jorge@gmaik.co',
});

if (suggestedEmail) {
  // Found bad spelled email...
  // ...Tell your user to fix the email

  console.log('address', suggestedEmail.address); // jorge
  console.log('domain', suggestedEmail.domain); // gmail.com
  console.log('full', suggestedEmail.full); // jorge@gmail.com
}
```

### Usage with custom configuration (advanced)

The out-of-the box configuration is the best for every mainstream project. However, we know sometimes you want to pass extra configuration.

Bare in mind that the more domains, TLDs options you add, the slower the validation will take. That's why we recommend to avoid passing your custom configuration.

You can easily extend _EmailSpellChecker_ as you need:

```js
import emailSpellChecker from '@zootools/email-spell-checker';

const suggestedEmail = emailSpellChecker.run({
  email: 'jorge@gmaik.co',
  domains: DOMAINS,
  topLevelDomains: [
    ...emailSpellChecker.POPULAR_DOMAINS,
    'supercooldomain.com',
  ],
});

if (suggestedEmail) {
  // Found bad spelled email...
  // ...Tell your user to fix the email

  console.log('address', suggestedEmail.address); // jorge
  console.log('domain', suggestedEmail.domain); // gmail.com
  console.log('full', suggestedEmail.full); // jorge@gmail.com
}
```

## How does it work?

TODO: Put screenshot of it in action

## Other ports

Want to help contribute launching this email spell checker in other languages? Reach out to us and we'll provide the resources and help to make it happen and help distribute your package.

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[downloads-img]: https://img.shields.io/npm/dt/@zootools/email-spell-checker
[downloads-url]: https://www.npmtrends.com/@zootools/email-spell-checker
[npm-img]: https://img.shields.io/npm/v/@zootools/email-spell-checker
[npm-url]: https://www.npmjs.com/package/@zootools/email-spell-checker
[issues-img]: https://img.shields.io/github/issues/zootools/email-spell-checker
[issues-url]: https://github.com/zootools/email-spell-checker/issues
[codecov-img]: https://codecov.io/gh/zootools/@zootools/email-spell-checker/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/zootools/@zootools/email-spell-checker
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

<p align="center">
  <a href="https://zootools.co">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://open-source.zootools.co/email-spell-checker/logo_email-spell-checker.png?raw=true">
      <img src="https://open-source.zootools.co/email-spell-checker/logo_email-spell-checker.png?raw=true" height="140">
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
[![npm package][bundlephobia-img]][bundlephobia-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Downloads][downloads-img]][downloads-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

<b>Email Spell Checker</b> is a lightweight JavaScript module written in TypeScript that suggests a right domain when your users misspell it in an email address.

At [ZooTools - web3 mailchimp alternative](https://zootools.co), we validate thousands of emails daily with _email-spell-checker_ and it helped us to reducing bounced emails by 30%.

## The features your deserve

We rewrote and improved [mailcheck.js](https://github.com/mailcheck/mailcheck), a great module that is not longer maintained (7+ years since last update) and that contains a [bug](https://github.com/ZooTools/email-spell-checker/pull/3).

- ⚡️ <b>Lighting fast</b>: Highly performance email checking using `Sift3` - a fast and accurate string distance algorithm.
- 🚀 <b>Ridiculously small</b>: 2KB (minzip) and 0 external dependencies. We agree, big bundles suck!
- 🔋 <b>Updated</b>: 39+ popular domains, and 66+ modern TLDs out-of-the-box. Frequent updates.
- 💙 <b>TypeScript</b>: Fully written in TypeScript, cause we know you love it and we too.
- ⚙️ <b>Extensible</b>: Allows to pass your custom rules and domains. Tweak it as you need.
- 🔨 <b>1 minute migration</b>: Same API and functions as mailcheck so you can switch in a sec!
- 🔐 <b>Unit tested</b>: Cause we'd not ever used a library without tests :).

## Some good use cases

- User authentication (login, signup, email recovery).
- Backend email validation.
- Newsletter subscriptions.

## Getting Started in 5 minutes

- [⚛️ React example: Validating email spell in React](./docs/React.md)
- [✅ Node example: Validating email spell in Node](./docs/Node.md)

### Installation

_Install with npm:_

```bash
npm i @zootools/email-spell-checker --save
```

_Install with yarn:_

```bash
yarn add @zootools/email-spell-checker
```

### Basic Example

**Email Spell Checker** works with any JavaScript framework: Vue, React, Next.JS, Angular, Svelte, etc.

```js
import emailSpellChecker from '@zootools/email-spell-checker';

const suggestedEmail = emailSpellChecker.run({
  email: 'jorge@gmaik.co',
});

if (suggestedEmail) {
  // DEV: Handle the suggestion.
  // E.g: tell the user their email is wrong and offer to apply your suggestion

  console.log(suggestedEmail);
  // {
  //    address: "jorge"
  //    domain: "gmail.com"
  //    suggestedEmail: "jorge@gmail.com"
  // }
}
```

### Advanced example (extending defaults)

If you are looking for example codes with React and Node.js, check this links:

- [⚛️ React example: Validating email spell in React](./docs/React.md)
- [✅ Node example: Validating email spell in Node](./docs/Node.md)

```js
import emailSpellChecker from '@zootools/email-spell-checker';

// Extend any of these properties with your custom lists
// Note: Default configuration is really solid.
// It's very rare you really want to do this.
const suggestedEmail = emailSpellChecker.run({
  email: 'jorge@gmaik.co',
  domains: [
    ...emailSpellChecker.POPULAR_DOMAINS,
    'customdomain.com'
  ],
  topLevelDomains: ['com', 'org', 'xyz'],
});
```

## How does it work?

TODO: Put screenshot of it in action

## Companies using this library in production

We're collecting a list of companies

## Maintainers

This library is used and maintained by <a href="https://panda.zootools.co/">ZooTools: Growth and marketing tools</a> for ambitious teams.

We use this library heavily in <a href="https://panda.zootools.co/">ZooTools Panda, a mailchimp alternative for sending viral marketing campaigns</a>.

You can view examples of the use of this library <a href="https://panda.zootools.co/examples">here</a>

[downloads-img]: https://img.shields.io/npm/dt/@zootools/email-spell-checker
[downloads-url]: https://www.npmtrends.com/@zootools/email-spell-checker
[npm-img]: https://img.shields.io/npm/v/@zootools/email-spell-checker
[npm-url]: https://www.npmjs.com/package/@zootools/email-spell-checker
[bundlephobia-img]: https://badgen.net/bundlephobia/minzip/@zootools/email-spell-checker
[bundlephobia-url]: https://badgen.net/bundlephobia/minzip/@zootools/email-spell-checker
[issues-img]: https://img.shields.io/github/issues/zootools/email-spell-checker
[issues-url]: https://github.com/zootools/email-spell-checker/issues
[codecov-img]: https://codecov.io/gh/zootools/@zootools/email-spell-checker/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/zootools/@zootools/email-spell-checker
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

<p align="center">
  <a href="https://zootools.co/?ref=github-spell">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://open-source.zootools.co/email-spell-checker/logo_email-spell-checker.png?raw=true" />
      <img src="https://open-source.zootools.co/email-spell-checker/logo_email-spell-checker.png?raw=true" width="456px" />
    </picture>
  </a>
</p>
<h1 align="center">The best way to check a misspelled email address in JavaScript</h1>

<br/>

<p align="center">
  🔐 Reduce failed authentication &nbsp;&nbsp;&nbsp;&nbsp; ⬆️ Increase emails delivery &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ Built for speed
</p>

<br/>

<p align="center">
  <a href="https://zootools.co?ref=github-spell">
    <kbd>
    <img src="https://open-source.zootools.co/email-spell-checker/2022_10_22_demo_version_2_looped.gif?raw=true" alt="Did you say? The best email spell checker in JavaScript" width="700" style="border-radius: 10px;" />
    </kbd>
  </a>
</p>

<br/>

## @zootools/email-spell-checker

[![npm package][npm-img]][npm-url]
[![npm package][bundlephobia-img]][bundlephobia-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]

<b>EmailSpellChecker</b> is a lightweight JavaScript module written in TypeScript that suggests the right domain when your users misspell it in an email address.

At [ZooTools - web3 Mailchimp alternative](https://zootools.co?ref=github-spell), we validate thousands of misspelled emails daily with _EmailSpellChecker_ and it helped us to reduce bounced emails by 30%.

It's by far the <strong>easiest way to reduce misspelled email addresses</strong> in your web apps and server.

## The features your deserve

We rewrote and improved [mailcheck.js](https://github.com/mailcheck/mailcheck), a great module that is no longer maintained (7+ years since the last update) and we fixed critical bugs like [this](https://github.com/ZooTools/email-spell-checker/pull/3), or [this](https://github.com/ZooTools/email-spell-checker/pull/4).

- ⚡️ <b>Lighting fast</b>: Highly performance email checking using `Sift3` - a fast and accurate string distance algorithm.
- 🔋 <b>Updated</b>: 39+ popular domains, and 66+ modern TLDs out-of-the-box. Frequently updated.
- 🚀 <b>Ridiculously small</b>: 1.8KB (minzip) and 0 external dependencies. We agree, big bundles suck!
- 💙 <b>TypeScript</b>: Fully written in TypeScript, cause we know you love it and we too.
- ⚙️ <b>Extensible</b>: Allows you to pass your custom rules and domains. Tweak it as you need.
- 🔨 <b> 1-minute migration</b>: Same API and functions as mailcheck so you can switch in a sec!
- 🔐 <b>Unit tested</b>: Cause we'd not ever used a library without tests :).

## Why should you validate email spelling?

Typos in the email will harm your business. Especially email deliverability. Common user misspellings such as “gnail” instead of “gmail” or “yaho” instead of “yahoo” can be used as [spam traps](https://sendgrid.com/blog/spam-traps-what-they-are-and-why-you-should-pay-attention-to-them/) by ISPs, and as a result, your emails will be blocked or marked as spam.

Common use cases:

- User authentication (login, signup, email recovery).
- Backend email validation.
- Newsletter subscriptions.

## Tutorials

Here are some highly-requested tutorials.

- [🟨 JavaScript: Getting started in 5 minutes](./demos/javascript/)
- 🟦 React: Validating email spell in React (coming soon)
- [🟩 Node with Express.js: Validating email spell in Node](./demos/node-express/)

If you want to write a tutorial [send a PR](https://github.com/zootools/email-spell-checker/pulls) or [create an issue](https://github.com/zootools/email-spell-checker/issues) if you want to ask for one.

## Getting Started in 5 minutes

Adding <b>EmailSpellChecker</b> to your project takes less than 5 minutes.

It works on any JavaScript framework (Vue, React, Next.JS, Angular, Svelte, etc) as well as your backend server.

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

Using the library is easy. Import it, call `run` function with the email you want to validate, and get a suggestion.

```js
import emailSpellChecker from '@zootools/email-spell-checker';

const suggestedEmail = emailSpellChecker.run({
  email: 'jorge@gmaik.co',
});

if (suggestedEmail) {
  // DEV: Handle the suggestion.
  // E.g: tell the user their email is wrong and offer to apply your suggestion.

  console.log(suggestedEmail);
  // {
  //    address: "jorge"
  //    domain: "gmail.com"
  //    full: "jorge@gmail.com"
  // }
}
```

## Extending Domains

<b>EmailSpellChecker</b> has inbuilt defaults if the `domains`, `secondLevelDomains` or `topLevelDomains` options aren't provided.

The out-of-the-box configuration is the best for 99% of cases. If you are that 1%, here is how you can extend the configuration :).

#### Adding your own Domains

You can replace EmailSpellChecker's default domain/TLD suggestions by supplying replacements to `EmailSpellChecker.run`:

```js
emailSpellChecker.run({
  domains: [...emailSpellChecker.POPULAR_DOMAINS, 'customdomain.com'], // replaces existing domains
  secondLevelDomains: ['domain', 'yetanotherdomain'], // replaces existing SLDs
  topLevelDomains: ['com.au', 'ru'], // replaces existing TLDs
});
```

## Tests

EmailSpellChecker is tested with [Jest](https://jestjs.io/), a popular JavaScript testing framework from Facebook with a focus on simplicity.

Run `npm test` from the command line to run the test suite.

## Who uses EmailSpellChecker?

We're putting together a list of happy users of EmailSpellChecker.

Tweet us [@ZooToolsHQ](https://twitter.com/ZooToolsHQ) and [@JGFerreiro](https://twitter.com/JGFerreiro) if you are interested to appear.

## Customer support & updates

Updates

- 🎯 [Join our mailing lists to get useful information](https://form.waitlistpanda.com/go/8H98mVOzZhwGMalf8nfb) about this and other useful open source libraries: https://form.waitlistpanda.com/go/8H98mVOzZhwGMalf8nfb
- 📆 Click "Watch repo" on GitHub and ⭐️ the repo to be notified of useful information.

Customer support

- 🤝 Do you have bugs or issues? Email [github@zootools.co](github@zootools.co) and [create an issue](https://github.com/zootools/email-spell-checker/issues)

Socials

- [@EmailSpell](https://twitter.com/EmailSpell)
- [@ZooToolsHQ](https://twitter.com/ZooToolsHQ)
- [@JGFerreiro](https://twitter.com/JGFerreiro)

## Maintainers

This library is used and maintained by <a href="https://panda.zootools.co/">ZooTools: Growth and marketing tools</a> for ambitious teams.

We use this library heavily in <a href="https://panda.zootools.co/?ref=github-spell">ZooTools Panda, a mailchimp alternative for sending viral marketing campaigns</a>.

You can view examples of the use of this library <a href="https://panda.zootools.co/examples?ref=github-spell">here</a>

## We're hiring!

Badass developer looking for a job? [Join the grind](https://www.notion.so/zootools/Careers-at-ZooTools-2e2815794b14415daca297506c54cb69)!

<p>
  <a href="https://zootools.co">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://open-source.zootools.co/made_with_love.png?raw=true">
      <img src="https://open-source.zootools.co/made_with_love.png?raw=true" height="80">
    </picture>
  </a>
</p>

[downloads-img]: https://img.shields.io/npm/dt/@zootools/email-spell-checker?labelColor=475873&color=6ead0a
[downloads-url]: https://www.npmtrends.com/@zootools/email-spell-checker
[npm-img]: https://img.shields.io/npm/v/@zootools/email-spell-checker?labelColor=475873&color=6ead0a
[npm-url]: https://www.npmjs.com/package/@zootools/email-spell-checker
[bundlephobia-img]: https://badgen.net/bundlephobia/minzip/@zootools/email-spell-checker?labelColor=475873&color=6ead0a
[bundlephobia-url]: https://bundlephobia.com/package/@zootools/email-spell-checker
[issues-img]: https://img.shields.io/github/issues/zootools/email-spell-checker?labelColor=475873&color=6ead0a
[issues-url]: https://github.com/zootools/email-spell-checker/issues
[codecov-img]: https://codecov.io/gh/zootools/@zootools/email-spell-checker/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/zootools/@zootools/email-spell-checker
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

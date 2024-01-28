# nested-querystring

A small utility to create nested query strings with `deep[property]=value`
syntax.

Originally a fork of
[qs-stringify](https://github.com/goto-bus-stop/qs-stringify).

## Install

```
npm install nested-querystring
```

## Usage

```js
import {stringify, create} from 'nested-querystring';

stringify({
  page: {
    offset: 50,
    limit: 25
  },
  filter: 'hello world'
})
// → "page[offset]=50&page[limit]=25&filter=hello%20world"

create({
  page: {
    offset: 50,
    limit: 25
  },
  filter: 'hello world'
});
// URLSearchParams { .... }

```

## License

[MIT](LICENSE.md)

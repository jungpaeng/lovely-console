<h1 align=center style="max-width: 100%;">
  <img alt="colorful-console Logo" src="https://user-images.githubusercontent.com/26024412/111288299-62ba1000-8687-11eb-811f-1f945981cbac.png"><br />
</h1>

## ⚙ Installation

#### npm

```bash
$ npm install --save colorful-console
```

#### yarn

```bash
$ yarn add colorful-console
```

## 🏃 Quick Start

```js
colorfulConsole(
  [
    { msg: 'text', style: 'background: cyan; font-size: 10px;' },
    { msg: 'text2', style: 'background: tomato; font-size: 20px;' },
  ],
);
```

```js
colorfulConsole(
  [
    { msg: 'text', style: { background: 'cyan', 'font-size': '10px' } },
    { msg: 'text2', style: { background: 'tomato', 'font-size': '20px' } },
  ],
);
```

## 🍳 Recipes

### Default arguments

```ts
function colorfulConsole(messages: Message[], key?: keyof Console); // default key is 'log'
```

### console function

```js
colorfulConsole([...],'log'); // console.log, default
colorfulConsole([...],'error'); // console.error
colorfulConsole([...],'debug'); // console.debug
...
```

### support styles

- `background` and its longhand equivalents.
- `border` and its longhand equivalents
- `border-radius`
- `box-decoration-break`
- `box-shadow`
- `clear` and `float`
- `color`
- `cursor`
- `display`
- `font` and its longhand equivalents
- `line-height`
- `margin`
- `outline` and its longhand equivalents
- `padding`
- `text-*` properties such as `text-transform`
- `white-space`
- `word-spacing` and `word-break`
- `writing-mode`

## 🍰 Contributing

**Keep it simple. Keep it minimal.**

## 📜 License

This project is licensed under the MIT License
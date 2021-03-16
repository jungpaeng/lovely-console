<h1 align=center style="max-width: 100%;">
  <img alt="lovely-console Logo" src="https://user-images.githubusercontent.com/26024412/111292316-6b144a00-868b-11eb-9bee-225d89612a1f.png"><br />
</h1>

## ⚙ Installation

#### npm

```bash
$ npm install --save lovely-console
```

#### yarn

```bash
$ yarn add lovely-console
```

## 🏃 Quick Start

```js
lovelyConsole(
  [
    { msg: 'text', style: 'background: cyan; font-size: 10px;' },
    { msg: 'text2', style: 'background: tomato; font-size: 20px;' },
  ],
);
```

```js
lovelyConsole(
  [
    { msg: 'text', style: { background: 'cyan', 'font-size': '10px' } },
    { msg: 'text2', style: { background: 'tomato', 'font-size': '20px' } },
  ],
);
```

## 🍳 Recipes

### Default arguments

```ts
function lovelyConsole(messages: Message[], key?: keyof Console); // default key is 'log'
```

### console function

```js
lovelyConsole([...],'log'); // console.log, default
lovelyConsole([...],'error'); // console.error
lovelyConsole([...],'debug'); // console.debug
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
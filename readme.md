# FilterKata – Profanity Filter for TypeScript

**FilterKata** is a lightweight and customizable TypeScript class to detect and censor inappropriate or offensive words from text input. Perfect for chat systems, comment moderation, forums, and more.

---

## Installation

Install via [npm](https://www.npmjs.com/):

```bash
npm install filter-kata
```

Or using Yarn:

```bash
yarn add filter-kata
```

---

## Usage

### 1. Import the class

```ts
import { FilterKata } from 'filter-kata';
```

### 2. Initialize the filter

```ts
const filter = new FilterKata();
```

### 3. Add offensive words

```ts
filter.tambah(['stupid', 'evil']);
```

### 4. Check if a text contains offensive words

```ts
const result = filter.cek('You are so stupid!');
console.log(result); // true
```

### 5. Censor the offensive words

```ts
const censored = filter.sensor('You are so stupid!');
console.log(censored); // You are so ******
```

> You can customize the censor character:

```ts
filter.sensor('You are evil', '#'); // You are ####
```

### 6. Remove words from the filter

```ts
filter.hapus(['stupid']);
```

### 7. Get the current word list

```ts
console.log(filter.daftar()); // ['evil']
```

---

## API Reference

| Method                                     | Description                            |
| ------------------------------------------ | -------------------------------------- |
| `tambah(kataList: string[])`               | Add words to the filter                |
| `cek(teks: string): boolean`               | Check if text contains offensive words |
| `sensor(teks: string, mask: string = '*')` | Censor the offensive words in the text |
| `hapus(kataList: string[])`                | Remove words from the filter list      |
| `daftar(): string[]`                       | Get the current list of filtered words |

---

##   Notes

* Case-insensitive matching (e.g. "Stupid" and "stupid" are both detected).
* Make sure to include all word variations you want to filter.

---

## 🪪 License

MIT © kikuk24

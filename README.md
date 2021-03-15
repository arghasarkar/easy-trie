# easy-trie
An easy-to-use implementation of the Trie data structure. This can be used for searching for words to autocomplete and 
also for spell-checking.

# Installation

`npm install --save easy-trie`

# Usage

## Add words to dictionary 
Words can be added to the dictionary one at a time, or an array of words can be added at the same time.

### Adding a single word 
```javascript
const Trie = require("easy-trie");
const trie = new Trie();
trie.addWord("word");
```

### Adding an array of words
```javascript
const Trie = require("easy-trie");
const trie = new Trie();
trie.addWords(["hello", "world", "today", "home"]);
```

## Searching for words

```javascript
trie.search("");        // results = ["hello", "world", "today", "home"]

trie.search("h");       // results = ["hello", "home"]

trie.search("ho");      // results = ["home"]

trie.search("world");   // results = ["world"]

trie.search("invalid"); // results = []
```

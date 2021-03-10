import TrieNode from './TrieNode';

export = class Trie {
    rootNode: TrieNode;

    constructor() {
      this.rootNode = new TrieNode(undefined);
    }

    addWord(word: string) {
      word = word.toLowerCase();

      const letters = word.split('');
      this.rootNode.addLetters(letters, word);
    }

    addWords(words: string []) {
      for (let i = 0; i < words.length; i++) {
        this.addWord(words[i]);
      }
    }

    search(prefix: string) {
      prefix = prefix.toLowerCase();

      const words: string[] = [];
      const letters = prefix.split('');
      this.rootNode.getChildWords(letters, words);
      return words;
    }
};

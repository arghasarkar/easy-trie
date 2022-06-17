import TrieNode from './TrieNode';

export = class Trie {
    rootNode: TrieNode;

    constructor() {
      this.rootNode = new TrieNode(undefined);
    }

    addWord(word: string): void {
      word = word.toLowerCase();

      const letters = word.split('');
      this.rootNode.addLetters(letters, word);
    }

    addWords(words: string []): void {
      for (let i = 0; i < words.length; i++) {
        this.addWord(words[i]);
      }
    }

    search(prefix: string): string[] {
      prefix = prefix.toLowerCase();

      const words: string[] = [];
      const letters = prefix.split('');
      this.rootNode.getChildWords(letters, words);
      return words;
    }

    longestCommonPrefix(): string {
        return this.traverse(this.rootNode, "");
    }

    private traverse(node: TrieNode, acc: string): string {
        let word = "";
        if (node.letter) {
            word = acc.concat(node.letter);
        }

        if (node.getChildNodeCount() != 1) {
            return word
        }
        let childNode = node.childNodes[Object.keys(node.childNodes)[0]];
        return this.traverse(childNode, word);
    }
};

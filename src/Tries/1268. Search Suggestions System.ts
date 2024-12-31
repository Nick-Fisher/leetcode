/**
 * 
 *  You are given an array of strings products and a string searchWord.

    Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

    Return a list of lists of the suggested products after each character of searchWord is typed.
 *  
 */

class TrieNode2 {
  children: Map<string, TrieNode2>;
  words: string[];

  constructor() {
    this.children = new Map();
    this.words = [];
  }
}

class Trie2 {
  root: TrieNode2;

  constructor() {
    this.root = new TrieNode2();
  }

  insert(word: string): void {
    let node = this.root;

    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode2());
      }

      node = node.children.get(char)!;
      node.words.push(word);
    }
  }

  search(word: string): string[] {
    let node = this.root;

    for (let char of word) {
      if (!node.children.has(char)) {
        return [];
      }

      node = node.children.get(char)!;
    }

    return node.words;
  }
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
  let root = new Trie2();

  for (let word of products) {
    root.insert(word);
  }

  let result = [];

  for (let i = 0; i < searchWord.length; i++) {
    let found = root.search(searchWord.slice(0, i + 1));

    if (found) {
      result.push(found.sort().slice(0, 3));
    } else {
      result.push([]);
    }
  }

  return result;
}


/** Class representing a Trie
 * Use a trie to store a dynamic set (usually of strings).
 * All descendants of a node have a common prefix.
 */
class Trie {
  /** Create a Trie and instantiate empty root node */
  constructor() {
    this.rootNode = {};
  }

  /**
   * Check if word exists in Trie and if not add word to Trie.
   * @param  {string} word - word to check
   * @returns {boolean}
   */
  checkPresentAndAdd(word) {
    let currentNode = this.rootNode;
    let isNewWord = false;

    // Iterate through the Word and traverse through the trie
    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];
      // only if character is not present do we do anything
      if (!Object.prototype.hasOwnProperty.call(currentNode, char)) {
        // Mark word as new
        isNewWord = true;
        // Create a new branch to add rest of word
        currentNode[char] = {};
      }
      currentNode = currentNode[char];
    }

    // '**' denotes the end of an entry
    if (!Object.prototype.hasOwnProperty.call(currentNode, '**')) {
      isNewWord = true;
      currentNode['**'] = {};
    }

    return isNewWord;
  }
}

const trie = new Trie();

trie.checkPresentAndAdd('www.google.com');
trie.checkPresentAndAdd('www.google.com');
trie.checkPresentAndAdd('www.google.co.uk');
trie.checkPresentAndAdd('www.godaddy.com');

console.log(JSON.stringify(trie, null, 2));

/**
{
  "rootNode": {
    "w": {
      "w": {
        "w": {
          ".": {
            "g": {
              "o": {
                "o": {
                  "g": {
                    "l": {
                      "e": {
                        ".": {
                          "c": {
                            "o": {
                              "m": {
                                "*": {}
                              },
                              ".": {
                                "u": {
                                  "k": {
                                    "*": {}
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "d": {
                  "a": {
                    "d": {
                      "d": {
                        "y": {
                          ".": {
                            "c": {
                              "o": {
                                "m": {
                                  "*": {}
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 */

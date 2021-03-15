
import Trie from "../src/Trie";

describe("Testing class: Trie", () => {

    describe("Test for adding words", () => {

        let trie: Trie = new Trie();

        beforeEach(() => {
            trie = new Trie();
        });

        it("Able to add a single word & verify search", () => {
            trie.addWord("hello");
            let actualResult = trie.search("hello");
            expect(actualResult).toEqual(["hello"]);
        });

        it("Able to add multiple words & verify search results of multiple words", () => {
            let words = ["h", "he", "hello"];
            trie.addWords(words);
            let actualResult = trie.search("h");
            expect(actualResult).toEqual(words);
        });

    });

    describe("Searching for words", () => {

        let trie = new Trie();

        beforeEach(() => {
            trie = new Trie();
            trie.addWords(["f", "fish", "foo", "food", "foot",  "football", "footballs", "h", "hello"]);
        });

        it("Returns all strings when searching with empty string", () => {
            // Depth first search so must be this order
            let expectedResult = ["f", "fish", "foo", "food","foot", "football", "footballs", "h", "hello"];
            trie.addWords(expectedResult);
            let actualResult = trie.search("");
            expect(actualResult).toEqual(expectedResult);
        });

        it("Returns an empty array when no matching search result is found", () => {
            let expectedResult: string[] = [];
            let actualResult = trie.search("qwerty");

            expect(actualResult).toEqual(expectedResult);
        });

        it("Returns words beginning with the first letter correctly", () => {
            let resultsWithF = ["f", "fish", "foo", "food", "foot", "football", "footballs"];
            let resultsWithH = ["h", "hello"];

            let actualResultsWithF = trie.search("f");
            expect(actualResultsWithF).toEqual(resultsWithF);

            let actualResultsWithH = trie.search("h");
            expect(actualResultsWithH).toEqual(resultsWithH);
        });

        it("Returns the correct results when search term is non-terminal node with multiple " +
            "last letter options. EG foot -> foot, football, footballs vs food -> food", () => {
            let resultsWithFood = ["food"];
            let resultsWithFoot = ["foot", "football", "footballs"];

            let actualResultsWithFood = trie.search("food");
            let actualResultsWithFoot = trie.search("foot");

            expect(actualResultsWithFood).toEqual(resultsWithFood);
            expect(actualResultsWithFoot).toEqual(resultsWithFoot);
        });

        it("Returns the correct results when search term is non-terminal node with only one " +
            "last letter option. EG searching for football -> football, footballs", () => {
            let expectedResult = ["football", "footballs"];
            let actualResult = trie.search("football");

            expect(actualResult).toEqual(expectedResult);
        });

        it("Returns only the single word when searching for a terminal word", () => {
            let expectedResult = ["footballs"];
            let actualResult = trie.search("footballs");

            expect(actualResult).toEqual(expectedResult);
        });

    });

});

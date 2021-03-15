
import TrieNode from "../src/TrieNode";

describe("Testing class: TrieNode", () => {

    it("Initializes correctly with a given letter", () => {
        let node = new TrieNode("x");
        expect(node.getLetter()).toBe("x");
    })

    it("Node is set as endNode when the last character is added using addLetters function", () =>{
        let node = new TrieNode("x");
        node.addLetters(["y"], "xy");
        let childNodeOfX = node.childNodes["y"];
        expect(childNodeOfX.isEndNode).toBe(true);
    })

    it("Able to addLetters & set word at the last node", () => {
        let node = new TrieNode("x");
        node.addLetters(["y"], "xy");
        let childNodeOfX = node.childNodes["y"];
        expect(childNodeOfX.word).toBe("xy");
    })

    it("No child node is added when passed an empty array to addLetters", () => {
        let node = new TrieNode("x");
        node.addLetters([], "x");

        expect(node.isEndNode).not.toBe(true);
        expect(Object.keys(node.childNodes).length).toBe(0);
        expect(node.getChildWords([], [])).toEqual([]);
    })

});
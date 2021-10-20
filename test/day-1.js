import assert from "assert"
import { my_sum } from "../day-1/exercice-0.js"
import { my_array_alpha } from "../day-1/exercice-5.js"
import { my_length_array } from "../day-1/exercice-6.js"

describe('my_sum valid tests', () => {
    it('should return 2', () => {
        assert.equal(my_sum(1, 1), 1 + 1);
    });
    it('should return 9', () => {
        assert.equal(my_sum(3.1, 5.9), 3.1 + 5.9);
    });
    it('should return 0', () => {
        assert.equal(my_sum(69, "1"), 0);
    });
    it('should return 0', () => {
        assert.equal(my_sum(undefined, null), 0);
    });
});

describe('my_length_alpha', () => {
    it('should return same as .length', () => {
        const arr = my_array_alpha("Hello World!");
        assert.equal(my_length_array(arr), arr.length);
    });
    it('should return 0', () => {
        const arr = [];
        assert.equal(my_length_array(arr), arr.length);
    });
});
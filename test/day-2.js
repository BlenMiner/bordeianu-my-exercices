import assert from "assert"
import { my_display_forever_42 } from "../day-2/exercice-0.js"
import { my_alpha_reverse } from "../day-2/exercice-1.js"
import { my_display_multi_42 } from "../day-2/exercice-2.js"

describe('my_display_forever_42', () => {
    it('should return 42', () => {
        assert.equal(my_display_forever_42(42), 42);
        assert.equal(my_display_forever_42("69"), 42);
        assert.equal(my_display_forever_42(), 42);
        assert.equal(my_display_forever_42(null), 42);
        assert.equal(my_display_forever_42(undefined), 42);
    });
    it('should return 9', () => {
        assert.equal(my_display_forever_42(9), 9);
    });
});

describe('my_alpha_reverse', () => {
    it('should return BA', () => {
        assert.equal(my_alpha_reverse("AB"), "BA");
    });
    it('should return 9', () => {
        assert.equal(my_alpha_reverse("9"), "9");
    });
    it('should return 96', () => {
        assert.equal(my_alpha_reverse(69), "96");
        assert.equal(my_alpha_reverse(null), "llun");
    });
});

describe('my_display_multi_42', () => {
    it('should return TRUE', () => {
        assert.equal(my_display_multi_42(42, 1), true);
    });
    it('should return FALSE', () => {
        assert.equal(my_display_multi_42("9", null), false);
        assert.equal(my_display_multi_42(5, 5), false);
    });
});

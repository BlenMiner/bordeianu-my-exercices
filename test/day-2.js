import assert from "assert"
import { my_display_forever_42 } from "../day-2/exercice-0.js"

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
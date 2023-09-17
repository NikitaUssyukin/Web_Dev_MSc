// 2704. To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (newVal) => {
            if (val === newVal) return true;
            else throw new Error("Not Equal");
        },
        notToBe: (newVal) => {
            if (val !== newVal) return true;
            else throw new Error("Equal");
        },
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
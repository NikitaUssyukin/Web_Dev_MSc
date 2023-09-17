// 2629. Function Composition
// https://leetcode.com/problems/function-composition/

// ---

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	if (functions.length === 0) {
        return function(x) {
            return x;
        };
    }
    
    return functions.reduceRight(function(prevFunc, nextFunc) {
        return function(x) {
            return nextFunc(prevFunc(x));
        };
    });
};


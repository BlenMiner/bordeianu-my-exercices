import { my_size_alpha } from "./exercice-4.js"

export const my_array_alpha = (str) => {
    const len = my_size_alpha(str);
    let result = [];
    
    for (let i = 0; i < len; ++i) {
        result[i] = str[i];
    }

    return result;
}
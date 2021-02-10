// Pair Programming between Matthew Cook and Gio Wan
const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    const transposedArray = transpose(letters);
    const transposedJoin = transposedArray.map(ls => ls.join(''));
    // console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)){return true}
    } 
    for (l of transposedJoin) {
        if (l.includes(word)){return true}
    }
    return false;
}
const transpose = function(matrix) {
    const outputMatrix = [];
    let array = [];
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        array.push(matrix[j][i]);
      }
      outputMatrix.push(array);
      array = [];
    }
    return outputMatrix;
};
module.exports = wordSearch
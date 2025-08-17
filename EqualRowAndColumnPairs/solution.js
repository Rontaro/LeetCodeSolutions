/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rows = new Map();
    const columns = new Map();
    let colKey = "", rowKey = "";
    for (let i = 0; i<grid.length; i++) {
        for (let j = 0; j<grid[i].length; j++) {
            colKey = colKey + grid[j][i] + "_";
            if (j === grid.length - 1) {
                columns.set(colKey, (columns.get(colKey) || 0) + 1);
                colKey = "";
            }
            rowKey = rowKey + grid[i][j] + "_";
            if (j === grid.length - 1) {
                rows.set(rowKey, (rows.get(rowKey) || 0) + 1);
                rowKey = "";
            }
        }
    }
    let counter = 0;
    Object.keys(columns).forEach(k => {
        if (rows[k]) {
            counter += rows[k] * columns[k];
        }
    })
    return counter
};
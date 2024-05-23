function exist(board: string[][], word: string): boolean {
    const row = board.length
    const col = board[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
           if (board[i][j] === word[0] && dfs(board,word,0,i,j)) {
               return true
           }
        }
    }
    return false
};

function dfs(board: string[][], word: string, index: number, row: number, col: number) {
    if (index === word.length) {
        return true;
    }
    if (!board[row] || !board[row][col] || board[row][col] === '') {
        return false
    }
    if (board[row][col] === word[index]) {
        const char = board[row][col]
        board[row][col] = ''
        if(dfs(board,word,index + 1,row + 1,col) ||
            dfs(board,word,index + 1,row - 1,col) ||
            dfs(board,word,index + 1,row,col + 1) ||
            dfs(board,word,index + 1,row,col - 1) ) {
            return true
        }
        board[row][col] = char
    }
}
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]

console.log(exist(board, "ABCB"))
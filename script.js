/**
 * GameBoard Object Using Module
 *  
 */
const  Gameboard = (() => {

    const _board = new Array(9);


    return {};
})();

/**
 * Player Object using Factory Function
 * @param {*} symbol 
 * @param {*} level 
 * @param {*} name 
 */

const Player = (symbol, level, name) => {

    const getName = () => name;

    const getLevel = () => {
        if(level == 'easy'){
            level = mode.easy
        }
    };

    const getSymbol = () => symbol;

    return {getName, getSymbol, getLevel}

}




const user = Player();
const bot = Player(bot.getSymbol,bot.getLevel,'Bot');
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
            level = Mode.selectedDifficulty
        }
    };

    const getSymbol = () => symbol;

    return {getName, getSymbol, getLevel}

}

/**
 * Sets The difficulty level of the Ai
 */
const Mode = ((difficulty) =>{ 
    let _easy, _medium, _hard;
    let selectedDifficulty
    const getEasy = () => _easy;
    const getMedium = () => _medium;
    const getHard = () => _hard;
    if(difficulty == _hard){
        selectedDifficulty = getHard;
    } else if( difficulty == _medium) {
        selectedDifficulty = getMedium
    }else{
        selectedDifficulty = getEasy
    }
    return {selectedDifficulty}
})();



const user = Player();
const bot = Player(bot.getSymbol,bot.getLevel,'Bot');
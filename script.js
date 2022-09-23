// selector 등등 간단하게 바꾸기
const selector = input => document.querySelector(input);
const selectorAll = input => document.querySelectorAll(input);
const create = input => document.createElement(input);

// char() 관련 변수 설정
let ScarletClass = ["warrior", "knight", "lancer", "arcknight", "paladin", "berserker", "reaper"];
let JadeClass = ["mage", "sorcerer", "magister", "arcmage", "druid", "warlock", "summoner"];
let IrisClass = ["unreleased", "", "", "", "", "", ""];
let partners = ["elf", "halfren", "drokan", "feline", "chaser", "fanatic", "made"];
let pets = ["devil", "slime", "rabbit", "pumpkinrom", "angel", "fallen", ""];
let relics = ["", "", "", "", "", "", ""];
let items = ["", "", "", "", "", "", ""];

/** 
 * 어떤 캐릭터를 알고 싶은지에 대한 함수.
 * @param {*} input 캐릭터 종류
 */
const char = input => {
    switch (input) {
        case 'Scarlet':
            for (let x of ScarletClass) {
                var charClass = create("li");
                var charClassImg = create("img");
                charClassImg.src = `img/char/${input}/${x}.png`;
                charClass.appendChild(charClassImg);
                // charClass.onclick = setClass(x);
                selector('#class').appendChild(charClass);
            }
            break;
        case 'Jade':
            break;
        case 'Iris':
            break;
        case 'Partner':
            break;
        case 'Pet':
            break;
        case 'Relic':
            break;
        case 'Item':
            break;
    }
}
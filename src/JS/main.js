
let prevNum=0;

const faq = (num) => {

    if (prevNum == 0) {

        prevNum = num;
        console.log(` 1 .answer${num}`);
        document.querySelector(`.answer${num}`).toggleAttribute(`hidden`);
        document.querySelector(`.question${num}`).style.cssText = 'font-weight: 700; color: black;';
        document.querySelector(`.answer${num}`).style.cssText = 'color: var(--Dark-grayish-blue);';
        document.querySelector(`.Q${num} .arrow`).style.cssText = 'transform: rotate(180deg);';

    } else if (prevNum == num) {
        console.log(` 2 .answer${prevNum}`);
        document.querySelector(`.answer${prevNum}`).toggleAttribute(`hidden`);
        document.querySelector(`.question${prevNum}`).style.cssText = 'font-weight: 400; color: black; '; 
        document.querySelector(`.question${prevNum}:hover`).style.cssText = 'cursor: pointer; color: var(--Soft-red);';   
        document.querySelector(`.Q${prevNum} .arrow`).style.cssText = 'transform: rotate(0deg);';
        prevNum = 0;

    }  else {

        console.log(` 3 .answer${prevNum}`);
        document.querySelector(`.answer${prevNum}`).toggleAttribute(`hidden`);
        document.querySelector(`.question${prevNum}`).style.cssText = 'font-weight: 400; color: black; '; 
        document.querySelector(`.question${prevNum}:hover`).style.cssText = 'cursor: pointer; color: var(--Soft-red);';   
        document.querySelector(`.Q${prevNum} .arrow`).style.cssText = 'transform: rotate(0deg);';

            
        console.log(`4 .answer${num}`)
        document.querySelector(`.answer${num}`).toggleAttribute(`hidden`);
        document.querySelector(`.question${num}`).style.cssText = 'font-weight: 700; color: black;';
        document.querySelector(`.answer${num}`).style.cssText = 'color: var(--Dark-grayish-blue);';
        document.querySelector(`.Q${num} .arrow`).style.cssText = 'transform: rotate(180deg);';
        prevNum = num
    }    
    
}

for (let i = 1; i <= 5; i++) {
    var click = document.querySelector(`.Q${i}`);
    click.addEventListener(`click`, function() {faq(i)});
}

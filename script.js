const terminiPrefissati = [
    "運動", "早睡", "早起", "電影", "音樂", "唱歌", "跳舞", "寫字", "旅行", "喝茶", "聞香", "插畫", "插花", "靜坐", "閲讀", "看戲", "喝茶", "畫畫", "聽曲", "寫詩", "寫信", "跳繩", "做飯", "拍片", "試穿", "打柴", "拔河", "擦窗", "穿梭", "爬山", "瞭望", "彩妝", "插花"
];

function generaTermineCasuale() {
    const randomIndex = Math.floor(Math.random() * terminiPrefissati.length);
    return terminiPrefissati[randomIndex];
}

const generateButton = document.getElementById('generateButton');
const randomTerm = document.getElementById('randomTerm');
const wheel = document.querySelector('.wheel');

generateButton.addEventListener('click', () => {
    // Nascondi il termine casuale precedente
    randomTerm.textContent = '';
    
    // Disabilita il bottone durante l'estrazione del termine casuale
    generateButton.disabled = true;

    // Imposta un intervallo per visualizzare i caratteri cinesi uno alla volta
    let index = 0;
    const interval = setInterval(() => {
        if (index < terminiPrefissati.length) {
            randomTerm.textContent = terminiPrefissati[index];
            index++;
        } else {
            // Ripristina il bottone e cancella l'intervallo una volta che tutti i caratteri sono stati mostrati
            generateButton.disabled = false;
            clearInterval(interval);
        }
    }, 200);
});

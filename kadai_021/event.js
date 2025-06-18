console.log('処理1');
console.log('処理2');

const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンがクリックされました';
        console.log('処理3（非同期処理）');
    }, 2000);
});

console.log('処理4');
const words = [
    "Happy", "Vietnamese Women's Day", "Wish You Have A Nice Day", "Filled with Love ", " Laughter And Happyess", "Chúc mừng", "ngày Phụ nữ", "Việt Nam", "20/10", 
    "Chúc bạn", "luôn xinh đẹp", "hạnh phúc", "và thành công"
];

const container = document.getElementById('word-container');
let currentIndex = 0;

function showNextWord() {
    if (currentIndex > 0) {
        const previousWord = container.querySelector('.word');
        if (previousWord) {
            previousWord.classList.remove('visible');
            setTimeout(() => previousWord.remove(), 500);
        }
    }

    if (currentIndex < words.length) {
        const wordElement = document.createElement('div');
        wordElement.textContent = words[currentIndex];
        wordElement.classList.add('word');
        container.appendChild(wordElement);

        setTimeout(() => {
            wordElement.classList.add('visible');
        }, 50);

        currentIndex++;
        setTimeout(showNextWord, 2000);
    } else {
        currentIndex = 0;
        setTimeout(showNextWord, 2000);
    }
}

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 2 + 's';
    flower.style.opacity = Math.random() * 0.5 + 0.5;
    document.getElementById('flower-container').appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.opacity = Math.random() * 0.3 + 0.1;
    heart.style.transform = `rotate(45deg) scale(${Math.random() * 0.5 + 0.5})`;
    document.getElementById('background-hearts').appendChild(heart);
}

showNextWord();
setInterval(createFlower, 300);

for (let i = 0; i < 50; i++) {
    createHeart();
}

// Thêm hiệu ứng hover cho các từ
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('word')) {
        e.target.style.color = `hsl(${Math.random() * 360}, 100%, 75%)`;
    }
});

container.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('word')) {
        e.target.style.color = '';
    }
});

// Thêm hiệu ứng nhấp nháy cho trái tim
setInterval(() => {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.opacity = Math.random() * 0.3 + 0.1;
    });
}, 2000);

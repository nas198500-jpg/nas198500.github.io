// 1. 날씨 정보 세팅 (필요 시 실제 날씨 API로 교체 가능)
document.getElementById('seoul-weather').innerText = '맑음 18°C';
document.getElementById('jeju-weather').innerText = '구름 20°C';

// 2. 명언 데이터 리스트
const quotes = [
    { text: "삶이 있는 한 희망은 있다.", author: "키케로" },
    { text: "산다는 것은 서두르는 것이 아니라, 음미하는 것이다.", author: "존 레논" },
    { text: "1퍼센트의 가능성, 그것이 나의 길이다.", author: "나폴레옹" },
    { text: "피할 수 없으면 즐겨라.", author: "로버트 엘리엇" },
    { text: "내일은 내일의 태양이 뜬다.", author: "마가렛 미첼" },
    { text: "가장 큰 위험은 위험을 감수하지 않는 것이다.", author: "마크 저커버그" }
];

// 페이지를 열 때마다 무작위 명언 출력
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    document.getElementById('quote-content').innerText = `"${selectedQuote.text}"`;
    document.getElementById('quote-author').innerText = `- ${selectedQuote.author}`;
}

displayRandomQuote();
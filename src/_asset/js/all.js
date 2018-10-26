let iframeList = Array.from(document.querySelectorAll('iframe'));
let handlerFunction = () => {
    iframeList.map (iframe => {
        iframe.src = iframe.dataset.src;
    });
};

let scrollListener = document.addEventListener('scroll', handlerFunction);

let bookSpeakerList = Array.from(document.querySelectorAll('.book-me'));
bookSpeakerList.map(bookSpeaker => bookSpeakerList.addEventListener('click', e => {
    alert(2)
}))
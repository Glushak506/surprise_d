function navigate(id) {
    const section = document.getElementById(id);
    window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    playSound();
}

function navigate1(id) {
    const section = document.getElementById(id);
    window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    playSound1();
}

function playSound1() {
    const audio = new Audio('C:\\Users\\glush\\Downloads\\Telegram Desktop\\trytrytry\\trytrytry\\images\\audio_2024-07-05_13-47-41.ogg'); // Path to your audio file
    audio.play();
}

function playSound() {
    const audio = new Audio('C:\\Users\\glush\\Downloads\\Telegram Desktop\\trytrytry\\trytrytry\\images\\audio_2024-07-05_13-35-32.ogg'); // Path to your audio file
    audio.play();
}
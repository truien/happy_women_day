document.addEventListener("DOMContentLoaded", function () {
    const message = `🌸Chúc mẹ, chị và các bạn nữ có một ngày 8/3 thật ý nghĩa!🌸 
    Cảm ơn mẹ đã luôn yêu thương và hy sinh cho con.
    Mong mẹ luôn mạnh khỏe, vui vẻ và hạnh phúc.
    Chúc chị vui vẻ, đạt được nhiều thành công và luôn xinh đẹp.
    Gửi đến các bạn nữ lời chúc chân thành nhất!
    Chúc các bạn luôn tự tin, yêu đời
    và gặt hái nhiều thành công trong cuộc sống! 💖✨`;

    const messageElement = document.getElementById("message");
    
    let index = 0;
    function typeText() {
        if (index < message.length) {
            if (message.charAt(index) === "\n") {
                messageElement.innerHTML += "<br>";
            } else {
                messageElement.innerHTML += message.charAt(index);
            }
            index++;
            setTimeout(typeText, 50);
        }
    }

    typeText();
});
document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");

    function playMusic() {
        var playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("✅ Nhạc đã phát thành công!");
            }).catch(error => {
                console.log("⚠️ Autoplay bị chặn, chờ tương tác từ người dùng...");
                document.addEventListener("click", playMusic, { once: true });
                document.addEventListener("touchstart", playMusic, { once: true });
            });
        }
    }

    playMusic(); 
});

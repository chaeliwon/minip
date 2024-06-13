const form = document.getElementById('loginform');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase 인증을 통한 로그인
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // 로그인 성공
            const user = userCredential.user;
            console.log('로그인 성공:', user);
            // 로그인 성공 후에 할 일 (예: 다음 페이지로 리디렉션)
            window.location.href = 'success.html';
        })
        .catch((error) => {
            // 로그인 실패
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('로그인 실패:', errorMessage);
            alert('로그인 실패: ' + errorMessage);
        });
});

document.querySelector('.member input[type="button"]').addEventListener('click', () => {
    // 회원가입 페이지로 이동
    window.location.href = 'https://chaeliwon.github.io/minip2/';
});

const form = document.getElementById('loginform');
const fields = form.querySelectorAll('input');
let formIsValid = true; // 변수 선언 수정

const validateThisField = (field) => {
    field.classList.remove('required', 'invalid'); // 검증 전에 기존 클래스 제거

    if (field.required && field.value === '') {
        field.classList.add('required');
        formIsValid = false;
    } else if (field.pattern && !(new RegExp(field.pattern).exec(field.value) !== null)) {
        field.classList.add('invalid');
        formIsValid = false;
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formIsValid = true; // 검증 시작 전에 초기화
    Array.prototype.forEach.call(fields, validateThisField);
  
    if (formIsValid) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // 간단한 로그인 검증 (예제 용도)
        if (email === 'test@example.com' && password === 'password123') {
            alert('로그인 성공!');
            // 로그인 성공 시 다음 페이지로 이동
            window.location.href = 'success.html';
        } else {
            alert('잘못된 이메일 또는 비밀번호입니다.');
        }
    } else {
        form.classList.remove('errors');
        setTimeout(() => {
            form.classList.add('errors');
        }, 0);
    }
});

document.querySelector('.member input[type="button"]').addEventListener('click', () => {
    // 회원가입 페이지로 이동
    window.location.href = 'register.html';
});

form.addEventListener('blur', (e) => {
    validateThisField(e.target);
}, true);

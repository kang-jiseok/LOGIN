function check(form) {
    if(form.userid.value == "kangjiseok" && form.userpw.value == "1234"){
        window.open("main.html");
    } else {
        alert("로그인을 실패했습니다.")
    }
}
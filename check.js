function addCheck() {
    if(document.frm.id.value.length == 0) {
        alert("교과목 코드 입력되지 않았습니다.");
        frm.id.focus();
        return false;
    }
    if(document.frm.name.value.length == 0) {
        alert("과목명 입력되지 않았습니다.");
        frm.id.focus();
        return false;
    }
    if(document.frm.credit.value.length == 0) {
        alert("학점이 입력되지 않았습니다.");
        frm.id.focus();
        return false;
    }
    if(document.frm.lecturer.value.length == 0) {
        alert("담당강사가 입력되지 않았습니다.");
        frm.id.focus();
        return false;
    }
    if(frm.week[0].checked == 0 && frm.week[1].checked == 0 &&frm.week[2].checked == 0 &&frm.week[3].checked == 0 &&frm.week[4].checked == 0 &&) {
        alert("요일이 입력되지 않았습니다.");
        frm.id.focus();
        return false;
    }
    if(document.frm.start_hour.value.length == 0) {
        alert("시작 시간이 입력되지 않았습니다.");
        frm.id.focus();
        return false;
    }
    if(document.frm.end_hour.value.length == 0) {
        alert("종료 시간이 입력되지 않았습니다.");
        frm.id.focus();
        return false;
    }
    alert("교과목 등록이 완료 되었습니다.");
    document.frm.submit();
    return true;
}

function search() {
    window.location = "list.jsp";
}
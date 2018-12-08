var userEmail = 'masha@mail.ru';
var userNick = 'mashunya';
var userSurname = 'mashukva';
var userName = 'masha';
var points = 250;

var user = {
  email: userEmail,
  nickname: userNick,
  surname: userSurname,
  name: userName,
  points: points
};
function SendTestData()
{
  $.ajax({
    url: "/api/user",
    type: "POST",
    data: JSON.stringify(user),
    contentType: "application/json",
    complete: 	function(data) {
      console.log(data.request); //в консоле браузера выводим json в параметре request
                                            //т.е. то что нам отправил сервер в ответ
        //console.log(data.request.name1);  //мы можем вывести какой-то параметр полученного json, например name1
    }
  });
}
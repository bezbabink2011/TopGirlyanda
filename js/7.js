////? Alert (Попередження):
////? Використовується для відображення повідомлення користувачу з кнопкою "OK". Наприклад:
////? window.alert("Це попередження!");
////? Prompt (Запит):
////? Використовується для отримання введеного користувачем значення. Він також має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.prompt("Будь ласка, введіть своє ім'я", "Гість");
////? Confirm (Підтвердження):
////? Використовується для підтвердження або скасування дії користувачем. Має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.confirm("Ви впевнені, що хочете видалити цей елемент?");
//alert('Привіт! сьгодні сонячний день')
//let result = prompt("Введіть ваше ім'я")
//let trueInfo = confirm('Привіт ' + result + " сьгодні сонячний день?")
//if(trueInfo){
//   alert('Гарного вам дня')
//}else{
   // alert('сьгодні прохолодно надіньте щось тепліше')
//}


//?Цикл for використовується тоді, коли відомо точну кількість ітерацій, які потрібно виконати. Він має три частини:

//*Ініціалізація
//*Умова
//*Інкремент (або декремент)
//for (ініціалізація; умова; інкремент/декремент) {
// код, який виконується на кожній ітерації
//  }
let result = 0
let user = prompt("Введіть ваше ім'я")
let test = confirm("готовий пройти тест по грі пабг?")
let qwestions = [
    {qwestions:"Назвіть скільки карт в метро рояль?",imput:"7"},
    {qwestions:"яка найсильніша пушка в метро?",imput:"мк"},
    {qwestions:"яка карта найкрутіша в метро?",imput:"7"},
    {qwestions:"яка найрідкіша пушка в метро?",imput:"мк золото"},
    {qwestions:"скільки часу йде одна гра в метро?",imput:"30хв"},
]
if(test){
    for (let i = 0; i < qwestions.length; i++) {
        let qwestion =prompt(qwestions[i].qwestions)
        if(qwestion==qwestions[i].imput) result +=2
    }
    alert (user + ' твоя оцінка ' + result)
}
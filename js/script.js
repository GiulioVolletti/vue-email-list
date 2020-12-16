// Esercizio: Generare 10 email e stamparle a schermo, utilizzando Vue, Axios e l'endpoint relativo nelle slide che sto per aggiungere su Drive.


console.log("hello world");
var mailList = new Vue (
  {
    el: ".container",
    data: {
      mailListArray: [],
    },
    mounted: function (){
      for (var i = 0; i < 10; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (item) {
          // console.log(item);
          let mail = item.data.response;
          mailList.mailListArray.push(mail)
          // console.log(mail);
          console.log( mailList.mailListArray);
        }
      );
    }

    }
  }
);
// console.log(mailList.mailListArray.length);

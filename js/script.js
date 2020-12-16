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
        .then((result) => {
          this.mailListArray.push(result.data.response);

          // soluzione 2

          // let mail = result.data.response;
          // this.mailListArray.push(mail)
          // console.log(result);
          // console.log(mail);
          // console.log( mailList.mailListArray);

        }
      );
    }

    }
  }
);
// console.log(mailList.mailListArray.length);

Vue.component('errors',{
    data(){
      return{
          errors: '',
          showErrors: false,
      }
    },
     methods:{
         getErrors(error,show){
             this.errors = error;
             this.showErrors = show;
         }
     },
    template: `
        <div class = "errors" v-if = "showErrors">
            <p>Ошибка: {{errors}}</p>
        </div>
    `
})
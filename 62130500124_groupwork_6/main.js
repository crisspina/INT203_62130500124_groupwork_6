
const constraints = {
    firstname: {
        presence: true,
        format:{
            pattern: "[a-zA-Z]+",
            message: "can only contain a-z "
        }
    },
    lastname: {
        presence: true,
        format:{
            pattern: "[a-zA-Z]+",
            message: "can only contain a-z "
        }
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        format:{
            pattern: "[0-9]+",
            message: "can only contain number(0-9) "
        },
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
 
}

const app =Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            errors: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,
                                    chosensubject: this.chosensubject},
                                    constraints)
            if(!this.errors){
                alert("Your profile is updated successfully")
            }
        }
    }
})

app.mount('#app')



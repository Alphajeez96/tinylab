<template>
  <div>
    <div class="contain">
      <div class="row">
        <div class="col-auto mr-auto header">
          <h5>Employees</h5>
        </div>
        <div class="col-auto">
          <button class="add__btn" data-toggle="modal" data-target="#exampleModalCenter">Add New</button>
        </div>

        <!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add New Employee</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
 <form>
      <div class="login-form">
        <div class="form">
         
          <div class="form-card">
            <div class="names">
              <div class="form-gap lastname">
                <label for="firstName">First Name</label>
                <br />
                <div class="form-field">
                  <input type="text" v-model="employee.firstname" placeholder="Joshua" name id="firstName" />
              
                </div>
                <hr />
              </div>
              <div class="form-gap lastname">
                <label for="lastName">Last Name</label>
                <br />
                <div class="form-field">
                  <input type="text"  v-model="employee.lastname" placeholder="Bakare" name id="lastName" />
              
                </div>
                <hr />
              </div>
            </div>
            <div class="email">
              <label for="email">Email</label>
              <br />
              <div class="form-field">
                <input
                  type="email"
                  placeholder="Josh.bakery@gmail.com"
                  name
                  id="mail"
                   v-model="employee.email"
                />
               
              </div>
              <hr />
            </div>
         
          
          </div>
        </div>
       
      </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>

      </div>

      <div class="row p-3 mt-4 josh__bakery">
        <div class="col-auto mr-auto header pt-2">
          <h2>Josh Bakery Ventures</h2>
        </div>
        <div class="col-auto">
          <p class="address pt-3">62, Bode Thomas, Surulere, Lagos</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const axios = require('axios')
export default {
  name: 'employees',
  data(){
    return{
      employee:{
firstname: '',
lastname: '',
email: '',
phone: '',
role: ''

      }
    }
  },

  methods:{
   async addEmployee(){
     try{
       let response = await this.$http.post(
         'https://crudcrud.com/api/3058e6a8a96443e3991b50d1bca9028a', this.employee
       )
       console.log(response)
     }
     catch (error){
    console.log(error)
     }
    },
    
  }
}
</script>
<style scoped>
.contain {
  padding: 80px 150px 0px 150px;
}
.header h5 {
  text-align: center;
  color: var(--primary-color);

  font-family: var(--main-font);
  font-size: 22px;
}
.header h2 {
  font-size: 30px;
  font-weight: 500;
  color: var(--primary-color);

  font-family: var(--main-font);

  letter-spacing: -0.9px;
}
.add__btn {
  border-radius: 3px;
  color: white;
  background-color: var(--main-bg-color);
  border: none;
  font-size: 16px;
  padding: 7px 30px;
}
.add__btn:focus,
.add__btn:focus,
[type='button']:focus {
  outline: none;
}
.josh__bakery {
  background: white;

  border-radius: 5px;
}
.address {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.55px;
  color: var(--primary-color);
}
.form h2 {
  color: var(--primary-color);
  letter-spacing: 0.4px;
  font-size: 30px;
  font-family: var(--main-font);
  font-weight: 500;
}
.form p {
  color: var(--primary-color);
  font-size: 16px;
  font-family: var(--main-font);
  font-weight: 400;
}

h2 {
  color: var(--primary-color);
}
span a {
  color: var(--green);
  font-family: var(--main-font);
  font-weight: 500;
  text-decoration: none;
}
label {
  color: #6a7e8a;
}
::placeholder {
  color: var(--primary-color);
  font-size: 18px;
  font-family: var(--main-font);
  font-weight: 500;
}
.login {
  display: flex;
}
.login-image {
  width: 45%;

  min-height: 100vh;
  background-image: url('../../assets/Model.png');
  background-size: cover;
}
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: black;
  width: 55%;
  position: relative;
}
img {
  height: 100%;
  width: 100%;
}

input {
  border: none;
  outline: none;
  padding: 0.5rem;
  width: 100%;
}
.form-field {
  display: flex;
  justify-content: space-between;
}
.names {
  display: flex;
}
.form-gap {
  margin: 0 1rem;
}
hr {
  border: 0.02rem solid #d8d8d8;
  margin: 0;
}
.password,
.email {
  margin: 2rem 1rem;
}



</style>

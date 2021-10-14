<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="firstname">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          required
          v-model="contact.firstname"
          name="firstname"
          placeholder="Your first name"
        />
      </div>

      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input
          class="form-control"
          id="lastname"
          required
          v-model="contact.lastname"
          name="lastname"
          placeholder="Your last name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="contact.email"
          name="email"
           placeholder="Your email"
        />
      </div>

      <div class="form-group">
        <label for="country">Country</label>
        <select
          class="form-control"
          id="country"
          required
          v-model="contact.country"
          name="country"
         
        >
        <option  value=""  selected="selected">Please, select a country</option>
        <option v-for="(country,index) in countryList" :key="index" :value="country">{{country}}</option>
        </select>
      </div>

      

      <button @click="saveContact" class="btn btn-success btn-lg btn-block">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success btn-lg btn-block" @click="newContact">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import countryList from "country-list";
import ContactDataService from "./../services/ContactDataService";
import Contact from "./../types/Contact";

@Component
export default class AddContact extends Vue {
  private contact: Contact = {
    _id: null,
    firstname: "",
    lastname: "",
    email: "",
    country: "",
  };
  private countryList = countryList.getNames();
  private submitted = false;


  saveContact() {
    let data = {
      firstname: this.contact.firstname,
      lastname: this.contact.lastname,
      email: this.contact.email,
      country: this.contact.country,
    };

    ContactDataService.create(data)
      .then((response) => {
        //this.contact.id = response.data.id;
        console.log(response.data);
        this.submitted = true;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newContact() {
    this.submitted = false;
    this.contact = {} as Contact;
  }



}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
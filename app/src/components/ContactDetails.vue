<template>
  <div v-if="currentContact._id" class="edit-form">
    <h4>Contact</h4>
    <form>
      <div class="form-group">
        <label for="title">First Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentContact.firstname"
        />
      </div>
      <div class="form-group">
        <label for="description">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentContact.lastname"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="currentContact.email"
        />
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <select
          class="form-control"
          id="country"
          required
          v-model="currentContact.country"
          name="country"
         
        >
        <option  value=""  selected="selected">Please, select a country</option>
        <option v-for="(country,index) in countryList" :key="index" :value="country">{{country}}</option>
        </select>
      </div>

    </form>

    <button type="button" class="btn btn-danger btn-lg btn-block" @click="deleteContact">
      Delete
    </button>

    <button type="button" class="btn btn-primary btn-lg btn-block" @click="updateContact">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Contact...</p>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import countryList from "country-list";
import VueRouter from 'vue-router';
import ContactDataService from "./../services/ContactDataService";
import Contact from "./../types/Contact";

@Component
export default class ContactDetails extends Vue {
  private currentContact = {} as Contact;
  private message = "";
  private countryList = countryList.getNames();

  getContact(id: string) {
     console.log(id);
    ContactDataService.get(id)
      .then((response: any) => {
        this.currentContact = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContact() {
    ContactDataService.update(this.currentContact._id, this.currentContact)
      .then((response: any) => {
        console.log(response.data);
        this.message = "The Contact was updated successfully!";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteContact() {
    ContactDataService.delete(this.currentContact._id)
      .then((response: any) => {
        console.log(response.data);
        this.$router.push("/contacts");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.message = "";
    console.log(this.$route.params.id)
    this.getContact(this.$route.params.id);
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
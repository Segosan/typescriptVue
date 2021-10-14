<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Contacts List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(contact, index) in contacts"
          :key="index"
          @click="setActiveContact(contact, index)"
        >
          {{ contact.firstname }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentContact._id">
        <h4>Contact</h4>
        <div>
          <label><strong>First Name:</strong></label> {{ currentContact.firstname }}
        </div>
        <div>
          <label><strong>Last Name:</strong></label>
          {{ currentContact.lastname }}
        </div>
<div>
          <label><strong>Email:</strong></label>
          {{ currentContact.email }}
        </div>
        <div>
          <label><strong>Country:</strong></label>
          {{ currentContact.country }}
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="goToEdit(currentContact._id)">Edit</button>
        

      </div>
      <div v-else>
        <br />
        <p>Please click on a Contact...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import VueRouter from 'vue-router';
import ContactDataService from "./../services/ContactDataService";
import Contact from "./../types/Contact";

@Component
export default class ContactsList extends Vue {
  private contacts: Contact[] = [];
  private currentContact = {} as Contact;
  private currentIndex = -1;

  retrieveContacts() {
    ContactDataService.getAll()
      .then((response: any) => {
        this.contacts = response.data;
        console.log("all the contacts");
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveContacts();
    this.currentContact = {} as Contact;
    this.currentIndex = -1;
  }

  setActiveContact(contact: Contact, index: number) {
    this.currentContact = contact;
    this.currentIndex = index;
  }

  goToEdit(id: any){
    this.$router.push("/contacts/" + id);
  }

  mounted() {
    this.retrieveContacts();
  }
}
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
a{
  color:black;
}
</style>
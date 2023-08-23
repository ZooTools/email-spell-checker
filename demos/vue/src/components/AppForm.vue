<template>
  <form id="signup-form">
    <label>Username*</label>
    <input id="username-input" class="input" />
    <label>Email*</label>
    <div id="email-container">
      <i id="email-icon" class="fa-regular fa-envelope fa-lg"></i>
      <input id="email-input" className="input" v-model="email" />
    </div>
    <div
      id="email-warning-container"
      :class="{ view: suggestedEmail.full && !forceCloseModal }"
    >
      <button id="warning-dismiss" @click="dismissWarning">X</button>
      <span id="warning" @click="setEmailToSuggested">
        <span id="warning-text">Did you mean</span>
        <span id="warning-email">{{ suggestedEmail.full }}?</span>
      </span>
    </div>
    <label>Password*</label>
    <input id="password-input" className="input" />
  </form>
</template>
<script setup>
import { ref, watch } from 'vue';
import { run } from '@zootools/email-spell-checker';

const email = ref('');
const suggestedEmail = ref({});
const forceCloseModal = ref(false);

const setEmailToSuggested = () => {
  forceCloseModal.value = true;
  email.value = suggestedEmail.value.full;
  setTimeout(() => {
    suggestedEmail.value = {};
    forceCloseModal.value = false;
  }, 600);
};

const dismissWarning = e => {
  e.preventDefault();

  forceCloseModal.value = true;
  setTimeout(() => {
    suggestedEmail.value = {};
    forceCloseModal.value = false;
  }, 600);
};

let timer;
watch(email, () => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    const suggested = run({
      email: email.value,
    });

    if (suggested) {
      suggestedEmail.value = suggested;
    } else {
      forceCloseModal.value = true;
      setTimeout(() => {
        suggestedEmail.value = {};
        forceCloseModal.value = false;
      }, 600);
    }
  }, 500);
});
</script>

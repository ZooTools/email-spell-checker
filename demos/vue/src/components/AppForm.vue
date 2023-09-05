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
// For closing the modal independent from any other checks,
// useful when you want to close it before running a debounced function that messes with the modal
// TLDR; if `forceCloseModal` is true, even if `suggestedEmail` is available, the modal won't be visible.
const forceCloseModal = ref(false);

// Sets `email` to `suggestedEmail.full`
const setEmailToSuggested = () => {
  // Force close the modal
  forceCloseModal.value = true;
  email.value = suggestedEmail.value.full;
  setTimeout(() => {
    // After animation finishes, clear `suggestedModal` and remove force disable on the modal
    suggestedEmail.value = {};
    forceCloseModal.value = false;
  }, 600);
};

// Closes the modal
const dismissWarning = e => {
  e.preventDefault();

  // Force close modal,
  forceCloseModal.value = true;
  setTimeout(() => {
    // and then, after animation finishes, clear `suggestedEmail`
    suggestedEmail.value = {};
    forceCloseModal.value = false;
  }, 600);
};

// Timer for debouncing `suggestedEmail` updates
let timer;
watch(email, () => {
  // If there's already a timer set when we enter this function, clear the old timer
  if (timer) {
    clearTimeout(timer);
  }

  // Set a new timer
  timer = setTimeout(() => {
    // Get suggested email
    const suggested = run({
      email: email.value,
    });

    // If we have a returned value
    if (suggested) {
      // Set `suggestedEmail`'s value to the returned value
      suggestedEmail.value = suggested;
    } else {
      // Else, close the modal
      forceCloseModal.value = true;
      // In the case that the modal is visible when the newly updated suggestion doesn't exist,
      // after animation finishes, clear `suggestedEmail`, and remove force disable on the modal
      setTimeout(() => {
        suggestedEmail.value = {};
        forceCloseModal.value = false;
      }, 600);
    }
  }, 500);
});
</script>

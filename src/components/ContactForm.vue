<template>
  <div class="contact-container">
    <div class="contact-form">
      <h2>Contact Form</h2>
      <form>
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Full Name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" placeholder="Message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>

    <div class="contact-details">
      <h2>Contact details</h2>
      <p>Your Address, Your City, Your Country</p>
      <p>email@domain.com</p>
      <p>555 8888 888</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.contact-form,
.contact-details {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 45%;
}

.contact-form h2,
.contact-details h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

textarea {
  resize: none;
  height: 120px;
}

button {
  background-color: #7367f0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #5a54d4;
}
</style>

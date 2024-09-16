<template>
  <div class="modal-backdrop" @click="closeModal">
    <div class="modal-content" @click.stop>
      <span class="close-btn" @click="closeModal">x</span>
      <h2>{{ creation.title }}</h2>
      <p>{{ creation.details }}</p>
      <img :src="creation.image" alt="Creation Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    creation: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>

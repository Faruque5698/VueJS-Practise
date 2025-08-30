<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['showModal', 'newTask']);

</script>

<template>
  <div>
    <!-- Modal -->
    <div class="modal" v-if="showModal">
      <div class="modal-overlay" @click="$emit('modalHandle',false)"></div>
      <div class="modal-content">
        <span class="close" @click="$emit('modalHandle',false)">&times;</span>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Modal overlay and container */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }

  .modal-content {
    position: relative;
    background: #fff;
    width: 400px;
    max-width: 90%;
    margin: 100px auto;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 10;
    animation: fadeIn 0.3s ease;
  }

  .close {
    position: absolute;
    top: 12px;
    right: 16px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    transition: color 0.2s;
    &:hover {
      color: #ff4d4d;
    }
  }
}



/* Modal animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Open modal button */
.open-modal-btn {
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
  &:hover {
    background-color: #0056b3;
  }
}
</style>
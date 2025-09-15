<template>
  <div class="rooms-wrapper">
    <div class="header">
      <h2>Room Management</h2>
      <button class="btn" @click="openAddModal">➕ Add Room</button>
    </div>

    <!-- Rooms Table -->
    <table class="rooms-table">
      <thead>
        <tr>
          <th>Room #</th>
          <th>Capacity</th>
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in rooms" :key="room.id">
          <td>{{ room.room_number }}</td>
          <td>{{ room.capacity }}</td>
          <td>₱{{ room.price }}</td>
          <td>
            <span
              :class="['status', room.status]"
            >{{ room.status }}</span>
          </td>
          <td>
            <button class="btn edit" @click="openEditModal(room)">✏️ Edit</button>
            <button class="btn delete" @click="deleteRoom(room.id)">🗑 Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for Add/Edit Room -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h3>{{ isEditing ? 'Edit Room' : 'Add Room' }}</h3>

        <form @submit.prevent="saveRoom">
          <label>Room Number:</label>
          <input v-model="form.room_number" required />

          <label>Capacity:</label>
          <input type="number" v-model="form.capacity" min="1" required />

          <label>Price:</label>
          <input type="number" v-model="form.price" step="0.01" required />

          <label>Status:</label>
          <select v-model="form.status" required>
            <option value="vacant">Vacant</option>
            <option value="occupied">Occupied</option>
            <option value="full">Full</option>
          </select>

          <div class="modal-actions">
            <button type="submit" class="btn primary">
              {{ isEditing ? 'Update' : 'Save' }}
            </button>
            <button type="button" class="btn secondary" @click="closeModal">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Mock Data (Replace with API calls later)
const rooms = ref([
  { id: 1, room_number: "101", capacity: 4, price: 2500, status: "vacant" },
  { id: 2, room_number: "102", capacity: 3, price: 3000, status: "occupied" },
]);

const showModal = ref(false);
const isEditing = ref(false);
const form = ref({ id: null, room_number: "", capacity: 1, price: 0, status: "vacant" });

function openAddModal() {
  resetForm();
  isEditing.value = false;
  showModal.value = true;
}

function openEditModal(room) {
  form.value = { ...room };
  isEditing.value = true;
  showModal.value = true;
}

function saveRoom() {
  if (isEditing.value) {
    // Update existing room
    const index = rooms.value.findIndex(r => r.id === form.value.id);
    if (index !== -1) rooms.value[index] = { ...form.value };
  } else {
    // Add new room
    rooms.value.push({
      ...form.value,
      id: Date.now(), // temporary unique ID
    });
  }
  closeModal();
}

function deleteRoom(id) {
  if (confirm("Are you sure you want to delete this room?")) {
    rooms.value = rooms.value.filter(r => r.id !== id);
  }
}

function closeModal() {
  showModal.value = false;
}

function resetForm() {
  form.value = { id: null, room_number: "", capacity: 1, price: 0, status: "vacant" };
}
</script>

<style scoped>
.rooms-wrapper {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rooms-table {
  width: 100%;
  border-collapse: collapse;
}

.rooms-table th,
.rooms-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.status.vacant {
  color: green;
}
.status.occupied {
  color: orange;
}
.status.full {
  color: red;
}

.btn {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn.edit {
  background: #ffe08a;
}

.btn.delete {
  background: #ff7b7b;
  color: white;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 300px;
}

.modal form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}

.btn.primary {
  background: #4caf50;
  color: white;
}

.btn.secondary {
  background: #ccc;
}
</style>

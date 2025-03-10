<template>
  <div class="page-container">
    <header>
      <h1>Weekly Menu</h1>
      <button @click="saveData">Save</button>
    </header>

    <main>
      <div class="user-info">
        <h2>Hello, {{ userName }}</h2>
        <p>{{ formattedDate }}</p>
      </div>

      <div class="content-section">
        <div v-if="isLoading">Loading...</div>

        <div v-else-if="error" class="error-message">
          {{ error }}
          <button @click="loadData">Retry</button>
        </div>

        <div v-else class="menu-container">
          <section>
            <h3>Lunch</h3>
            <p v-if="!lunchItems.length">No lunch options available</p>
            <ul v-else>
              <li v-for="item in lunchItems" :key="item.id">{{ item.name }}</li>
            </ul>
          </section>

          <section>
            <h3>Dinner</h3>
            <p v-if="!dinnerItems.length">No dinner options available</p>
            <ul v-else>
              <li v-for="item in dinnerItems" :key="item.id">{{ item.name }}</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// State
const userName = ref('Guest')
const isLoading = ref(false)
const error = ref(null)
const data = ref(null)
const lunchItems = ref([])
const dinnerItems = ref([])

// Computed properties
const formattedDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

// Methods
const loadData = async () => {
  isLoading.value = true
  error.value = null

  try {
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    data.value = {
      /* your data structure */
    }
    lunchItems.value = [{ id: 1, name: 'Sample Lunch' }]
    dinnerItems.value = [{ id: 2, name: 'Sample Dinner' }]
  } catch (err) {
    error.value = 'Failed to load data'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

const saveData = async () => {
  try {
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    alert('Data saved successfully!')
  } catch (err) {
    alert('Failed to save data')
    console.error(err)
  }
}

// Lifecycle hooks
onMounted(() => {
  loadData()
})
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.error-message {
  color: red;
  padding: 20px;
  border: 1px solid red;
  border-radius: 4px;
}

section {
  margin-bottom: 30px;
}
</style>

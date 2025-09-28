<template>
  <div class="p-8 container mx-auto relative">
    <!-- Fondo difuminado del fabricante -->
    <div v-if="manufacturer.imagen" class="absolute inset-0 -z-10 overflow-hidden">
      <img
        :src="manufacturer.imagen"
        alt="Fondo fabricante"
        class="w-full h-full object-cover opacity-30 blur-sm"
      />
      <div class="absolute inset-0 bg-white/60"></div>
    </div>

    <!-- Título -->
    <h1
      class="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text relative z-10"
    >
      🏭 {{ manufacturer.nombre }}
    </h1>

    <!-- Información del fabricante -->
    <div class="flex flex-col md:flex-row items-start gap-10 bg-white bg-opacity-90 rounded-3xl shadow-xl p-6 relative z-10">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img
          v-if="manufacturer.imagen"
          :src="manufacturer.imagen"
          :alt="manufacturer.nombre"
          class="w-56 h-auto rounded-2xl shadow-lg border border-gray-200"
        />
        <div v-else class="w-56 h-72 flex items-center justify-center bg-gray-100 rounded-2xl shadow border border-gray-200">
          <span class="text-gray-400 italic">Sin logo</span>
        </div>
      </div>

      <!-- Información -->
      <div class="flex-1 text-left space-y-4">
        <p class="text-lg text-gray-700"><strong>Fundación:</strong> {{ manufacturer.fundacion }}</p>
        <p class="text-lg text-gray-700"><strong>País:</strong> {{ manufacturer.pais_sede }}</p>
        <p class="text-lg text-gray-700 leading-relaxed"><strong>Historia:</strong> {{ manufacturer.descripcion }}</p>
        <p class="text-lg text-purple-700 font-semibold">
          <a :href="manufacturer.web" target="_blank" class="hover:underline">Sitio web oficial</a>
        </p>
      </div>
    </div>

    <!-- Aviones fabricados -->
    <div class="mt-10 relative z-10">
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        ✈️ Aviones fabricados por {{ manufacturer.nombre }}
      </h2>

      <div v-if="airplanesByManufacturer.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="airplane in airplanesByManufacturer"
          :key="airplane.id"
          :to="`/airplane/${airplane.id}`"
          class="group relative flex items-center gap-4 p-4 border rounded-2xl shadow hover:scale-105 hover:bg-pink-50 transition font-semibold text-lg bg-white bg-opacity-90"
        >
          <!-- Miniatura del avión -->
          <div class="w-20 h-20 flex-shrink-0">
            <img
              v-if="airplane.imagen"
              :src="airplane.imagen"
              :alt="airplane.modelo"
              class="w-full h-full object-cover rounded-lg shadow"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
              <span class="text-gray-400 text-xs italic">Sin imagen</span>
            </div>
          </div>

          <!-- Nombre del avión -->
          <span class="flex-1 text-left">{{ airplane.modelo }}</span>
        </NuxtLink>
      </div>

      <p v-else class="text-gray-500 italic mt-2">
        No hay aviones registrados para este fabricante.
      </p>
    </div>

    <!-- Botón volver al catálogo -->
    <div class="text-center mt-10 relative z-10">
      <NuxtLink
        to="/"
        class="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition font-semibold"
      >
        ← Volver al Catálogo
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const manufacturerId = route.params.manufacturerdetail
const manufacturer = await queryContent('/airplanemanufacturer').where({ id: manufacturerId }).findOne()

if (!manufacturer) {
  throw createError({ statusCode: 404, statusMessage: 'Fabricante no encontrado' })
}

const allAirplanes = await queryContent('/airplanes').find()
const airplanesByManufacturer = allAirplanes.filter(a => a.fabricante_id === manufacturerId)
</script>

<style scoped>
@keyframes text-gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-text {
  background-size: 200% 200%;
  animation: text-gradient 5s ease infinite;
}
</style>

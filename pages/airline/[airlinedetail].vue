<template>
  <div class="p-8 container mx-auto relative">
    <!-- Fondo difuminado de la aerolínea -->
    <div v-if="airline.imagen" class="absolute inset-0 -z-10 overflow-hidden">
      <img
        :src="airline.imagen"
        alt="Fondo aerolínea"
        class="w-full h-full object-cover opacity-30 blur-sm"
      />
      <div class="absolute inset-0 bg-white/60"></div>
    </div>

    <!-- Título -->
    <h1
      class="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text relative z-10"
    >
      🛫 {{ airline.nombre }}
    </h1>

    <!-- Información principal -->
    <div class="flex flex-col md:flex-row items-start gap-10 bg-white bg-opacity-90 rounded-3xl shadow-xl p-6 relative z-10">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img
          v-if="airline.imagen"
          :src="airline.imagen"
          :alt="airline.nombre"
          class="w-56 h-auto rounded-2xl shadow-lg border border-gray-200"
        />
        <div v-else class="w-56 h-72 flex items-center justify-center bg-gray-100 rounded-2xl shadow border border-gray-200">
          <span class="text-gray-400 italic">Sin logo</span>
        </div>
      </div>

      <!-- Información textual -->
      <div class="flex-1 text-left space-y-4">
        <p class="text-lg text-gray-700"><strong>Fundación:</strong> {{ airline.fundacion }}</p>
        <p class="text-lg text-gray-700"><strong>País:</strong> {{ airline.pais }}</p>
        <p class="text-lg text-gray-700 leading-relaxed"><strong>Descripción:</strong> {{ airline.descripcion }}</p>
        <p class="text-lg text-purple-700 font-semibold">
          <a :href="airline.web" target="_blank" class="hover:underline">Sitio web oficial</a>
        </p>
      </div>
    </div>

    <!-- Aviones operados -->
    <div class="mt-12 relative z-10">
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        ✈️ Aviones operados por {{ airline.nombre }}
      </h2>

      <div v-if="airplanesByAirline.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <NuxtLink
          v-for="airplane in airplanesByAirline"
          :key="airplane.id"
          :to="`/airplane/${airplane.id}`"
          class="group relative flex flex-col items-center p-4 rounded-2xl shadow-lg bg-white hover:scale-105 transition transform"
        >
          <div class="w-24 h-24 mb-2">
            <img
              v-if="airplane.imagen"
              :src="airplane.imagen"
              :alt="airplane.modelo"
              class="w-full h-full object-contain rounded-xl"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
              <span class="text-gray-400 italic text-sm">Sin imagen</span>
            </div>
          </div>
          <p class="text-sm font-semibold text-gray-700 text-center">{{ airplane.modelo }}</p>
        </NuxtLink>
      </div>

      <p v-else class="text-gray-500 italic mt-2">
        No hay aviones registrados para esta aerolínea.
      </p>
    </div>

    <!-- Botón de volver -->
    <div class="text-center mt-12 relative z-10">
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
const airlineId = route.params.airlinedetail
const airline = await queryContent('/airlines').where({ id: airlineId }).findOne()
if (!airline) throw createError({ statusCode: 404, statusMessage: 'Aerolínea no encontrada' })

const allAirplanes = await queryContent('/airplanes').find()
const airplanesByAirline = allAirplanes.filter(a => a.aerolineas_ids.includes(airlineId))
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

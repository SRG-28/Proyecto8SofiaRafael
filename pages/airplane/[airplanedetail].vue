<template>
  <div class="p-8 container mx-auto relative">
    <!-- Fondo difuminado -->
    <div v-if="airplane.imagen" class="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <img
        :src="airplane.imagen"
        alt="Fondo avión"
        class="w-full h-full object-cover opacity-30 blur-sm"
      />
      <div class="absolute inset-0 bg-white/60"></div>
    </div>

    <!-- Contenido principal -->
    <div class="relative z-10 flex flex-col md:flex-row items-start gap-10 bg-white bg-opacity-90 rounded-3xl shadow-xl p-6">
      <!-- Imagen del avión -->
      <div class="flex-shrink-0">
        <img
          v-if="airplane.imagen"
          :src="airplane.imagen"
          :alt="airplane.modelo"
          class="w-72 h-auto rounded-2xl shadow-lg border border-gray-200"
        />
        <div v-else class="w-72 h-80 flex items-center justify-center bg-gray-100 rounded-2xl shadow border border-gray-200">
          <span class="text-gray-400 italic">Sin imagen</span>
        </div>
      </div>

      <!-- Información del avión -->
      <div class="flex-1 text-left space-y-4">
        <h1 class="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text">
          ✈️ {{ airplane.modelo }}
        </h1>
        <p class="text-lg text-gray-700"><strong>Año de introducción:</strong> {{ airplane.anho_introduccion }}</p>
        <p class="text-lg text-gray-700"><strong>Tipo:</strong> {{ airplane.tipo }}</p>
        <p class="text-lg text-gray-700"><strong>Capacidad:</strong> {{ airplane.capacidad_pasajeros }} pasajeros</p>
        <p class="text-lg text-gray-700"><strong>Alcance:</strong> {{ airplane.alcance_km }} km</p>
        <p class="text-lg text-gray-700 leading-relaxed"><strong>Descripción:</strong> {{ airplane.descripcion }}</p>

        <NuxtLink
          :to="`/airplanemanufacturer/${airplane.fabricante_id}`"
          class="mt-4 inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600 transition font-semibold"
        >
          Ver Fabricante
        </NuxtLink>
      </div>
    </div>

    <!-- Aerolíneas operadoras -->
    <div class="mt-12 relative z-10">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">🛫 Aerolíneas que operan este avión</h2>
      <div v-if="airlines.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <NuxtLink
          v-for="airline in airlines"
          :key="airline.id"
          :to="`/airline/${airline.id}`"
          class="group relative flex flex-col items-center p-4 rounded-2xl shadow-lg bg-white hover:scale-105 transition transform"
        >
          <div class="w-20 h-20 mb-2">
            <img
              v-if="airline.imagen"
              :src="airline.imagen"
              :alt="airline.nombre"
              class="w-full h-full object-contain rounded-xl"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
              <span class="text-gray-400 italic text-sm">Sin logo</span>
            </div>
          </div>
          <p class="text-sm font-semibold text-gray-700 text-center">{{ airline.nombre }}</p>
        </NuxtLink>
      </div>
      <p v-else class="text-gray-500 italic mt-2">No hay aerolíneas registradas para este avión.</p>
    </div>

    <!-- Botón volver -->
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
const airplaneId = route.params.airplanedetail

const airplane = await queryContent('/airplanes').where({ id: airplaneId }).findOne()
if (!airplane) throw createError({ statusCode: 404, statusMessage: 'Avión no encontrado' })

const allAirlines = await queryContent('/airlines').find()
const airlines = allAirlines.filter(a => airplane.aerolineas_ids.includes(a.id))
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

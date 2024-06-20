<template>
  <q-card class="weather-widget">
    <q-card-section>
      <q-input v-model="location" label="Masukkan Lokasi" outlined @keyup.enter="fetchWeather" />
      <q-btn label="Cari" @click="fetchWeather" color="primary" class="q-mt-md" />
    </q-card-section>
    <q-card-section v-if="weatherData">
      <h3>{{ weatherData.name }}</h3>
      <p>Temperature: {{ weatherData.main.temp }}°C</p>
      <p>Weather: {{ weatherData.weather[0].description }}</p>
    </q-card-section>
    <q-card-section v-else-if="error">
      <q-banner dense inline-actions class="bg-red-2 text-red-9">
        <template v-slot:avatar>
          <q-icon name="error" />
        </template>
        {{ error }}
      </q-banner>
    </q-card-section>
    <q-card-section v-else>
      <q-spinner size="30px" color="primary" />
      <p>Loading data...</p>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'WeatherWidget',
  setup() {
    const location = ref('');
    const weatherData = ref(null);
    const error = ref('');
    const apiKey = '954bb8a3cd585847737b007d6d3e113c';

    const fetchWeather = async () => {
      try {
        error.value = ''; // Clear previous error
        weatherData.value = null; // Reset weather data
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${apiKey}&units=metric`);
        weatherData.value = response.data;
      } catch (err) {
        if (err.response && err.response.status === 404) {
          error.value = 'Kota tidak ditemukan. Silakan cek kembali nama kota.';
        } else {
          error.value = 'Terjadi kesalahan. Silakan coba lagi.';
        }
        console.error(err);
      }
    };

    return {
      location,
      weatherData,
      fetchWeather,
      error,
    };
  },
};
</script>

<style>
.weather-widget {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
</style>

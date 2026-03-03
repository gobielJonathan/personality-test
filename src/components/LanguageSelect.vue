<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative z-10">

    <!-- floating stars -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        v-for="star in stars" :key="star.id"
        class="absolute rounded-full bg-white"
        :style="{
          width: star.size + 'px', height: star.size + 'px',
          left: star.x + '%', top: star.y + '%',
          animation: `twinkle ${star.dur}s ease-in-out infinite`,
          animationDelay: star.delay + 's',
        }"
      />
    </div>

    <div class="w-full max-w-md mx-auto text-center space-y-10">

      <!-- eyebrow -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 600, type: 'spring' } }"
        class="flex items-center justify-center gap-2"
      >
        <span class="relative flex h-3 w-3">
          <span class="pulse-ring absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-violet-400"></span>
        </span>
        <span class="text-violet-300 text-sm font-medium tracking-widest uppercase">Choose Language · Pilih Bahasa</span>
      </div>

      <!-- title -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
      >
        <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight">
          <span class="text-white">Unlock Your</span><br />
          <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Care Type
          </span>
        </h1>
        <p class="mt-3 text-white/40 text-sm">
          Temukan Tipe Kepedulianmu
        </p>
      </div>

      <!-- language cards -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
        class="grid grid-cols-2 gap-4"
      >
        <button
          v-for="option in langOptions"
          :key="option.code"
          class="glass-card p-6 flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 group"
          :class="selected === option.code ? 'ring-2' : 'hover:border-white/25'"
          :style="selected === option.code ? { ringColor: '#818cf8', borderColor: '#818cf8', background: 'rgba(129,140,248,0.12)', boxShadow: '0 0 0 2px #818cf8, 0 8px 32px rgba(129,140,248,0.25)' } : {}"
          @click="select(option.code)"
        >
          <!-- flag -->
          <span class="text-4xl transition-transform duration-300 group-hover:scale-110">{{ option.flag }}</span>
          <!-- language name -->
          <div class="text-center">
            <p class="text-white font-bold text-base">{{ option.name }}</p>
            <p class="text-white/40 text-xs mt-0.5">{{ option.native }}</p>
          </div>
          <!-- selected checkmark -->
          <div
            class="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
            :class="selected === option.code
              ? 'bg-violet-500 scale-100 opacity-100'
              : 'bg-white/10 scale-75 opacity-40'"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </button>
      </div>

      <!-- CTA -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 500, type: 'spring' } }"
      >
        <button
          class="btn-primary text-base px-10 py-4 group"
          :disabled="!selected"
          @click="confirm"
        >
          <span class="flex items-center gap-2">
            {{ selected === 'id' ? 'Mulai' : 'Continue' }}
            <svg
              class="transition-transform duration-300 group-hover:translate-x-1"
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const emit = defineEmits(['done'])
const { setLang } = useLanguage()

const selected = ref('en')

const langOptions = [
  { code: 'en', flag: '🇬🇧', name: 'English', native: 'English' },
  { code: 'id', flag: '🇮🇩', name: 'Indonesian', native: 'Bahasa Indonesia' },
]

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  dur: 2 + Math.random() * 4,
  delay: -Math.random() * 5,
}))

function select(code) {
  selected.value = code
}

function confirm() {
  if (!selected.value) return
  setLang(selected.value)
  emit('done')
}
</script>

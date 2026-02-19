<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative z-10">

    <!-- floating stars -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        v-for="star in stars"
        :key="star.id"
        class="absolute rounded-full bg-white"
        :style="{
          width: star.size + 'px',
          height: star.size + 'px',
          left: star.x + '%',
          top: star.y + '%',
          animation: `twinkle ${star.dur}s ease-in-out infinite`,
          animationDelay: star.delay + 's',
        }"
      />
    </div>

    <div class="w-full max-w-2xl mx-auto text-center space-y-8">

      <!-- ── Eyebrow pulse dot ── -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 600, type: 'spring' } }"
        class="flex items-center justify-center gap-2 mb-2"
      >
        <span class="relative flex h-3 w-3">
          <span class="pulse-ring absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-violet-400"></span>
        </span>
        <span class="text-violet-300 text-sm font-medium tracking-widest uppercase">Self-Discovery Assessment</span>
      </div>

      <!-- ── Title ── -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
      >
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
          <span class="text-white">Unlock Your</span><br />
          <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Care Type
          </span>
        </h1>
        <p class="mt-4 text-white/40 text-base font-medium">
          8 questions &nbsp;·&nbsp; ~3 minutes &nbsp;·&nbsp; 4 unique types
        </p>
      </div>

      <!-- ── Disclaimer card ── -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 250 } }"
        class="glass-card text-left"
      >
        <button
          @click="disclaimerOpen = !disclaimerOpen"
          class="w-full p-5 flex items-center justify-between gap-3 text-white/80 hover:text-white transition-colors duration-200 group"
          :aria-expanded="disclaimerOpen"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">⚠️</span>
            <span class="font-semibold text-sm tracking-wide">Important Disclaimer</span>
          </div>
          <div
            class="text-white/40 group-hover:text-white/70 transition-all duration-300"
            :class="disclaimerOpen ? 'rotate-180' : 'rotate-0'"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </button>
        <Transition name="disclaimer">
          <div v-if="disclaimerOpen" class="px-5 pb-5">
            <p class="text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">
              This assessment is not meant to provide a clinical diagnosis. Instead, it's designed to give you a clearer picture of your strengths, highlight what you're already doing well, and point out areas that you can continue to grow and develop.
            </p>
          </div>
        </Transition>
      </div>

      <!-- ── Instructions ── -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="glass-card p-6 text-left"
      >
        <div class="flex items-start gap-4">
          <div class="mt-0.5 text-2xl flex-shrink-0">📋</div>
          <div>
            <h2 class="text-white font-bold text-base mb-2">How it works</h2>
            <p class="text-white/60 text-sm leading-relaxed">
              Choose the answer that <span class="text-violet-300 font-medium">best describes you</span> when facing the following situations.
              There are no right or wrong answers, so don't overthink or spend too much time deciding.
              Simply choose the <span class="text-fuchsia-300 font-medium">first response that comes to your mind</span>.
            </p>
          </div>
        </div>
      </div>

      <!-- ── Types preview ── -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 550 } }"
        class="grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        <div
          v-for="type in typeTeaser"
          :key="type.label"
          class="glass-card p-3 text-center hover:scale-105 transition-transform duration-300 cursor-default"
          :style="{ borderColor: type.color + '40' }"
        >
          <div class="text-2xl mb-1">{{ type.emoji }}</div>
          <div class="text-xs font-semibold" :style="{ color: type.color }">{{ type.label }}</div>
        </div>
      </div>

      <!-- ── CTA Button ── -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 700, type: 'spring', stiffness: 200 } }"
        class="pt-2"
      >
        <button
          class="btn-primary text-lg px-10 py-4 group"
          @click="$emit('start')"
          @mouseenter="btnHovered = true"
          @mouseleave="btnHovered = false"
        >
          <span class="flex items-center gap-2">
            Discover Your Type
            <svg
              class="transition-transform duration-300"
              :class="btnHovered ? 'translate-x-1' : ''"
              width="18" height="18" viewBox="0 0 24 24" fill="none"
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

defineEmits(['start'])

const disclaimerOpen = ref(true)
const btnHovered = ref(false)

const typeTeaser = [
  { emoji: '👀', label: 'The Observer',  color: '#818cf8' },
  { emoji: '👂', label: 'The Safe Space', color: '#34d399' },
  { emoji: '🔗', label: 'The Connector',  color: '#fbbf24' },
  { emoji: '💚', label: 'The Steady One', color: '#f472b6' },
]

// generate random stars
const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  dur: 2 + Math.random() * 4,
  delay: -Math.random() * 5,
}))
</script>

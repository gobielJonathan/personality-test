<template>
  <div
    class="glass-card overflow-hidden transition-all duration-300"
    :class="isPrimary ? 'hover:scale-[1.01]' : 'opacity-95 hover:opacity-100'"
    :style="{
      borderColor: type.color + '50',
      boxShadow: isPrimary ? `0 0 60px ${type.glow}, 0 20px 60px rgba(0,0,0,0.3)` : 'none',
    }"
  >
    <!-- gradient top bar -->
    <div class="h-1.5 w-full" :style="{ background: `linear-gradient(90deg, ${type.color}, ${type.color}80)` }"></div>

    <div class="p-6 sm:p-8 space-y-5">

      <!-- ── Header ── -->
      <div class="flex items-start justify-between gap-4">
        <div class="flex items-center gap-4">
          <!-- emoji ring -->
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg"
            :style="{ background: type.glow, border: `2px solid ${type.color}60` }"
          >
            {{ type.emoji }}
          </div>
          <div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white">{{ type.name }}</h2>
            <p class="text-white/50 text-sm mt-0.5 italic">{{ type.title }}</p>
          </div>
        </div>
        <!-- percentage badge -->
        <div
          v-if="percentage"
          class="flex-shrink-0 px-3 py-1.5 rounded-full font-bold text-sm"
          :style="{ background: type.glow, color: type.color, border: `1px solid ${type.color}50` }"
        >
          {{ percentage }}%
        </div>
      </div>

      <!-- ── Body ── -->
      <p class="text-white/70 leading-relaxed text-[0.95rem]">{{ type.body }}</p>

      <!-- ── Highlight ── -->
      <div
        class="rounded-xl px-4 py-3 flex items-center gap-3"
        :style="{ background: type.glow, borderLeft: `3px solid ${type.color}` }"
      >
        <span class="text-lg">✨</span>
        <p class="text-white font-semibold text-sm">{{ type.highlight }}</p>
      </div>

      <!-- ── Superpower ── -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-sm" :style="{ background: type.glow }">
          ⚡
        </div>
        <div>
          <p class="text-white/40 text-xs uppercase tracking-wider">Your quiet superpower</p>
          <p class="font-bold" :style="{ color: type.color }">{{ type.superpower }}</p>
        </div>
      </div>

      <!-- ── Challenge ── -->
      <div class="glass-card p-4 !rounded-xl flex items-start gap-3">
        <span class="text-lg flex-shrink-0">💭</span>
        <p class="text-white/60 text-sm leading-relaxed italic">{{ type.challenge }}</p>
      </div>

      <!-- ── Small Actions ── -->
      <div class="space-y-2">
        <p class="text-white/40 text-xs uppercase tracking-wider font-semibold">✨ Small actions you can try</p>
        <ul class="space-y-2">
          <li
            v-for="(action, i) in type.actions"
            :key="i"
            class="flex items-start gap-2.5 text-sm text-white/70 stagger-item"
            :style="{ animationDelay: (0.6 + i * 0.1) + 's' }"
          >
            <span
              class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
              :style="{ background: type.glow, color: type.color }"
            >{{ i + 1 }}</span>
            <span>{{ action }}</span>
          </li>
        </ul>
      </div>

      <!-- ── Tip ── -->
      <div
        class="rounded-xl px-4 py-3 flex items-start gap-3"
        :style="{ background: `${type.color}15`, border: `1px solid ${type.color}30` }"
      >
        <span class="text-base flex-shrink-0">💡</span>
        <p class="text-white/75 text-sm font-medium leading-relaxed">{{ type.tip }}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  type: { type: Object, required: true },
  isPrimary: { type: Boolean, default: false },
  percentage: { type: Number, default: null },
})
</script>

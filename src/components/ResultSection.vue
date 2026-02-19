<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
    <div class="w-full max-w-2xl mx-auto space-y-8">

      <!-- ── Loading Reveal ── -->
      <Transition name="section" mode="out-in">
        <div v-if="revealing" key="revealing" class="text-center space-y-4 py-20">
          <div class="text-6xl animate-bounce">✨</div>
          <p class="text-white/60 text-lg font-medium shimmer rounded-lg px-4 py-2">Calculating your care type...</p>
          <div class="flex items-center justify-center gap-2">
            <div v-for="i in 3" :key="i" class="w-2 h-2 rounded-full bg-violet-400"
              :style="{ animation: `pulse-ring 1.2s ease-in-out ${(i-1)*0.2}s infinite` }"
            ></div>
          </div>
        </div>

        <div v-else key="result" class="space-y-6">

          <!-- ── "You are..." label ── -->
          <div
            class="stagger-item text-center"
            style="animation-delay: 0.1s"
          >
            <p class="text-white/50 text-base font-medium tracking-widest uppercase mb-2">You are...</p>
          </div>

          <!-- ── Main Result / Hybrid ── -->
          <div v-if="!isHybrid" class="stagger-item" style="animation-delay: 0.2s">
            <ResultTypeCard :type="primaryType" :is-primary="true" />
          </div>

          <!-- Hybrid types -->
          <div v-else class="space-y-4">
            <div class="stagger-item text-center" style="animation-delay: 0.15s">
              <h2 class="text-3xl sm:text-4xl font-extrabold text-white">You're a Hybrid Type ✨</h2>
              <p class="text-white/50 mt-1 text-sm">You blend multiple care styles equally well</p>
            </div>
            <div
              v-for="(type, idx) in hybridTypes"
              :key="type.key"
              class="stagger-item"
              :style="{ animationDelay: (0.2 + idx * 0.12) + 's' }"
            >
              <ResultTypeCard :type="type" :is-primary="false" :percentage="type.pct" />
            </div>
          </div>

          <!-- ── Score breakdown ── -->
          <div class="stagger-item glass-card p-5 space-y-3" style="animation-delay: 0.45s">
            <p class="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">Your score breakdown</p>
            <div v-for="t in allTypes" :key="t.key" class="space-y-1">
              <div class="flex items-center justify-between text-sm">
                <span class="flex items-center gap-2">
                  <span>{{ t.emoji }}</span>
                  <span class="text-white/70 font-medium">{{ t.name }}</span>
                </span>
                <span class="font-bold" :style="{ color: t.color }">{{ t.pct }}%</span>
              </div>
              <div class="progress-track" style="height: 7px;">
                <div
                  class="hybrid-bar"
                  :style="{ width: barWidths[t.key] + '%', background: t.color, boxShadow: `0 0 8px ${t.color}60` }"
                ></div>
              </div>
            </div>
          </div>

          <!-- ── Retake ── -->
          <div class="stagger-item text-center pt-2" style="animation-delay: 0.55s">
            <button
              class="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-200 text-sm font-medium"
              @click="$emit('retake')"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 .49-5.64"></path>
              </svg>
              Retake Assessment
            </button>
          </div>

        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import confetti from 'canvas-confetti'
import ResultTypeCard from './ResultTypeCard.vue'

const props = defineProps({
  counts: { type: Object, required: true }, // { A: n, B: n, C: n, D: n }
})
defineEmits(['retake'])

const TYPE_DATA = {
  A: {
    key: 'A',
    emoji: '👀',
    name: 'The Observer',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.25)',
    title: 'You notice what others don\'t even realize yet.',
    body: "You read the room quietly. Small changes in tone, energy, or behavior rarely escape you — and that awareness makes people feel seen, even before they speak.",
    highlight: "You are the one who senses when something is off.",
    superpower: "emotional awareness",
    challenge: "Sometimes you wait too long before checking in — but your gentle curiosity can mean the world to someone.",
    actions: [
      "Send a simple check-in: \"Hey, you crossed my mind today — how are you?\"",
      "Mention what you notice kindly: \"You seem quieter lately, I'm here if you want to talk.\"",
      "Start with light conversations before going deeper.",
    ],
    tip: "Small check-ins often mean more than perfect words.",
  },
  B: {
    key: 'B',
    emoji: '👂',
    name: 'The Safe Space',
    color: '#34d399',
    glow: 'rgba(52, 211, 153, 0.25)',
    title: 'People feel safe being real around you.',
    body: "There's something about your presence that makes others open up. You listen without rushing, fixing, or judging — and that kind of space is rare.",
    highlight: "You make people feel emotionally safe.",
    superpower: "deep listening",
    challenge: "Just remember: you don't have to carry everyone's emotions alone.",
    actions: [
      "Ask yourself after deep talks: \"Do I need a recharge?\"",
      "Set gentle boundaries: \"I want to listen, but can we talk later when I'm more present?\"",
      "Balance listening with sharing a little about yourself too.",
    ],
    tip: "Protecting your energy helps you stay a safe space long-term.",
  },
  C: {
    key: 'C',
    emoji: '🔗',
    name: 'The Connector',
    color: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.25)',
    title: 'You turn care into action.',
    body: "When someone struggles, you don't just watch — you help them find a way forward. You understand that support sometimes means bringing in the right people or resources.",
    highlight: "You help others move from stuck → supported.",
    superpower: "practical care",
    challenge: "Slow down just enough to listen first — your solutions become even stronger after that.",
    actions: [
      "Start with: \"Do you want me to just listen, or help think of solutions?\"",
      "Pause for a moment before giving advice.",
      "Reflect what you heard first: \"That sounds really heavy.\"",
    ],
    tip: "When people feel heard first, your practical help becomes even more powerful.",
  },
  D: {
    key: 'D',
    emoji: '💚',
    name: 'The Steady One',
    color: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.25)',
    title: 'Your calm makes people feel safe.',
    body: "You don't always need big words. Your steady presence alone helps others breathe easier and feel grounded.",
    highlight: "You are emotional stability in human form.",
    superpower: "calm energy",
    challenge: "Sometimes others don't realize how much you care — small check-ins help them feel it more.",
    actions: [
      "Send simple follow-ups: \"How are you feeling today?\"",
      "Initiate low-pressure hangouts like coffee or short walks.",
      "Say supportive things out loud, even briefly: \"I'm really glad you told me.\"",
    ],
    tip: "Small initiations help others recognize the support you quietly give.",
  },
}

const total = computed(() => Object.values(props.counts).reduce((a, b) => a + b, 0))

const allTypes = computed(() =>
  ['A', 'B', 'C', 'D'].map(k => ({
    ...TYPE_DATA[k],
    count: props.counts[k] || 0,
    pct: Math.round(((props.counts[k] || 0) / total.value) * 100),
  }))
)

const sortedTypes = computed(() =>
  [...allTypes.value].sort((a, b) => b.count - a.count)
)

const threshold = computed(() => (total.value * 0.75))

const isHybrid = computed(() => {
  const top = sortedTypes.value[0]
  return top.count < threshold.value
})

const primaryType = computed(() => sortedTypes.value[0])

const hybridTypes = computed(() =>
  sortedTypes.value.filter((t, i) => {
    // include all types that are tied or close to the top
    const top = sortedTypes.value[0].count
    return t.count === top || (i < 3 && t.count >= top - 1 && t.count > 0)
  })
)

// animated bar widths
const barWidths = ref({ A: 0, B: 0, C: 0, D: 0 })
const revealing = ref(true)

onMounted(async () => {
  await new Promise(r => setTimeout(r, 1200))
  revealing.value = false

  await nextTick()
  await new Promise(r => setTimeout(r, 400))

  // animate bars
  allTypes.value.forEach(t => {
    barWidths.value[t.key] = t.pct
  })

  // confetti
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.5 },
    colors: ['#818cf8', '#34d399', '#fbbf24', '#f472b6', '#c084fc'],
  })
})
</script>

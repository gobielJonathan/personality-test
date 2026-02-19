<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
    <div class="w-full max-w-xl mx-auto space-y-6">

      <!-- ── Header & Progress ── -->
      <div
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="space-y-3"
      >
        <div class="flex items-center justify-between text-sm">
          <span class="text-white/40 font-medium">Question {{ currentIndex + 1 }} of {{ questions.length }}</span>
          <span class="text-violet-300 font-semibold">{{ Math.round(progressPercent) }}% done</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
        </div>
        <!-- mini dots -->
        <div class="flex gap-1.5 justify-center">
          <div
            v-for="(q, i) in questions"
            :key="i"
            class="rounded-full transition-all duration-400"
            :class="[
              i === currentIndex ? 'w-5 h-2 bg-violet-400' :
              answers[i] ? 'w-2 h-2 bg-violet-600' :
              'w-2 h-2 bg-white/10'
            ]"
          ></div>
        </div>
      </div>

      <!-- ── Question Card ── -->
      <Transition name="question" mode="out-in">
        <div
          :key="currentIndex"
          class="glass-card p-6 sm:p-8 space-y-6"
        >
          <!-- question number badge -->
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-violet-500/30">
              {{ currentIndex + 1 }}
            </div>
            <h2 class="text-white font-semibold text-lg sm:text-xl leading-snug pt-1.5">
              {{ current.text }}
            </h2>
          </div>

          <!-- ── Options ── -->
          <div class="space-y-3">
            <button
              v-for="opt in current.options"
              :key="opt.value"
              class="option-btn"
              :class="[
                answers[currentIndex] === opt.value ? `selected type-${opt.value.toLowerCase()}` : '',
              ]"
              @click="selectAnswer(opt.value, $event)"
              :disabled="!!answers[currentIndex] && answers[currentIndex] !== opt.value && autoAdvancing"
            >
              <!-- check / label -->
              <div class="option-label flex-shrink-0">
                <template v-if="answers[currentIndex] === opt.value">
                  <svg
                    class="check-pop"
                    width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </template>
                <template v-else>{{ opt.value }}</template>
              </div>
              <!-- text -->
              <span class="flex-1">{{ opt.text }}</span>
              <!-- type color hint on hover -->
              <div
                class="w-2 h-2 rounded-full flex-shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                :style="{ background: typeColor(opt.value) }"
              ></div>
            </button>
          </div>

        </div>
      </Transition>

      <!-- ── Navigation ── -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
        class="flex items-center justify-between gap-4"
      >
        <!-- Back -->
        <button
          v-if="currentIndex > 0"
          class="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-200 text-sm font-medium"
          @click="goBack"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </button>
        <div v-else></div>

        <!-- Next / Submit -->
        <button
          class="btn-primary"
          :disabled="!answers[currentIndex]"
          @click="advance"
        >
          <span class="flex items-center gap-2">
            {{ isLast ? 'See My Results' : 'Next' }}
            <svg
              v-if="!isLast"
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <svg
              v-else
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        </button>
      </div>

      <!-- ── Auto-advance hint ── -->
      <Transition name="section">
        <p
          v-if="showHint && !answers[currentIndex]"
          class="text-center text-white/30 text-xs"
        >
          Select an answer to continue
        </p>
      </Transition>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const emit = defineEmits(['done'])

const QUESTIONS = [
  {
    text: 'Your friend suddenly becomes quieter than usual.',
    options: [
      { value: 'A', text: 'I notice the change quickly.' },
      { value: 'B', text: 'I gently ask, "Are you okay?"' },
      { value: 'C', text: 'I think about who else can support them.' },
      { value: 'D', text: 'I stay nearby so they\'re not alone.' },
    ],
  },
  {
    text: 'Your friend says: "I\'m exhausted with everything."',
    options: [
      { value: 'A', text: 'I try to figure out what\'s causing it.' },
      { value: 'B', text: 'I ask what feels the heaviest right now.' },
      { value: 'C', text: 'I suggest talking to someone they trust.' },
      { value: 'D', text: 'I say, "I\'m here with you."' },
    ],
  },
  {
    text: 'Someone posts sad stories late at night repeatedly.',
    options: [
      { value: 'A', text: 'I notice the pattern over time.' },
      { value: 'B', text: 'I send a check-in message.' },
      { value: 'C', text: 'I ask if they\'ve talked to a counselor or advisor.' },
      { value: 'D', text: 'I send something comforting.' },
    ],
  },
  {
    text: 'Your friend failed an important exam.',
    options: [
      { value: 'A', text: 'I notice their behavior changes afterward.' },
      { value: 'B', text: 'I listen to how they\'re feeling about it.' },
      { value: 'C', text: 'I suggest meeting the academic advisor.' },
      { value: 'D', text: 'I sit with them and let them vent.' },
    ],
  },
  {
    text: 'A friend talks about feeling "not good enough."',
    options: [
      { value: 'A', text: 'I observe what triggers those thoughts.' },
      { value: 'B', text: 'I ask what makes them feel that way.' },
      { value: 'C', text: 'I think about helpful support options.' },
      { value: 'D', text: 'I remind them they matter.' },
    ],
  },
  {
    text: 'In a group setting, someone looks uncomfortable.',
    options: [
      { value: 'A', text: 'I pick up on small body language cues.' },
      { value: 'B', text: 'I quietly ask if they want to step outside.' },
      { value: 'C', text: 'I bring in someone they feel safe with.' },
      { value: 'D', text: 'I stay next to them to help them feel grounded.' },
    ],
  },
  {
    text: 'Your friend mentions feeling overwhelmed for weeks.',
    options: [
      { value: 'A', text: 'I notice it\'s not just a one-time thing.' },
      { value: 'B', text: 'I give them space to explain fully.' },
      { value: 'C', text: 'I suggest professional support if needed.' },
      { value: 'D', text: 'I reassure them they\'re not alone.' },
    ],
  },
  {
    text: 'If a friend is struggling, I usually…',
    options: [
      { value: 'A', text: 'Notice changes first.' },
      { value: 'B', text: 'Listen deeply.' },
      { value: 'C', text: 'Help connect them to support.' },
      { value: 'D', text: 'Stay calm and steady.' },
    ],
  },
]

const questions = QUESTIONS
const currentIndex = ref(0)
const answers = ref({})
const showHint = ref(false)
const autoAdvancing = ref(false)

const current = computed(() => questions[currentIndex.value])
const isLast   = computed(() => currentIndex.value === questions.length - 1)
const progressPercent = computed(() => (currentIndex.value / questions.length) * 100)

const typeColor = (val) => {
  return { A: '#818cf8', B: '#34d399', C: '#fbbf24', D: '#f472b6' }[val]
}

function selectAnswer(value, event) {
  if (answers.value[currentIndex.value]) return

  // Ripple
  const btn = event.currentTarget
  const rect = btn.getBoundingClientRect()
  const ripple = document.createElement('span')
  ripple.classList.add('ripple')
  ripple.style.left = (event.clientX - rect.left - 30) + 'px'
  ripple.style.top  = (event.clientY - rect.top  - 30) + 'px'
  btn.appendChild(ripple)
  setTimeout(() => ripple.remove(), 700)

  answers.value[currentIndex.value] = value

  // Auto-advance after brief delay for feedback
  autoAdvancing.value = true
  setTimeout(() => {
    autoAdvancing.value = false
    if (isLast.value) {
      submitResults()
    } else {
      currentIndex.value++
    }
  }, 600)
}

function goBack() {
  if (currentIndex.value > 0) currentIndex.value--
}

function advance() {
  if (!answers.value[currentIndex.value]) return
  if (isLast.value) {
    submitResults()
  } else {
    currentIndex.value++
  }
}

function submitResults() {
  const counts = { A: 0, B: 0, C: 0, D: 0 }
  Object.values(answers.value).forEach(v => counts[v]++)
  emit('done', counts)
}

onMounted(() => {
  setTimeout(() => { showHint.value = true }, 3000)
})
</script>

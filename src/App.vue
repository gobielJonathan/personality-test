<template>
  <div class="relative min-h-screen">

    <!-- ── Animated background orbs ── -->
    <div class="bg-orb bg-orb-1" aria-hidden="true"></div>
    <div class="bg-orb bg-orb-2" aria-hidden="true"></div>
    <div class="bg-orb bg-orb-3" aria-hidden="true"></div>

    <!-- ── Section Transitions ── -->
    <Transition name="section" mode="out-in">

      <HeroSection
        v-if="screen === 'hero'"
        key="hero"
        @start="startQuiz"
      />

      <QuizSection
        v-else-if="screen === 'quiz'"
        key="quiz"
        @done="showResult"
      />

      <ResultSection
        v-else-if="screen === 'result'"
        key="result"
        :counts="resultCounts"
        @retake="retake"
      />

    </Transition>

    <!-- ── Subtle footer ── -->
    <footer
      v-if="screen === 'hero'"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 1200, duration: 600 } }"
      class="fixed bottom-4 left-0 right-0 text-center text-white/20 text-xs pointer-events-none"
    >
      Made with care &nbsp;·&nbsp; Not a clinical tool
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection   from './components/HeroSection.vue'
import QuizSection   from './components/QuizSection.vue'
import ResultSection from './components/ResultSection.vue'

const screen       = ref('hero')
const resultCounts = ref({ A: 0, B: 0, C: 0, D: 0 })

function startQuiz() {
  screen.value = 'quiz'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function showResult(counts) {
  resultCounts.value = counts
  screen.value = 'result'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function retake() {
  screen.value = 'hero'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

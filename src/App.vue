<template>
  <div class="relative min-h-screen">

    <!-- ── Animated background orbs ── -->
    <div class="bg-orb bg-orb-1" aria-hidden="true"></div>
    <div class="bg-orb bg-orb-2" aria-hidden="true"></div>
    <div class="bg-orb bg-orb-3" aria-hidden="true"></div>

    <!-- ── Section Transitions ── -->
    <Transition name="section" mode="out-in">

      <LanguageSelect
        v-if="screen === 'lang'"
        key="lang"
        @done="goHero"
      />

      <HeroSection
        v-else-if="screen === 'hero'"
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

  </div>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSelect from './components/LanguageSelect.vue'
import HeroSection    from './components/HeroSection.vue'
import QuizSection    from './components/QuizSection.vue'
import ResultSection  from './components/ResultSection.vue'

const screen       = ref('lang')
const resultCounts = ref({ A: 0, B: 0, C: 0, D: 0 })

function goHero() {
  screen.value = 'hero'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

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
  screen.value = 'lang'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

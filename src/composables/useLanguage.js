import { reactive, computed } from 'vue'
import en from '../locales/en.js'
import id from '../locales/id.js'

const LOCALES = { en, id }

const state = reactive({
  lang: 'en',
})

export function useLanguage() {
  const t = computed(() => LOCALES[state.lang])
  const lang = computed(() => state.lang)

  function setLang(code) {
    state.lang = code
  }

  return { t, lang, setLang }
}

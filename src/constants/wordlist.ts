import { CONFIG } from './config'

export const WORDS = [
  'k̓ʷinəw̓s',
  'nəc̓iw̓s',
  'nəc̓əs',
  'ɬixʷəs',
  'tu:xʷəs',
  'nəc̓aʔ',
  't̕ᶿaʔkʷs',
  'ʔəpan',
  'qəl̕et',
  'hiləkʷ',
  'ʔiyəs',
  'qiləs',
  'χit̕ᶿəl',
  'sqʷəmey',
  'sme:nt,
  'ʔiyəs',
  'ʔeχeʔ',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}

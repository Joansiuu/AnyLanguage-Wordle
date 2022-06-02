import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'cc',
  'ć',
  'č',
  'h',
  'k',
  'kʷ',
  'ḱʷ',
  'l',
  'l'',
  'ƛ̓',
  'ɬ',
  'm',
  'ḿ',
  'n',
  'ń',
  'p',
  'ṕ',
  'q',
  'q́',
  'qʷ',
  'q́ʷ',
  's',
  'š',
  't',
  't́',
  't́θ',
  'θ',
  'w',
  'ẃ',
  'x',
  'xʷ',
  'χ',
  'χʷ',
  'y',
  'ý',
  'ʔ',
  'a',
  'a:',
  'e',
  'e:',
  'i',
  'i:',
  'u',
  'u:',
  'ə',
  'ay',
  'ey',
  'eý',
  'əy',
  'əý',
  'aẃ',
  'a:ẃ',
  'ew',
  'iw',
  'iẃ',
  'əw',
  'əẃ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}

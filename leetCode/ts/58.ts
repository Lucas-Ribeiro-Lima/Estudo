const lengthOfLastWord = (s: string): number => s.trim().split(/\s+/).pop()?.length ?? 0

const s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))
class Solution:
    def romanToInt(self, s: str) -> int:
        romanMap = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        result = 0
        prev = 0
        for c in reversed(s):
            val = romanMap[c]
            if(val < prev): val *= -1
            result += val
            prev = romanMap[c]
        return result
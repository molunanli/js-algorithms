function lengthOfLongestSubstring(s){
    const words = []
    words = s.split("")
    const set = new Set()
    for(let i = 0;i<words.length;i++){
        if(set.has(words[i])){
            return set.size()
        }
        set.add(words[i])
    }
    return 0
}

console.log(lengthOfLongestSubstring("abcabcbb"));

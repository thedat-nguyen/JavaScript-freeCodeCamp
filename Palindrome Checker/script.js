function palindrome(str) {
    let normalized = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
    let reversed = [...normalized].reverse().join('')
  
    return normalized == reversed
  }
  
  palindrome("eye");
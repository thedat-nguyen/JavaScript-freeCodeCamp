function rot13(str) {
    function shiftChar(char){
      let charCode = char.charCodeAt()
      if (charCode >= 65 && charCode <= 90){
        return String.fromCharCode((charCode - 65 + 13) % 26 + 65)
      }
      return char
    }
    let changed = [...str].map(shiftChar).join('')
  
    return changed
  
  }
  
  rot13("SERR PBQR PNZC");
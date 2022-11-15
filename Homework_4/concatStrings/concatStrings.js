 concatStrings = (str, sep) => {
  let returnStr = ''
  let separator = ''
  let check = true

  if (typeof str !== 'string') {
    check = false
  } else {
    returnStr = str + returnStr
  }
  if (typeof sep === 'string') {
    separator = sep
  }
  return addStr

  function addStr (nextStr) {
    if (!arguments.length) {
      return returnStr
    } else if (typeof nextStr !== 'string' && check) {
      check = false
    } else {
      returnStr = returnStr + separator + nextStr
    }
    return addStr
  }
}



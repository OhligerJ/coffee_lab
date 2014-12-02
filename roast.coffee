reverse = (str) ->
  arr = str.split("")
  new_arr = []
  for i in [arr.length-1..0] by -1
    new_arr.push arr[i]

  return new_arr.reduce (x, y) -> x + y

console.log reverse("building")

filterLongWords = (arr, num) ->
  new_arr = []
  for element in arr
    if element.length > num
      new_arr.push element

  return new_arr
LongWords = [
  "words"
  "that"
  "are"
  "amazing"
]
console.log filterLongWords(LongWords, 4)

range = (int) ->
  if int < 0
    console.log "Greater than zero, plis"
    return false

  return [0..int]

console.log range(6)

startsWith = (str1, str2) ->
  return (str1.indexOf(str2) == 0)

console.log startsWith("one bright day", "one dark day, in the middle of the night")

grade = (int) ->
  grade = ""
  if int < 60
    grade = "F"
  else if int >= 60 && int < 70
    grade = "D"
  else if int >= 70 && int < 80
    grade = "C"
  else if int >= 80 && int < 90
    grade = "B"
  else
    grade = "A"

  return grade

console.log grade(78)

pluralize = (str, num) ->
  macbeth = "is"
  if num > 1
    str = str + "s"
    macbeth = "are"
  return "There " + macbeth + " " + num + " " + str

console.log pluralize("doge", 1)
console.log pluralize("doge", 3)

tempConvert = (tmp) ->
  tmpF = tmp * (9 / 5) + 32
  return tmp + " degrees C is " + tmpF + " degrees Fahrenheit"

console.log tempConvert(0)
console.log tempConvert(36)
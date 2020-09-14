function addElementToBeginningOfArray (array, element) {
  return array.unshift(element);
}
function destructivelyAddElementToBeginningOfArray (array, element){
  newArray = [...array];
  return newArray.unshift(element);
}

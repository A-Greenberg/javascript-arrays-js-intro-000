function addElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}
function destructivelyAddElementToBeginningOfArray (array, element){
  newArray = [...array];
  newArray.unshift(element);
  return newArray;
}

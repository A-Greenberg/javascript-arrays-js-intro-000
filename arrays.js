function addElementToBeginningOfArray (array, element) {
  newArray = [...array];
  newArray.unshift(element);
  return newArray;
}
function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array;
}

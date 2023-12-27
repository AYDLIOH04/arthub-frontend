const shuffle = (array: any[]) => {
  const newArray = array.slice();
  newArray.sort(() => Math.random() - 0.5);
  return newArray
}

export default shuffle;
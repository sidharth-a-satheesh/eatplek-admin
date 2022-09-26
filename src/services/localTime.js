export let localTime = (date) => {
  let localDate = new Date(date).toLocaleString();
  let length = localDate.length;
  console.log(length);
  let limit1 = length === 22 ? 16 : 15;
  let limit2 = length === 22 ? 20 : 19;
  return localDate.substring(11, limit1) + " " + localDate.substring(limit2);
};

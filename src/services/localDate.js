export let localDate = (date) => {
  let localDate = new Date(date).toLocaleString();
  console.log(localDate);
  return localDate.substring(0, localDate.indexOf(","));
};

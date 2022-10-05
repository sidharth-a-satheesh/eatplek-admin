export let localTime = (date) => {
  let localDate = new Date(date).toLocaleString();
  let fp = localDate.substring(
    localDate.indexOf(",") + 2,
    localDate.lastIndexOf(":")
  );
  let sp = localDate.substring(
    localDate.lastIndexOf(" ") + 1,
    localDate.length
  );
  return fp + " " + sp;
};

export let httpHeaders = () => {
  let token = localStorage.getItem("jwt_admin");

  return {
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
  };
};

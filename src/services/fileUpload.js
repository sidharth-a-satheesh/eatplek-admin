import apis from "../components/axios/axios";

export let fileUpload = async (file) => {
  let formData = new FormData();
  formData.append("file", file);
  let { data } = await apis.post("upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Token: localStorage.getItem("jwt_admin"),
    },
  });
  return data.link;
};

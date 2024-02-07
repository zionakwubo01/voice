import axios from "axios";

const url: string = "http://localhost:5544/api";

export const Createquestion = async (data: any) => {
  try {
    return await axios.post(`${url}/create-question`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const Readquestion = async () => {
  try {
    return await axios.get(`${url}/read-question`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

import useSwr from "swr";
import { Readquestion } from "../../api/api";

export const questionHook = () => {
  const { data } = useSwr(
    "/api/read-question",
    () => {
      return Readquestion().then((res) => {
        return res.data;
      });
    },

    { refreshInterval: 5000 }
  );
  return { data };
};

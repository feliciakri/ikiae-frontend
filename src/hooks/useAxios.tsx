import axios from "axios";

interface Props {
  url: string;
}
const useAxios = ({ url }: Props) => {
  const response = axios
    .get(`${process.env.REACT_APP_API_KEY}/${url}`)
    .then((response) => response.data);

  console.log(response);
};

export default useAxios;

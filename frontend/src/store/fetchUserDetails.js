import SummaryApi from "../common/SummaryApi";
import Axios from "../utils/Axios";
import { baseURL } from "../common/SummaryApi";

const fetchUserDetails = async () => {
  try {
    const res = await Axios({
      baseURL,
      ...SummaryApi.getUserDetails,
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchUserDetails;

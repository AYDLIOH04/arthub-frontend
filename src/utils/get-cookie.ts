import Cookies from 'js-cookie';

const getCookieData = (data: string) => {
  return JSON.parse(Cookies.get(data) || "{}");
}

export default getCookieData
import ISelect from "@/components/selections/select.type";
import Cookies from 'js-cookie';

export const isEscapeKey = (event: KeyboardEvent) => event.key === 'Escape';
export const getCookieData = (data: string) => JSON.parse(Cookies.get(data) || "{}");
export const parseUrlString = (urlString: string) => urlString.replace("%20", " ").split(" ").join(" ");
export const shuffle = (array: any[]) => array.slice().sort(() => Math.random() - 0.5);

export const selectSearch = (list: ISelect[], text: string) =>
  list.filter(i => i.label.toLowerCase().includes(text.toLowerCase()));

export const getTruncatedText = (text: string, maxLength: number): string => text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

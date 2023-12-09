import ISelect from "@/components/UI/selections/select.interface";

export const selectSearch = (list: ISelect[], text: string) =>
  list.filter(i => i.label.toLowerCase().includes(text.toLowerCase()));

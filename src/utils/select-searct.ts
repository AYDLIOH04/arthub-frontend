import ISelect from "@/components/UI/selections/select.type";

export const selectSearch = (list: ISelect[], text: string) =>
  list.filter(i => i.label.toLowerCase().includes(text.toLowerCase()));

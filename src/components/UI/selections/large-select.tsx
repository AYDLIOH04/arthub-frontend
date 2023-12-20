import { selectSearch } from "@/utils/select-searct";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import ISelect from "./select.interface";
import { useClickOutside } from "@/hooks/useClickOutside";
import useEscapeKeydown from "@/hooks/useEscapeKeydown";

const LargeSelect = ({
  label,
  onSelectClick,
  onSelectRemove,
  selection,
}: {
  label?: string;
  onSelectClick: (query: string) => void;
  onSelectRemove: () => void;
  selection: ISelect[];
}) => {
  const [open, setOpen] = useState(false);
  const [selectionList, setSelectionList] = useState<ISelect[]>(selection);
  const [currentSelect, setCurrentSelect] = useState<ISelect | null>(null);
  const [currentSelectSearch, setCurrentSelectSearch] = useState("");

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(() => setOpen(false), ref, open);
  useEscapeKeydown(() => setOpen(false), open);

  const onOpenToggle = (e: any) => {
    e.stopPropagation();
    setOpen((current) => !current);
  };

  const onSearchChange = (e: any) => {
    if (!open) {
      setOpen(true);
    }

    setCurrentSelectSearch(e.target.value);
    setSelectionList(() => selectSearch(selection, e.target.value));

    if (selectSearch(selection, e.target.value)) {
      onSelectRemove();
      setCurrentSelect(null);
    }
  };

  const onSearchClear = () => {
    setCurrentSelectSearch("");
    setSelectionList(selection);
  };

  const onLargeSelectClick = (select: ISelect) => {
    setCurrentSelect(select);
    setCurrentSelectSearch(select.label);
    onSelectClick(select.query);
    setOpen(false);
  };

  const onLargeSelectRemove = () => {
    setCurrentSelect(null);
    setCurrentSelectSearch("");
    onSelectRemove();
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative sm:w-[280px] w-full">
      <div
        onClick={() => setOpen(true)}
        className="
        px-4 py-1 rounded-md cursor-pointer
        flex flex-row items-center
        justify-between gap-2 bg-main_purple"
      >
        <input
          className="text-[18px] w-11/12 px-2 py-1 rounded-md bg-second_purple placeholder:text-slate-300 outline-none"
          placeholder={label ? label : "Выберите сортировку"}
          value={currentSelectSearch}
          onChange={onSearchChange}
        />

        <IoIosArrowUp
          size={25}
          className={`${open ? "-rotate-180" : "rotate-0"} duration-300 w-1/12`}
          onClick={onOpenToggle}
        />
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.1, y: -130 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.1, y: -130 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
            flex flex-col
            mt-3 px-4 pb-3
            absolute right-0 top-10 z-[11] rounded-md
            bg-main_purple w-full h-[300px] overflow-y-scroll
            "
          >
            {selectionList.length ? (
              <>
                <button
                  onClick={onLargeSelectRemove}
                  disabled={!currentSelect}
                  className={`
                  w-full bg-second_purple
                  my-2 px-4 py-1
                  rounded-md uppercase
                  flex flex-row justify-between items-center
                  ${
                    currentSelect
                      ? "opacity-100 cursor-pointer group hover:bg-hover transition"
                      : "opacity-40"
                  }
                  `}
                >
                  Сбросить
                  <RxCrossCircled
                    size={25}
                    className="
                  text-main_purple
                  group-hover:text-white duration-200
                  "
                  />
                </button>
                {selectionList?.map((select) => (
                  <li
                    key={select.id}
                    onClick={
                      select.id === currentSelect?.id
                        ? () => {}
                        : () => onLargeSelectClick(select)
                    }
                    className={`w-full bg-second_purple
                    my-2 px-4 py-1
                    rounded-md
                    ${
                      select.id === currentSelect?.id
                        ? "opacity-40"
                        : "cursor-pointer hover:bg-hover transition"
                    }
                    `}
                  >
                    {select.label}
                  </li>
                ))}
              </>
            ) : (
              <div
                className="
                w-full h-full
                flex justify-center items-center flex-col
              "
              >
                <p className="uppercase "> выборка не найдена </p>
                <button
                  onClick={onSearchClear}
                  className="
                  bg-second_purple px-4 py-2 rounded-md mt-3
                  hover:opacity-75 transition
                  "
                >
                  Очистить
                </button>
              </div>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LargeSelect;

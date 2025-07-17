import css from "./WordsTable.module.css";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular?: boolean;
  owner: string;
  progress: number;
}

type SelectedColumns = Pick<
  Word,
  "_id" | "en" | "ua" | "progress" | "category"
>;

const data: Word[] = [
  {
    _id: "64c6e8d7abbd3d21328a00cf",
    en: "run-ran-run",
    ua: "бігти",
    category: "verb",
    isIrregular: true,
    owner: "64c6dde64b0c8534d41f9b5c",
    progress: 50,
  },
  {
    _id: "64c6e8ecabbd3d21328a00d4",
    en: "cat",
    ua: "кіт",
    category: "noun",
    owner: "64c6dde64b0c8534d41f9b5c",
    progress: 30,
  },
  {
    _id: "64c6e8ecabbd3d21328a00d3",
    en: "green",
    ua: "зелений",
    category: "noun",
    owner: "64c6dde64b0c8534d41f9b5c",
    progress: 30,
  },
];

const WordsTable = () => {
  const columns: ColumnDef<SelectedColumns>[] = [
    {
      header: "Word",
      accessorKey: "en",
    },
    {
      header: "Translation",
      accessorKey: "ua",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Progress",
      accessorKey: "progress",
    },
    {
      id: "popoverBtn",
      header: "",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={css.content}>
      <table className={css.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={css.tr}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={css.th}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.original._id} className={css.tr}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={css.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordsTable;

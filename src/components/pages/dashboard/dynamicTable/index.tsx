'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

type Column = {
  id: string;
  label: string;
  render?: (item: any) => React.ReactNode;
};

type Props = {
  columns: Column[];
  data: any[];
  selected: string[];
  handleDelete?: () => void;
  setSelected: (selected: string[]) => void;
};

export const DynamicTable = ({ columns, data, setSelected, selected }: Props) => {
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelected([]);
    } else {
      setSelected(data.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
    console.log(selected)
  };

  return (
    <div className="w-full border rounded-md overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-gray-50 text-gray-700 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-center w-10">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="accent-primary100 w-4 h-4 "
                />
              </th>
              {columns.map((col) => (
                <th key={col.id} className="px-4 py-3 font-medium">
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.id !== "actions" && (
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800 divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="text-center px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={() => handleToggle(item.id)}
                    className="accent-primary100 w-4 h-4"
                  />
                </td>
                {columns.map((col) => (
                  <td key={col.id} className={`px-4 py-2 whitespace-nowrap ${col.label === "#Número" ? "text-sencondary100" : ""}`}>
                    {col.render ? col.render(item) : item[col.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center py-2 border-t bg-gray-50">
        <div className="w-40 h-1.5 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
};

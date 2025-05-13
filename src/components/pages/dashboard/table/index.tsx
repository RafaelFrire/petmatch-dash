/* eslint-disable @typescript-eslint/no-explicit-any */
type Column = {
  header: string;
  accessor: string;
};

type TableProps = {
  columns: Column[];
  data: Record<string, any>[];
};

export function Table({ columns, data }: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-zinc-200">
      <table className="min-w-full divide-y divide-zinc-200">
        <thead className="bg-zinc-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 bg-white">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.accessor} className="whitespace-nowrap px-6 py-4 text-sm text-zinc-900">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

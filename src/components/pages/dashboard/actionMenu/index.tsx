'use client';

import { useState } from 'react';
import { Edit, MoreVertical, Trash } from 'lucide-react';

export function ActionsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative z-10 flex items-center justify-center p-2 rounded hover:bg-gray-100 cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex gap-2 items-center">
        <button>
          <Edit className="w-4 h-4" />
        </button>
        <button>
          <Trash className="w-4 h-4" />
        </button>
        <button className="rounded hover:bg-gray-100 p-1">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {open && (
        <div className="absolute flex flex-col right-0 mt-2 w-32 min-h-16 bg-white border border-gray-200 rounded shadow z-10">
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Aprovar
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Rejeitar
          </button>
        </div>
      )}
    </div>
  );
}

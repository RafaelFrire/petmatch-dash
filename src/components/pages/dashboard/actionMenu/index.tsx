"use client";

import { useState } from "react";
import { Edit, MoreVertical, Trash } from "lucide-react";

type actionsMenuProps = {
  onEdit?: () => void;
  onDelete?: () => void;
  onApprove?: () => void;
  onReject?: () => void;
}
export function ActionsMenu({onEdit, onDelete, onReject, onApprove}:actionsMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative z-10 flex items-center justify-left p-2 rounded hover:bg-gray-100 cursor-pointer w-24 pr-12"
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex gap-2 items-center">
        <button onClick={onEdit}>
          <Edit className="w-4 h-4" />
        </button>
        <button onClick={onDelete}>
          <Trash className="w-4 h-4" />
        </button>
        <button className="rounded hover:bg-gray-100 p-1 ">
          <MoreVertical
            className="w-4 h-4"
            onMouseEnter={() => setOpen(true)}
          />
        </button>
      </div>

      {open && (
        <div className="absolute flex flex-col right-0 mt-2 w-32 min-h-16 bg-white border border-gray-200 rounded shadow z-10">
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          onClick={onApprove}
          >
            Aprovar
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          onClick={onReject}
          >
            Rejeitar
          </button>
        </div>
      )}
    </div>
  );
}

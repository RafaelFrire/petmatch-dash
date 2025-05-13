import { ReactNode } from 'react';

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: number;
  iconBg: string;
};

export function StatCard({ icon, label, value, iconBg }: StatCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white shadow-sm p-6">
      <div className="flex items-center gap-4">
        <div className={`rounded-full p-2 ${iconBg}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-zinc-500">{label}</p>
          <p className="text-2xl font-bold text-zinc-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Users, PawPrint } from 'lucide-react';
import { StatCard } from '../statCard';

export default function StatCardGrid({ requests }: { requests: any[] }) {
  const total = requests.length;
  const pendentes = requests.filter((r) => r.status === 'PENDING').length;
  const aprovados = requests.filter((r) => r.status === 'APPROVED').length;
  const rejeitados = requests.filter((r) => r.status === 'REJECTED').length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6 w-full">
      <StatCard
        icon={<Users className="h-5 w-5 text-blue-700" />}
        label="Total de Pedidos"
        value={total}
        iconBg="bg-blue-100"
      />
      <StatCard
        icon={<PawPrint className="h-5 w-5 text-yellow-700" />}
        label="Pendentes"
        value={pendentes}
        iconBg="bg-yellow-100"
      />
      <StatCard
        icon={<PawPrint className="h-5 w-5 text-green-700" />}
        label="Aprovados"
        value={aprovados}
        iconBg="bg-green-100"
      />
      <StatCard
        icon={<PawPrint className="h-5 w-5 text-red-700" />}
        label="Rejeitados"
        value={rejeitados}
        iconBg="bg-red-100"
      />
    </div>
  );
}

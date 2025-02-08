import React, { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4 transition-transform duration-300 hover:scale-105">
      <div className="text-primary">{icon}</div>
      <h3 className="text-2xl font-bold mt-2">{value}+</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;

import React from "react";
import { CheckCircle } from "lucide-react";

const ServicesList = () => {
  const services = [
    "Замена автоматов в электрощите",
    "Замена розеток и выключателей",
    "Устранение неисправностей электропроводки",
    "Установка сенсорных и умных выключателей",
    "Монтаж Wi-Fi розеток и выключателей",
    "Подключение умных светильников",
    "Настройка системы умного дома"
  ];

  return (
    <div className="mt-6">
      <h3 className="font-headline text-xl font-bold mb-3">Наши услуги:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="font-serif">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;

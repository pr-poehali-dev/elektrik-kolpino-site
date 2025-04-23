import React from "react";
import { Zap } from "lucide-react";

interface NewspaperHeaderProps {
  title: string;
  date: string;
  phone: string;
}

const NewspaperHeader: React.FC<NewspaperHeaderProps> = ({
  title,
  date,
  phone,
}) => {
  return (
    <div className="border-b-2 border-black pb-4 mb-6">
      <div className="text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tight mb-2">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm mb-2">
          <Zap className="h-4 w-4" />
          <span>Колпинский район, Санкт-Петербург</span>
          <Zap className="h-4 w-4" />
          <span>{date}</span>
          <Zap className="h-4 w-4" />
        </div>
        <div className="flex justify-center items-center gap-2 text-xl font-bold">
          <span>Телефон:</span>
          <a href={`tel:${phone.replace(/[\s-]/g, '')}`} className="text-blue-700 hover:underline">
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewspaperHeader;

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, children, icon }) => {
  return (
    <Card className="border border-gray-300 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm md:text-base">
        {children}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

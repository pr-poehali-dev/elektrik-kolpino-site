import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ContactBlockProps {
  phone: string;
  telegram: string;
  websites: string[];
}

const ContactBlock: React.FC<ContactBlockProps> = ({ phone, telegram, websites }) => {
  return (
    <Card className="bg-gray-100 border-2 border-gray-300 my-6">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-center">Контактная информация</h3>
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <a 
              href={`tel:${phone.replace(/[\s-]/g, '')}`} 
              className="font-bold text-blue-700 hover:underline"
            >
              {phone}
            </a>
            <span className="text-sm">(WhatsApp доступен)</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            <a 
              href={`https://${telegram}`} 
              className="font-bold text-blue-700 hover:underline"
            >
              {telegram}
            </a>
            <span className="text-sm">(для отправки фото/видео)</span>
          </div>
          
          <div className="mt-2">
            <div className="font-semibold mb-1">Наши сайты:</div>
            <ul className="list-disc pl-5">
              {websites.map((site, index) => (
                <li key={index}>
                  <a 
                    href={`http://${site}`} 
                    className="text-blue-700 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {site}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactBlock;

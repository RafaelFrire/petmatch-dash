'use client';

import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';


const ContactCard = () => {
  return (
    <div className="flex mt-8">
      <div className="relative w-[632px] h-[652px]">
        <Image
          className="absolute w-[472px] h-[652px] top-0 left-0"
          alt="Rectangle"
          src="/assets/dog_banner.png"
          width={472}
          height={652}
        />

        <div className="absolute w-[347px] h-[289px] top-[146px] left-[275px] bg-white border-2 border-solid border-[#b80000] shadow-[0px_4px_50px_5px_#00000040] p-4">
          <h3 className="font-montserrat font-bold text-primary100 text-2xl">
            Contate-nos
          </h3>
          <div className="mt-2 border-b border-gray-300"></div>
          <div className="space-y-6 mt-4">
            <ContactInfo
              title="Telefone"
              iconSrc={<Phone color="#B80000" />}
              altText="Phone Icon"
              info="(702) 555-0122"
            />
            <ContactInfo
              title="E-mail"
              iconSrc={<Mail color="#B80000" />}
              altText="Email Icon"
              info="deanna.curtis@example.com"
            />
          </div>
        </div>

        <Image
          className="absolute w-[150px] h-[238px] bottom-0 left-0"
          alt="Patinha"
          src="/patinha2-1.png"
          width={150}
          height={238}
        />
      </div>
    </div>
  );
};

interface ContactInfoProps {
  title: string;
  iconSrc: ReactNode;
  altText: string;
  info: string;
}

const ContactInfo = ({ title, iconSrc, info }: ContactInfoProps) => {
  return (
    <div>
      <h4 className="font-montserrat font-semibold text-primary100 text-base mb-2">{title}</h4>
      <div className="flex items-center gap-3">
        {iconSrc}
        <span className="font-montserrat font-normal text-primary80 text-base">{info}</span>
      </div>
      <div className="mt-4 border-b border-gray-300"></div>
    </div>
  );
};

export default ContactCard;
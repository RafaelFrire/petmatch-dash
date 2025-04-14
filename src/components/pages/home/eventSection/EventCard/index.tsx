import { FC } from "react";
import { ArrowUpRightIcon } from "lucide-react";

interface EventItem {
  id: number;
  title: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
}

interface EventCardProps {
  event: EventItem;
}

export const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <div className="w-[279px] h-[440px] relative border-2 border-[#b80000] rounded-xl shadow-[0_0_19.1px_2px_rgba(0,0,0,0.25)] bg-white">
      <div className="w-[80px] h-[80px] mt-6 ml-[23px] rounded-full border-2 border-[#b80000] flex items-center justify-center">
        <img className="w-[55px] h-[50px]" src={"/assets/pet_logo.png"} />
      </div>

        <div className="h-8"></div>
      <div className="text-center">
        <h3 className=" text-primary100 text-2xl font-bold">
          {event.title}
        </h3>

        <p className="w-[227px] h-[102px] p-4 mx-auto text-black-100 text-[13px] font-normal font-['Montserrat',Helvetica] tracking-[0.60px] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical]">
          {event.description}
        </p>
        </div>

        <button className="absolute bottom-10 left-1/3 text-center p-0 flex items-center gap-2">
          <span className="font-semibold text-primary100 mx-auto text-base font-['Montserrat',Helvetica]">
            Saiba mais
          </span>
          <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center">
            <ArrowUpRightIcon className="w-5 h-5 text-white" />
          </div>
        </button>

        <img
          className="absolute w-[180px] h-[184px] top-[205px] left-[106px]"
          alt="Isolation mode"
          src="/assets/patinhas_fundo.png"
        />
    </div>
  );
};

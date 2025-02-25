import { BannerImage } from "@/components/Banner";
import TextWithIcon from "@/components/textWithIcon";
import { Ong } from "@/interfaces/ong";
import { formatDateDayMonthYear } from "@/utils/dateStrings";
import { Calendar, User } from "lucide-react";

type HeroArticleProps = {
    srcImage: string;
    publishedDate: Date;
    ong: Ong;
}

export const HeroArticle:React.FC<HeroArticleProps> = ({srcImage, publishedDate, ong}) =>{
    return (
      <div className="w-full max-h-[500] bg-primary100">
        <div className="flex mx-auto  justify-center">
          <BannerImage
            width={900}
            height={400}
            className="w-full max-h-[400px] object-cover rounded-lg"
            src={srcImage}
            //   src="https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg"
          />
        </div>

        <div className="flex py-4 px-4 gap-12">
          <TextWithIcon
            text={formatDateDayMonthYear(publishedDate)}
            icon={<Calendar width={30} height={25} color="#000" />}
          />
          <TextWithIcon
            text={ong.name}
            icon={<User width={30} height={25} color="#000" />}
          />
        </div>
      </div>
    );
}
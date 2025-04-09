import { MapPin, Mail, Phone } from "lucide-react";
import GoogleMap from "../../../googleMap";
import PawDogRed from "@/icons/PawDogRed";
import { phoneMask } from "@/utils/MaskStrings";

const address = {
    location: {
      city: "São Paulo",
      state: "SP",
      zipcode: "01311-000",
      another: "Avenida Paulista, 1000"
    }
  };
type visitSectionProps = {
  ong: {
    city: string;
    state: string;
    zipcode: string;
    another: string;
    time: string;
    phone: string;
    email: string;
  };
};

const VisitSection:React.FC<visitSectionProps> = ({ong}) => {
  return (
    <div className="mt-12">
      <div className="flex">
        <PawDogRed height={30} width={30} />
        <h2 className="text-2xl font-bold text-primary100 mb-6">
          Venhá nos Visitar
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin className="text-sencondary100" />
            <span>{ong?.city || ""} - {ong?.state}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="text-sencondary100" />
            <span>XX@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="text-sencondary100" />
            <span>{phoneMask(ong?.phone || "")}</span>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            A ONG abre TODOS OS DIAS DAS:
          </p>
          {ong?.time}
          {/* <div className="flex space-x-4 pt-4">
            <Facebook className="text-primary100 cursor-pointer" />
            <Instagram className="text-primary100 cursor-pointer" />
            <Youtube className="text-primary100 cursor-pointer" />
          </div> */}
        </div>
        <div className="h-[300px] bg-gray-200 rounded-lg ">
          <GoogleMap location={address?.location} />
        </div>
      </div>
    </div>
  );
};

export default VisitSection;

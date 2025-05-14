import { Search } from "lucide-react";


export default function HeaderInputSearch(){
    return (
      <div className="w-full md:w-1/2">
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Pesquisar"
            className="w-full pl-6 pr-10 py-2.5 border border-primary100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary20"
            onChange={(e) =>
            //   handleSerachEvent && handleSerachEvent(e.target.value)
            console.log(e.target.value)
            }
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-primary80" />
        </div>
      </div>
    );
}
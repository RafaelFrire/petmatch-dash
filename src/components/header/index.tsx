import InputSearch from "./InputSearch";


const Header = () =>{
    return (
      <header className="py-4">
        <div className="flex justify-center">
          <InputSearch 
          placeholder="Encontre o seu pet"
          />

        </div>
      </header>
    );
}


export default Header;
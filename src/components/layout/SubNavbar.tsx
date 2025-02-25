import MegaMenu from "./MegaMenu";

// SubNavbar.tsx
const SubNavbar = () => {
    return (
      <div className="bg-white text-black py-2 border-b border-gray-300">
        <div className="max-w mx-auto flex justify-start items-center px-9">
          <div className="flex space-x-8 ">
            
            <button className="text-base">Landoclub</button>
            <MegaMenu/>
            <button className="text-base">Novedades</button>
         
         
            <button className="text-base">Contactar</button>
            <button className="text-base">Soporte</button>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default SubNavbar;
  
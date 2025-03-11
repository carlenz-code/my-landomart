// SubNavbar.tsx
import MegaMenu from "./MegaMenu";

interface SubNavbarProps {
  categories: { name: string; subcategories: string[] }[];
}


const SubNavbar = ({ categories }: SubNavbarProps) => {
  const quickAccessCategories = categories.slice(0, 9); // Solo las primeras 5 categorías

  return (
    <div className="bg-yellow-50 text-black py-2">
      <div className="max-w mx-auto flex justify-start items-center px-6 ">
        <div className="flex space-x-6">
          <MegaMenu categories={categories} />
          <div className="border-r border-black h-6"></div>
          {quickAccessCategories.map((category, index) => (
            <button key={index} className="text-base">
              {category.name} {/* Solo usamos el nombre */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
import { CSSProperties } from "react";

interface Category {
  id: number;
  name: string;
  image: string;
  subcategories: string[];
}

interface CategoryCardProps {
  category: Category;
  style?: CSSProperties;
}

const CategoryCard = ({ category, style }: CategoryCardProps) => {
  const isImageValid = category.image && category.image.trim() !== "";

  return (
    <div className="flex-shrink-0 w-[150px] h-[180px]" style={style}>
      <div className="bg-[#FFF7E6] rounded-2xl h-full flex flex-col items-center justify-center p-4">
        <div className="w-24 h-24 flex items-center justify-center mb-2">
          {isImageValid ? (
            <img
              src={category.image}
              alt={category.name}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
              <span className="text-xs text-gray-500">Sin imagen</span>
            </div>
          )}
        </div>
        <p className="text-[12px] font-medium text-black text-center">
          {category.name}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
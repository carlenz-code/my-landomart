import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface CarouselHeaderProps {
  title: string;
  onPrev: () => void;
  onNext: () => void;
  onViewAll?: () => void; // Prop opcional para manejar la acción de "Ver todo"
}

const CarouselHeader = ({ title, onPrev, onNext, onViewAll }: CarouselHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="flex space-x-2">
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="bg-yellow-100 px-3 py-2 rounded-full hover:bg-yellow-200 focus:outline-none text-sm font-medium text-yellow-800"
            aria-label="Ver todo"
          >
            Ver todo
          </button>
        )}
        <button
          onClick={onPrev}
          className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-200 focus:outline-none"
          aria-label="Anterior"
        >
          <ChevronLeftIcon className="h-5 w-5 text-yellow-600" />
        </button>
        <button
          onClick={onNext}
          className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-200 focus:outline-none"
          aria-label="Siguiente"
        >
          <ChevronRightIcon className="h-5 w-5 text-yellow-600" />
        </button>
      </div>
    </div>
  );
};

export default CarouselHeader;
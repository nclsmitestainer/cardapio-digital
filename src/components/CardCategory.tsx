import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { useData } from '../contexts/UserContext';

interface CardCategoryProps {
  category: string;
  icon: ReactNode;
  value?: string;
  className?: string;
}

const CardCategory = ({ category, icon, className, value }: CardCategoryProps) => {
  const { setCategoryActive } = useData()

  return (
    <button
      value={value}
      className={twMerge(
        'flex items-center bg-[#222325] rounded-xl flex-none max-h-[84px] hover:bg-red-600 transition-all duration-300',
        className
      )}
      onClick={(e) => setCategoryActive(e.currentTarget.value)}
    >
      <div className="p-4 m-2 bg-black rounded-full flex items-center justify-center">
        {icon}
      </div>
      <span className="text-white my-7 mr-5 ml-1 text-lg">{category}</span>
    </button>
  );
};

export default CardCategory;

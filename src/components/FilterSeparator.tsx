import { ReactNode } from 'react';

interface FilterSeparatorProps {
  name: string;
  children: ReactNode;
}

const FilterSeparator = ({ name, children }: FilterSeparatorProps) => {
  return (
    <div className="flex flex-col flex-none">
      <span className="uppercase font-bold text-xs mb-2 text-[#6d6d6da6] pl-4">
        {name}
      </span>
      <div className="flex border-l-2 border-[#6d6d6da6] gap-4 pl-4 pr-4">
        {children}
      </div>
    </div>
  );
};

export default FilterSeparator;

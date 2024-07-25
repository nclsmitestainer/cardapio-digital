import { useRef } from 'react';
import CardCategory from './CardCategory';

// Icons
import Arrow from '../assets/arrow.svg';
import Hand from '../assets/hand.svg';
import Hamburguer from '../assets/hamburguer.svg';
import Frango from '../assets/frango.svg';
import Frances from '../assets/frances.svg';
import HotDog from '../assets/hotdog.svg';
import Porcoes from '../assets/porcoes.svg';
import Juice from '../assets/juice.svg';
import Drinks from '../assets/drink.svg';
import Sobremesa from '../assets/sobremesa.svg';
import Beer from '../assets/beer.svg';
import Refrigerante from '../assets/refrigerante.svg';
import FilterSeparator from './FilterSeparator';

const Filter = () => {
  const carousel = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex relative flex-col justify-between my-5">
      <button
        onClick={() =>
          carousel.current?.scrollLeft &&
          (carousel.current.scrollLeft -= carousel.current.offsetWidth)
        }
        className="bg-[#161618] w-10 h-10 rounded-full p-2 flex justify-center items-center absolute inset-button-arrow my-auto mx-0 border-2 border-[#b4b4b41a]"
      >
        <Arrow />
      </button>

      <div
        className="flex overflow-x-scroll no-scrollbar flex-nowrap items-end scroll-smooth"
        ref={carousel}
      >
        <div className="min-w-8 h-px"></div>
        <CardCategory category="Todas" icon={<Hand />} className="mr-4" />

        <FilterSeparator name="lanches">
          <CardCategory value='hamburguer' category="Pão de hamburguer" icon={<Hamburguer />} />
          <CardCategory value='frances' category="Pão francês" icon={<Frances />} />
          <CardCategory value='frango' category="Frango" icon={<Frango />} />
          <CardCategory value='gourmet' category="Gourmet" icon={<Hamburguer />} />
        </FilterSeparator>

        <FilterSeparator name='hot dogs'>
          <CardCategory value='hot-dog' category='Hot Dogs' icon={<HotDog />} />
        </FilterSeparator>

        <FilterSeparator name='porções'>
          <CardCategory value='porcoes' category='Porções' icon={<Porcoes />} />
        </FilterSeparator>

        <FilterSeparator name='bebidas'>
          <CardCategory value='sucos' category="Sucos" icon={<Juice />} />
          <CardCategory value='refrigerantes' category="Refrigerantes" icon={<Refrigerante />} />
          <CardCategory value='drinks' category="Drinks" icon={<Drinks />} />
          <CardCategory value='cervejas' category="Cervejas" icon={<Beer />} />
        </FilterSeparator>

        <FilterSeparator name='sobremesas'>
          <CardCategory value='sobremesas' category="Sobremesas" icon={<Sobremesa />} />
        </FilterSeparator>

        <div className="min-w-4 h-px"></div>
      </div>

      <button
        onClick={() =>
          carousel.current?.offsetWidth &&
          (carousel.current.scrollLeft += carousel.current.offsetWidth)
        }
        className="rotate-180 bg-[#161618] w-10 h-10 rounded-full p-2 flex justify-center items-center absolute top-[calc(50%-36px)] bottom-0 my-auto mx-0 border-2 border-[#b4b4b41a] left-[calc(100%-52px)]"
      >
        <Arrow />
      </button>
    </div>
  );
};

export default Filter;

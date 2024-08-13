const SearchBar = () => {
  return (
    <div className="drop-shadow-default flex w-full items-center justify-end">
      <div className="flex flex-1 px-4 py-2 mx-3 rounded-lg bg-[#222325] ml-4 lg:ml-10">
        <input
          className="w-full border-0 bg-transparent text-[#a8a8a8] outline-none"
          type="text"
          placeholder="Pesquisar"
        />
      </div>

      <div className="flex flex-col items-center h-24 justify-center lg:justify-end bg-[#222325] text-white rounded-bl-lg rounded-br-lg mr-2 lg:mr-7 px-2 lg:p-4">
        <span>Pedido mínimo:</span>
        <strong>R$&nbsp;15,00</strong>
      </div>
    </div>
  );
};

export default SearchBar;

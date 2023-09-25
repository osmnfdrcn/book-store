const SearchInput = ({
  searchKey,
  setSearchKey,
}: {
  searchKey: string;
  setSearchKey: (v: string) => void;
}) => {
  return (
    <div className="flex items-center w-full justify-center    bg-white rounded-lg ">
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchKey(e.target.value)
        }
        value={searchKey}
        className="px-2 py-4 rounded-lg  w-full text-sm text-slate-800 outline-none focus:border-rose-300 bg-white"
        placeholder="Bir kitap ya da yazar adi giriniz..."
        autoFocus
      />
      <button className="flex items-center justify-center px-4  -ml-1 bg-white">
        <svg
          className="w-4 h-4 text-gray-800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;

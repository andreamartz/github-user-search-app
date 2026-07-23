import Image from 'next/image';

function SearchBar() {
  return (
    <form className="flex w-full items-center pl-150 md:pl-300 pr-150 py-[.65625rem] bg-neutral-0 rounded-16
      shadow-all-500">
      <div className="flex gap-100 md:gap-250 flex-1 min-w-0 h-250 md:h-325">
        <div className="relative aspect-square w-250 h-250 md:w-300 md:h-300">
          <Image src="/assets/icon-search.svg"
            alt=""
            fill
            className="flex-none"
          />
        </div>
        <input aria-label="Search GitHub username"
          name="username"
          type="text"
          placeholder="Search GitHub username…"
          className="grow text-preset-3-mobile text-neutral-500 md:text-preset-3"
        />
      </div>
      <button type="submit"
        className="flex-none w-24.75 md:w-auto px-250 md:px-300 py-150
          bg-blue-500 text-preset-5 rounded-10 text-neutral-0">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
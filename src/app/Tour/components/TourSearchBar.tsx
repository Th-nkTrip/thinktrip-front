// components/TourSearchBar.tsx

type TourSearchBarProps = {
  keyword: string;
  setKeyword: (value: string) => void;
  onSearch: () => void;
  onReset: () => void;
  isSearching: boolean;
};

export default function TourSearchBar({
  keyword,
  setKeyword,
  onSearch,
  onReset,
  isSearching,
}: TourSearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <button onClick={onSearch}>검색</button>
      {isSearching && (
        <button onClick={onReset} className="reset-btn">
          전체 보기
        </button>
      )}
    </div>
  );
}

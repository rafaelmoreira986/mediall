"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

interface SearchContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const SearchContext = createContext<SearchContextType>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SearchContext.Provider
      value={{ isOpen, toggle: () => setIsOpen((v) => !v), close: () => setIsOpen(false) }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default function SearchOverlay() {
  const { isOpen, close } = useSearch();

  return (
    <div className={`module-content module-fullscreen module-search-box ${isOpen ? "active" : ""}`}>
      <div className="pos-vertical-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <form className="form-search" onSubmit={(e) => e.preventDefault()}>
                <input className="form-control" type="text" placeholder="type words then enter" />
                <button type="submit"></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <a
        className="module-cancel"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close();
        }}
      >
        <i className="fas fa-times"></i>
      </a>
    </div>
  );
}

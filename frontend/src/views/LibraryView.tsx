import { ReactElement, useState } from "react";
import { PagePath } from "../constants/paths/PagePath.ts";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Library from "./components/Library.tsx";
import SearchBar from "./components/SearchBar.tsx";

export default function LibraryView(): ReactElement<HTMLDivElement> {
    const [search, setSearch] = useState<string>("");

    return <div className="libraryView">
        <Header currentPage={PagePath.LIBRARY} />
        <div className="libraryContainer">
            <SearchBar setSearch={setSearch} />
            <Library search={search} />
        </div>
        <Footer />
    </div>
}

import { ChangeEvent, ReactElement } from "react";
import { TextContent } from "../../constants/texts/TextContent.ts";

export default function SearchBar({ setSearch }: { setSearch: React.Dispatch<React.SetStateAction<string>> }): ReactElement<HTMLDivElement> {

    const handleChange = (e: ChangeEvent): void => {
        setSearch((e.target as HTMLInputElement).value);
    }

    return <div className="searchBarLibrary">
        <div className="searchBarContainer">
            <img src="./assets/icons/zoom.svg" alt="zoom" />
            <input className="searchBarInput text-small-blackBasic" type="text" placeholder={TextContent.SEARCHBAR_PLACEHOLDER} onChange={handleChange} />
        </div>
    </div>
}

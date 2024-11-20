import {Suspense} from "react";
import AnimatedSpinner from "@/components/common/AnimatedSpinner.jsx";
import SearchResults from "@/components/search/SearchResult.jsx";

const Search = () => {
  return (
    <div>
      <Suspense fallback={<AnimatedSpinner/>}>
        <SearchResults/>
      </Suspense>
    </div>
  );
};

export default Search;
import { FiSearch } from "react-icons/fi";
import {GrClose} from "react-icons/gr"
const Search = ({setOpenSearchBar}) => {
    return (  
        <div className="searchbar">
             <FiSearch className="fisearchbar" />
            <input placeholder="Type here to search" type="text"/>
            <GrClose className="ficlose" onClick={()=>{setOpenSearchBar(false)}}/>
            
        </div>
    );
}
 
export default Search;
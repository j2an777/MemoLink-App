import { useEffect, useState } from "react";
import { STWrapper, ScriptImg, ScriptSearch, SearchContainer } from "./ScriptTopStyles";
import { useAppDispatch } from "../../../hooks/redux";
import { setSearchFileName } from "../../../Store/SearchStore/searchSlice";
import { useDebounce } from "../../../hooks/useDebounce";

export default function ScriptTop() {

  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    dispatch(setSearchFileName(debouncedValue));
  }, [debouncedValue, dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
  };
  
  return (
    <STWrapper>
        <SearchContainer>
          <ScriptSearch
            type = "text"
            name = "search"
            value = { value }
            onChange={ onChange }
            placeholder="노트 제목 입력"/>
          <ScriptImg>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.2 42L26.6 29.4C25.6 30.2 24.45 30.8333 23.15 31.3C21.85 31.7667 20.4667 32 19 32C15.3667 32 12.292 30.7413 9.776 28.224C7.26 25.7067 6.00133 22.632 6 19C6 15.3667 7.25867 12.292 9.776 9.776C12.2933 7.26 15.368 6.00133 19 6C22.6333 6 25.7087 7.25867 28.226 9.776C30.7433 12.2933 32.0013 15.368 32 19C32 20.4667 31.7667 21.85 31.3 23.15C30.8333 24.45 30.2 25.6 29.4 26.6L42 39.2L39.2 42ZM19 28C21.5 28 23.6253 27.1253 25.376 25.376C27.1267 23.6267 28.0013 21.5013 28 19C28 16.5 27.1253 14.3753 25.376 12.626C23.6267 10.8767 21.5013 10.0013 19 10C16.5 10 14.3753 10.8753 12.626 12.626C10.8767 14.3767 10.0013 16.5013 10 19C10 21.5 10.8753 23.6253 12.626 25.376C14.3767 27.1267 16.5013 28.0013 19 28Z" fill="#CCCCCC"/>
            </svg>
          </ScriptImg>
        </SearchContainer>
    </STWrapper>
  )
}

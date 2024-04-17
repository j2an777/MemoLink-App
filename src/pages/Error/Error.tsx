import { Link } from "react-router-dom";
import { ErrorBottom, ErrorBtn, ErrorContent, ErrorP1, ErrorP2, ErrorTop, ErrorWrapper } from "./ErrorStyles";

export default function Error() {
  return (
    <ErrorWrapper>
        <ErrorTop>
            <ErrorP1>4</ErrorP1>
            <img src="/404.gif" />
            <ErrorP2>4</ErrorP2>
        </ErrorTop>
        <ErrorBottom>
            <ErrorContent>Page not found.</ErrorContent>
            <Link to="/">
                <ErrorBtn>Home</ErrorBtn>
            </Link>
        </ErrorBottom>
    </ErrorWrapper>
  )
}

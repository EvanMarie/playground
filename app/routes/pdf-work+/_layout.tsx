import { Outlet } from "@remix-run/react";
import MainPageContentContainer from "../building/mainPageContainer";

export default function PdfWorkLayout() {
  return (
    <MainPageContentContainer>
      <Outlet />
    </MainPageContentContainer>
  );
}

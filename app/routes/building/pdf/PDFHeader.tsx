import { PDFFlex } from "./pdfBuildingBlocks";
import { PDFHStack } from "./pdfBuildingBlocks";
import { PDFCenter } from "./pdfBuildingBlocks";
import { Image, Text } from "@react-pdf/renderer";

export function PDFHeader() {
  return (
    <>
      {" "}
      <PDFFlex
        style={{
          position: "absolute",
          top: "12.5px",
          right: "45px",
          height: "15px",
        }}
      >
        <Image
          src="/images/pdf-lumi.png"
          style={{
            width: "auto",
            height: "13px",
          }}
        />
      </PDFFlex>
      <PDFHStack
        style={{
          alignItems: "end",
          position: "absolute",
          borderBottom: "1px solid #473d4a",
          paddingRight: "40px",
          paddingLeft: "10px",
          top: "15px",
          right: "40px",
        }}
      >
        <PDFFlex
          style={{
            height: "100%",
            alignItems: "end",
          }}
        >
          <Text style={{ fontSize: "9px" }}>learnwithlumi.com</Text>
        </PDFFlex>
      </PDFHStack>
    </>
  );
}

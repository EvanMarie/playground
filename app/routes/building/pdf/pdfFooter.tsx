import { PDFFlex } from "./pdfBuildingBlocks";

import { PDFHStack } from "./pdfBuildingBlocks";

import { PDFCenter } from "./pdfBuildingBlocks";
import { Image, Text } from "@react-pdf/renderer";

export function PDFFooter() {
  return (
    <>
      {" "}
      <PDFFlex
        style={{
          position: "absolute",
          bottom: "20px",
          left: "40px",
          height: "25px",
        }}
      >
        <Image
          src="/images/pdf-lumi.png"
          style={{
            width: "auto",
            height: "25px",
          }}
        />
      </PDFFlex>
      <PDFCenter
        style={{
          width: "100%",
          position: "absolute",
          bottom: "20px",
          right: "0px",
          left: "0px",
        }}
      >
        <PDFHStack
          style={{
            justifyContent: "space-between",
            width: "100%",
            alignItems: "end",
            borderBottom: "1px solid #473d4a",
            padding: "0px 50px 0px 100px",
          }}
        >
          <PDFHStack
            style={{
              alignItems: "end",

              position: "relative",
            }}
          >
            <PDFFlex
              style={{
                height: "100%",
                alignItems: "end",
              }}
            >
              <Text style={{ fontSize: "8px" }}>
                Learn with Lumi - learnwithlumi.com
              </Text>
            </PDFFlex>
          </PDFHStack>
          <Text style={{ fontSize: "8px", lineHeight: 1 }}>
            © 2025 DarkViolet.ai LLC
          </Text>
        </PDFHStack>
      </PDFCenter>
    </>
  );
}

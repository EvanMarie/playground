import { Text } from "@react-pdf/renderer";
import { PDFHStack, PDFHStackFull } from "./pdfBuildingBlocks";

export default function PDFCertificealLabelValue({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <PDFHStack
      style={{
        gap: "5px",
        justifyContent: "center",
        fontSize: "16px",
        lineHeight: 1.4,
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto-Bold",
        }}
      >
        {label}:{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Roboto-Semibold",
        }}
      >
        {value}
      </Text>
    </PDFHStack>
  );
}

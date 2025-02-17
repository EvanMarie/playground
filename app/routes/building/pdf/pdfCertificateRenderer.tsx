import { ReactNode, useState, useEffect } from "react";
import { Page, View, StyleSheet, Document, pdf } from "@react-pdf/renderer";
import fileSaver from "file-saver";
import { Font } from "@react-pdf/renderer";
import { FaFilePdf } from "react-icons/fa";
import { smallButtonIconSizes, smallButtonPadding } from "styles";
import { TooltipPlacement } from "~/buildingBlockComponents/tooltip";
import { PDFHeader } from "./PDFHeader";
import { Box } from "~/buildingBlockComponents/mainContainers";
import ModuleIconButton, { ModuleTextButton } from "../moduleButtons";
import { PDFFooter } from "./pdfFooter";

Font.register({
  family: "Roboto",
  src: "/fonts/Roboto-Regular.ttf",
});

Font.register({
  family: "Roboto-Medium",
  src: "/fonts/Roboto-Medium.ttf",
});

Font.register({
  family: "Roboto-Bold",
  src: "/fonts/Roboto-Bold.ttf",
});

Font.register({
  family: "Roboto-Thin",
  src: "/fonts/Roboto-Thin.ttf",
});

Font.register({
  family: "Roboto-Semibold",
  src: "/fonts/Roboto-Semibold.ttf",
});

Font.register({
  family: "Cursive",
  src: "/fonts/Satisfy-Regular.ttf",
});

interface PDFContainerProps {
  children?: ReactNode;
  fileName?: string;
  title?: string;
  author?: string;
  subject?: string;
  creator?: string;
  keywords?: string;
  producer?: string;
  language?: string;
  isWorksheet?: boolean;
  buttonText?: string;
  onClick?: () => void;
  width?: string;
  iconSize?: string;
  padding?: string;
  disabled?: boolean;
  isSmallSizes?: boolean;
  tooltipLabel?: string;
  tooltipPosition?: TooltipPlacement;
  isSmall?: boolean;
}

export function PDFInnerContainer({ children }: { children: ReactNode }) {
  const sectionStyles = StyleSheet.create({
    section: {
      backgroundColor: "transparent",
      fontColor: "black",
      fontSize: "10px",
      lineHeight: "13px",
    },
  });
  return <View style={sectionStyles.section}>{children}</View>;
}

const PDFCertificateRender = ({
  buttonText,
  children,
  fileName = "learn-with-lumi-course-certificate.pdf",
  title = "Course Certificate",
  author = "Learn with Lumi, © DarkViolet.ai 2025",
  subject = "Learn with Lumi - educational resource",
  creator = "© Learn with Lumi",
  keywords = "education, learning, Learn with Lumi, eduTech, innovative education",
  producer = "Learn with Lumi",
  language = "en",
  onClick,
  width,
  isSmallSizes,
  iconSize = isSmallSizes ? smallButtonIconSizes : undefined,
  padding = isSmallSizes ? smallButtonPadding : undefined,
  disabled,
  tooltipLabel,
  tooltipPosition,
  isSmall,
}: PDFContainerProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const pageStyles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "transparent",
      fontFamily: "Roboto",
      padding: "0.4in 0.6in 0.5in 0.6in",
      position: "relative",
    },

    fixedFooter: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },

    fixedHeader: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
  });

  const downloadCertificatePDF = async () => {
    const doc = (
      <Document
        author={author}
        creator={creator}
        title={title}
        subject={subject}
        keywords={keywords}
        producer={producer}
        language={language}
        creationDate={new Date()}
      >
        <Page size="LETTER" orientation="landscape" style={pageStyles.page}>
          <PDFInnerContainer>{children}</PDFInnerContainer>
          <View fixed style={pageStyles.fixedHeader}>
            <PDFHeader />
          </View>
          <View fixed style={pageStyles.fixedFooter}>
            <PDFFooter />
          </View>
        </Page>
      </Document>
    );
    const asBlob = await pdf(doc).toBlob();
    fileSaver.saveAs(asBlob, fileName);
  };

  const handleClick = async () => {
    try {
      if (onClick) {
        onClick();
      }
      await downloadCertificatePDF();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <Box className={`pointer-events-auto ${width}`}>
      {buttonText ? (
        <ModuleTextButton
          onClick={handleClick}
          icon={FaFilePdf}
          label={buttonText}
          width={width}
          iconSize={iconSize}
          padding={padding}
          disabled={disabled}
        />
      ) : (
        <ModuleIconButton
          onClick={() => {
            void downloadCertificatePDF();
          }}
          icon={FaFilePdf}
          iconSize={
            iconSize ? iconSize : isSmall ? smallButtonIconSizes : undefined
          }
          padding={padding ? padding : isSmall ? smallButtonPadding : undefined}
          disabled={disabled}
          tooltipLabel={
            tooltipLabel === ""
              ? tooltipLabel
              : tooltipLabel
              ? tooltipLabel
              : "download"
          }
          tooltipPlacement={tooltipPosition as TooltipPlacement}
        />
      )}
    </Box>
  );
};

export default PDFCertificateRender;

import { Image, Link, Text, View } from "@react-pdf/renderer";

export type BulletList = {
  heading?: string;
  list: string[];
  code?: string[];
};

export interface Passage {
  slug: string;
  title: string;
  videoId?: string;
  paragraphs: string[];
}

export type LinkData = {
  link: string;
  text: string;
};

export function PDFVStack({
  children,
  gap,
  width,
  style,
}: {
  children: React.ReactNode;
  gap?: string;
  width?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: width,
        display: "flex",
        flexDirection: "column",
        gap: gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function PDFVStackFull({
  children,
  gap,
  style,
}: {
  children: React.ReactNode;
  gap?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function PDFFlexFull({
  children,
  style,
}: {
  children: React.ReactNode;
  gap?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function PDFFlex({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function PDFHStack({
  children,
  style,
  width,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  width?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: width,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function PDFHStackFull({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function PDFDivider({
  width = "100%",
  height = "1px",
  color = "black",
  marginBottom = "7px",
  marginTop = "7px",
  style,
}: {
  width?: string;
  height?: string;
  color?: string;
  marginBottom?: string;
  marginTop?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: width,
        height: height,
        backgroundColor: color,
        marginBottom: marginBottom,
        marginTop: marginTop,
        ...style,
      }}
    />
  );
}

export function PDFCenter({
  width,
  height,
  children,
  style,
}: {
  width?: string;
  height?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function PDFWritingLine() {
  return (
    <div
      style={{
        color: "transparent",
        borderBottom: "1px solid black",
        width: "100%",
        paddingTop: "22px",
      }}
    >
      This is an empty line
    </div>
  );
}

export function PDFQuestionNumber({ index }: { index: number }) {
  return (
    <PDFHStack
      style={{
        alignItems: "flex-start",
        height: "100%",
        gap: "5px",
      }}
    >
      <div style={{ paddingRight: "10px" }}>
        <PDFCenter
          width="16px"
          height="16px"
          style={{
            backgroundColor: "lightcyan",
            borderRadius: "50%",
            border: "0.5px solid black",
          }}
        >
          <Text style={{ fontSize: "6px", fontFamily: "Roboto-Medium" }}>
            {index + 1}.
          </Text>
        </PDFCenter>
      </div>
    </PDFHStack>
  );
}

export function PDFBulletPoint() {
  return (
    <PDFCenter width="13px" height="13px">
      <div
        style={{
          height: "4px",
          width: "4px",
          borderRadius: "2px",
          color: "transparent",
          backgroundColor: "darkgray",
        }}
      >
        .
      </div>
    </PDFCenter>
  );
}

export function PDFBulletList({ bulletList }: { bulletList: BulletList }) {
  return (
    <PDFVStackFull
      style={{
        gap: "5px",
      }}
    >
      <PDFHStackFull style={{ alignItems: "center", gap: "5px" }}>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            display: "flex",
            flexShrink: 0,
          }}
        >
          {bulletList.heading}
        </Text>
      </PDFHStackFull>
      <PDFVStackFull
        style={{
          gap: "0px",
          paddingLeft: "15px",
        }}
      >
        {bulletList.list.map((item, index) => (
          <PDFHStack style={{ alignItems: "center" }} key={index}>
            <PDFBulletPoint />
            <Text>{item}</Text>
          </PDFHStack>
        ))}
      </PDFVStackFull>
    </PDFVStackFull>
  );
}

export function PDFSectionHeader({ title }: { title: string }) {
  return (
    <PDFHStackFull
      style={{
        justifyContent: "space-between",
        paddingTop: "12px",
        paddingBottom: "6px",
        alignItems: "center",
      }}
    >
      <PDFDivider width="35%" marginBottom="0px" marginTop="0px" />
      <PDFFlex
        style={{ width: "30%", justifyContent: "center", textAlign: "center" }}
      >
        <Text
          style={{
            fontFamily: "Roboto-Bold",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          {title}
        </Text>
      </PDFFlex>
      <PDFDivider width="35%" marginBottom="0px" marginTop="0px" />
    </PDFHStackFull>
  );
}

export function PDFLinks({ linkList }: { linkList: LinkData[] }) {
  return (
    <PDFVStackFull
      style={{
        gap: "5px",
      }}
    >
      <PDFSectionHeader title="Assignment Links" />
      <PDFVStackFull
        style={{
          gap: "5px",
        }}
      >
        {linkList?.map((link, index) => (
          <PDFVStackFull key={index}>
            <PDFHStackFull style={{ gap: "2px" }}>
              <PDFBulletPoint />
              <Text style={{ fontFamily: "Roboto-Medium" }}>{link.text}</Text>
            </PDFHStackFull>
            <PDFFlexFull style={{ paddingLeft: "25px" }}>
              <Text>
                <Link src={link.link}>{link.link}</Link>
              </Text>
            </PDFFlexFull>
          </PDFVStackFull>
        ))}
      </PDFVStackFull>
    </PDFVStackFull>
  );
}

export function PDFSectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View wrap={false}>
      <PDFFlexFull style={{ minHeight: "75px", alignItems: "flex-start" }}>
        {children}
      </PDFFlexFull>
    </View>
  );
}

export function PDFBookmark({ title }: { title: string }) {
  // @ts-ignore
  return <Text bookmark={{ title: title }} />;
}

export function PDFSignatureLine({
  signatureLabel,
}: {
  signatureLabel: string;
}) {
  return (
    <PDFVStack
      style={{
        gap: "5px",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: "45%",
      }}
    >
      <Text
        style={{
          width: "100%",
          borderBottom: "1px solid black",
          borderRadius: "0px",
          color: "transparent",
        }}
      >
        .
      </Text>
      <PDFFlexFull style={{ justifyContent: "flex-end" }}>
        <Text style={{ fontSize: "8px" }}>{signatureLabel}</Text>
      </PDFFlexFull>
    </PDFVStack>
  );
}

export function PDFVideoElement({ videoId }: { videoId: string }) {
  const videoLink = `https://youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return (
    <PDFVStackFull
      style={{
        gap: "5px",
      }}
    >
      <PDFSectionHeader title="Assignment Video" />
      <PDFVStackFull>
        <PDFHStackFull style={{ gap: "2px" }}>
          <PDFBulletPoint />
          <Text style={{ fontFamily: "Roboto-Medium" }}>Assignment Video:</Text>
          {/* <PDFFlexFull style={{ justifyContent: "center" }}>
            <Image
              src={thumbnailUrl}
              style={{
                width: "25%",
                height: "auto",
                objectFit: "contain",
                border: "1px solid black",
              }}
            />
          </PDFFlexFull> */}
        </PDFHStackFull>
        <PDFFlexFull style={{ paddingLeft: "25px" }}>
          <Text>
            <Link src={videoLink}>{videoLink}</Link>
          </Text>
        </PDFFlexFull>
      </PDFVStackFull>
    </PDFVStackFull>
  );
}

export function PDFPassage({ passage }: { passage: Passage }) {
  return (
    <PDFVStackFull>
      <Text style={{ fontSize: "13px", fontFamily: "Roboto-Medium" }}>
        {passage.title}
      </Text>
      <PDFVStackFull
        gap="5px"
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        {passage.paragraphs.map((paragraph, index) => (
          <View key={index} wrap={false}>
            <Text>{paragraph}</Text>
          </View>
        ))}
      </PDFVStackFull>
    </PDFVStackFull>
  );
}

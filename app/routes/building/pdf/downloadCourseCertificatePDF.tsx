import {
  PDFSignatureLine,
  PDFVStack,
  PDFVStackFull,
} from "./pdfBuildingBlocks";
import PDFCertificateRender from "./pdfCertificateRenderer";
import { Image, Text } from "@react-pdf/renderer";

export default function DownloadCourseCertificatePDF() {
  const student = {
    details: {
      firstName: "Johnny",
      lastName: "Lemon",
      defaultSchoolName: "The Giant Lemon School",
    },
  };
  const classCourse = {
    teacher: {
      details: {
        firstName: "Evelyn",
        lastName: "Lemon",
      },
    },
  };
  const course = {
    title: "Adventures in Mathematics",
    subject: "Mathematics",
  };
  const studentCourse = {
    completedOn: new Date(),
    gradeLevel: 8,
    finalGrade: 95,
  };
  return (
    <PDFCertificateRender>
      <PDFVStackFull>
        {/* ********** LOGO ********** */}

        <Image
          src="/images/lwllogo-sm.jpg"
          style={{
            width: "125px",
            height: "auto",
            borderRadius: "5px",
            position: "absolute",
            top: "0px",
            left: "0px",
            border: "2px solid black",
          }}
        />

        <PDFVStackFull
          style={{
            textAlign: "center",
            fontFamily: "Roboto-Bold",
            height: "100%",
            justifyContent: "space-between",
            padding: "60px 10px 15px 10px",
            alignItems: "center",
          }}
        >
          <PDFVStackFull style={{ gap: "30px", alignItems: "center" }}>
            {/* ********** HEADER TEXT ********** */}
            <PDFVStack style={{ gap: "5px", alignItems: "center" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Cursive",
                  fontSize: "50px",
                  lineHeight: 1,
                }}
              >
                Certificate of Completion
              </Text>
            </PDFVStack>

            {/* ************ MAIN CERTIFICATE CONTENT ************ */}
            <PDFVStack
              style={{
                gap: "20px",
                alignItems: "center",
                width: "85%",
              }}
            >
              <PDFVStackFull style={{ gap: "6px" }}>
                <Text
                  style={{
                    fontSize: "18px",
                    lineHeight: 1,
                    fontFamily: "Roboto-Medium",
                    textAlign: "center",
                  }}
                >
                  This is to certify that
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Cursive",
                    fontSize: "40px",
                    lineHeight: 1,
                  }}
                >
                  {`${student?.details?.firstName} ${student?.details?.lastName}`}
                </Text>{" "}
              </PDFVStackFull>
              <Text
                style={{
                  fontSize: "18px",
                  lineHeight: 1,
                  fontFamily: "Roboto-Medium",
                  textAlign: "center",
                }}
              >
                has successfully completed
              </Text>
              {/* ************ COURSE INFO ************ */}
              <PDFVStack style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: "40px",
                    fontFamily: "Cursive",
                    textAlign: "center",
                    lineHeight: 1,
                  }}
                >
                  {course?.title}
                </Text>
                <Text
                  style={{
                    fontSize: "18px",
                    fontFamily: "Roboto-Medium",
                    textAlign: "center",
                  }}
                >
                  {`a Learn with Lumi ${course?.subject} Course`}
                </Text>
              </PDFVStack>

              {/* ************ TWO DETAILS LINE ************ */}
              <PDFVStack style={{ gap: "3px", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: "15px",
                    lineHeight: 1,
                    fontFamily: "Roboto-Medium",
                    textAlign: "center",
                  }}
                >
                  with a final grade of{" "}
                  <Text style={{ fontSize: "15px" }}>
                    {studentCourse?.finalGrade}% at{" "}
                    {student?.details?.defaultSchoolName}
                  </Text>
                </Text>

                <Text
                  style={{
                    fontSize: "15px",
                    lineHeight: 1,
                    fontFamily: "Roboto-Medium",
                    textAlign: "center",
                  }}
                >
                  on{" "}
                  {studentCourse?.completedOn?.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  under the guidance of{" "}
                  {`${classCourse?.teacher?.details?.firstName} ${classCourse?.teacher?.details?.lastName}`}
                  .
                </Text>
              </PDFVStack>
            </PDFVStack>
          </PDFVStackFull>

          {/* ********** CERTIFICATE SIGNATURE ********** */}

          <PDFSignatureLine signatureLabel="Teacher's Signature" />
        </PDFVStackFull>
      </PDFVStackFull>
    </PDFCertificateRender>
  );
}

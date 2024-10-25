/* eslint-disable react/no-unescaped-entities */
import {
  textShadows,
  allColors,
  allColorsRGB,
  gradients,
  col100Bgs,
  col200Bgs,
  col300Bgs,
  col400Bgs,
  col500Bgs,
  col600Bgs,
  col700Bgs,
  col800Bgs,
  col900Bgs,
  shadowsDarkBack,
  shadowsLightBack,
  textStrokeDarkBg,
  textStrokeLightBg,
  textExamples,
  transitions,
  colors100,
} from "./data";
import { GoSmiley } from "react-icons/go";
import { useLocation } from "@remix-run/react";
import { NavLink } from "react-router-dom";
import Heading from "~/buildingBlockComponents/headingText";
import Button from "~/buildingBlockComponents/button";
import IconButton from "~/buildingBlockComponents/iconButton";
import Text from "~/buildingBlockComponents/text";
import { HomeIcon } from "styles";
import {
  Box,
  Flex,
  FlexFull,
  HStackFull,
  TransitionFull,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import AnimatedIconButton from "~/buildingBlockComponents/animatedIconButton";
import Accordion from "~/buildingBlockComponents/accordion";
import { FaCubesStacked } from "react-icons/fa6";
import Icon from "~/buildingBlockComponents/icon";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlStar } from "react-icons/sl";
import { PiStarBold } from "react-icons/pi";

interface CustomNavLinkProps {
  to: string;
  linkText?: string;
  textClassName?: string;
  activeStyles?: string;
  inactiveStyles?: string;
  useHash?: boolean;
  useActive?: boolean;
  className?: string;
  target?: string;
}

interface ColoredListItemProps {
  fileName: string;
  headingClassName?: string;
  description: string;
  isSub?: boolean;
}

export const ColoredListItem: React.FC<ColoredListItemProps> = ({
  fileName,
  headingClassName = "text-col-pink",
  description,
  isSub = false,
}) => {
  return (
    <li>
      <HStackFull gap="gap-1vh">
        <Box className={!isSub && "pt-0.5vh"}>
          <Icon
            icon={isSub ? IoIosArrowRoundForward : PiStarBold}
            iconClassName={isSub ? "text-3.5vh" : "text-1.5vh"}
          />
        </Box>

        <VStackFull align="items-start" className={isSub && "pt-0.6vh"}>
          <span className={`font-bold ${headingClassName}`}>{fileName}</span>
          <Text>{description}</Text>
        </VStackFull>
      </HStackFull>
    </li>
  );
};

const mainContainers = [
  {
    fileName: "Box",
    description:
      "A simple container component that uses basic block-level layout behavior. It acts like a clickable box and allows for various CSS properties like padding, margins, and borders. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "Flex",
    description:
      "A flexbox container that arranges its children in a row (horizontal alignment). It distributes space between items based on flex properties, such as justify-content and align-items. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "FlexFull",
    description:
      "A full-width version of the Flex component that ensures its contents stretch to fill the entire horizontal space. It uses flexbox layout properties to manage children in a row. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "HStack",
    description:
      "A horizontal flexbox stack component that spaces its children evenly in a row. It allows you to specify the gap between items, making it easy to align them horizontally. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "HStackFull",
    description:
      "A full-width variant of the HStack component. It arranges its children in a row with customizable spacing (gap), ensuring the children stretch horizontally across the entire width of the container. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "VStack",
    description:
      "A vertical flexbox stack component that arranges its children in a column. It allows for vertical spacing (gap) between items, making it ideal for layouts where elements need to be stacked. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "VStackFull",
    description:
      "A full-width version of the VStack component. It stacks children vertically (in a column) and stretches to take up the entire width of the container. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "Center",
    description:
      "A flexbox container that centers its children both horizontally and vertically. It uses flexbox properties like justify-content and align-items to achieve perfect centering. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "CenterFull",
    description:
      "A full-width variant of the Center component. It ensures its children are centered both horizontally and vertically while stretching to the full width of the container. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "Transition",
    description:
      "A component used to handle CSS transitions and animations. It controls changes like fade, scale, rotate, and slide effects between component states using Framer Motion. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "TransitionFull",
    description:
      "A full-width variant of the Transition component that applies animation transitions like fade, scale, and slide across the full width of the container. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "Wrap",
    description:
      "A flexbox container that allows its children to wrap into multiple rows or columns when necessary. Useful for responsive layouts where items need to flow onto new lines when there isn’t enough space. Formed from a motion div, so it accepts animation-related props.",
  },
  {
    fileName: "WrapFull",
    description:
      "A full-width variant of the Wrap component. It ensures children wrap and span multiple rows or columns while stretching to take up the full width of the container. Formed from a motion div, so it accepts animation-related props.",
  },
];

const componentObjectsOne = [
  {
    fileName: "accordion.tsx",
    description:
      "A collapsible container that allows sections of content to expand and collapse. The title acts as a toggle button, and the content appears/disappears with a smooth sliding animation. It uses flexbox for the layout of the title and content, and Framer Motion for the transition effects. Useful for displaying information in a compact and interactive manner, with control over default open state, icons, and styling.",
  },
  {
    fileName: "alert.tsx",
    description:
      "A customizable container that displays alert messages or notifications. It props for the type of alert and dismissibility, allowing the user to close the alert or continue with the action which triggered the alert etc.",
  },
  {
    fileName: "animatedIconButton.tsx",
    description:
      "An icon button with built-in animation effects, such as hover or click interactions. Useful for adding a dynamic touch to buttons, making them more visually engaging while allowing users to trigger actions through the button.",
  },
  {
    fileName: "backgroundImageContainer.tsx",
    description:
      "A container that sets and styles a background image, covering its child elements, providing control over the image positioning (e.g., cover, contain), repeat behavior, and opacity. This is useful for creating visually appealing sections with background visuals.",
  },
  {
    fileName: "bouncingDots.tsx",
    description:
      "A loading indicator that uses animated bouncing dots to show that a process is running in the background. Commonly used when waiting for data or content to load.",
  },
  {
    fileName: "button.tsx",
    description:
      "A general button component that can trigger actions, supports different styles, sizes, and behaviors, such as submitting forms or opening modals.",
  },
  {
    fileName: "checkBox.tsx",
    description:
      "A reusable checkbox component used for form selections. It includes custom styling, supports indeterminate states, and is used in forms to allow users to make multiple selections.",
  },
  {
    fileName: "closeButton.tsx",
    description:
      "A button, typically represented by an 'X' icon, used to close modals, popovers, or other interactive elements. Often styled to be minimal and positioned in the top-right corner of the container it is meant to close.",
  },
  {
    fileName: "closeTextButton.tsx",
    description:
      "A close button that includes both text and an icon, providing a more explicit option for closing dialogs or modals. It enhances accessibility by making it clear what action the button performs.",
  },
  {
    fileName: "codeExample.tsx",
    description:
      "A component that renders code examples with monospace font. This is useful for documentation or tutorials where developers need to see code snippets with appropriate styling for different programming languages.",
  },
  {
    fileName: "counterInput.tsx",
    description:
      "An input field with built-in controls for increasing or decreasing a value, often used for setting quantities. It includes buttons for incrementing/decrementing and supports input validation for numeric values.",
  },
  {
    fileName: "datePicker.tsx",
    description:
      "A user interface component that allows users to pick a date from a calendar view. It supports features like minimum/maximum selectable dates and may include options for time selection as well.",
  },
  {
    fileName: "defaultLabel.tsx",
    description:
      "A label component used to associate descriptive text with form elements like inputs and checkboxes. It ensures consistency in spacing, font sizes, and alignment across the application.",
  },
  {
    fileName: "divider.tsx",
    description:
      "A simple horizontal or vertical line used to divide sections of content visually. It helps in creating clear separations between different sections or UI elements.",
  },
  {
    fileName: "dividerText.tsx",
    description:
      "A variant of the divider component that includes text. It places a line with a label in between sections of content, useful for visually breaking content into distinct categories or sections.",
  },
  {
    fileName: "drawer.tsx",
    description:
      "A sliding panel component that typically appears from the side of the screen. It's used for navigation or settings panels and can be toggled open or closed, often overlaying the main content. This component has a variety of animation options for opening and closing the drawer. This component's state is managed in the parent component.",
  },
  {
    fileName: "drawerContent.tsx",
    description:
      "The inner content of a drawer component. This component manages the layout of the items inside the drawer and ensures proper alignment and spacing of its children.",
  },
  {
    fileName: "drawerWithButton.tsx",
    description:
      "A drawer component that includes a built-in button to open and close it. The button toggles the drawer's visibility, providing a simple interaction pattern for users. For this drawer, the open and close states are managed internally.",
  },
  {
    fileName: "dropDownMenu.tsx",
    description:
      "A dropdown menu component that allows users to select options from a list. It typically appears when triggered by a mouseover and can handle various options and actions.",
  },
  {
    fileName: "expandableImage.tsx",
    description:
      "A component that displays an image with an expand icon, allowing users to open a larger view in a modal. It uses Framer Motion for smooth animations and includes a button to close the modal. Ideal for galleries or image previews.",
  },
  {
    fileName: "expandableText.tsx",
    description:
      "A text block that can expand or collapse, hiding or revealing more content based on user interaction. Useful for truncating long sections of text with the option to 'read more.'",
  },
  {
    fileName: "headingText.tsx",
    description:
      "A component for rendering headers (`h1`, `h2`, etc.) with custom styles. It ensures consistency in typography, spacing, and alignment for section headings across the application.",
  },
  {
    fileName: "hoverMenu.tsx",
    description:
      "A menu that becomes visible when the user hovers over a trigger element, such as a button or icon. It's typically used for navigation or context menus where quick access to options is needed without clicks.",
  },
  {
    fileName: "icon.tsx",
    description:
      "A reusable component for rendering icons. It supports different sizes and styles and can be used throughout the application for buttons, labels, and other UI elements.",
  },
  {
    fileName: "iconButton.tsx",
    description:
      "A button component that contains an icon. Often used for actions like navigations, 'save' or 'delete', it focuses on a visual representation of an action rather than text.",
  },
  {
    fileName: "image.tsx",
    description:
      "A component for rendering images, with support for lazy loading, responsiveness, and different layout styles such as cover or contain.",
  },
  {
    fileName: "input.tsx",
    description:
      "A general input component for user input fields, such as text, numbers, or emails. It supports validation, styling, and accessibility for use in forms.",
  },
  {
    fileName: "inputDateTime.tsx",
    description:
      "A combined date and time picker input that allows users to select both a date and a time. Useful for scheduling applications or forms where precise timestamps are required.",
  },
  {
    fileName: "inputVStack.tsx",
    description:
      "A vertical stack layout component specifically for input fields. It manages the alignment and spacing of multiple inputs, ensuring they stack properly with consistent gaps between them.",
  },
  {
    fileName: "mainContainers.tsx",
    description:
      "Contains multiple container components that are used to structure different parts of the application. The following components are all contained within this file: ",
  },
];

const componentObjectsTwo = [
  {
    fileName: "modal.tsx",
    description:
      "A full-screen or partial overlay container that displays content on top of the main page, often used for dialogs, forms, or notifications that require user interaction. It blocks interaction with the background content until dismissed and is typically centered with optional dimming of the background. May include animations for appearing and disappearing.",
  },
  {
    fileName: "navContainer.tsx",
    description:
      "A flexbox container designed to hold navigation elements like links, buttons, or icons. It manages the layout and alignment of navigation items, ensuring they are displayed correctly in both desktop and mobile views. It provides responsive behavior and customizable styles for positioning items horizontally or vertically.",
  },
  {
    fileName: "passwordInput.tsx",
    description:
      "A specialized input field for password entry, with built-in security features such as masking characters to hide the password from view. May include options for toggling the visibility of the password and built-in validation for common password rules (e.g., minimum length or special characters).",
  },
  {
    fileName: "popover.tsx",
    description:
      "A small, floating UI element that appears when a user interacts with a trigger (e.g., clicking a button or hovering). It provides contextual information or additional actions without disrupting the main content flow. Often used for tooltips, action menus, or help bubbles, and can be positioned relative to the trigger element.",
  },
  {
    fileName: "portal.tsx",
    description:
      "A component that allows rendering of its children into a DOM node outside of the root application element, commonly used for modals, tooltips, or dropdowns. This approach helps avoid layout issues, especially with elements that need to visually break out of the parent container's boundaries.",
  },
  {
    fileName: "renderParagraphs.tsx",
    description:
      "A component for rendering paragraphs of text with consistent spacing, line breaks, and alignment. It ensures that text blocks are formatted correctly when rendering text from a database or some other source.",
  },
  {
    fileName: "siteBackgroundImage.tsx",
    description:
      "A container component that sets a background image for the entire site or specific sections. It manages the positioning, size (e.g., cover or contain), and responsiveness of the background image, ensuring that it scales appropriately for different screen sizes without distorting or impacting performance.",
  },
  {
    fileName: "slideInContent.tsx",
    description:
      "A component that animates its children to slide into view from a specified direction (e.g., left, right, top, bottom). Often used for revealing hidden content, such as sidebars or modal-like content, with smooth motion transitions that enhance user experience. This component uses CSS transitions and animation libraries like Framer Motion.",
  },
  {
    fileName: "slider.tsx",
    description:
      "A component that allows users to select a value or navigate through a set of items by dragging a handle along a track. this includes customizable ranges, steps, and labels, making it suitable for adjusting quantities, selecting prices, or navigating through images in a carousel format.",
  },
  {
    fileName: "spinner.tsx",
    description:
      "An animated loading indicator that shows progress or activity is taking place. Commonly displayed during asynchronous actions (like data fetching or form submission) and disappears once the action is complete. Typically implemented with simple CSS animations for smooth and continuous rotation.",
  },
  {
    fileName: "table.tsx",
    description:
      "A container for rendering structured data in a grid of rows and columns, supporting features such as sorting, filtering, and pagination. This table includes customizable headers, cell styling, and responsive design to ensure proper alignment and readability across different devices.",
  },
  {
    fileName: "text.tsx",
    description:
      "A general-purpose component for rendering text with specific styles like font size, weight, color, and alignment. Ensures consistent typography across the application and may provide utilities for truncating text, adjusting line height, or handling multi-line text blocks.",
  },
  {
    fileName: "textArea.tsx",
    description:
      "A multi-line input field for capturing long-form text input such as comments, descriptions, or notes. Supports features like resizing (both horizontally and vertically), customizable height, and validation for maximum character limits or formatting.",
  },
  {
    fileName: "textAreaVStack.tsx",
    description:
      "A vertically stacked layout container designed for organizing text areas and their related labels or messages. It ensures consistent spacing and alignment between these elements, making it easy to manage multi-line inputs within forms or complex UI layouts.",
  },
  {
    fileName: "timePicker.tsx",
    description:
      "A specialized input field that provides users with a convenient way to select a specific time (hours and minutes). Often presented as a dropdown or a modal with a clock interface, ensuring accurate and user-friendly time selection for scheduling tasks or events.",
  },
  {
    fileName: "toast.tsx",
    description:
      "A small notification component that appears for a brief duration to inform users of success, errors, or other feedback. It typically slides or fades into view and disappears after a set amount of time, providing non-blocking feedback without interrupting the user's workflow.",
  },
  {
    fileName: "toggleSwitch.tsx",
    description:
      "A UI component that allows users to toggle between two states (on/off). It often resembles a physical switch and is used for setting preferences or controlling features. The component It supports different sizes and states, with smooth transitions between them.",
  },
  {
    fileName: "tooltip.tsx",
    description:
      "A small, floating label that provides additional context or instructions when the user hovers over or focuses on an element. It disappears once the user moves away, offering a non-intrusive way to add explanations or tips for interface elements.",
  },
  {
    fileName: "validatedInput.tsx",
    description:
      "An input field with built-in validation logic, such as checking for required fields, formatting, or length constraints. It provides real-time feedback to users, displaying success or error messages based on the input's validity.",
  },
];

export function CustomNavLink({
  to,
  linkText,
  textClassName = "text-col-800 text-stroke-9-800 hover:textGlow hover:transition-300",
  className,
  target,
}: CustomNavLinkProps) {
  const hash = useLocation().hash;
  console.log(hash);

  return (
    <Box className={className}>
      <NavLink to={to} className={className} target={target}>
        <Text className={textClassName}>{linkText}</Text>
      </NavLink>
    </Box>
  );
}

export function SectionHeading({
  id,
  heading,
}: {
  id: string;
  heading: string;
}) {
  return (
    <>
      <div id={id} className="h-[5.5vh] xl:h-[3.5vh] text-transparent">
        This
      </div>
      <FlexFull className="justify-center pt-[2vh] pb-[1vh]">
        <Heading
          color="text-white text-stroke-9-100"
          shadow="textShadow"
          text={heading}
          layout="text-insane-loose"
          className="px-[2vh]"
        />
      </FlexFull>
    </>
  );
}

export function TransformBg({ value }: { value: string }) {
  const parts = value.split(" ");
  const background = parts[0].replace("bg-col-", "bg-");
  const gradient = parts[1].replace("bg-", "");
  const backgroundCombo = String(`${background}-${gradient}`);

  return backgroundCombo;
}

export function StyleExampleBox({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  return <Flex className={`px-[1vh] py-[0.5vh] ${className}`}>{text}</Flex>;
}

export function StyledExampleWrap({
  bg = "bg-col-700",
  children,
}: {
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <Wrap
      className={`${bg} px-[1vh] py-[2vh] shadowNarrowNormal gap-y-[2vh] gap-x-[3vh] w-full justify-around`}
    >
      {children}
    </Wrap>
  );
}

export default function Design() {
  function TestBox({
    bg,
    children,
    w = "w-[16vh]",
  }: {
    bg: string;
    children: React.ReactNode;
    w?: string;
  }) {
    const isLightFont =
      bg.startsWith("bg-col-9") ||
      bg.startsWith("bg-col-800") ||
      bg.startsWith("bg-col-700") ||
      bg.startsWith("bg-col-600") ||
      bg.startsWith("bg-col-5");

    const isDarkFont =
      bg.startsWith("bg-col-1") ||
      bg.startsWith("bg-col-2") ||
      bg.startsWith("bg-col-3") ||
      bg.startsWith("bg-col-4");

    const fontColor = isLightFont
      ? `text-col-100  text-stroke-4-900 textShadow`
      : isDarkFont
      ? `text-col-900  text-stroke-4-900 lightTextShadow`
      : `text-col-100 textShadow`;

    return (
      <Flex
        className={`h-[5vh] ${w} font-bold ${bg} shadowNarrowNormal ${fontColor} justify-center items-center`}
      >
        <Text>{children}</Text>
      </Flex>
    );
  }
  const codeStyles = "text-col-400 textShadow";
  return (
    <TransitionFull className="h-full justify-center overflow-y-auto">
      <FlexFull className="h-full overflow-y-auto justify-center">
        <FlexFull className="fixed top-0 left-0 p-[1vh] bg-col-200 z-10 shadowWideLooser rounded-none">
          <Wrap className="w-full gap-x-[5vh] gap-y-0.5vh justify-around">
            <IconButton icon={HomeIcon} type="smallNormal" to="/" />
            <CustomNavLink to="#colorscheme" linkText="Colors" useHash />
            <CustomNavLink to="#rgb" linkText="RBG" useHash />
            <CustomNavLink to="#gradients" linkText="Gradients" />
            <CustomNavLink
              to="#complexbackgrounds"
              linkText="Complex Backgrounds"
            />
            <CustomNavLink to="#buttons" linkText="Buttons" />
            <CustomNavLink to="#transitions" linkText="Transitions" />
            <CustomNavLink to="#shadow" linkText="Shadows" />
            <CustomNavLink to="#text" linkText="Text" />
            <CustomNavLink
              to="htmlElements"
              target="_blank"
              linkText="HTML Defaults"
            />
          </Wrap>
        </FlexFull>
        <VStackFull className="h-fit px-[2vh] py-1vh" gap="gap-[2vh]">
          <VStackFull gap="gap-[1vh]" className="pt-13vh sm:pt-10vh">
            <VStackFull
              className="text-col-100 bg-col-800 bg-linear6op75 border-900-md shadowNarrowNormal p-1vh sm:p-2vh md:p-3vh lg:px-5vh xl:px-10vh"
              gap="gap-[2vh]"
            >
              <h1 className="font-cursive text-col-pink text-stroke-5-200 textGlowXs text-center">
                Want to customize?
              </h1>
              <VStackFull
                gap="gap-[2vh]"
                className="text-2.3vh textShadow leading-[3vh]"
                align="items-start"
              >
                <Text>
                  To customize the color scheme, navigate to the{" "}
                  <code className={codeStyles}>tailwind.config.js</code> file in
                  the root directory, and modify the RGBA values within the{" "}
                  <code className={codeStyles}>themeColors</code> object. This
                  is where all the colors used throughout the theme are defined.
                </Text>
                <Text>
                  Since this theme includes 10 levels of opacity for each color
                  in the <code className={codeStyles}>themeColors</code> object
                  to create gradients and other effects, the most efficient way
                  to replace the color scheme is by selecting the RGBA value for
                  one color (e.g.,{" "}
                  <code className={codeStyles}>colors[100]</code>), using{" "}
                  <code className={codeStyles}>ctl(cmd)+F</code>, and replacing
                  all instances of that value within the{" "}
                  <code className={codeStyles}>themeColors</code> object. Repeat
                  this process for each color you want to update.
                </Text>
                <Text>
                  After you've replaced all the colors, copy the updated{" "}
                  <code className={codeStyles}>themeColors</code> object to the{" "}
                  <code className={codeStyles}>styles.tsx</code> file, where it
                  is exported. This ensures that the new color scheme will be
                  applied consistently across the application, making your
                  custom theme look polished and complete.
                </Text>
              </VStackFull>

              <VStackFull
                gap="gap-[2vh]"
                className="text-2.3vh textShadow leading-[2.7vh]"
                align="items-start"
              >
                <Text>
                  In the <code className={codeStyles}>buildingBlocks</code>{" "}
                  directory, located within the{" "}
                  <code className={codeStyles}>components</code> folder, you
                  will find a variety of reusable components to help you build
                  your application's UI. These components are designed to be
                  highly flexible, customizable, and easy to integrate into your
                  project. Below is a brief overview of the main components
                  available:
                </Text>
              </VStackFull>

              <Accordion
                isDefaultOpen={false}
                titleText="Building Block Components"
                titleIcon={FaCubesStacked}
              >
                <VStackFull
                  align="items-start text-2vh leading-[2.4vh]"
                  gap="gap-1vh"
                >
                  {componentObjectsOne.map((component, index) => (
                    <ColoredListItem
                      key={index}
                      fileName={component.fileName}
                      description={component.description}
                    />
                  ))}
                  <VStackFull
                    align="items-start pl-3vh md:pl-5vh lg:pl-7vh"
                    gap="gap-0.5vh"
                  >
                    {mainContainers.map((container, index) => (
                      <ColoredListItem
                        key={index}
                        fileName={container.fileName}
                        description={container.description}
                        isSub
                      />
                    ))}
                  </VStackFull>
                  {componentObjectsTwo.map((component, index) => (
                    <ColoredListItem
                      key={index}
                      fileName={component.fileName}
                      description={component.description}
                    />
                  ))}
                </VStackFull>
              </Accordion>
            </VStackFull>
            <SectionHeading id="colorscheme" heading="Color Scheme" />
            <StyledExampleWrap bg="bg-white">
              {allColors.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap>
              {colors100.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>

            <SectionHeading id="rgb" heading="RBG Equivalents" />
            <StyledExampleWrap bg="bg-white">
              {allColorsRGB.map(
                (color: { code: string; rgb: string }, index: number) => (
                  <TestBox key={index} bg={color.code} w="w-[30vh]">
                    {" "}
                    {color.rgb}
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
          </VStackFull>
          <VStackFull className="h-fit" gap="gap-[2vh]">
            <SectionHeading id="gradients" heading="Gradients & Opacities" />
            <StyledExampleWrap bg="bg-white">
              {gradients.map((gradient: string, index: number) => (
                <TestBox key={index} bg={gradient} w="w-[24vh]">
                  {" "}
                  {gradient}
                </TestBox>
              ))}
            </StyledExampleWrap>
          </VStackFull>
          <VStackFull className="h-fit" gap="gap-[2vh]">
            <SectionHeading
              id="complexbackgrounds"
              heading="Complex Backgrounds"
            />
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-100 gradient combinations"
            />

            <StyledExampleWrap>
              {Object.values(col100Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-100 gradient combinations"
            />

            <StyledExampleWrap>
              {Object.values(col200Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    {" "}
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-200 gradient combinations"
            />

            <StyledExampleWrap>
              {Object.values(col300Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    {" "}
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-300 gradient combinations"
            />

            <StyledExampleWrap>
              {Object.values(col100Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-400 gradient combinations"
            />

            <StyledExampleWrap>
              {Object.values(col400Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-500 gradient combinations"
            />

            <StyledExampleWrap>
              {Object.values(col500Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-600 gradient combinations"
            />

            <StyledExampleWrap>
              {Object.values(col600Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-700 gradient combinations"
            />

            <StyledExampleWrap bg="bg-col-500">
              {Object.values(col700Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-800 gradient combinations"
            />

            <StyledExampleWrap>
              {Object.values(col800Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-100"
              shadow="textShadow"
              layout="text-lg-normal"
              text="col-900 gradient combinations"
            />

            <StyledExampleWrap>
              {Object.values(col900Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
          </VStackFull>
          <VStackFull className="w-90% pb-[3vh]">
            <SectionHeading id="buttons" heading="Buttons" />
            <StyledExampleWrap bg="bg-col-200">
              <Button buttonText="Normal" />{" "}
              <Button type="smallNormal" buttonText="NormalButton" />
              <Button type="negative" buttonText="Negative" />
              <Button type="smallNegative" buttonText="Negative Small" />
              <Button type="unstyled" buttonText="Unstyled" />
              <Button type="smallUnstyled" buttonText="Unstyled Small" />
              <Button buttonText="Normal Icon Left" iconLeft={GoSmiley} />
              <Button
                buttonText="Small Icon Right"
                iconRight={GoSmiley}
                type="smallNormal"
              />
              <Button
                buttonText="Negative Icon Left"
                type="negative"
                iconLeft={GoSmiley}
              />
              <Button
                buttonText="Small Negative Icon Right"
                type="smallNegative"
                iconRight={GoSmiley}
              />
              <IconButton icon={GoSmiley} />{" "}
              <IconButton type="smallNormal" icon={GoSmiley} />
              <IconButton type="negative" icon={GoSmiley} />
              <IconButton type="smallNegative" icon={GoSmiley} />
              <IconButton type="unstyled" icon={GoSmiley} />
              <IconButton type="smallUnstyled" icon={GoSmiley} />
              <AnimatedIconButton icon={GoSmiley} text="Animated Button" />
            </StyledExampleWrap>
          </VStackFull>
          <VStackFull>
            <SectionHeading id="transitions" heading="Transitions" />

            <StyledExampleWrap>
              {transitions.map((transition) => (
                <StyleExampleBox
                  key={transition}
                  className={`${transition} bg-col-200 hover:bg-col-900 text-col-900
              hover:text-col-100 shadowNarrowNormal`}
                  text={`className='${transition}'`}
                />
              ))}
            </StyledExampleWrap>
            <SectionHeading id="shadow" heading="Shadows" />
            <VStackFull>
              {" "}
              <StyledExampleWrap bg="bg-col-100">
                {shadowsLightBack.map((shadow) => (
                  <Box className={`${shadow} bg-col-500`} key={shadow}>
                    <Text className="p-1vh text-col-900">{shadow}</Text>
                  </Box>
                ))}
              </StyledExampleWrap>
              <StyledExampleWrap bg="bg-col-800">
                {shadowsDarkBack.map((shadow) => (
                  <Box className={`${shadow}`} key={shadow}>
                    <Text className="text-col-100 p-[1vh]">{shadow}</Text>
                  </Box>
                ))}
              </StyledExampleWrap>
            </VStackFull>
            <SectionHeading id="text" heading="Text" />
            <StyledExampleWrap>
              {textExamples.map((textExample, index) => (
                <Box
                  key={index}
                  className="bg-col-500 h-fit text-col-900 shadowNarrowNormal px-[1vh]"
                >
                  <Text className={`${textExample} `}>{textExample}</Text>
                </Box>
              ))}
            </StyledExampleWrap>

            <SectionHeading id="" heading="Text Shadow" />
            <StyledExampleWrap>
              {textShadows.map((shadow, index) => (
                <Box
                  key={index}
                  className={
                    shadow === "textFog"
                      ? "text-col-100 bg-col-200 shadowNarrowNormal p-[1vh]"
                      : "text-col-900 bg-col-200 shadowNarrowNormal p-[1vh]"
                  }
                >
                  <Text className={`${shadow} `}>{shadow}</Text>
                </Box>
              ))}
            </StyledExampleWrap>
            <SectionHeading id="" heading="Text Stroke" />
            <StyledExampleWrap>
              {textStrokeDarkBg.map((combo, index) => (
                <Box key={index} className="font-bold">
                  <Text className={`${combo} text-xxl-normal text-col-700`}>
                    {combo}
                  </Text>
                </Box>
              ))}
            </StyledExampleWrap>

            <StyledExampleWrap bg="bg-col-300">
              {textStrokeLightBg.map((combo, index) => (
                <Box key={index} className="font-bold">
                  <Text className={`${combo} text-xxl-normal text-col-300`}>
                    {combo}
                  </Text>
                </Box>
              ))}
            </StyledExampleWrap>
          </VStackFull>
        </VStackFull>
      </FlexFull>
    </TransitionFull>
  );
}

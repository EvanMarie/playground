# Remix-Vite-Tailwind Template

Welcome to the **Remix-Vite-Tailwind** template project. This template is designed to streamline the development process with a powerful stack that includes [Remix](https://remix.run/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/). The template also includes a variety of pre-built and customizable UI components that are easily integrated and adaptable for any project.

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-1.webp" alt="Splash Screen" width="800" /> <p><em>Figure 1: Remix, Vite, & Tailwind - A Project Launchpad - splash screen</em></p> </div> </div>
<br>

## Features

- **Remix** for server-side rendering and routing.
- **Vite** for fast bundling and development builds.
- **Tailwind CSS** for utility-first styling.
- A collection of **custom components** ready for easy integration.
- Pre-configured **theme** with customizable colors, typography, and layout options.
- Components built with **Framer Motion** for animations and transitions.
- **Fully responsive** design and components, built with scalability in mind.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

To use this template, you can quickly set up a new project using the following commands:

1. Open your terminal and run:

   ```bash
   npx create-remix@latest --template https://github.com/EvanMarie/remix-vite-tailwind-minimal-template
   ```

2. Follow the prompts to set up your project (choose TypeScript/JavaScript, project name, etc.).

3. Navigate to your project directory:

   ```bash
   cd your-project-name
   ```

4. Install the dependencies:

   ```bash
   yarn install
   ```

   Or, if using npm:

   ```bash
   npm install
   ```

5. Run the development server:

   ```bash
   yarn dev
   ```

   Or, if using npm:

   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000`.

---

## Project Structure

This template provides a modular and scalable structure for building Remix applications. Below is an overview of the main files and folders:

- **`app/`**: The core of the Remix application.
  - **`components/`**: Contains reusable UI components.
  - **`buildingBlockComponents/`**: Holds all the custom design elements such as modals, buttons, accordions, etc.
  - **`styles.tsx`**: Includes global styles, including the `themeColors` object.
  - **`tailwind.config.js`**: Tailwind configuration file where you can modify theme colors and settings.
- **`public/`**: Static assets such as images and fonts.
- **`vite.config.js`**: Configuration file for Vite.
- **`package.json`**: Defines the project’s dependencies and scripts.

---

## Custom Components

This template comes with a collection of pre-built components designed to be customizable and reusable. Some of the main components include:

### Key Components

- **Accordion**: A collapsible UI element for displaying content in sections.
- **Modal**: A pop-up container for dialogs or large content displays.
- **Button**: A customizable button component with built-in hover and active states.
- **ExpandableImage**: A component that displays an image in a small container with an expand icon. When clicked, the image opens in a larger modal view.
- **Toast**: A small, temporary notification used for feedback.
- **Tooltip**: Provides additional context or instructions when hovering over an element.

For a complete list of components, explore the **`buildingBlockComponents`** directory.

### How to Use

Each component can be easily imported and customized. For example:

```tsx
import { Modal } from "./components/modal";

<Modal isOpen={true} setModalOpen={setOpen}>
  <p>Your modal content here</p>
</Modal>;
```

You can customize each component through props or by modifying the pre-configured styles in **`styles.tsx`**.

---

## Customizing the Theme

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-2.webp" alt="Customizing" width="800" /> <p><em>Figure 2: Remix, Vite, & Tailwind - A Project Launchpad - customizing</em></p> </div> </div>
<br>

### Color Scheme

The template comes with a predefined color scheme, but you can easily customize it by editing the `themeColors` object located in **`tailwind.config.js`**.

1. Open the `tailwind.config.js` file.
2. Locate the `themeColors` object.
3. Replace the RGBA values with your desired color scheme.

For example, to change the color for `colors[100]`:

```js
themeColors: {
  100: 'rgba(255, 255, 255, 1)',
  // other colors...
}
```

Once you update the colors, you can easily replace all instances of a specific color in the `themeColors` object by using the **`ctl(cmd)+F`** function and replacing the RGBA value throughout the project.

After updating the color scheme, make sure to copy the modified `themeColors` object to **`styles.tsx`** for consistency throughout your application.

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-3.webp" alt="building block components" width="800" /> <p><em>Figure 3: Remix, Vite, & Tailwind - A Project Launchpad - building block components</em></p> </div> </div>
<br>

## Building Blocks Overview

In the **`buildingBlocks`** directory, you will find components that are ready to use. Here’s a brief overview:

- **Button**: Pre-styled button component with hover and click interactions.
- **ExpandableImage**: Allows users to expand images in a modal for a larger view.
- **Accordion**: Displays content in expandable sections for easier content management.

To use these components, simply import them into your project and customize as needed.

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-4.webp" alt="colors" width="800" /> <p><em>Figure 4: Remix, Vite, & Tailwind - A Project Launchpad - colors</em></p> </div> </div>
<br>

## Responsive Design

All components are fully responsive and adjust based on the screen size. Tailwind's responsive utilities are used throughout the project to ensure that layouts work across devices. The template includes predefined breakpoints like `sm`, `md`, `lg`, and `xl` to adjust padding, margins, and layouts.

For example:

```tsx
<div className="w-[20vw] md:w-[15vw] lg:w-[10vw]">Responsive container</div>
```

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-5.webp" alt="complex backgrounds" width="800" /> <p><em>Figure 5: Remix, Vite, & Tailwind - A Project Launchpad - complex backgrounds</em></p> </div> </div>
<br>

## Animations

This template leverages **Framer Motion** for smooth, built-in animations. Components like the `Accordion` and `ExpandableImage` already come with animated transitions, but you can easily add motion effects to any component by wrapping elements with the `motion.div` or other `motion` tags.

Example:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  Animated content
</motion.div>
```

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-6.webp" alt="buttons, transitions, and text shadows" width="800" /> <p><em>Figure 6: Remix, Vite, & Tailwind - A Project Launchpad - buttons, transitions, and text shadows</em></p> </div> </div>
<br>

## Deployment

When you're ready to deploy, you can build the project by running the following command:

```bash
yarn build
```

Or, if using npm:

```bash
npm run build
```

This will output a production-ready version of your project in the `dist/` folder, optimized and ready for deployment.

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-7.webp" alt="text strokes" width="800" /> <p><em>Figure 7: Remix, Vite, & Tailwind - A Project Launchpad - text strokes</em></p> </div> </div>
<br>

## Conclusion

This **Remix-Vite-Tailwind** template provides a highly customizable, modular foundation for building scalable web applications. With its collection of reusable components, flexible theming, and support for responsive design and animations, this template is a great starting point for any project.

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-8.webp" alt="box shadows and text sizes" width="800" /> <p><em>Figure 8: Remix, Vite, & Tailwind - A Project Launchpad - box shadows and text sizes</em></p> </div> </div>
<br>

## License

This project is licensed under the MIT License.

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-9.webp" alt="more background options" width="800" /> <p><em>Figure 9: Remix, Vite, & Tailwind - A Project Launchpad - more background options</em></p> </div> </div>
<br>

## Questions or Issues?

If you have any questions or encounter any issues, feel free to open an issue or submit a pull request on GitHub.

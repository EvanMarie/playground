import { useState } from "react";
import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";

export default function Typography() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  return (
    <VStackFull className="h-[100svh] overflow-y-auto overflow-x-hidden">
      <h1>&lt;h1&gt; - Example Text</h1>
      <h2>&lt;h2&gt; - Example Text</h2>
      <h3>&lt;h3&gt; - Example Text</h3>
      <h4>&lt;h4&gt; - Example Text</h4>
      <h5>&lt;h5&gt; - Example Text</h5>
      <h6>&lt;h6&gt; - Example Text</h6>
      <p>
        &lt;p&gt; This is a{" "}
        <strong>&lt;strong&gt;sample paragraph&lt;/strong&gt;</strong>{" "}
        demonstrating various text styles. It includes{" "}
        <em>&lt;em&gt;italic text&lt;/em&gt;</em>,{" "}
        <u>&lt;u&gt;underlined text&lt;/u&gt;</u>, and even{" "}
        <s>&lt;s&gt;strikethrough text&lt;/s&gt;</s>. You can also use{" "}
        <code>&lt;code&gt;inline code&lt;/code&gt;</code> within paragraphs.
      </p>
      <blockquote>
        &lt;blockquote&gt; "Learning never stops" - A famous quote
      </blockquote>
      <ul>
        <li>&lt;ul&gt;&lt;li&gt; Unordered list item 1</li>
        <li>&lt;li&gt; Unordered list item 2</li>
        <li>&lt;li&gt; Unordered list item 3</li>
      </ul>
      <ol>
        <li>&lt;ol&gt;&lt;li&gt; Ordered list item 1</li>
        <li>&lt;li&gt; Ordered list item 2</li>
        <li>&lt;li&gt; Ordered list item 3</li>
      </ol>
      <p>
        &lt;p&gt; Here's a link to{" "}
        <a href="#">&lt;a&gt;more resources&lt;/a&gt;</a>.
      </p>
      <img src="/api/placeholder/400/200" alt="&lt;img&gt; Placeholder image" />
      <table>
        <thead>
          <tr>
            <th>&lt;table&gt;&lt;th&gt; Column 1</th>
            <th>&lt;th&gt; Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt;td&gt; Data 1</td>
            <td>&lt;td&gt; Data 2</td>
          </tr>
          <tr>
            <td>&lt;td&gt; Data 3</td>
            <td>&lt;td&gt; Data 4</td>
          </tr>
        </tbody>
      </table>
      <hr />
      &lt;hr&gt; (above)
      <pre>
        <code>&lt;pre&gt;&lt;code&gt; function greet(name)</code>
      </pre>
      <p>
        &lt;p&gt; This text contains{" "}
        <sup>&lt;sup&gt;superscript&lt;/sup&gt;</sup> and{" "}
        <sub>&lt;sub&gt;subscript&lt;/sub&gt;</sub> elements.
      </p>
      <p>
        &lt;p&gt; The abbreviation is{" "}
        <abbr title="Shortened Form">&lt;abbr&gt;Short&lt;/abbr&gt;</abbr>.
      </p>
      <address>
        &lt;address&gt;
        <br />
        Learning Resource Center
        <br />
        123 Knowledge Street
        <br />
        City, Country
      </address>
      <p>&lt;p&gt; &lt;cite&gt;Learn with Us&lt;/cite&gt; by John Doe</p>
      <details>
        <summary>&lt;details&gt;&lt;summary&gt; Click to expand</summary>
        <p>This is the expanded content of the details element.</p>
      </details>
      <p>
        &lt;p&gt; The event starts at{" "}
        <time>&lt;time&gt;8:00 PM&lt;/time&gt;</time>.
      </p>
      <p>
        &lt;p&gt; The equation is: <var>&lt;var&gt;E&lt;/var&gt;</var> ={" "}
        <var>&lt;var&gt;m&lt;/var&gt;</var>
        <var>&lt;var&gt;c&lt;/var&gt;</var>
        <sup>2</sup>
      </p>
      <p>
        &lt;p&gt; Press <kbd>&lt;kbd&gt;Ctrl&lt;/kbd&gt;</kbd> +{" "}
        <kbd>&lt;kbd&gt;C&lt;/kbd&gt;</kbd> to copy.
      </p>
      <p>
        &lt;p&gt; The word <mark>&lt;mark&gt;highlight&lt;/mark&gt;</mark> is
        marked for emphasis.
      </p>
      <progress value="70" max="100">
        &lt;progress&gt; 70%
      </progress>
      <meter value="0.6">&lt;meter&gt; 60%</meter>
      <p>
        &lt;p&gt; The result is:{" "}
        <output>&lt;output&gt;42&lt;/output&gt;</output>
      </p>
      <dialog open={isDialogOpen}>
        &lt;dialog open&gt;
        <p>This is an open dialog window.</p>
        <button onClick={closeDialog}>Close Dialog</button>
      </dialog>
      <button onClick={openDialog}>Open Dialog</button>
      <figure>
        &lt;figure&gt;
        <img src="/api/placeholder/300/200" alt="Figure image" />
        <figcaption>&lt;figcaption&gt; A sample image caption</figcaption>
      </figure>
      <main>
        &lt;main&gt;
        <h2>Main Content</h2>
        <p>This is the main content area of the page.</p>
      </main>
      <article>
        &lt;article&gt;
        <h3>Article Title</h3>
        <p>This is an article within the main content.</p>
      </article>
      <section>
        &lt;section&gt;
        <h3>Section Heading</h3>
        <p>This is a section within the main content.</p>
      </section>
      <header>
        &lt;header&gt;
        <h2>Page Header</h2>
      </header>
      <footer>
        &lt;footer&gt;
        <p>Page Footer</p>
      </footer>
      <aside>
        &lt;aside&gt;
        <p>This is an aside element with additional information.</p>
      </aside>
      <nav>
        &lt;nav&gt;
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </VStackFull>
  );
}

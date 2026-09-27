export default function ListTags() {
  return (
    <div id="wd-list-tags">
      <h4>List Tags</h4>

      {/* --- Book sample: pancake ordered list --- */}
      <h5>How to Make Pancakes</h5>
      <ol>
        <li>Mix the dry ingredients</li>
        <li>Add the wet ingredients</li>
        <li>Whisk until smooth</li>
        <li>Pour batter onto a hot griddle</li>
        <li>Flip when bubbles form</li>
      </ol>

      {/* --- Book sample: unordered list --- */}
      <h5>Programming Languages</h5>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Java</li>
      </ul>

      {/* --- On your own: favorite recipe (ordered) --- */}
      <h5>My Favorite Recipe — Masala Chai</h5>
      <ol id="wd-your-favorite-recipe">
        <li>Boil water with grated ginger and crushed cardamom</li>
        <li>Add black tea leaves and simmer</li>
        <li>Pour in milk and bring to a boil</li>
        <li>Add sugar to taste</li>
        <li>Strain and serve hot</li>
      </ol>

      {/* --- On your own: favorites (unordered) --- */}
      <h5>My Favorite Books</h5>
      <ul id="wd-your-books">
        <li>Sapiens — Yuval Noah Harari</li>
        <li>The Pragmatic Programmer</li>
        <li>Atomic Habits — James Clear</li>
      </ul>

      {/* --- With AI: HTML tags from this chapter (>= 5) --- */}
      <h5>HTML Tags Covered in Chapter 1</h5>
      <ul id="wd-ai-html-tags">
        <li>&lt;h1&gt;–&lt;h6&gt; — headings</li>
        <li>&lt;p&gt; — paragraph</li>
        <li>&lt;ol&gt; / &lt;ul&gt; / &lt;li&gt; — lists</li>
        <li>&lt;table&gt; — tabular data</li>
        <li>&lt;img&gt; — images</li>
        <li>&lt;a&gt; — anchors</li>
      </ul>
    </div>
  );
}

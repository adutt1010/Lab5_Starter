1. They connect your HTML, CSS, and JS, ensuring styles and behaviors target the correct elements. Poor naming can lead to conflicts and maintenance issues.

2. Data attributes store extra information on elements (`data-*`), accessed via `element.dataset`. They’re useful for storing non-visual metadata without polluting global IDs or classes.

3. A DOM fragment is a lightweight container for building DOM structures without affecting the live DOM, improving performance for batch updates.

4. The virtual DOM is an in-memory representation of the real DOM. It speeds up updates by minimizing actual DOM changes but adds memory overhead.

5. **className** is a reserved word in JS because **class** is a reserved keyword, so the attribute was renamed for consistency.

6. **addEventListener()** is more flexible, supports multiple handlers, and separates markup from behavior, while **onClick** is simpler but limited to one handler and mixes structure with behavior.

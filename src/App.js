```jsx
import React from 'react';

const MainComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Test</h2>
        <p className="text-gray-700 mb-6">
          This is a simple React component to demonstrate the use of Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me
        </button>
      </div>
    </div>
  );
};

export default MainComponent;
```

Explanation:

1. We import the `React` library at the top of the file.
2. We define a functional component called `MainComponent`.
3. Inside the component, we return a JSX structure that represents the UI.
4. The outer `div` has the `flex`, `flex-col`, `items-center`, `justify-center`, `min-h-screen`, and `bg-gray-100` classes from Tailwind CSS. These classes create a full-screen container with a gray background and center the content vertically and horizontally.
5. The inner `div` has the `max-w-md`, `w-full`, `bg-white`, `rounded-lg`, `shadow-lg`, `p-6` classes from Tailwind CSS. These classes create a white card with rounded corners, a shadow, and padding.
6. Inside the inner `div`, we have an `h2` element for the title, a `p` element for a description, and a `button` element.
7. The `button` element has the `bg-blue-500`, `hover:bg-blue-700`, `text-white`, `font-bold`, `py-2`, `px-4`, and `rounded` classes from Tailwind CSS. These classes style the button with a blue background, white text, bold font, padding, and rounded corners. The `hover:bg-blue-700` class changes the background color to a darker shade of blue on hover.
8. Finally, we export the `MainComponent` so it can be used in other parts of the application.

Note: Since the provided information was minimal, this component serves as a basic example of using Tailwind CSS in a React functional component. You can modify and extend it based on your specific requirements.
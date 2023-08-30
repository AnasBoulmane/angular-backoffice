# Backoffice Management System

- Content Management: Intuitive tools to update, modify, or delete platform content ranging from text to widgets and functionalities.
- User Management: Advanced features for managing user accounts, roles, permissions, and activity.
- Reports & Analytics: Insightful analytics and detailed reports on Organization performance, user activity, and other critical metrics.

## Getting started

Make sure that you have Node.js installed on your project. Run the following command to install all dependencies:

```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Using TypeScript

The Flowbite UI components also supports TypeScript and you can import the types and apply them when using the JavaScript API programatically.

For example, here's how you can import the types for the Carousel component:

```javascript
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";

// ... other code

const carousel: CarouselInterface = new Carousel(items, options);
```

You can read more about using [Flowbite and TypeScript](https://flowbite.com/docs/getting-started/typescript/) by following our documentation guide.

## Flowbite Angular Library

The awesome open-source community from Flowbite also started working on a standalone [Flowbite Angular](https://github.com/themesberg/flowbite-angular) library with native components where you can also contribute to the development of the project until a stable release is achieved.

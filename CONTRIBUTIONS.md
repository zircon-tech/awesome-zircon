# Prerequisites

1. Node.js/NPM: https://nodejs.org/en/
2. Gatsby CLI: `npm install -g gatsby-cli`

## Run

Start the Gatsby web with `npm start` to visualize changes

# How to Use

## How to Add Content

Add content pages by creating MDX files in the `/content/pages` directory. `/content/pages/index.mdx` serves as the home
page. Pages will automatically be added to the site's navigation.

To create sub-pages (represented in navigation by collapsible lists and sub-lists), create a directory
inside `/content/pages` with the same name as the parent page you want to create a sub-page for. The example below
creates the page `foo.mdx` with the sub-page `bar.mdx`.

```text
.
└── content
    └── pages
        ├── foo
        │   └── bar.mdx
        └── foo.mdx
```

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It's the easiest way to create content for the site. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Markdow with MDX

MDX will allow you to add more advanced content to the site. MDX is great for creating content because it allows for easy use of
both [Markdown syntax](https://www.markdownguide.org) _and_ React components. Please see https://mdxjs.com for more
information on how to take advantage of this powerful content creation tool.

## How to Run

If this is your first time trying to run the site, be sure to run `npm install` from the root directory first. After all
the dependencies are installed, run `gatsby develop` to build and run the site locally.
See https://www.gatsbyjs.com/docs/gatsby-cli/ for more information on Gatsby CLI commands.

Gatsby uses hot-loading so you do not need to stop and start the site after every change or even refresh the page you
are making a change on (in most cases). Just simply save the file you are working on and Gatsby will automatically make
the changes and display them to you within a few seconds.

## Table of Contents

Table of contents components are automatically rendered for each MDX page based off the headings inside that page. If
the page does not contain any headings, then the table of contents component renders a table of contents that consists
of that page's sub-pages _and_ their headings. This allows for pages without headings to easily serve as landing pages
with more granulated navigation than the navigation bar provides.

# Customization

## Template/Layout

The page template that is used for all content pages is found at `/src/templates/content-page.js`. This is also where the layout
is defined.

## Shortcodes

MDX shortcodes can be found at `/src/templates/configs/mdx-shortcodes.js`. These are useful for React components that
are commonly used in multiple pages. Normally, the content creator would need to include the `import` statement for each
component they would like to use in a page. Shortcodes allow the user to just use the component directly without needing
an import. See https://mdxjs.com/blog/shortcodes for more information.

## MDX to React Translation

MDX translates the HTML that Markdown syntax generates into React components. To change what React component is used for
a given HTML element, modify `/src/templates/configs/mdx-customized-components.js`.

## Theme

[Material-UI](https://material-ui.com) is the site's UI framework. To customize the theme,
modify `/src/gatsby-theme-material-ui-top-layout/theme.js`. It is important that all components are styled using what is
defined in this file in order to keep a consistent look and feel.

import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "0161 Sunday League Strats and Guides",
    pageTitleSuffix: "0161",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "nylecohen.github.io/cs-quartz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbf1c7",        // bg0
          lightgray: "#ebdbb2",    // bg1
          gray: "#bdae93",         // bg3
          darkgray: "#665c54",     // fg2
          dark: "#3c3836",         // fg1
          secondary: "#d79921",    // yellow
          tertiary: "#458588",     // blue
          highlight: "rgba(215, 153, 33, 0.15)", // yellow soft highlight
          textHighlight: "#fabd2f66", // bright yellow highlight
        },

        darkMode: {
          light: "#282828",        // bg0
          lightgray: "#3c3836",    // bg1
          gray: "#665c54",         // bg3
          darkgray: "#ebdbb2",     // fg2
          dark: "#fbf1c7",         // fg1
          secondary: "#fabd2f",    // bright yellow
          tertiary: "#83a598",     // aqua
          highlight: "rgba(250, 189, 47, 0.15)",
          textHighlight: "#fabd2f88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

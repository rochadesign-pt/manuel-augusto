"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemas";
import { structure, SINGLETONS } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  title: "Manuel Augusto — Conteúdo",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Hide singletons from the global "create new" menu.
    templates: (templates) =>
      templates.filter((t) => !SINGLETONS.has(t.schemaType)),
  },
  document: {
    // Remove delete/duplicate actions on singletons.
    actions: (input, context) =>
      SINGLETONS.has(context.schemaType)
        ? input.filter(
            ({ action }) =>
              action &&
              ["publish", "discardChanges", "restore"].includes(action),
          )
        : input,
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

import type { SchemaTypeDefinition } from "sanity";

import { brand } from "./brand";
import { catalog } from "./catalog";
import { faq } from "./faq";
import { post } from "./post";
import { service } from "./service";
import { siteSettings } from "./siteSettings";
import { stat } from "./stat";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  service,
  brand,
  catalog,
  testimonial,
  faq,
  stat,
  post,
];

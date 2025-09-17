import type { StrapiApp } from "@strapi/strapi/admin";
import resultLogo from "../extensions/result-logo.svg";

export default {
  config: {
    auth: {
      logo: resultLogo,
    },
    menu: {
      logo: resultLogo,
    },
    locales: ["ru"],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};

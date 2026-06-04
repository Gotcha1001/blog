// const authConfig = {
//   providers: [
//     {
//       domain: process.env.CONVEX_SITE_URL,
//       applicationId: "convex",
//     },
//   ],
// };

// export default authConfig;

import { getAuthConfigProvider } from "@convex-dev/better-auth/auth-config";
import type { AuthConfig } from "convex/server";

export default {
  providers: [getAuthConfigProvider()],
} satisfies AuthConfig;

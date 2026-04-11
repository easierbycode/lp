// Windows-safe local preview server.
//
// Background: Deno Deploy runs the adapter-generated `.deno-deploy/server.ts`
// in production, which works correctly on Linux. On Windows, however, the
// transitive dep `@deno/experimental-route-config@0.0.5` mangles the
// `deploy.json` static-file destinations because its pattern regex only
// matches `/:name` (forward slash), while `path.join` on Windows normalizes
// the destination to `\:name` — leaving a literal `:file*` in the filesystem
// path, which Windows rejects with os error 123.
//
// This script serves the pre-rendered output from `.deno-deploy/static/`
// directly via `jsr:@std/http/file-server`, bypassing the buggy handler.
// It's only used for local preview (`deno task serve`); Deno Deploy continues
// to run the adapter-generated `.deno-deploy/server.ts` on Linux where the
// bug doesn't trigger.
//
// Usage:
//   deno task build     # generates .deno-deploy/
//   deno task serve     # runs this file, serves http://localhost:8000

import { serveDir } from "jsr:@std/http/file-server";

const STATIC_ROOT = ".deno-deploy/static";

Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: STATIC_ROOT,
    quiet: true,
  });
});

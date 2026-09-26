import { defineApp } from "rwsdk/worker";
import { route, render } from "rwsdk/router";

import { Document } from "@/app/document";
import { setCommonHeaders } from "@/app/headers";
import { HomePage } from "@/app/pages/HomePage";

export default defineApp([
  setCommonHeaders(),
  render(Document, [
    route("/", HomePage),
  ]),
]);
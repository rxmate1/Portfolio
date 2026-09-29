import { defineApp } from "rwsdk/worker";
import { route, render } from "rwsdk/router";

import { Document } from "@/app/Document"; // må matche filnavnet Document.tsx
import { setCommonHeaders } from "@/app/headers";
import { HomePage } from "@/app/pages/HomePage";
import { Bussruteplanlegger } from "./app/pages/Bussruteplanlegger";
import { MySQL } from "./app/pages/MySQL";
import { Nettside } from "./app/pages/Nettside";
import { Kontakt } from "./app/pages/Kontakt";
import { kontakt } from "@/data/kontakt";


export default defineApp([
  setCommonHeaders(),
  render(Document, [
    route("/", HomePage),
    route("/Bussruteplanlegger", Bussruteplanlegger),
    route("/MySQL", MySQL),
    route("/Nettside", Nettside),
    route("/Kontakt", () => <Kontakt {...kontakt} />),
  ]),
]);
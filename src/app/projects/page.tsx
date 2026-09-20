import type { Metadata } from "next";
import WorksPage, { metadata as worksMetadata } from "@/app/works/page";

export const metadata: Metadata = {
  ...worksMetadata,
  title: "Projects & Portfolio | Brentiq Studio",
};

export default WorksPage;


import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Editor } from "./editor";

export const metadata: Metadata = {
  title: "Editor",
  description: "Create and edit captions in the editor workspace.",
};

export const instant = false;

export default async function EditorPage() {
  const session = (await cookies()).get("session")?.value;

  if (!session) {
    redirect("/login");
  }

  return <Editor />;
}

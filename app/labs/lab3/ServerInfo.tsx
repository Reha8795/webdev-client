import fs from "fs";
import os from "os";

export default function ServerInfo() {
  let files: string[] = [];
  try {
    files = fs.readdirSync(process.cwd()).filter((f) => !f.startsWith(".")).slice(0, 8);
  } catch {
    files = ["package.json", "next.config.mjs", "tsconfig.json"];
  }
  const info: Record<string, string | number> = {
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
    cpus: os.cpus().length,
  };
  return (
    <div id="wd-server-component">
      <h4>Files read on the server</h4>
      <ul id="wd-server-files">
        {files.map((f) => (<li key={f}>{f}</li>))}
      </ul>
      <h4>Server Information</h4>
      <pre id="wd-server-info">{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
}

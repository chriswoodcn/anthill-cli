import { downloadTemplate } from "giget";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import jsonfile from "jsonfile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = jsonfile.readFileSync(
  resolve(__dirname, "../../package.json"),
  "utf8"
);
const SUPPORTED_PROJECT_TYPES = pkg.config.supported_project_types;
const REPO_DIR_PREFIX = pkg.config.repo_dir_prefix;

export default async function action_create(name, options) {
  if (name === undefined) {
    console.error("project name is required");
    return;
  }
  const template = options.template;
  const force = options.force;
  const dest = options.dest;
  if (!SUPPORTED_PROJECT_TYPES.includes(template)) {
    console.error("project type is not supported");
    return;
  }

  const templateProvider = REPO_DIR_PREFIX + template;
  console.log("templateProvider: ", templateProvider);
  console.log("dest: ", resolve(dest, name));
  await downloadTemplate(templateProvider, {
    dir: resolve(dest, name),
    force,
    forceClean: force,
  });
}

import { downloadTemplate } from "giget";

const pkg = jsonfile.readFileSync("./package.json", "utf8");
const SUPPORTED_PROJECT_TYPES = pkg.config.supported_project_types;
const REPO_DIR_PREFIX = pkg.config.repo_dir_prefix;

export default async function action_create(name, options) {
  if (name === undefined) {
    console.error("project name is required");
    return;
  }
  const template = options.template;
  const force = options.force;
  if (!SUPPORTED_PROJECT_TYPES.includes(template)) {
    console.error("project type is not supported");
    return;
  }
  const templateProvider = REPO_DIR_PREFIX + template;
  downloadTemplate({
    source: templateProvider,
    dest: name,
    force,
    forceClean: force,
  });
}

import { downloadTemplate } from "giget";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import jsonfile from "jsonfile";
import ora from "ora";
import shell from "shelljs";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = jsonfile.readFileSync(
  resolve(__dirname, "../../package.json"),
  "utf8"
);
const SUPPORTED_PROJECT_TYPES = pkg.config.supported_project_types;
const REPO_DIR_PREFIX = pkg.config.repo_dir_prefix;

export default async function action_create(name, options) {
  console.log("Name: ", name);
  if (name === undefined) {
    console.error(chalk.red("project name is required"));
    return;
  }
  const template = options.template;
  const force = options.force;
  const dest = options.dest;
  console.log("Param template: ", template);
  console.log("Param force: ", force);
  console.log("Param dest: ", dest);

  if (!SUPPORTED_PROJECT_TYPES.includes(template)) {
    console.error(chalk.red("Project type is not supported"));
    return;
  }

  const templateProvider = REPO_DIR_PREFIX + template;
  console.log("Final template: ", templateProvider);
  console.log("Final dest: ", resolve(dest, name));
  let spinner;
  // 下载模板
  spinner = ora("Downloading template...").start();
  const downloadResult = await downloadTemplate(templateProvider, {
    dir: resolve(dest, name),
    force,
    forceClean: force,
  });
  if (downloadResult.error) {
    spinner.fail(chalk.red("Failed to download template"));
    console.error(downloadResult.error);
    return;
  }
  spinner.succeed(chalk.green("Template downloaded successfully"));
  // 安装依赖
  if (template == "anthill-client") {
    spinner = ora("Detect pkg manager...").start();
    let pkgManager;
    if (shell.exec("pnpm --version", { silent: true }).code === 0) {
      pkgManager = "pnpm";
    } else if (shell.exec("yarn --version", { silent: true }).code === 0) {
      pkgManager = "yarn";
    } else if (shell.exec("npm --version", { silent: true }).code === 0) {
      pkgManager = "npm";
    } else {
      console.error(chalk.red("No pkg manager found"));
      return;
    }
    spinner.succeed(
      chalk.green("Pkg manager detected successfully, use " + pkgManager)
    );
    spinner = ora("Installing dependencies...").start();
    shell.cd(resolve(dest, name));
    shell.exec(`${pkgManager} install`, { silent: true });
    spinner.succeed(chalk.green("Dependencies installed successfully"));
  }
}

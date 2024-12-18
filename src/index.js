#!/usr/bin/env node
import { Command, Option } from "commander";
import actions from "./actions/index.js";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const program = new Command();
import jsonfile from "jsonfile";
const pkg = jsonfile.readFileSync(
  resolve(__dirname, "../package.json"),
  "utf8"
);

const SUPPORTED_PROJECT_TYPES = pkg.config.supported_project_types;
const DEFAULT_PROJECT_TYPE = pkg.config.default_project_type;

program.version(pkg.version, "-v, --version");
program.name("anthill-cli");
program.usage("<command> [options]");
program.description("anthill-cli is a tool for easy use anthill projects");
// create命令

program
  .command("create <project-name>")
  .description(
    "create a new anthill project, current version support: " +
      SUPPORTED_PROJECT_TYPES.join(", ")
  )
  .addOption(
    new Option(
      "-t, --template <value>",
      `template name: ${SUPPORTED_PROJECT_TYPES.join(", ")}`
    )
      .choices(SUPPORTED_PROJECT_TYPES)
      .default(DEFAULT_PROJECT_TYPE)
  )
  .addOption(
    new Option(
      "-f, --force",
      "force to create project while directory already exists"
    ).default(true)
  )
  .addOption(
    new Option("-d, --dest <path>", "file path to save project").default(".")
  )
  .action((name, options) => {
    actions.action_create(name, options);
  });

// 解析终端指令
program.parse(process.argv);

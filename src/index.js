#!/usr/bin/env node
import { Command, Option } from "commander";
const program = new Command();
import jsonfile from "jsonfile";
const pkg = jsonfile.readFileSync("./package.json", "utf8");

const SUPPORTED_PROJECT_TYPES = pkg.config.supported_project_types;
const DEFAULT_PROJECT_TYPE = pkg.config.default_project_type;

program.version(pkg.version);
program.name("anthill-cli");
program.usage("anthill-cli <command> [options]");
program.description("anthill-cli is a tool for easy use anthill projects");
// create命令
program
  .command("create <project-name>")
  .addOption(
    new Option(
      "-t, --template <type>",
      `project type: ${SUPPORTED_PROJECT_TYPES.join(", ")}`
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
  .action((name, options) => {
    action_create(name, options);
  });

// 解析终端指令
program.parse(process.argv);

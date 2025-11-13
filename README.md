# NxTest - React Vanilla Monorepo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Nx Monorepo with React + Webpack + Jest + Cypress** ✨

This workspace demonstrates an Nx monorepo with:
- **Two micro frontend apps** (`app1` and `app2`) using React with Webpack bundler
- **One shared library** (`shared-ui`) consumed by both apps
- **Jest** for unit testing
- **Cypress** for E2E testing

Run `npx nx graph` to visualize the project dependency graph.

## Quick Start

### Run Development Servers

```sh
# App 1 (http://localhost:4200)
npx nx serve app1

# App 2 (http://localhost:4200)
npx nx serve app2
```

### Run Tests

```sh
# Test both apps
npx nx run-many --target=test --projects=app1,app2

# Test individual app
npx nx test app1

# Run E2E tests
npx nx e2e app1-e2e
```

### Build for Production

```sh
# Build both apps
npx nx run-many --target=build --projects=app1,app2

# Build individual app
npx nx build app1
```

### View Project Details

```sh
npx nx show project app1
npx nx show project app2
npx nx show project shared-ui
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Project Structure

```
nxTest/
├── apps/
│   ├── app1/              # Micro frontend 1
│   ├── app1-e2e/          # E2E tests for app1
│   ├── app2/              # Micro frontend 2
│   └── app2-e2e/          # E2E tests for app2
├── libs/
│   └── shared-ui/         # Shared React components
│       └── src/
│           └── lib/
│               └── shared-ui.tsx  # Greeting component
├── nx.json                # Nx configuration
├── tsconfig.base.json     # Shared TypeScript paths
└── package.json
```

## Adding Shared Components

The `shared-ui` library is already set up. Both apps import from it:

```tsx
import { Greeting } from '@nx-test/shared-ui';
```

To add more components to the shared library:

```sh
# Generate a new component in shared-ui
npx nx g @nx/react:component my-button --project=shared-ui --directory=lib

# Export it from libs/shared-ui/src/index.ts
# Then import in your apps
```

## Add More Projects

Generate new apps or libraries:

```sh
# New React app with Webpack
npx nx g @nx/react:app app3 --bundler=webpack --style=css --routing=true

# New shared library
npx nx g @nx/react:lib utils --bundler=none
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

# Frontend - THE GUILD

The frontend repository for THE GUILD, powered by Next.js v14 and Apollo Client for GraphQL data management assembled with Particle Auth integration for Avalanche Frtontier.

<picture>
    <source srcset="./logo_preview_dark.png"  media="(prefers-color-scheme: dark)"></source>
    <img src="./logo_preview_light.png"></img>
</picture>

## Tech Stack

**Client:** NextJS, Apollo Client, SASS-Modules

## Run Locally

#### Clone the project

```bash
  git clone https://github.com/theguild-quest/frontend.git
```

#### Go to the project directory

```bash
  cd theguild
```

#### Installation

This installation may require you to install `NVM`. Use this [link]('https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/')

```bash
  nvm use
  npm i
```

#### Start the dev server

```bash
  npm run dev
```

<!--
# Documentation

## The Work Flow Process

## 1. Start of the working day

To ensure updated code from all branches let's work through the process of getting everyone synchronized

```bash
    git checkout dev
    git pull
    git checkout your_branch_name
    git merge dev
    # resolve any conflicts
```

## 2. Push up code - daily

- Why?
  1. This helps your team know where you are at and can do partial PR
  2. This helps team know you are going in the right direction and if you aren’t, then you can be redirected before you’ve sunk hours or days into code (hopefully we are organize enough for this not to happen but misunderstanding happens – we are all human)
- At the end of your workday, your code should be pushed up regardless if you have finished to ensure previous steps
- Preferably, you should be pushing up code changes often. Every time you complete something small, a component, a little fix, style changes, etc you should be pushing those up

```bash
    git checkout dev
    git pull
    git checkout your_branch_name
    git merge dev # resolve any conflicts
    git push origin HEAD # --force if needed

```

## 3. All tasks in progress should have an open PR

## 4. Morning meetings

- Screen share what you are working on so we can see your progress, make sure you are going the right direct, answer any of your questions, comments, concerns, or address any blockers

## 5. Blocked tasks

- In case of blocked tasks by any means ensure to instantly address it in slack in `#frontend` or `#backend` slack channel depending on issue that you running into or if you have any questions regarding requirements or sheer understanding of the issue WRITE IN SLACK CHAT so that you co-workers can also get understanding and explanation from someone who knows.

## ISSUE BOARD

---

Current Issue board: https://diiant.atlassian.net/jira/software/projects/GG/boards/15

## SELECTING A TASK

#### (IF YOU DON’T HAVE ONE ASSIGNED TO YOU)

---

Any task that is in the `TO DO` column in the issue board has not been started.

Before selecting a task, feel free to ask the team leads if any tasks should be given to you next, there might be ones more important than other tasks, if not then you can pick. If no team lead is available (because you work different hours than them) then here is the criteria when picking a task:

## 1. All tasks are completed, what do I do???

- Connect with your team lead or write in slack channel that you're unassigned right now and/or sprint is empty
- Go to the backlog and select a task from there, choose one that is high priority.
- Go to the next sprint and get the team ahead!

## START YOUR TASK

---

## 1. Read your task

- If you have any confusion and/or questions about the task reach out to slack for response.
- If you have questions about the design, ask Dimi, Jihwan or your team lead(s) first, they might already know the answer.
- Use slack first for an immediate response as to not block you from making progress on your task.

## 2. Move your task to status `IN PROGRESS` on the Issue Board

- Drag and drop it in the status `IN PROGRESS` column.
- In your task, under Labels, choose Status::In Progress.

## 3. Create a PR – with the correct branch

```bash
    git checkout dev
    git pull
    git checkout -b new_branch_name
    git push origin HEAD # and then create a PR in github
```

## 5. Confusion or unclear task description

- Do NOT wait or sit idle for someone to help you. Ask someone available for help. Get clarity sooner rather than later when everyone is available.
- If at any moment you don’t completely understand parts of your task, reach out to someone for clarification. This will save you time. Don’t be afraid to ask. We are all here to help one another.

## STYLE GUIDE

---

## 1. Classes

- For each component that require addition styling use this line at the top of the component

```tsx
import classes from './YOUR_COMPONENT.module.sass'
```

## 2. Avoid px, use spacing

- Or in the very least, use rem
  - Rem is based on the default font size for the current context
- Styles that are small are allowed rem like border-radius
- **_IF YOU EVER INCOUNTER INCORRECT SIZING IN DESIGN (like 34px) ROUND IT TO BEST FITTING SPACING (for example if design says 34px insted of using 34px in styling use spacing(9) => 36px and look if it's looking good)_**

## 3. Spacing(number)

- The spacing is set to the default of 4, so `spacing(1)` is 4px
  - Example: `margin: spacing(5)` -> sets margin: 20
  - Padding: `spacing(1, 2, 3, 4)` -> sets padding: 4, 8, 12, 16
  - Margin: `spacing(1, 3)`-> sets margin: 4 3
- Spacing is similar to the CSS way of setting it:
  - `spacing(all)`
  - `spacing(topBottom, left, right)`
  - `spacing(top, bottom, left, right)`

## 4. Merging classNames

- Use `cx` imported from `classnames` library to combine two classes
- Usage/Examples

```jsx
<div className={cx(classes.someClass, { [classes.redClass]: !verified })}>
  I WANT THIS TEXT TO BE RED DEPENDING ON VERIFIED VARIABLE
</div>
```

## 11. Colors:

1. Use the color palette from @/theme/\_variables.sass to get the color you want.
2. You can see which color from variables to use in Figma after clicking component with desired color and seeing info about it in right sidebar (all colors are probably already defined so don't use static #AABBCC)

- Example:

```
@import @/theme

p
  color: $pink
```

2. Opacity Colors

- replace `rgba(176, 190, 197, 0.5)` with `opacify` or `transparentize` and the color:

```
$translucent-red: rgba(255, 0, 0, 0.5)
p
  color: opacify($translucent-red, 0.3)
  background-color: transparentize($translucent-red, 0.25)

```

## 10. Typogrpahy

1. Use Typography with variant where you can
2. If you need Typography in styles

- Do not use static fontSizes instead use theme typography
- Example: say you are using a MUI component where the font is passed in children

```
sm: {
    fontSize: typography.caption.fontSize,
    lineHeight: typography.caption.lineHeight,

    "& > .MuiAlert-icon": {
      "& > .material-icons": {
        fontSize: typography.caption.fontSize,
        lineHeight: typography.caption.lineHeight,
      }
    }
  },

```

## 12. Icons

- Icons are located in mp_modules/mp-core/icons

# CODE STYLING

---

## 2. File Structure

Desired file structure for

```

```

- Create a new file based on the name of the main component you are creating e.g. SnackBar
- Index.ts (this should only have imports of the code)
- Create new tsx file of the same name as folder to put the main part of your code
- styles.ts (styles for the component)
- Example:
  - SnackBar (folder)
    - index.ts (where you export the component)
    - SnackBar.tsx (where the code should be)
    - styles.ts (componet styles)

## 3. React.FC

- Use React.FC instead of FC for clarity. That way if there is ever a function called FC in the future we will know which one is which.

## 4. UI & Containers

- There is probably a MUI component for that
- The mocks do not have containers, so you need to be able to logically figure out when to group components together and put them in a container
  - Key indicators:
    - Buttons are usually together in a container
    - If it’s in an outlined box together
    - Based on grid layout or other container-like MUI components
- Docs to understand when to use containers:
  - https://mui.com/material-ui/react-grid/
  - https://m3.material.io/foundations/layout/understanding-layout/overview

## 5. Clean Readable Code

- Nested code is a clear sign there is a better solution you should be using
- Remove brackets from strings
  - Example: `<Typography variant=”h2” />`
- Remove default props from components
  - Example: `<Typography />`
- Deconstruct
  - Deconstruct to cut back on code redundancy, typing, and give variable names that are more descriptive
  - Deconstruct props inlinen with component to keep things simple unless it's unreadble
  - `onFunction(([_state, event]) => …)`
- Use underscores when the variable is not being used, this will make Eslint ignore unused variables
  - `onClick((_e) => …)`

## 6. Imports

- Group imports based on type.
  1.  Importing react goes at the top.
  2.  MUI components.
  3.  Then group any other third party libraries.
  4.  Icons.
  5.  Re-usable components used from Ready.
  6.  Any local files.

## 7. Re-Usable Components

- Storybook: TDB
- Folder location: `src/modules/mp-shared-components`
- When to create a re-usable component:
  - When using InVision inspect mode `</>`, you can click on the component with the recycle symbol and in the top right, it will say:
    - `MP-Snap-Styles` if it is reusable in Snap platform (or even Ready despite it saying snap - soon the two will be merged and share components)
    - `MP-Shared` if it's a re-usable component like a button
    - `document` if it's a locally reused component
- Reusable component is in Snap but not Ready
  - For now, bring the Snap component over to Ready and follow the same file structure as Snap

## 8. State machine (xState) - TBD

## 9. React-Hook-Form

- Docs:
  - Getting Started: https://react-hook-form.com/get-started/
  - Control Inputs for MUI: https://react-hook-form.com/get-started/#IntegratingControlledInputs
  - useControl hook: https://react-hook-form.com/api/usecontroller/
- Example: See (messy) github project example that has React-Hook-Form, React, TypeScript, MUI, and xState
  - https://github.com/celestecarter95/react-hook-form-typescript

## 10. Clean up old code

- Simplify the code:
  - If you’ve taken the time to understand it, do everyone a favor and clean up the code while you understand how it works
  - Write the logic cleaner
  - Use better variable names
  - Use best code practices
  - Break code into functions/components to make into smaller more understandable pieces
  - Replace a component if you know a re-usable component exists
    - Example: button that has custom styling but there is now a re-usable component for that while in the past there may not have been!
  - Remove dead imports/code
- Variables:
  - Make variable names as clear as possible on what it is, especially old code that have terrible names, unclear names, or variable name is spelled incorrectly.
  - Underscore \_ is for variables that aren’t used and it helps the linter not complain, so if any variable name is being used with underscore, please remove the underscore from the name.

## 11. Finished Coding

- Eslint:
  - Run `yarn dprint:fix` to lint your code
- Double check UI matches designed mocks

# ESLINT

### 1. Turn off your personal linter

### 2. Use `yarn dprint:fix` when you are finished with your code -->

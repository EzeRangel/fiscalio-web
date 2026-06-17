# Project Workflow

## Guiding Principles

1. **The Plan is the Source of Truth:** All work must be tracked in `plan.md`
2. **The Tech Stack is Deliberate:** Changes to the tech stack must be documented in `tech-stack.md` *before* implementation
3. **Manual Verification & Correctness:** Verify functionality manually after implementation.
4. **No Automated Tests:** Do not add automated tests unless explicitly requested by the user (as per `AGENTS.md`).
5. **User Experience First:** Every decision should prioritize user experience and premium design aesthetics.
6. **Non-Interactive & CI-Aware:** Prefer non-interactive commands.

## Task Workflow

All tasks follow a strict lifecycle:

### Standard Task Workflow

1. **Select Task:** Choose the next available task from `plan.md` in sequential order
2. **Mark In Progress:** Before beginning work, edit `plan.md` and change the task from `[ ]` to `[~]`
3. **Implement Task:** Write the application code necessary to complete the task.
4. **Refactor:** Refactor the implementation code to improve clarity, remove duplication, and enhance performance.
5. **Quality Checks:** Run the linter and TypeScript compiler checks:
   - `npm run lint`
   - `npx tsc --noEmit`
6. **Verify Manually:** Perform manual checks to verify the feature works as expected.
7. **Document Deviations:** If implementation differs from tech stack:
   - **STOP** implementation
   - Update `tech-stack.md` with new design
   - Add dated note explaining the change
   - Resume implementation
8. **Commit Code Changes:**
   - Stage all code changes related to the task.
   - Propose a clear, concise commit message (e.g., `feat(ui): Create basic layout for admin tool`).
   - Perform the commit.
9. **Attach Task Summary with Git Notes:**
   - **Step 9.1: Get Commit Hash:** Obtain the hash of the *just-completed commit* (`git log -1 --format="%H"`).
   - **Step 9.2: Draft Note Content:** Create a detailed summary for the completed task.
   - **Step 9.3: Attach Note:** Use `git notes` to attach the summary to the commit.
     ```bash
     git notes add -m "<note content>" <commit_hash>
     ```
10. **Get and Record Task Commit SHA:**
    - **Step 10.1: Update Plan:** Read `plan.md`, find the line for the completed task, update status to `[x]`, and append the commit hash.
    - **Step 10.2: Write Plan:** Write the updated content back to `plan.md`.
11. **Commit Plan Update:** Stage and commit `plan.md` with a message like `conductor(plan): Mark task '...' as complete`.

### Phase Completion Verification and Checkpointing Protocol

**Trigger:** This protocol is executed immediately after a task is completed that also concludes a phase in `plan.md`.

1. **Announce Protocol Start:** Inform the user that the phase is complete and the verification protocol has begun.
2. **Propose a Detailed, Actionable Manual Verification Plan:**
   - Walk the user through a step-by-step verification plan with specific URLs, buttons to click, and expected outputs.
3. **Await Explicit User Feedback:**
   - Ask: "**Does this meet your expectations? Please confirm with yes or provide feedback on what needs to be changed.**"
   - **PAUSE** and await the user's response. Do not proceed without confirmation.
4. **Create Checkpoint Commit:**
   - Stage all changes and commit: `conductor(checkpoint): Checkpoint end of Phase X`.
5. **Attach Auditable Verification Report using Git Notes:**
   - Use `git notes` to attach the verification report to the checkpoint commit.
6. **Get and Record Phase Checkpoint SHA:**
   - Update `plan.md` with the checkpoint hash next to the phase heading.
7. **Commit Plan Update:** Stage and commit `plan.md` with `conductor(plan): Mark phase '<PHASE NAME>' as complete`.
8. **Announce Completion:** Inform the user that the phase is complete and checkpointed.

## Quality Gates

Before marking any task complete, verify:
- [ ] Linter passes (`npm run lint`)
- [ ] TypeScript compiles (`npx tsc --noEmit`)
- [ ] Works correctly on mobile and desktop
- [ ] No comments in code (clean of inline comments per `AGENTS.md`)
- [ ] UI looks premium and follows the design system (`docs/DESIGN.md`)

## Minor Tasks & Exemptions

For minor tasks that do not impact system architecture or span multiple components (such as typos, simple layout/styling tweaks, or quick bug fixes), the Conductor track creation and checkpoint protocol can be bypassed.

- **Bypass Rule:** Trivial changes can be committed directly to the repository without a Conductor track, plan, or verification protocol.
- **Commit Organization:** Use structured commit prefixes (e.g., `fix(typo):`, `style:`, `chore:`) to clearly denote minor edits.
- **Agent Guidelines:** When executing on behalf of a user, an AI agent is permitted to make minor edits directly without introducing plan/track files, ensuring rapid execution.


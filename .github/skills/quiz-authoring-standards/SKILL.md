---
name: quiz-authoring-standards
description: 'Create, review, and fix Korean-learning quiz content in this repo. Use for: ra de kiem tra, sua logic cau hoi/dap an, sua dap an nhieu, sua chinh ta Viet-Han, chuan hoa giai thich, va dong bo dinh dang session quiz files (sessionXX.ts).'
argument-hint: 'Task + session file (vi du: kiem tra cau 8-12 trong session34.ts)'
user-invocable: true
disable-model-invocation: false
---

# Quiz Authoring Standards

Use this skill when creating or editing quiz files under `src/data/quiz/sessionXX.ts`.

## Goals

- Keep question logic unambiguous.
- Keep answer checking robust for real learner input.
- Keep Korean natural and Vietnamese clear, simple, and typo-free.
- Keep UI rendering friendly (line breaks, readable explanations).

## Core Rules

1. Prompt language
- Default to simple Vietnamese for instructions.
- Use Korean sentence as learning content, not long Korean meta-instruction.

2. Multiple-choice options
- Do not leak the answer by writing labels like "(sai cau truc)" inside options.
- If the target is selecting Korean sentence from Vietnamese prompt, options should be Korean-only.
- Do not append Vietnamese glosses/translations to each option when the goal is answer selection; keep translation in explanation after checking.
- For honorific/sentence-form drills, prefer full sentences with subject/particles (e.g., `께서`, `은/는`, `이/가`, `을/를`) instead of fragments.
- If the Vietnamese stem expresses a full meaning sentence (e.g., "Chon cach viet dung cho nghia: ..."), options should also be full Korean sentences in the same frame (not fragments like only verb endings).

3. Fill-input answers
- For sentence-level answers, accept variants with and without final period.
- Use `correctAnswer` as `string[]` when multiple exact forms are acceptable.
- Keep acceptable variants semantically identical (avoid mixing different politeness levels unless intended).
- For rewrite prompts, prefer this stem format: `Cau sau sai. Hay viet lai cho dung:\n...` (or fully accented Vietnamese equivalent).

4. Explanation quality
- Prefer markdown format:
  - `### ✅ Dap an dung`
  - `### 🧠 Ghi nho nhanh`
  - `### ❌ Vi sao dap an khac sai`
- Use short bullets and bold key patterns (e.g., `-고 있지 않다`, `-고 계시다`).
- Include a Vietnamese translation line when the stem uses Korean sentence comprehension.

5. Typo and style checks
- Vietnamese should use full diacritics.
- Korean options should be orthographically valid unless intentionally testing typo detection.
- Keep terminology consistent: "Nghia 1", "Nghia 2" style should be unified inside one set.
- Keep grammarPoint labels consistent in Vietnamese for rewrite items (e.g., `Dung/Sai + sua loi (...)` or accented equivalent).

## Pattern by Question Type

### A) Meaning classification (Nghia 1 vs Nghia 2)

Checklist:
- One sentence in Korean (or clear Vietnamese paraphrase).
- Options are meaning labels only.
- Correct answer is single and contextually unambiguous.
- Avoid verbs that are ambiguous between action-progress and resulting state unless context disambiguates.

### B) Vietnamese meaning -> choose Korean sentence

Checklist:
- Stem in Vietnamese.
- Four Korean options only.
- Keep structural parity between stem and options: if stem targets a full sentence, all options should be full sentences with matching subject/location context.
- Distractors are plausible but wrong by grammar, tense, honorific, or particle.
- Do not embed explanation hints inside options.

### C) True/False + rewrite

Checklist:
- Prompt clearly says sentence is wrong and asks rewrite.
- Keep one target correction intent.
- `correctAnswer` should include punctuation variants when needed.

## Project-specific Guardrails

- Main data files: `src/data/quiz/sessionXX.ts`.
- Keep object schema aligned with `Question` interface.
- If adding `correctAnswer: string[]`, ensure checker accepts all variants in `src/components/roadmap/Quiz.tsx`.
- Dialogue stems should use explicit newlines (`\n`) so UI renders separate lines.
- Do not put bilingual clues directly in option text for multiple-choice; put translations in `explanation` only.

## Review Procedure (before finishing)

1. Logic check
- Does each question test exactly one target point?
- Is there exactly one best answer for multiple-choice?

2. Language check
- Vietnamese diacritics complete?
- Korean natural and typo-free?

3. UX check
- Any option leaks the answer?
- Any option contains hint labels or bilingual clues that make guessing too easy?
- Is explanation readable with line breaks and emphasis?

4. Technical check
- Run diagnostics on edited files.
- Confirm `correctAnswer` strings match option text exactly for multiple-choice.
- For fill-input, confirm accepted variants are all represented in `correctAnswer` array when needed.

## Quick Fix Recipes

- Learner marked wrong despite acceptable variant:
  - Add acceptable variant into `correctAnswer: string[]`.
  - Verify fill-input checker matches against all array entries.

- Option too obvious:
  - Replace hint-labeled wrong option with naturally plausible distractor.

- Stem-option mismatch (full meaning stem but fragment options):
  - Rewrite all options into full Korean sentences that share the same sentence frame.
  - Update `correctAnswer` to the full sentence string exactly matching one option.
  - Update explanation to show the full correct sentence, not only a fragment.

- Korean prompt too hard:
  - Move instruction to Vietnamese, keep Korean only in target sentence/options.

## Templates

- Use [question templates](./assets/question-templates.md) for copy-paste blocks by question type.

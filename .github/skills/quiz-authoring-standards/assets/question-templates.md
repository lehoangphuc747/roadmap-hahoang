# Question Templates for sessionXX.ts

Use these templates as copy-paste blocks when creating or fixing quiz items.

## 1) Meaning Classification (Nghia 1 vs Nghia 2)

```ts
{
    id: 0,
    type: 'multiple-choice',
    grammarPoint: 'Nghia 1 va Nghia 2 (-고 있다)',
    question: 'Cau trong ngoac (_____.) thuoc nghia tieng Viet nao?',
    options: [
        'Nghia 1: hanh dong dang dien ra',
        'Nghia 2: trang thai ket qua duy tri',
        'Nghia 3: ____',
        'Nghia 4: ____'
    ],
    correctAnswer: 'Nghia 2: trang thai ket qua duy tri',
    explanation: 'Dich: "____." Voi ____, cau nay the hien trang thai/hanh dong ____, nen la Nghia __.'
}
```

Checklist:
- Avoid ambiguous verbs unless context disambiguates.
- Keep one clearly best answer.

## 2) Vietnamese Meaning -> Choose Correct Korean Sentence

```ts
{
    id: 0,
    type: 'multiple-choice',
    grammarPoint: '-고 있다 (Phu dinh)',
    question: 'Chon cach viet dung cho nghia: "____"',
    options: [
        '____',
        '____',
        '____',
        '____'
    ],
    correctAnswer: '____',
    explanation: '### ✅ Dap an dung\n\n**____**\n\n- Dich: **____**\n- Mau dung: **____**\n\n### 🧠 Ghi nho nhanh\n\n- ____\n- ____\n\n### ❌ Vi sao cac dap an khac sai\n\n- **____**: ____\n- **____**: ____\n- **____**: ____'
}
```

Checklist:
- Stem in Vietnamese, options in Korean-only.
- Do not leak hints like "(sai cau truc)" inside options.

## 3) Honorific Sentence Selection

```ts
{
    id: 0,
    type: 'multiple-choice',
    grammarPoint: '-고 계시다',
    question: 'Chon cau kinh ngu dung: "____"',
    options: [
        '____께서 ____을/를 ____고 계세요.',
        '____는 ____을/를 ____고 있어요.',
        '____께서 ____이/가 ____고 계세요.',
        '____께서 ____을/를 ____고 있으세요.'
    ],
    correctAnswer: '____께서 ____을/를 ____고 계세요.',
    explanation: '### ✅ Dap an dung\n\n**____께서 ____을/를 ____고 계세요.**\n\n- Dich: **____**\n- Ngu canh nang chu ngu: **께서** + **-고 계시다**\n\n### ❌ Vi sao cac dap an khac sai\n\n- **____는 ... -고 있어요**: khong phai dang kinh ngu muc tieu\n- **...이/가 ...고 계세요**: sai tro tu tan ngu\n- **...고 있으세요**: co the gap trong hoi thoai, nhung bai nay uu tien mau chuan **-고 계시다**'
}
```

## 4) Fill Input (Simple Conjugation)

```ts
{
    id: 0,
    type: 'fill-input',
    grammarPoint: '-고 있다',
    question: '가: ____?\n나: ____. (____다)',
    correctAnswer: '____고 있어요',
    explanation: '____다 -> ____고 있어요.'
}
```

Checklist:
- Use `\n` for dialogue line breaks.
- Keep one target conjugation.

## 5) True/False + Rewrite

```ts
{
    id: 0,
    type: 'fill-input',
    grammarPoint: 'Dung/Sai + sua loi (-고 있다)',
    question: 'Cau sau sai. Hay viet lai cho dung:\n____',
    correctAnswer: ['____.', '____'],
    explanation: '### ✅ Cau dung\n\n**____.**\n\n### 🧠 Vi sao sai\n\n- ____\n- ____'
}
```

Checklist:
- Accept both with/without final period when needed.
- Correction intent must be singular and clear.

## 6) Past Progressive Selection (-고 있었다)

```ts
{
    id: 0,
    type: 'multiple-choice',
    grammarPoint: '-고 있었다',
    question: 'Chon cau dung cho ngu canh qua khu: "____"',
    options: [
        '____고 있었어요',
        '____었/았고 있었어요',
        '____고 있어요',
        '____겠어요'
    ],
    correctAnswer: '____고 있었어요',
    explanation: 'Qua khu tiep dien dung la **-고 있었다**: ____고 있었어요.'
}
```

Checklist:
- Keep distractors plausible but not obviously labeled as wrong.
- Ensure one best answer in context.

## Final Pre-Ship Checklist

- Logic: one question, one target, one best answer.
- Language: Vietnamese diacritics complete; Korean spelling natural.
- UX: no answer leaks in option text.
- Technical: for multiple-choice, `correctAnswer` string must match option text exactly.

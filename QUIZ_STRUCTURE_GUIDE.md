# 📋 Hướng dẫn: Cấu trúc Đề thi & Cách tạo Đề thi

## 📌 Tổng quan kiến trúc

Hệ thống đề thi được xây dựng với 3 thành phần chính:

```
1. Data Layer (src/data/quiz/session*.ts)
   ↓
2. Component Layer (src/components/roadmap/Quiz.tsx)
   ↓
3. Page Layer (src/pages/bai-tap/buoi-*.astro)
```

---

## 🔧 1. Data Layer - Định nghĩa câu hỏi

### Vị trí file:
- `src/data/quiz/session20.ts` - Buổi 20
- `src/data/quiz/session28.ts` - Buổi 28
- `src/data/quiz/sessionNN.ts` - Buổi NN

### Cấu trúc Question Interface:

```typescript
export interface Question {
    id: number;                          // ID duy nhất của câu hỏi
    type: 'multiple-choice' | 'fill-input';  // Loại câu hỏi
    grammarPoint: string;                // Tên cấu trúc ngữ pháp (VD: "-고", "아/어요")
    question: string;                    // Nội dung câu hỏi (hỗ trợ **text** = in đậm)
    description?: string;                // Hướng dẫn thêm (VD: "Chia động từ")
    translationVi?: string;              // Dịch tiếng Việt (tùy chọn, hiển thị sau khi trả lời)
    options?: string[];                  // Dành cho multiple-choice (4 lựa chọn)
    correctAnswer: string | string[];    // Đáp án đúng (string[] = chấp nhận nhiều)
    explanation: string;                 // Giải thích đáp án
}
```

### Ví dụ 1: Multiple-choice (Trắc nghiệm)

```typescript
{
    id: 1,
    type: 'multiple-choice',
    grammarPoint: '이/가',
    question: '가: 누가 빵을 먹었어요?\n나: ______ 빵을 먹었어요.',
    options: ['제가', '저는', '저를', '저의'],
    correctAnswer: '제가',
    explanation: 'Khi hỏi "누가" (Ai - chủ ngữ), câu trả lời phải dùng "제가" (Tôi - chủ ngữ).'
}
```

### Ví dụ 2: Fill-input (Điền khuyết)

```typescript
{
    id: 3,
    type: 'fill-input',
    grammarPoint: '을/를',
    question: '밥______ 먹어요. (Hãy điền tiểu từ thích hợp)',
    correctAnswer: '을',
    explanation: '"밥" có patchim -> dùng "을".'
}
```

### Ví dụ 3: Nhiều đáp án chấp nhận

```typescript
{
    id: 2,
    type: 'multiple-choice',
    grammarPoint: '못 (không thể)',
    question: '...',
    options: ['가요', '안 갔어요', '못 갔어요', '가지 마세요'],
    correctAnswer: ['못 갔어요', '안 갔어요'],  // ← Array = cả 2 đều đúng
    explanation: 'Cả 안 갔어요 và 못 갔어요 đều chấp nhận...'
}
```

### File hoàn chỉnh (Ví dụ session20):

```typescript
export interface Question {
    id: number;
    type: 'multiple-choice' | 'fill-input';
    grammarPoint: string;
    question: string;
    description?: string;
    translationVi?: string;
    options?: string[];
    correctAnswer: string | string[];
    explanation: string;
}

export const quizQuestions: Question[] = [
    /* Các câu hỏi tại đây */
];
```

---

## 🎨 2. Component Layer - Quiz.tsx

### Vị trí:
`src/components/roadmap/Quiz.tsx`

### Props nhận:

```typescript
interface QuizProps {
    sessionId?: number;                              // VD: 20, 28, 29 (default: 20)
    quizSet?: 'default' | 'grammar' | 'grammar-reverse';
}
```

### Cách hoạt động:

1. **Load câu hỏi động**:
   - Từ `sessionId`, component tru động import module `session${sessionId}.ts`
   - Hỗ trợ nhiều quiz set từ cùng 1 session (VD: session28 có 3 dạng)

2. **Quản lý state**:
   - `currentIndex`: Câu hiện tại
   - `answers`: Lưu trữ toàn bộ câu trả lời
   - `translationPeeked`: Theo dõi xem trước dịch (trừ 0.5 điểm/câu)

3. **Tính điểm**:
   - Mỗi câu đúng = 1 điểm
   - Nếu xem dịch VN trước khi trả lời = 0.5 điểm
   - Formula: `total = số câu đúng - 0.5 × số câu xem dịch trước`

4. **Giao diện**:
   - **Trái**: Câu hỏi (multiple-choice hoặc input)
   - **Phải**: Progress bar, bảng xếp hạng câu hỏi
   - **Dưới**: Nút Previous/Next

### Tính năng chính:

| Tính năng | Chi tiết |
|-----------|----------|
| ⌨️ Phím tắt | 1-4 = chọn đáp án, Enter = kiểm tra/tiếp theo |
| 🎯 Shuffle | Các lựa chọn được xáo trộn ngẫu nhiên mỗi câu |
| 📝 Tự luận | `fill-input` tự động focus input |
| 📊 Kết quả | Màn hình tổng kết, tải HTML kết quả |
| ⏱️ Dịch VN | Hiển thị **sau** khi chọn đáp án (nếu có) |

---

## 📄 3. Page Layer - .astro files

### Vị trí:
`src/pages/bai-tap/buoi-*.astro`

### Cấu trúc cơ bản:

```astro
---
import RoadmapLayout from "../../layouts/RoadmapLayout.astro";
import Quiz from "../../components/roadmap/Quiz";
---

<RoadmapLayout title="Tên bài">
    <main class="h-screen bg-white overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="flex-shrink-0 px-4 md:px-8 py-3 border-b border-slate-200 bg-white flex items-center justify-between">
            <a href="/" class="...">← Quay về Lộ trình</a>
            <h1 class="...">Tên bài</h1>
            <span class="...">Buổi 20</span>
        </div>

        <!-- Quiz Container -->
        <div class="flex-1 overflow-auto p-4 md:p-6">
            <Quiz client:only="react" sessionId={20} />
            <!-- Nếu có quizSet: sessionId={28} quizSet="grammar" -->
        </div>
    </main>
</RoadmapLayout>
```

### Các tệp hiện tại:

```
buoi-20.astro              → Quiz cho Buổi 20 (default)
buoi-22.astro              → Quiz cho Buổi 22
buoi-28.astro              → Quiz tổng hợp (quizSet="default")
buoi-28-grammar.astro      → Tên cấu trúc (quizSet="grammar")
buoi-28-meaning.astro      → Nghĩa (quizSet="grammar-reverse")
buoi-29.astro, ...
```

---

## 🚀 Hướng dẫn: Tạo đề thi mới

### Bước 1: Tạo file data
**Tạo:** `src/data/quiz/sessionNN.ts`

```typescript
export interface Question {
    id: number;
    type: 'multiple-choice' | 'fill-input';
    grammarPoint: string;
    question: string;
    description?: string;
    translationVi?: string;
    options?: string[];
    correctAnswer: string | string[];
    explanation: string;
}

export const quizQuestions: Question[] = [
    {
        id: 1,
        type: 'multiple-choice',
        grammarPoint: '구조1',
        question: 'Câu hỏi đầu tiên?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'A',
        explanation: 'Giải thích...'
    },
    {
        id: 2,
        type: 'fill-input',
        grammarPoint: '구조2',
        question: 'Điền từ: ____',
        correctAnswer: '답',
        explanation: 'Giải thích...'
    },
    // ... thêm câu tiếp theo
];
```

### Bước 2: Tạo trang Astro
**Tạo:** `src/pages/bai-tap/buoi-NN.astro`

```astro
---
import RoadmapLayout from "../../layouts/RoadmapLayout.astro";
import Quiz from "../../components/roadmap/Quiz";
---

<RoadmapLayout title="Bài tập Buổi NN">
    <main class="h-screen bg-white overflow-hidden flex flex-col">
        <div class="flex-shrink-0 px-4 md:px-8 py-3 border-b border-slate-200 bg-white flex items-center justify-between">
            <a href="/" class="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold text-sm">
                <span>←</span> Quay về Lộ trình
            </a>
            <h1 class="text-lg font-bold text-slate-800">Tên bài</h1>
            <span class="px-3 py-1 bg-indigo-100 text-primary rounded-full text-xs font-bold">
                Buổi NN · Ngày/Tháng/Năm
            </span>
        </div>
        <div class="flex-1 overflow-auto p-4 md:p-6">
            <Quiz client:only="react" sessionId={NN} />
        </div>
    </main>
</RoadmapLayout>
```

### Bước 3: (Tùy chọn) Thêm quizSet riêng
Nếu muốn có 2-3 dạng quiz từ cùng 1 session (như Buổi 28):

**File:** `src/data/quiz/sessionNN.ts`

```typescript
// Quiz 1: Default
export const quizQuestions: Question[] = [ /* ... */ ];

// Quiz 2: Grammar names
export const grammarNameQuizQuestions: Question[] = [ /* ... */ ];

// Quiz 3: Reverse (meaning to grammar)
export const grammarMeaningToNameQuizQuestions: Question[] = [ /* ... */ ];
```

**Tạo trang mới:** `src/pages/bai-tap/buoi-NN-grammar.astro`

```astro
<Quiz client:only="react" sessionId={NN} quizSet="grammar" />
```

---

## 📊 Hạn chế hiện tại & Lưu ý

| Điểm | Chi tiết |
|------|----------|
| **Max 4 lựa chọn** | Multiple-choice chỉ hỗ trợ tối đa 4 tùy chọn |
| **Shuffle mỗi lần** | Lựa chọn được xáo trộn lại khi quay lại câu |
| **Nhạy cảm case** | Fill-input: "Đáp" ≠ "đáp" (lowercase so sánh) |
| **Array correctAnswer** | Dùng khi nhiều đáp án đều chính xác |

---

## 🎯 Ví dụ hoàn chỉnh

### Tạo Buổi 36:

**1. `src/data/quiz/session36.ts`**
```typescript
export interface Question {
    id: number;
    type: 'multiple-choice' | 'fill-input';
    grammarPoint: string;
    question: string;
    options?: string[];
    correctAnswer: string | string[];
    explanation: string;
}

export const quizQuestions: Question[] = [
    {
        id: 1,
        type: 'multiple-choice',
        grammarPoint: '-(으)ㄴ 후에',
        question: '가: 친구를 만난 (_______) 영화를 봤어요.\n나: 그래요? 즐거웠겠네요.',
        options: ['앞에', '후에', '사이에', '동안'],
        correctAnswer: '후에',
        explanation: '-(으)ㄴ 후에 = Sau khi.... Dùng để nối 2 hành động có thứ tự lúc lượt.'
    },
    {
        id: 2,
        type: 'fill-input',
        grammarPoint: '이것 vs 그것 vs 저것',
        question: '저것은 뭐예요?',
        correctAnswer: '저것',
        explanation: '저것 = cái ấy (xa cả 2 người nói)'
    }
];
```

**2. `src/pages/bai-tap/buoi-36.astro`**
```astro
---
import RoadmapLayout from "../../layouts/RoadmapLayout.astro";
import Quiz from "../../components/roadmap/Quiz";
---

<RoadmapLayout title="Bài tập Buổi 36">
    <main class="h-screen bg-white overflow-hidden flex flex-col">
        <div class="flex-shrink-0 px-4 md:px-8 py-3 border-b border-slate-200">
            <a href="/" class="...">← Quay về Lộ trình</a>
            <h1 class="...">Ôn tập tổng hợp</h1>
            <span>Buổi 36</span>
        </div>
        <div class="flex-1 overflow-auto p-4 md:p-6">
            <Quiz client:only="react" sessionId={36} />
        </div>
    </main>
</RoadmapLayout>
```

---

## 🔑 Tóm tắt nhanh

```
┌─ DATA: src/data/quiz/sessionNN.ts
│  └─ Question[] array
│     ├─ id, type, grammarPoint
│     ├─ question (hỗ trợ **text**)
│     ├─ options (multiple-choice)
│     ├─ correctAnswer (string | string[])
│     └─ explanation
│
├─ COMPONENT: src/components/roadmap/Quiz.tsx
│  ├─ Props: sessionId, quizSet
│  ├─ Load: import(`session${sessionId}.ts`)
│  ├─ State: currentIndex, answers, translationPeeked
│  └─ Render: left (question) + right (progress)
│
└─ PAGE: src/pages/bai-tap/buoi-NN.astro
   └─ <Quiz sessionId={NN} quizSet="default" />
```

✅ **Bạn đã hiểu xong cấu trúc!** Bây giờ có thể tạo đề thi mới bằng cách copy template ở trên.

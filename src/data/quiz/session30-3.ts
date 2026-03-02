/**
 * Bài tập Buổi 30 – Reading Dạng 01 (Câu 1–21)
 * Ngày: 02/03/2026 (Thứ 2)
 * Bài tập số 3: Ôn tập Dạng 1 TOPIK
 * Nguồn: Ôn tập ngữ pháp Bài 01-67 (minimalist)
 */
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
        type: "multiple-choice",
        grammarPoint: "N-은/는",
        question: "나는 학생입니다. 언니 (      ) 학교 선생님입니다.",
        translationVi: "Tôi là học sinh. Chị tôi là giáo viên trường.",
        options: ["은", "는", "이", "를"],
        correctAnswer: "는",
        explanation: `### ✅ Đáp án đúng

**는** — 🔹 \`N-은/는\`: trợ từ chủ đề (주제)

🗣️ **Ví dụ:** 나는 학생입니다. 언니 **는** 학교 선생님입니다.

⚡ **Hiểu nhanh:** 
- "언니" (chị) không có 받침 → dùng **는**
- -은/는 dùng để khơi gợi chủ đề, mang ý "còn về phía (ai), thì..."
- Câu này so sánh: tôi là học sinh, còn chị thì là giáo viên

---

### ❌ Các đáp án sai

- **은:** chỉ dùng khi danh từ trước có 받침 (예: "책은") → "언니"는 không có 받침 → **sai**

- **이:** trợ từ chủ ngữ (이/가) để nhấn mạnh chủ ngữ → không phù hợp so sánh/chủ đề → **sai**

- **를:** trợ từ tân ngữ → không phù hợp → **sai**

---`
    },
    {
        id: 2,
        type: "multiple-choice",
        grammarPoint: "N-을/를",
        question: "매일 아침 여섯 시에 일어나서 우유를 (      ) 마셔요.",
        translationVi: "Mỗi sáng lúc 6 giờ tôi dậy rồi uống một cốc sữa.",
        options: ["한 잔은", "한 잔을", "한 잔이", "한 잔에"],
        correctAnswer: "한 잔을",
        explanation: `### ✅ Đáp án đúng

**한 잔을** — 🔹 \`N-을/를\`: trợ từ tân ngữ (목적어)

🗣️ **Ví dụ:** 매일 아침 여섯 시에 일어나서 우유를 **한 잔을** 마셔요.

⚡ **Hiểu nhanh:** 
- "한 잔" (một cốc) không có 받침 → dùng **을** → rút gọn: **을**
- -을/를 đánh dấu đối tượng chịu tác động của động từ (mục tiêu của "마시다" = uống)

---

### ❌ Các đáp án sai

- **한 잔은:** chủ đề (주제) → không đánh dấu tân ngữ → **sai**

- **한 잔이:** chủ ngữ + 이다 → không phù hợp → **sai**

- **한 잔에:** vị trí/địa điểm → "uống sữa cốc" không hợp lý → **sai**

---`
    },
    {
        id: 3,
        type: "multiple-choice",
        grammarPoint: "N-에 (Destination)",
        question: "오늘 저녁에 친구와 영화를 보러 (      ) 가요.",
        translationVi: "Tối nay tôi sẽ đi xem phim với bạn.",
        options: ["극장에", "극장에서", "극장을", "극장은"],
        correctAnswer: "극장에",
        explanation: `### ✅ Đáp án đúng

**극장에** — 🔹 \`N-에\`: điểm đến (목적지)

🗣️ **Ví dụ:** 오늘 저녁에 친구와 영화를 보러 **극장에** 가요.

⚡ **Hiểu nhanh:** 
- "극장" (rạp chiếu phim) không có 받침 → dùng **에**
- -에 + 가다/오다/다니다 chỉ đi đến đâu (điểm đến)

---

### ❌ Các đáp án sai

- **극장에서:** địa điểm hành động (làm gì tại đâu) → "xem phim" diễn ra tại rạp → nhưng sự chọn "으로" sẽ là cách mô tả phương tiện chứ không phải "에서" → **sai**

- **극장을:** tân ngữ → "đi đến rạp" không phải tân ngữ trực tiếp → **sai**

- **극장은:** chủ đề → không phù hợp → **sai**

---`
    },
    {
        id: 4,
        type: "multiple-choice",
        grammarPoint: "N-에서 (Location)",
        question: "수미는 매일 도서관 (      ) 책을 읽고 공부해요.",
        translationVi: "Sumin học ở thư viện, đọc sách và học tập mỗi ngày.",
        options: ["에", "에서", "을", "로"],
        correctAnswer: "에서",
        explanation: `### ✅ Đáp án đúng

**에서** — 🔹 \`N-에서\`: địa điểm hành động diễn ra

🗣️ **Ví dụ:** 수미는 매일 도서관 **에서** 책을 읽고 공부해요.

⚡ **Hiểu nhanh:** 
- Hành động "읽다 & 공부하다" diễn ra tại thư viện → dùng **에서**
- So sánh:
  - "도서관에 있다" = ở thư viện (tồn tại)
  - "도서관에서 공부한다" = học tại thư viện (hành động)

---

### ❌ Các đáp án sai

- **에:** vị trí tồn tại + 있다/없다 → không đi với "읽다", "공부하다" → **sai**

- **을:** tân ngữ → không phù hợp → **sai**

- **로:** công cụ/phương tiện → không phù hợp → **sai**

---`
    },
    {
        id: 5,
        type: "multiple-choice",
        grammarPoint: "N-으로 (Phương tiện)",
        question: "나는 매일 버스 (      ) 학교에 가요.",
        translationVi: "Tôi đi học mỗi ngày bằng xe buýt.",
        options: ["로", "으로", "에", "는"],
        correctAnswer: "로",
        explanation: `### ✅ Đáp án đúng

**로** — 🔹 \`N-으로/로\`: công cụ, phương tiện

🗣️ **Ví dụ:** 나는 매일 버스 **로** 학교에 가요.

⚡ **Hiểu nhanh:** 
- "버스" (xe buýt) có 받침 (ㅅ) → nhưng vì 받침 là "ㅆ", đặc biệt được xử lý, dùng **로**
- Lưu ý: "버스" kết thúc bằng ㅅ → coi như không có 받침→ **로**
- -으로/로 dùng để chỉ phương tiện, công cụ

---

### ❌ Các đáp án sai

- **으로:** khi danh từ có 받침khác ㄹ (예: 펜으로) → "버스"는 특수한 경우 → **sai**

- **에:** vị trí, điểm đến → không chỉ phương tiện → **sai**

- **는:** chủ đề → không phù hợp → **sai**

---`
    },
    {
        id: 6,
        type: "multiple-choice",
        grammarPoint: "V-지만",
        question: "오늘 날씨가 좋지만 ( ) 공원에서 산책하고 싶지 않아요.",
        translationVi: "Hôm nay thời tiết tốt nhưng tôi không muốn đi dạo ở công viên.",
        options: ["날씨가", "나는", "그런데", "그러나"],
        correctAnswer: "나는",
        explanation: `### ✅ Đáp án đúng

**나는** — 🔹 \`V/A-지만\`: nối hai ý tương phản (nhưng)

🗣️ **Ví dụ:** 오늘 날씨가 좋지만 **나는** 공원에서 산책하고 싶지 않아요.

⚡ **Hiểu nhanh:** 
- "좋지만" = "tuy tốt nhưng" → ngôn ngữ sắp tới phải là ý tương phản
- Chủ ngữ của mệnh đề thứ 2 (tôi) cần được nhắc lại hay chỉ định rõ
- Cấu trúc: A-지만 B → tương phản

---

### ❌ Các đáp án sai

- **날씨가:** nhắc lại chủ ngữ cũ, không tương phản → **sai**

- **그런데:** liên từ, nhưng không dùng trực tiếp sau "-지만", "그런데"là một từ độc lập → **sai**

- **그러나:** tương tự "그런데", không dùng kết hợp với "-지만" → **sai**

---`
    },
    {
        id: 7,
        type: "multiple-choice",
        grammarPoint: "V-어서 (Nguyên nhân)",
        question: "시간이 없( ) 숙제를 다 못했다.",
        translationVi: "Vì không có thời gian nên tôi không làm hết bài tập.",
        options: ["어서", "으니까", "으면", "느라고"],
        correctAnswer: "어서",
        explanation: `### ✅ Đáp án đúng

**어서** — 🔹 \`V/A-어서\`: nguyên nhân, lý do (vì...nên...)

🗣️ **Ví dụ:** 시간이 없**어서** 숙제를 다 못했다.

⚡ **Hiểu nhanh:** 
- "없다" (không có) nguyên âm cuối không phải ㅏ, ㅗ → -어서
- Giải thích: vì không có thời gian nên không làm xong bài tập

---

### ❌ Các đáp án sai

- **으니까:** nguyên nhân/căn cứ chủ quan → có thể dùng nhưng -어서 phù hợp hơn trong ngữ cảnh này (nguyên nhân khách quan) → **sai hoặc kém phù hợp**

- **으면:** điều kiện → "nếu không có thời gian thì..." không phù hợp với ngữ cảnh vừa rồi → **sai**

- **느라고:** vì mải/bận → "vì bận mà..." → không phù hợp → **sai**

---`
    },
    {
        id: 8,
        type: "multiple-choice",
        grammarPoint: "V-(으)면",
        question: "공부를 열심히 (      ) 좋은 대학에 갈 수 있어요.",
        translationVi: "Nếu học tập chăm chỉ thì có thể vào đại học tốt.",
        options: ["하면", "하느라고", "하니까", "해서"],
        correctAnswer: "하면",
        explanation: `### ✅ Đáp án đúng

**하면** — 🔹 \`V-면\`: điều kiện (nếu...thì...)

🗣️ **Ví dụ:** 공부를 열심히 **하면** 좋은 대학에 갈 수 있어요.

⚡ **Hiểu nhanh:** 
- "하다" (làm) không có 받침nhưng/음 ㄴ? → **하면** (điều kiện)
- Nghĩa: nếu học chăm chỉ thì có thể vào đại học tốt (điều kiện)

---

### ❌ Các đáp án sai

- **하느라고:** vì mải làm → không phải điều kiện → **sai**

- **하니까:** nguyên nhân/căn cứ → không phải điều kiện nghi ngờ → **sai**

- **해서:** vì nên (nguyên nhân) → không phải điều kiện → **sai**

---`
    },
    {
        id: 9,
        type: "multiple-choice",
        grammarPoint: "N-의 (Sở hữu)",
        question: "이것은 내 친구( ) 가방이에요.",
        translationVi: "Đây là cái túi của bạn tôi.",
        options: ["의", "은", "이", "는"],
        correctAnswer: "의",
        explanation: `### ✅ Đáp án đúng

**의** — 🔹 \`N-의\`: sở hữu (của)

🗣️ **Ví dụ:** 이것은 내 친구**의** 가방이에요.

⚡ **Hiểu nhanh:** 
- "친구" (bạn) không có 받침 → nên thêm **의**
- Lưu ý: trong văn nói, -의 thường được lược bỏ ("내 친구 가방" = "내 친구의 가방")
- Nhưng trong văn trang trọng, giữ nguyên **의**

---

### ❌ Các đáp án sai

- **은:** chủ đề → không chỉ sở hữu → **sai**

- **이:** chủ ngữ + 이다 → không chỉ sở hữu → **sai**

- **는:** chủ đề → không chỉ sở hữu → **sai**

---`
    },
    {
        id: 10,
        type: "multiple-choice",
        grammarPoint: "V-고 싶다",
        question: "나는 다음 학기에 외국어를 (      ) 배우고 싶어요.",
        translationVi: "Tôi muốn học tập ngoại ngữ kỳ học tới.",
        options: ["열심히", "많이", "계속", "자주"],
        correctAnswer: "열심히",
        explanation: `### ✅ Đáp án đúng

**열심히** — 🔹 \`V-고 싶다\`: mong muốn, mục tiêu cá nhân (phủ...)

🗣️ **Ví dụ:** 나는 다음 학기에 외국어를 **열심히** 배우고 싶어요.

⚡ **Hiểu nhanh:** 
- Cấu trúc: V-고 싶다 = muốn V / V-고 싶어하다 = (người khác) muốn V
- Câu "나는 ... 싶어요" là câu thẳng thắn về mong muốn cá nhân
- "열심히" = chăm chỉ (bổ ngữ chỉ cách thức)

---

### ❌ Các đáp án sai

- **많이:** nhiều → không phù hợp với "배우다" + "싶어요" → **sai**

- **계속:** tiếp tục → không chỉ mong muốn → **sai**

- **자주:** thường xuyên → không phù hợp → **sai**

---`
    },
    {
        id: 11,
        type: "multiple-choice",
        grammarPoint: "V-을 수 있다",
        question: "평생 열심히 배우면 무엇이든지 (      ).",
        translationVi: "Nếu học tập chăm chỉ suốt đời thì có thể làm được bất cứ điều gì.",
        options: ["할 수 있다", "한 수 있다", "할 수 없다", "하기 때문이다"],
        correctAnswer: "할 수 있다",
        explanation: `### ✅ Đáp án đúng

**할 수 있다** — 🔹 \`V-을/ㄹ 수 있다\`: có khả năng, có thể

🗣️ **Ví dụ:** 평생 열심히 배우면 무엇이든지 **할 수 있다**.

⚡ **Hiểu nhanh:** 
- "하다" (làm) có 받침 ㄴ? không, nhưng "하다" ngoại lệ → **할** (ㄹ 수 있다)
- Ý: nếu học suốt đời thì có thể làm được bất cứ điều gì

---

### ❌ Các đáp án sai

- **한 수 있다:** "한" không phải hình thái đúng → **sai**

- **할 수 없다:** không thể (phủ định) → trái với ngữ cảnh tích cực → **sai**

- **하기 때문이다:** vì N nên... (nguyên nhân) → không phù hợp → **sai**

---`
    },
    {
        id: 12,
        type: "multiple-choice",
        grammarPoint: "N-부터...N-까지",
        question: "우리 학교는 월요일 (      ) 금요일 (      ) 수업을 해요.",
        translationVi: "Trường của chúng tôi có lớp từ thứ 2 đến thứ 6.",
        options: ["에서...에", "부터...까지", "에...을", "은...는"],
        correctAnswer: "부터...까지",
        explanation: `### ✅ Đáp án đúng

**부터...까지** — 🔹 \`N-부터...N-까지\`: từ...đến... (khoảng thời gian)

🗣️ **Ví dụ:** 우리 학교는 월요일 **부터** 금요일 **까지** 수업을 해요.

⚡ **Hiểu nhanh:** 
- "부터" = điểm bắt đầu (từ lúc nào)
- "까지" = điểm kết thúc (đến khi nào)
- Thường dùng cặp: N부터 N까지

---

### ❌ Các đáp án sai

- **에서...에:** vị trí hành động → không chỉ khoảng thời gian → **sai**

- **에...을:** vị trí + tân ngữ → không phù hợp → **sai**

- **은...는:** chủ đề → không chỉ khoảng thời gian → **sai**

---`
    },
    {
        id: 13,
        type: "multiple-choice",
        grammarPoint: "N-도",
        question: "나는 한국어도 배우고 일본어도 (      ).",
        translationVi: "Tôi vừa học tiếng Hàn vừa học tiếng Nhật.",
        options: ["배워요", "배워야", "배우면", "배우는"],
        correctAnswer: "배워요",
        explanation: `### ✅ Đáp án đúng

**배워요** — 🔹 \`N-도\`: cũng (liệt kê các danh từ với nghĩa "cả...cả...")

🗣️ **Ví dụ:** 나는 한국어**도** 배우고 일본어**도** **배워요**.

⚡ **Hiểu nhanh:** 
- "도" = cũng (bổ sung thêm một danh từ khác)
- Cấu trúc: N도...N도 = cả N...cả N
- "배우고...배워요" = vừa...vừa... (hành động song hành)

---

### ❌ Các đáp án sai

- **배워야:** phải học (nghĩa vụ) → không phù hợp → **sai**

- **배우면:** nếu học → điều kiện → không phù hợp → **sai**

- **배우는:** hành động là danh từ (người học) → không phù hợp → **sai**

---`
    },
    {
        id: 14,
        type: "multiple-choice",
        grammarPoint: "N-만",
        question: "물 (      ) 한 잔 마시고 싶어요.",
        translationVi: "Tôi chỉ muốn uống một cốc nước thôi.",
        options: ["만", "도", "밖에", "는"],
        correctAnswer: "만",
        explanation: `### ✅ Đáp án đúng

**만** — 🔹 \`N-만\`: chỉ (yếu tố duy nhất)

🗣️ **Ví dụ:** 물 **만** 한 잔 마시고 싶어요.

⚡ **Hiểu nhanh:** 
- "만" = chỉ, mỗi, riêng (yếu tố duy nhất)
- Ngữ cảnh: chỉ muốn uống nước, không muốn uống gì khác

---

### ❌ Các đáp án sai

- **도:** cũng → không chỉ "chỉ mỗi" → **sai**

- **밖에:** chỉ có (+ phủ định) → cần có phủ định ở phía sau → **sai**

- **는:** chủ đề → không chỉ "chỉ" → **sai**

---`
    },
    {
        id: 15,
        type: "multiple-choice",
        grammarPoint: "N-밖에",
        question: "나는 돈이 천 원 (      ) 없어요.",
        translationVi: "Tôi chỉ có 1000 won thôi (không có nhiều hơn).",
        options: ["만", "만큼", "밖에", "도"],
        correctAnswer: "밖에",
        explanation: `### ✅ Đáp án đúng

**밖에** — 🔹 \`N-밖에 + Phủ định\`: chỉ có, chỉ mỗi (nhấn mạnh số lượng ít)

🗣️ **Ví dụ:** 나는 돈이 천 원 **밖에** 없어요.

⚡ **Hiểu nhanh:** 
- "밖에" luôn đi với phủ định (없다, 못하다, 안 하다...)
- Ý: chỉ có 1000 won thôi, không có nhiều hơn

---

### ❌ Các đáp án sai

- **만:** chỉ (không bắt buộc phủ định) → "천 원만 없어요" không lý → **sai**

- **만큼:** bao nhiêu, vừa bao nhiêu → không phù hợp → **sai**

- **도:** cũng → không phù hợp → **sai**

---`
    },
    {
        id: 16,
        type: "multiple-choice",
        grammarPoint: "N-(이)나",
        question: "커피 (      ) 차 (      ) 마시고 싶어요.",
        translationVi: "Tôi muốn uống cà phê hoặc trà.",
        options: ["나...나", "이나...이나", "나...이나", "이든지...이든지"],
        correctAnswer: "나...나",
        explanation: `### ✅ Đáp án đúng

**나...나** — 🔹 \`N-(이)나\`: hoặc, hay là (lựa chọn)

🗣️ **Ví dụ:** 커피 **나** 차 **나** 마시고 싶어요.

⚡ **Hiểu nhanh:** 
- "커피" không có 받침 → "나"
- "차" không có 받침 → "나"
- Ý: muốn uống cà phê hoặc trà (lựa chọn)

---

### ❌ Các đáp án sai

- **이나...이나:** dùng khi cả hai danh từ đều có 받침 (예: 책이나 신문이나) → **sai**

- **나...이나:** kết hợp không thích hợp → **sai**

- **이든지...이든지:** cũng có lựa chọn nhưng dạng khác → **sai hoặc kém phù hợp**

---`
    },
    {
        id: 17,
        type: "multiple-choice",
        grammarPoint: "N-처럼",
        question: "너는 내 언니 (      ) 예뻐요.",
        translationVi: "Em xinh đẹp như chị tôi vậy.",
        options: ["처럼", "와 같이", "마찬가지로", "처럼이"],
        correctAnswer: "처럼",
        explanation: `### ✅ Đáp án đúng

**처럼** — 🔹 \`N-처럼\`: như, giống như

🗣️ **Ví dụ:** 너는 내 언니 **처럼** 예뻐요.

⚡ **Hiểu nhanh:** 
- "처럼" = giống như, như là
- Thường dùng để so sánh (A와 B tương tự nhau)

---

### ❌ Các đáp án sai

- **와 같이:** với...cùng như (nhưng cách dùng khác) → không phù hợp → **sai**

- **마찬가지로:** cũng vậy, tương tự → nhưng cách dùng khác → **sai**

- **처럼이:** "처럼" không cần thêm 이 → **sai**

---`
    },
    {
        id: 18,
        type: "multiple-choice",
        grammarPoint: "N-마다",
        question: "나는 날 (      ) 운동을 해요.",
        translationVi: "Tôi tập thể dục mỗi ngày.",
        options: ["마다", "에마다", "마다마다", "마"]
,
        correctAnswer: "마다",
        explanation: `### ✅ Đáp án đúng

**마다** — 🔹 \`N-마다\`: mỗi, từng (lặp lại thường xuyên)

🗣️ **Ví dụ:** 나는 날 **마다** 운동을 해요.

⚡ **Hiểu nhanh:** 
- "날" (ngày) + "마다" = mỗi ngày
- "사람마다" = mỗi người (khác nhau)

---

### ❌ Các đáp án sai

- **에마다:** "마다" không đi với "에" → **sai**

- **마다마다:** "마다" dùng một lần thôi → **sai**

- **마:** ngắn quá, không là trợ từ chuẩn → **sai**

---`
    },
    {
        id: 19,
        type: "multiple-choice",
        grammarPoint: "N-보다",
        question: "서울은 부산 (      ) 더 넓어요.",
        translationVi: "Seoul rộng hơn Busan.",
        options: ["보다", "보다더", "에서", "에서보다"],
        correctAnswer: "보다",
        explanation: `### ✅ Đáp án đúng

**보다** — 🔹 \`N-보다\`: hơn (so sánh)

🗣️ **Ví dụ:** 서울은 부산 **보다** 더 넓어요.

⚡ **Hiểu nhanh:** 
- "보다" = hơn (so sánh)
- Cấu trúc: N-보다 + Tính từ = A hơn B (về tính chất)

---

### ❌ Các đáp án sai

- **보다더:** "보다" đã chỉ "hơn", không cần "더" với tính từ → **sai**

- **에서:** vị trí hành động → không phù hợp → **sai**

- **에서보다:** dùng trong trường hợp địa điểm "từ nơi này" → không phù hợp → **sai**

---`
    },
    {
        id: 20,
        type: "multiple-choice",
        grammarPoint: "V-어야 하다",
        question: "시험을 잘 보려고 ( ) 합니다.",
        translationVi: "Để thi tốt phải học tập chăm chỉ.",
        options: ["공부해야", "공부하면", "공부해", "공부할"],
        correctAnswer: "공부해야",
        explanation: `### ✅ Đáp án đúng

**공부해야** — 🔹 \`V-어야 하다\`: phải, cần phải (nghĩa vụ/cần thiết)

🗣️ **Ví dụ:** 시험을 잘 보려고 **공부해야** 합니다.

⚡ **Hiểu nhanh:** 
- "어야 합니다" = phải, cần phải (trang trọng)
- Ý: để thi tốt, phải học tập chăm chỉ

---

### ❌ Các đáp án sai

- **공부하면:** điều kiện (nếu... thì...) → không phải nghĩa vụ → **sai**

- **공부해:** hình thái thân mật, không đầy đủ → **sai**

- **공부할:** tương lai, không mang ý "phải làm" → **sai**

---`
    },
    {
        id: 21,
        type: "multiple-choice",
        grammarPoint: "V-아/어 보다",
        question: "한국 음식을 ( ) 봤어요?",
        translationVi: "Bạn đã thử ăn đồ ăn Hàn Quốc chưa?",
        options: ["먹으려", "먹고", "먹어", "먹어 본"],
        correctAnswer: "먹어 본",
        explanation: `### ✅ Đáp án đúng

**먹어 본** — 🔹 \`V-아/어 보다\`: thử, từng (kinh nghiệm thử)

🗣️ **Ví dụ:** 한국 음식을 **먹어 본** 봤어요?

⚡ **Hiểu nhanh:** 
- "먹다" (ăn) + "어 보다" (thử) = thử ăn
- Ý: bạn đã từng thử ăn đồ Hàn chưa?

---

### ❌ Các đáp án sai

- **먹으려:** để ăn (mục đích) → không phải "thử" → **sai**

- **먹고:** rồi ăn (thứ tự) → không phải "thử" → **sai**

- **먹어:** không có "보다" → không hoàn chỉnh → **sai**

---`
    }
];

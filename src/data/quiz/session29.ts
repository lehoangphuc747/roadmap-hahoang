/**
 * Bài tập Buổi 29 – Reading Dạng 01 (Câu 1–2)
 * Nguồn: TOPIK II Reading – Dạng 01. Nội dung gốc giữ nguyên.
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
        grammarPoint: "V-다가",
        question: "휴대 전화를 (      ) 내려야 할 역을 지나쳤다.",
        translationVi: "Vì mải nhìn điện thoại nên tôi đã đi quá ga cần phải xuống.",
        options: ["보든지", "보다가", "보려면", "보고서"],
        correctAnswer: "보다가",
        explanation: `### ✅ Đáp án đúng

**보다가** — 📘 \`V-다가\`: hành động đang diễn ra thì chuyển sang/bị chen ngang bởi hành động khác

🗣️ **Ví dụ:** 휴대 전화를 **보다가** 내려야 할 역을 지나쳤다.

⚡ **Hiểu nhanh:** "đang... thì" → đang xem điện thoại thì đi quá ga.

---

### ❌ Các đáp án sai

- **보든지:** dù xem hay → 🔀 \`V-든지\` = lựa chọn → không phù hợp → **sai**.

- **보려면:** nếu muốn xem thì → 🎯 \`V-(으)려면\` = điều kiện/ý định → không phù hợp → **sai**.

- **보고서:** rồi xem xong thì/báo cáo → ⏭️ \`V-고서\` = sau khi/"báo cáo" → không phù hợp ngữ cảnh → **sai**.

---`
    },
    {
        id: 2,
        type: "multiple-choice",
        grammarPoint: "V-게 되다",
        question: "한국 친구 덕분에 한국 문화를 많이 (      ).",
        translationVi: "Nhờ bạn Hàn Quốc mà tôi đã biết/hiểu nhiều về văn hóa Hàn Quốc.",
        options: ["알게 되었다", "알도록 했다", "알아도 된다", "알아야 한다"],
        correctAnswer: "알게 되었다",
        explanation: `### ✅ Đáp án đúng

**알게 되었다** — 🔄 \`V-게 되다\`: thay đổi trạng thái dẫn đến kết quả mới ngoài ý chí trực tiếp của chủ thể

🗣️ **Ví dụ:** 한국 친구 덕분에 한국 문화를 많이 **알게 되었다**.

⚡ **Hiểu nhanh:** "đã biết/được biết" → nhờ bạn Hàn mà biết nhiều về văn hóa (thay đổi trạng thái).

---

### ❌ Các đáp án sai

- **알도록 했다:** (khiến ai đó) biết → 👨‍⚕️ \`V-도록 하다\` = sai khiến → không phù hợp → **sai**.

- **알아도 된다:** biết cũng được → ✔️ \`V-아/어도 된다\` = cho phép → không phù hợp → **sai**.

- **알아야 한다:** phải biết → ✅ \`V-아/어야 한다\` = nghĩa vụ → không phù hợp → **sai**.

---`
    },
    {
        id: 3,
        type: "multiple-choice",
        grammarPoint: "V-거나",
        question: "나는 주말에는 보통 영화를( ) 운동을 한다.",
        translationVi: "Cuối tuần tôi thường xem phim hoặc tập thể dục.",
        options: ["보지만", "보거나", "보려고", "보더니"],
        correctAnswer: "보거나",
        explanation: `### ✅ Đáp án đúng

**보거나** — 🔀 \`V-거나\`: lựa chọn giữa hai hoặc nhiều hành động "...hoặc..."

🗣️ **Ví dụ:** 나는 주말에는 보통 영화를 **보거나** 운동을 한다.

⚡ **Hiểu nhanh:** "...hoặc..." → xem phim hoặc tập thể dục (lựa chọn).

---

### ❌ Các đáp án sai

- **보지만:** tuy xem nhưng → 🔄 \`V-지만\` = tương phản → không phù hợp với ngữ cảnh lựa chọn → **sai**.

- **보려고:** để xem/định xem → 🎯 \`V-(으)려고\` = mục đích → không phù hợp → **sai**.

- **보더니:** sau khi xem thì → 🔄 \`V-더니\` = nối tiếp/kết quả sau quan sát → không phù hợp → **sai**.

---`
    },
    {
        id: 4,
        type: "multiple-choice",
        grammarPoint: "V-아/어 가다",
        question: "동생이 점점 아버지를( ).",
        translationVi: "Em tôi đang ngày càng giống bố.",
        options: ["닮아 간다", "닮기도 한다", "닮았나 보다", "닮은 적이 없다"],
        correctAnswer: "닮아 간다",
        explanation: `### ✅ Đáp án đúng

**닮아 간다** — 📈 \`V-아/어 가다\`: quá trình thay đổi đang diễn ra và tiếp tục hướng về tương lai

🗣️ **Ví dụ:** 동생이 점점 아버지를 **닮아 간다**.

⚡ **Hiểu nhanh:** "đang ngày càng" → quá trình thay đổi liên tục, phù hợp với "점점".

---

### ❌ Các đáp án sai

- **닮기도 한다:** cũng có lúc giống → ➕ \`V-기도 하다\` = bổ sung thông tin → không phù hợp với "점점" → **sai**.

- **닮았나 보다:** có vẻ như đã giống → 🔮 \`V-았/었나 보다\` = phỏng đoán quá khứ → không phù hợp với quá trình đang diễn ra → **sai**.

- **닮은 적이 없다:** chưa từng giống → 📚 \`V-은 적이 없다\` = kinh nghiệm phủ định → trái ngược với nghĩa câu → **sai**.

---`
    },
    {
        id: 5,
        type: "multiple-choice",
        grammarPoint: "V-으면",
        question: "책을 많이( ) 지식을 쌓을 수 있다.",
        translationVi: "Nếu đọc nhiều sách thì có thể tích lũy kiến thức.",
        options: ["읽으면", "읽든지", "읽지만", "읽거나"],
        correctAnswer: "읽으면",
        explanation: `### ✅ Đáp án đúng

**읽으면** — 🔀 \`V-으면\`: điều kiện, giả định "nếu... thì..."

🗣️ **Ví dụ:** 책을 많이 **읽으면** 지식을 쌓을 수 있다.

⚡ **Hiểu nhanh:** "nếu... thì" → nếu đọc nhiều sách thì có thể tích lũy kiến thức.

---

### ❌ Các đáp án sai

- **읽든지:** dù đọc hay → 🔀 \`V-든지\` = lựa chọn → không phù hợp → **sai**.

- **읽지만:** tuy đọc nhưng → 🔄 \`V-지만\` = tương phản → không phù hợp → **sai**.

- **읽거나:** hoặc đọc → 🔀 \`V-거나\` = lựa chọn → không phù hợp → **sai**.

---`
    },
    {
        id: 6,
        type: "multiple-choice",
        grammarPoint: "V-ㄴ/은 모양이다",
        question: "꽃이 피기 시작하는 걸 보니 봄이( ).",
        translationVi: "Nhìn thấy hoa bắt đầu nở, có vẻ như mùa xuân đã đến.",
        options: ["오곤 한다", "온 모양이다", "오는 편이다", "온 적이 있다"],
        correctAnswer: "온 모양이다",
        explanation: `### ✅ Đáp án đúng

**온 모양이다** — 🔮 \`V-ㄴ/은 모양이다\`: phỏng đoán dựa trên bằng chứng quan sát được "có vẻ như..."

🗣️ **Ví dụ:** 꽃이 피기 시작하는 걸 보니 봄이 **온 모양이다**.

⚡ **Hiểu nhanh:** "có vẻ như" → dựa trên bằng chứng (nhìn thấy hoa nở) để phỏng đoán.

---

### ❌ Các đáp án sai

- **오곤 한다:** thường đến → 🔁 \`V-곤 하다\` = thói quen/quy luật lặp lại → không phải phỏng đoán dựa trên bằng chứng → **sai**.

- **오는 편이다:** thuộc dạng đến/thường đến → 📊 \`V-는 편이다\` = xu hướng chung → không phù hợp → **sai**.

- **온 적이 있다:** đã từng đến → 📚 \`V-은 적이 있다\` = kinh nghiệm quá khứ → không phù hợp → **sai**.

---`
    },
    {
        id: 7,
        type: "multiple-choice",
        grammarPoint: "V-다가",
        question: "동생이 거실에서 책을 (      ) 잠이 들었다.",
        translationVi: "Em tôi đang đọc sách trong phòng khách thì ngủ thiếp đi.",
        options: ["읽으러", "읽다가", "읽도록", "읽든지"],
        correctAnswer: "읽다가",
        explanation: `### ✅ Đáp án đúng

**읽다가** — 📘 \`V-다가\`: đang làm A thì B xảy ra (gián đoạn/bất ngờ)

🗣️ **Ví dụ:** 동생이 거실에서 책을 **읽다가** 잠이 들었다.

📖 Dịch nghĩa: Em tôi đang đọc sách trong phòng khách thì ngủ thiếp đi.

⚡ **Hiểu nhanh:** hành động "ngủ" cắt ngang hành động "đọc".

---

### ❌ Các đáp án sai

- **읽으러:** để đọc → 🚶 \`V-(으)러\` = đi để (làm gì), thường chỉ dùng với các động từ di chuyển (V-(으)러 가다/오다). Không có hành động di chuyển ở đây nên sai.

- **읽도록:** để/cho đến khi → 🎯 \`V-도록\` = để V. Nếu nói "để đọc sách nên đã ngủ" thì vô lý, không hợp ý nghĩa câu – sử dụng "도록" không diễn tả được hai hành động bị ngắt quãng/bất ngờ mà chỉ phù hợp nhấn mạnh mục tiêu/hành động kéo dài đến khi đạt kết quả, nên không chính xác trong ngữ cảnh này.

- **읽든지:** dù đọc hay hoặc... → 🔄 \`V-든지\` = dù... hay... / hoặc... → "dù em tôi đọc sách ... đã ngủ" -> sai ngữ cảnh. Câu này không phải lựa chọn giữa hai hành động mà là hai hành động liên tiếp, nên không phù hợp.

---`
    },
    {
        id: 8,
        type: "multiple-choice",
        grammarPoint: "V-아/어 버리다",
        question: "드라마가 얼마 전에 시작한 것 같은데 벌써 (      ).",
        translationVi: "Bộ phim truyền hình hình như mới bắt đầu cách đây không lâu mà đã hết mất rồi.",
        options: ["끝나 버렸다", "끝나면 된다", "끝나곤 했다", "끝나기 때문이다"],
        correctAnswer: "끝나 버렸다",
        explanation: `### ✅ Đáp án đúng

**끝나 버렸다** — 💔 \`V-아/어 버리다\`: đã hoàn thành việc gì đó, thường mang cảm xúc tiếc nuối/bất ngờ

🗣️ **Ví dụ:** 드라마가 얼마 전에 시작한 것 같은데 벌써 **끝나 버렸다**.
Dịch: Bộ phim truyền hình hình như mới bắt đầu cách đây không lâu mà đã hết mất rồi.

⚡ **Hiểu nhanh:** "kết thúc mất rồi" → nhấn mạnh sự hoàn thành nhanh, bất ngờ.

---

### ❌ Các đáp án sai

- **끝나면 된다:** \`V-(으)면 된다\` = "(chỉ cần)… là được" / "nếu… thì ổn" → Câu này hơi tối nghĩa, không diễn tả cảm thán, nên sai.

- **끝나곤 했다:** \`V-곤 했다\` = "thường hay (đã từng)" → Thói quen trong quá khứ → Không phù hợp với "벌써" (đã rồi), không diễn tả ý sự việc đã hoàn thành bất ngờ → Sai.

- **끝나기 때문이다:** \`N-기 때문이다\` = vì N → Nguyên nhân → không phù hợp → Sai.

---`
    },
    {
        id: 9,
        type: "multiple-choice",
        grammarPoint: "V-(으)ㄴ 적이 있다",
        question: "나는 오래전에 설악산을 (      ).",
        translationVi: "Tôi đã từng leo núi Seoraksan từ lâu rồi.",
        options: ["등산하고 싶다", "등산해도 된다", "등산할 것 같다", "등산한 적이 있다"],
        correctAnswer: "등산한 적이 있다",
        explanation: `### ✅ Đáp án đúng

**등산한 적이 있다** — 📚 \`V-(으)ㄴ 적이 있다\`: diễn tả kinh nghiệm đã từng làm gì đó trong quá khứ

📝 **Đề:** 나는 오래전에 설악산을 **등산한 적이 있다**.

🌐 **Dịch:** Tôi đã từng leo núi Seoraksan từ lâu rồi.

⚡ **Hiểu nhanh:** "đã từng leo núi" → kinh nghiệm trong quá khứ, phù hợp với "오래전에".

---

### ❌ Các đáp án sai

- **등산하고 싶다:** muốn leo núi → 💭 \`V-고 싶다\` = mong muốn → không phải kinh nghiệm đã qua → **sai**.

- **등산해도 된다:** có thể/được phép leo núi → ✔️ \`V-아/어도 되다\` = "(làm)… cũng được / được phép…" → Không phù hợp → **sai**.

- **등산할 것 같다:** có vẻ sẽ leo núi → 🔮 \`V-(으)ㄹ 것 같다\` = "hình như / có lẽ / chắc là…" → không phù hợp → **sai**.

---`
    },
    {
        id: 10,
        type: "multiple-choice",
        grammarPoint: "V-고 나서",
        question: "새집으로 (      ) 가구를 새로 샀다.",
        translationVi: "Sau khi chuyển đến nhà mới, tôi đã mua đồ nội thất mới.",
        options: ["이사한 지", "이사하거든", "이사하려면", "이사하고 나서"],
        correctAnswer: "이사하고 나서",
        explanation: `### ✅ Đáp án đúng

**이사하고 나서** — ⏭️ \`V-고 나서\`: hành động thứ hai xảy ra sau khi hành động thứ nhất hoàn thành

📝 **Đề:** 새집으로 **이사하고 나서** 가구를 새로 샀다.

🌐 **Dịch:** Sau khi chuyển đến nhà mới, tôi đã mua đồ nội thất mới.

⚡ **Hiểu nhanh:** "sau khi chuyển nhà xong ..." → thứ tự hành động rõ ràng.

---

### ❌ Các đáp án sai

- **이사한 지:** kể từ khi chuyển nhà → ⏰ \`V-은/ㄴ 지\` = "đã… kể từ khi…" / "từ lúc…" -> khoảng thời gian đã trôi qua → không diễn tả thứ tự hành động → sai.

- **이사하거든:** vì chuyển nhà mà... → ℹ️ \`V-거든(요)\` = "vì..." -> nguyên nhân / điều mà người nói biết nhưng người nghe có thể hông biết -> Sai

- **이사하려면:** nếu muốn chuyển nhà / để chuyển nhà thì... → 🎯 \`V-(으)려면\` = "nếu muốn… thì phải…" / "để (làm gì) thì…" -> điều kiện hoặc mục đích để đạt được một hành động khác -> không phù hợp -> sai

---`
    },
    {
        id: 11,
        type: "multiple-choice",
        grammarPoint: "V-고 나서",
        question: "감기약을 (      ) 열이 내렸다.",
        translationVi: "Uống thuốc cảm xong thì hạ sốt.",
        options: ["먹느라고", "먹더라도", "먹을 텐데", "먹고 나서"],
        correctAnswer: "먹고 나서",
        explanation: `### ✅ Đáp án đúng

**먹고 나서** — ⏭️ \`V-고 나서\`: hành động xảy ra sau khi hành động trước hoàn thành

📝 **Đề:** 감기약을 **먹고 나서** 열이 내렸다.

🌐 **Dịch:** Uống thuốc cảm xong thì hạ sốt.

⚡ **Hiểu nhanh:** "sau khi uống thuốc xong..." → thứ tự rõ ràng: uống thuốc → hạ sốt.

---

### ❌ Các đáp án sai

- **먹느라고:** vì mải uống nên... → 🔄 \`V-느라고\` = vì mải làm A nên B xảy ra (khó khăn/kết quả tiêu cực) → câu này mô tả kết quả tích cực (hạ sốt) → sai.

- **먹더라도:** dù có uống thì… → 🛡️ \`V-더라도\` = "dù có… thì cũng…" / "cho dù… vẫn…" → không phù hợp với quan hệ nguyên nhân-kết quả trực tiếp → sai.

- **먹을 텐데:** chắc là… nên / lẽ ra… thì… → 🔮 \`V-(으)ㄹ 텐데\` = phỏng đoán → không phù hợp vì câu tường thuật sự thật đã xảy ra → sai.

---`
    },
    {
        id: 12,
        type: "multiple-choice",
        grammarPoint: "V-아/어 놓다",
        question: "내일 김밥을 만들려고 재료를 미리 (      ).",
        translationVi: "Vì định làm kimbap ngày mai nên tôi đã chuẩn bị sẵn nguyên liệu trước.",
        options: ["준비해 놓았다", "준비하곤 했다", "준비하면 된다", "준비하는 법이다"],
        correctAnswer: "준비해 놓았다",
        explanation: `### ✅ Đáp án đúng

**준비해 놓았다** — 📦 \`V-아/어 놓다\`: làm gì đó trước và giữ nguyên trạng thái để sử dụng sau

📝 **Đề:** 내일 김밥을 만들려고 재료를 미리 **준비해 놓았다**.

🌐 **Dịch:** Vì định làm kimbap ngày mai nên tôi đã chuẩn bị sẵn nguyên liệu trước.

⚡ **Hiểu nhanh:** "chuẩn bị sẵn" → làm trước để dùng sau, phù hợp với "미리".

---

### ❌ Các đáp án sai

- **준비하곤 했다:** thường hay chuẩn bị → 🔁 \`V-곤 했다\` = "thường hay (đã từng)" → thói quen, hành động lặp lại trong quá khứ (nhưng hiện tại không còn nữa) → Sai vì trong câu có từ "내일" (ngày mai, tương lai).

- **준비하면 된다:** chỉ cần chuẩn bị là được → ✅ \`V-(으)면 된다\` = "(chỉ cần)… là được" / "nếu… thì ổn" → Không phù hợp vì ngữ cảnh là đang kể về việc đã chuẩn bị trước.

- **준비하는 법이다:** chuẩn bị là chuyện đương nhiên → 📖 \`V-는 법이다\` = "(là chuyện) đương nhiên" → Không phù hợp vì ở đây không nói đến điều hiển nhiên hay nguyên tắc, mà đang kể về việc đã làm cụ thể.

---`
    }
];

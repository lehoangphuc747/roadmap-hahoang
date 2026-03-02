/**
 * Bài tập Buổi 30 - Bài 2: ÔN TẬP -아/어 보다 (2 NGHĨA)
 * Ngày: 02/03/2026 (Thứ 2)
 * Dạng: Phân biệt và ứng dụng 2 nghĩa của -어 보다
        question: 'Điền vào hội thoại: A: 이 책을 ____? B: 아니요, 안 읽어 봤어요. A: 그럼 한번 ____',
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
    // ===== PHẦN 1: PHÂN BIỆT -어 보다1 (THỬ) VS -어 보다2 (KINH NGHIỆM) =====

    {
        id: 1,
        type: 'multiple-choice',
        grammarPoint: '-어 보다1 vs -어 보다2',
        question: 'Câu nào diễn tả KINH NGHIỆM (đã từng) chứ không phải THỬ?',
        options: [
            '제주도에 가 봤어요',
            '이 옷을 입어 보세요',
            '한번 먹어 볼게요',
            '한국어를 배워 보세요'
        ],
        correctAnswer: '제주도에 가 봤어요',
        explanation: `### Ghi nhớ
- **-어 보다1 (THỬ):** Hiện tại/Tương lai - 입어 보세요, 먹어 볼게요, 배워 보세요
- **-어 보다2 (KINH NGHIỆM):** Quá khứ - 가 **봤어요** (đã từng đi)

### Vì sao các đáp án khác sai?
- 이 옷을 입어 보세요 → THỬ mặc xem (gợi ý)
- 한번 먹어 볼게요 → Sẽ THỬ ăn (tương lai)
- 한국어를 배워 보세요 → THỬ học xem (gợi ý)`
    },

    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: '-어 보다1 (Try)',
        question: 'Chọn câu gợi ý "thử mặc áo này xem":',
        options: [
            '이 옷을 입어 보세요',
            '이 옷을 입어 봤어요',
            '이 옷을 입어 봤습니다',
            '이 옷을 입어 본 적이 있어요'
        ],
        correctAnswer: '이 옷을 입어 보세요',
        explanation: `### Ghi nhớ
- **-어 보다1:** Dùng để GỢI Ý, KHUYÊN thử làm
- **입어 보세요** = Thử mặc xem (lịch sự)

### Vì sao các đáp án khác sai?
- 입어 봤어요 / 입어 봤습니다 → -어 보다2 (đã từng mặc - quá khứ)
- 입어 본 적이 있어요 → -어 보다2 nhấn mạnh (đã từng mặc)`
    },

    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: '-어 보다2 (Experience)',
        question: 'Hỏi "Bạn đã từng ăn kimchi chưa?" bằng tiếng Hàn:',
        options: [
            '김치를 먹어 봤어요?',
            '김치를 먹어 보세요',
            '김치를 먹어 볼까요?',
            '김치를 먹어 볼게요'
        ],
        correctAnswer: '김치를 먹어 봤어요?',
        explanation: `### Ghi nhớ
- **-어 봤어요?** = Đã từng...chưa? (hỏi KINH NGHIỆM)
- Quá khứ **-봤-** chỉ kinh nghiệm đã trải qua

### Vì sao các đáp án khác sai?
- 먹어 보세요 → THỬ ăn xem (gợi ý)
- 먹어 볼까요? → Chúng ta thử ăn nhé? (đề nghị)
- 먹어 볼게요 → Tôi sẽ thử ăn (dự định)`
    },

    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: '-어 보다1 vs -어 보다2',
        question: 'Câu nào SAI về -어 보다?',
        options: [
            '한번 가 보세요 (THỬ đi xem)',
            '제주도에 가 봤어요 (ĐÃ TỪNG đi)',
            '잠을 자 봤어요 (đã từng ngủ)',
            '운전을 해 볼게요 (sẽ THỬ lái xe)'
        ],
        correctAnswer: '잠을 자 봤어요 (đã từng ngủ)',
        explanation: `### Ghi nhớ
- **-어 보다2 KHÔNG dùng với hành vi THÔNG THƯỜNG hàng ngày!**
- Ngủ (자다) là hành vi thông thường → KHÔNG dùng "자 봤어요"

### Ngoại lệ
- Nếu là tình huống ĐẶC BIỆT: **공항에서 자 봤어요** ✅ (ngủ ở sân bay - đặc biệt)

### Các câu đúng
- 한번 가 보세요 → -어 보다1 (thử)
- 제주도에 가 봤어요 → -어 보다2 (kinh nghiệm đặc biệt)
- 운전을 해 볼게요 → -어 보다1 (thử)`
    },

    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 (Negation)',
        question: 'Phủ định TRANG TRỌNG của "먹어 봤어요" là:',
        options: [
            '먹어 보지 않았어요',
            '먹어 안 봤어요',
            '먹어 본 적이 있어요',
            '먹지 않았어요'
        ],
        correctAnswer: '먹어 보지 않았어요',
        explanation: `### Ghi nhớ
Phủ định có 2 CÁCH:
- **-어 보지 않다:** 먹어 보지 않았어요 ✅ (TRANG TRỌNG)
- **안 -어 보다:** 안 먹어 봤어요 ✅ (thông tục)

### Vì sao chọn "먹어 보지 않았어요"?
- Câu hỏi yêu cầu dạng TRANG TRỌNG → chọn **-어 보지 않다**
- **안 먹어 봤어요** cũng đúng ngữ pháp (thông tục) nhưng không trang trọng

### Vì sao các đáp án khác sai?
- **먹어 안 봤어요** ❌ KHÔNG đặt 안 giữa -어 và 봤어요
- **먹어 본 적이 있어요** ❌ Đây là KHẲNG ĐỊNH (đã từng), không phải phủ định
- **먹지 않았어요** ❌ Thiếu **-어 보다**, chỉ là phủ định thông thường

### Nhấn mạnh phủ định
- **먹어 본 적이 없어요** (chưa từng ăn - nhấn mạnh kinh nghiệm)`
    },

    // ===== PHẦN 2: ỨNG DỤNG TRONG HỘI THOẠI =====

    {
        id: 6,
        type: 'multiple-choice',
        grammarPoint: '-어 보다1 (Try)',
        question: 'Trong câu "Bulgogi ngon không? - Có, thử ăn đi", chọn đáp án phù hợp:',
        options: [
            '불고기가 맛있어요? - 네, 한번 먹어 봐요',
            '불고기가 맛있어요? - 네, 먹어 봤어요',
            '불고기가 맛있어요? - 네, 먹어 본 적이 있어요',
            '불고기가 맛있어요? - 네, 먹어 보지 않았어요'
        ],
        correctAnswer: '불고기가 맛있어요? - 네, 한번 먹어 봐요',
        explanation: `### Ghi nhớ
- **한번 먹어 봐요** = Thử ăn xem (gợi ý THỬ)
- **한번** nhấn mạnh ý nghĩa THỬ NGHIỆM

### Vì sao các đáp án khác sai?
- 먹어 봤어요 → Đã từng ăn (kinh nghiệm - không hợp ngữ cảnh)
- 먹어 본 적이 있어요 → Đã từng ăn (nhấn mạnh - không hợp)
- 먹어 보지 않았어요 → Chưa từng ăn (phủ định - sai nghĩa)`
    },

    {
        id: 7,
        type: 'multiple-choice',
        grammarPoint: '-어 보다2 (Experience)',
        question: 'Trả lời "Chưa từng đi" cho câu hỏi "제주도에 가 봤어요?":',
        options: [
            '아니요, 가 보지 않았어요',
            '아니요, 가 보세요',
            '네, 가 봤어요',
            '아니요, 가 볼게요'
        ],
        correctAnswer: '아니요, 가 보지 않았어요',
        explanation: `### Ghi nhớ
- **가 보지 않았어요 / 안 가 봤어요** = Chưa từng đi (phủ định kinh nghiệm)
- Hoặc: **가 본 적이 없어요** (nhấn mạnh)

### Vì sao các đáp án khác sai?
- 가 보세요 → THỬ đi xem (gợi ý - không phải trả lời)
- 네, 가 봤어요 → Có, đã từng đi (khẳng định - sai với "아니요")
- 가 볼게요 → Tôi sẽ thử đi (dự định - không phải trả lời)`
    },

    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 (Conjugation)',
        question: 'Chia "입다" (mặc) với -어 보다1 (thử) ở dạng lịch sự:',
        options: [
            '입어 보세요',
            '입어 봤어요',
            '입어 볼까요',
            '입어 본 적이 있어요'
        ],
        correctAnswer: '입어 보세요',
        explanation: `### Ghi nhớ
- **입다** + -어 보다 → **입어 보세요** (Thử mặc xem - lịch sự)
- Quy tắc: 입다 (cuối ㅣ) → **-어 보다**

### Các dạng khác
- **입어 봐요:** Thử mặc xem (thông thường)
- **입어 봤어요:** Đã từng mặc (kinh nghiệm)
- **입어 본 적이 있어요:** Đã từng mặc (nhấn mạnh)`
    },

    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 with 한번',
        question: 'Cấu trúc nào tự nhiên nhất để nói "Thử ăn miếng xem":',
        options: [
            '한 입 먹어 보세요',
            '먹어 보세요',
            '먹어 봤어요',
            '먹어 볼까요'
        ],
        correctAnswer: '한 입 먹어 보세요',
        explanation: `### Ghi nhớ
- **한 입 먹어 보세요** = Thử ăn một miếng xem (TỰ NHIÊN nhất)
- **한 입** (một miếng) + **-어 보세요** (thử...xem)
- Thường dùng khi GỢI Ý thử món ăn

### So sánh
- **한 입 먹어 보세요:** Thử ăn miếng xem ✅
- **먹어 보세요:** Thử ăn xem (không có "miếng")
- **먹어 봤어요:** Đã từng ăn (kinh nghiệm - sai nghĩa)
- **먹어 볼까요:** Chúng ta thử ăn nhé? (đề nghị - sai nghĩa)`
    },

    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: '-어 보다2 (Experience)',
        question: 'Câu nào diễn đạt "Đã từng đi Jeju" (kinh nghiệm quá khứ)?',
        options: [
            '제주도에 가 봤어요',
            '제주도에 가 보세요',
            '제주도에 가 볼게요',
            '제주도에 가 볼까요'
        ],
        correctAnswer: '제주도에 가 봤어요',
        explanation: `### Ghi nhớ
- **-어 봤다** = Đã từng (kinh nghiệm quá khứ)
- Dùng THÌ QUÁ KHỨ **-봤-** để nói về kinh nghiệm

### Vì sao các đáp án khác sai?
- **가 보세요:** Thử đi xem (gợi ý - -어 보다1, không phải kinh nghiệm)
- **가 볼게요:** Tôi sẽ thử đi (dự định tương lai - -어 보다1)
- **가 볼까요:** Chúng ta thử đi nhé? (đề nghị - -어 보다1)

### Phân biệt
- **-어 봤다:** ĐÃ TỪNG (kinh nghiệm quá khứ)
- **-어 보다 (hiện tại/tương lai):** THỬ (gợi ý/dự định)`
    },

    // ===== PHẦN 3: CHIA ĐỘNG TỪ & QUY TẮC =====

    {
        id: 11,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 (Conjugation)',
        question: 'Chia "만나다" (gặp) với -어 보다2 (kinh nghiệm) ở quá khứ dạng thông thường:',
        options: [
            '만나 봤어요',
            '만나 보세요',
            '만나 볼게요',
            '만나요'
        ],
        correctAnswer: '만나 봤어요',
        explanation: `### Ghi nhớ
- **만나다** + -어 보다 → **만나 봤어요** (Đã từng gặp - thông thường)
- Quy tắc: 만나다 (cuối ㅏ) → **-아 봤어요**
- **보다** kết hợp trực tiếp: 만나**보다** (không có ㅏ lặp)

### Vì sao các đáp án khác sai?
- **만나 보세요:** Thử gặp xem (gợi ý - -어 보다1, không phải kinh nghiệm)
- **만나 볼게요:** Sẽ thử gặp (dự định - -어 보다1, không phải kinh nghiệm)
- **만나요:** Gặp (thông thường, KHÔNG có -어 보다)

### Dạng trang trọng
- **만나 봤습니다:** Đã từng gặp (trang trọng)`
    },

    {
        id: 12,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 with 하다',
        question: 'Chia "운전하다" (lái xe) với -어 보다2 (kinh nghiệm):',
        options: [
            '운전해 봤어요',
            '운전하 봤어요',
            '운전하어 봤어요',
            '운전했어 봤어요'
        ],
        correctAnswer: '운전해 봤어요',
        explanation: `### Ghi nhớ
- **-하다** động từ → **-해 보다**
- **운전하다** → **운전해 봤어요** (Đã từng lái xe)

### Quy tắc -하다
- 공부하다 → 공부**해 봤어요**
- 여행하다 → 여행**해 봤어요**
- 청소하다 → 청소**해 봤어요**

### Sai
- 운전하 봤어요 / 운전하어 봤어요 / 운전했어 봤어요 ❌`
    },

    {
        id: 13,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 (Irregular ㄷ)',
        question: 'Chia "걷다" (đi bộ) với -어 보다1 (thử):',
        options: [
            '걸어 보세요',
            '걷어 보세요',
            '걸 보세요',
            '걷 보세요'
        ],
        correctAnswer: '걸어 보세요',
        explanation: `### Ghi nhớ
- **걷다** là động từ BẤT QUY TẮC ㄷ: ㄷ → ㄹ khi gặp nguyên âm
- **걷다** → **걸어 보세요** (Thử đi bộ xem)

### Động từ bất quy tắc ㄷ khác
- 듣다 (nghe) → **들어 보세요** (thử nghe xem)
- 눕다 (nằm) → **누워 보세요** (thử nằm xem)
- 짓다 (xây) → **지어 보세요** (thử xây xem)

### Sai
- 걷어 보세요 / 걸 보세요 / 걷 보세요 ❌`
    },

    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 (NOT with 보다)',
        question: 'Câu nào KHÔNG tự nhiên?',
        options: [
            '이 책을 봐 보세요',
            '이 책을 읽어 보세요',
            '한국 음식을 먹어 보세요',
            '제주도에 가 보세요'
        ],
        correctAnswer: '이 책을 봐 보세요',
        explanation: `### Ghi nhớ
- **-어 보다 KHÔNG kết hợp tốt với động từ "보다"!**
- **봐 보세요** lặp lại "보다" → KHÔNG tự nhiên

### Thay thế
- 이 책을 봐 보세요 ❌ → **이 책을 읽어 보세요** ✅ (Thử đọc sách)
- 영화를 봐 보세요 ❌ → **영화를 보세요** ✅ (Xem phim)
- 그 사람을 봐 보세요 ❌ → **그 사람을 만나 보세요** ✅ (Thử gặp người đó)

### Các câu đúng
- 읽어 보세요 / 먹어 보세요 / 가 보세요 ✅`
    },

    {
        id: 15,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 (NOT with Adjectives)',
        question: 'Câu nào SAI về -어 보다?',
        options: [
            '배가 고파 봤어요',
            '김치를 먹어 봤어요',
            '제주도에 가 봤어요',
            '운전을 해 봤어요'
        ],
        correctAnswer: '배가 고파 봤어요',
        explanation: `### Ghi nhớ
- **-어 보다 CHỈ dùng với ĐỘNG TỪ, KHÔNG dùng với TÍNH TỪ!**
- **고프다** (배고프다 - đói) là TÍNH TỪ → KHÔNG dùng -어 보다

### Ngoại lệ hiếm
- Trạng thái TẠM THỜI trong quá khứ (ít dùng):
  - 우리는 옛날에 **배고파 봤어요** ⚠️ (đã từng đói - trạng thái tạm thời)

### Các câu đúng
- 먹어 봤어요 / 가 봤어요 / 해 봤어요 → ĐỘNG TỪ ✅`
    },

    // ===== PHẦN 4: TÔN TRỌNG & LỊCH SỰ =====

    {
        id: 16,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 (Honorific)',
        question: 'Dạng KÍNH NGỮ của "이 책을 읽어 봤어요" (về người lớn tuổi/được kính trọng) là:',
        options: [
            '이 책을 읽어 보셨어요',
            '이 책을 읽어 봤습니다',
            '이 책을 읽어 보세요',
            '이 책을 읽어 봤어요'
        ],
        correctAnswer: '이 책을 읽어 보셨어요',
        explanation: `### Ghi nhớ
- Kính ngữ: thêm **-시-** vào **보다** → **보시다**
- **읽어 보다** → **읽어 보시다** → **읽어 보셨어요** (Ông/bà đã từng đọc)

### Công thức
- V-어 **보시다** (kính ngữ chủ ngữ)
- V-어 **보셨어요** (quá khứ kính ngữ)

### Ví dụ khác
- 할아버지께서 제주도에 **가 보셨어요**.
- 선생님께서 한국 음식을 **먹어 보셨어요**.`
    },

    {
        id: 17,
        type: 'multiple-choice',
        grammarPoint: '-어 보다1 (Polite Suggestion)',
        question: 'Gợi ý lịch sự "Hãy thử mặc áo này xem" cho khách hàng:',
        options: [
            '이 옷을 입어 보세요',
            '이 옷을 입어 봐',
            '이 옷을 입어 봐요',
            '이 옷을 입어 보십시오'
        ],
        correctAnswer: '이 옷을 입어 보세요',
        explanation: `### Ghi nhớ
- **-어 보세요** = Thử...xem (LỊCH SỰ, phù hợp với khách hàng)
- **-어 봐요** = Thử...xem (thông thường)
- **-어 봐** = Thử...xem (thân mật)
- **-어 보십시오** = Thử...xem (rất trang trọng - ít dùng)

### Các cấp độ
- **Thân mật:** 입어 봐
- **Thông thường:** 입어 봐요
- **Lịch sự:** 입어 보세요 ✅
- **Rất trang trọng:** 입어 보십시오`
    },

    // ===== PHẦN 5: ỨNG DỤNG TỔNG HỢP =====

    {
        id: 18,
        type: 'multiple-choice',
        grammarPoint: '-어 보다1 + -어 보다2 (Dialogue)',
        question: 'Điền vào hội thoại: A: 이 책을 ____? B: 아니요, 안 읽어 봤어요. A: 그럼 한번 ____ ',
        options: [
            '읽어 봤어요 / 읽어 보세요',
            '읽어 보세요 / 읽어 봤어요',
            '읽어 볼게요 / 읽어 보세요',
            '읽어 봤어요 / 읽어 봤어요'
        ],
        correctAnswer: '읽어 봤어요 / 읽어 보세요',
        explanation: `### Ghi nhớ
Hội thoại điển hình:
1. **Hỏi kinh nghiệm:** 읽어 봤어요? (Đã từng đọc chưa? - -어 보다2)
2. **Trả lời chưa:** 안 읽어 봤어요 (Chưa từng)
3. **Gợi ý thử:** 읽어 보세요 (Thử đọc xem - -어 보다1)

### Quy luật
- Câu 1: **-어 봤어요?** (kinh nghiệm - quá khứ)
- Câu 2: **-어 보세요** (gợi ý thử - hiện tại)

### Vì sao các đáp án khác sai?
- Cả hai đều quá khứ (읽어 봤어요 / 읽어 봤어요) → không logic
- Câu đầu không phải kinh nghiệm → không hợp hội thoại`
    },

    {
        id: 20,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 (Comprehensive)',
        question: 'Câu nào diễn đạt "Muốn thử đi Jeju một lần":',
        options: [
            '제주도에 한번 가 보고 싶어요',
            '제주도에 한번 가 봤어요',
            '제주도에 한번 가 본 적이 있어요',
            '제주도에 한번 가 보지 않았어요'
        ],
        correctAnswer: '제주도에 한번 가 보고 싶어요',
        explanation: `### Ghi nhớ
- **-어 보고 싶다** = Muốn thử... (kết hợp -어 보다1 với -고 싶다)
- **한번 가 보고 싶어요** = Muốn thử đi một lần

### Cấu trúc
- **한번 + V-어 보고 싶다** (muốn thử...)
- Ví dụ: 한번 먹어 보고 싶어요 (muốn thử ăn)

### Vì sao các đáp án khác sai?
- 가 봤어요 → Đã đi rồi (quá khứ - không phải muốn)
- 가 본 적이 있어요 → Đã từng đi (kinh nghiệm - không phải muốn)
- 가 보지 않았어요 → Chưa đi (phủ định - không phải muốn)`
    }
];

/**
 * Bài tập Buổi 37 - ÔN TẬP TOÀN DIỆN 67 CẤU TRÚC NGỮU PHÁP
 * Dạng: Ý nghĩa → Chọn cấu trúc
 * Mục tiêu: Ôn tập lại từ Bài 01-67 (không giới hạn số câu)
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
    // ===== PHẦN 1: TRỢ TỪ VỊ TRÍ & THỜI GIAN =====

    {
        id: 1,
        type: 'multiple-choice',
        grammarPoint: '에 (Location + 있다)',
        question: 'Chọn cấu trúc phù hợp để chỉ vị trí tồn tại: "Sách ở trên bàn"',
        options: ['책상에 있어요', '책상에서 있어요', '책상을 있어요', '책상은 있어요'],
        correctAnswer: '책상에 있어요',
        explanation: '에 dùng với 있다/없다 để chỉ vị trí tĩnh (tồn tại). 에서 dùng với hành động, không dùng với 있다.'
    },

    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: '에 (Time)',
        question: 'Chọn cấu trúc phù hợp để chỉ thời gian: "Tôi dậy lúc 7 giờ"',
        options: ['7시에 일어나요', '7시부터 일어나요', '7시까지 일어나요', '7시는 일어나요'],
        correctAnswer: '7시에 일어나요',
        explanation: '에 dùng với thời gian cụ thể (11:00, thứ hai, 2026년). Các từ như hôm qua, hôm nay, bây giờ KHÔNG dùng 에.'
    },

    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: '에 (Destination)',
        question: 'Chọn cấu trúc phù hợp để chỉ điểm đến: "Đi đến trường"',
        options: ['학교에 가요', '학교에서 가요', '학교를 가요', '학교는 가요'],
        correctAnswer: '학교에 가요',
        explanation: '에 dùng với động từ di chuyển (가다, 오다, 도착하다...) để chỉ điểm đến cụ thể.'
    },

    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: '에서 (Action Place)',
        question: 'Chọn cấu trúc: "Tôi học tập ở thư viện (nơi làm hành động)"',
        options: ['도서관에서 공부해요', '도서관에 공부해요', '도서관을 공부해요', '도서관에게 공부해요'],
        correctAnswer: '도서관에서 공부해요',
        explanation: '에서 chỉ nơi diễn ra hành động. 에 chỉ vị trí tồn tại, không dùng với hành động.'
    },

    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: '에서 (Source/Origin)',
        question: 'Chọn cấu trúc để chỉ xuất phát từ đâu: "Tôi đến từ Seoul"',
        options: ['서울에서 왔어요', '서울에 왔어요', '서울을 왔어요', '서울은 왔어요'],
        correctAnswer: '서울에서 왔어요',
        explanation: '에서 với 오다, 나오다, 출발하다... chỉ nơi xuất phát hoặc nguồn gốc.'
    },

    {
        id: 6,
        type: 'multiple-choice',
        grammarPoint: '부터 (From - Time)',
        question: 'Chọn cấu trúc để chỉ thời điểm bắt đầu: "Bắt đầu từ 9 giờ"',
        options: ['9시부터 시작해요', '9시까지 시작해요', '9시에 시작해요', '9시만 시작해요'],
        correctAnswer: '9시부터 시작해요',
        explanation: '부터 chỉ điểm xuất phát về thời gian. 까지 chỉ điểm kết thúc. 에 chỉ thời điểm cụ thể.'
    },

    {
        id: 7,
        type: 'multiple-choice',
        grammarPoint: '까지 (Until/To)',
        question: 'Chọn cấu trúc để chỉ thời điểm kết thúc: "Làm việc đến 5 giờ"',
        options: ['5시까지 일해요', '5시부터 일해요', '5시에 일해요', '5시도 일해요'],
        correctAnswer: '5시까지 일해요',
        explanation: '까지 chỉ điểm kết thúc hoặc đích đến. 부터 chỉ điểm bắt đầu. Công thức: N부터 N까지 (từ...đến...).'
    },

    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: '(으)로 (Direction)',
        question: 'Chọn cấu trúc để chỉ phương hướng: "Đi về phía Seoul"',
        options: ['서울로 가요', '서울에 가요', '서울을 가요', '서울은 가요'],
        correctAnswer: '서울로 가요',
        explanation: '(으)로 chỉ phương hướng chung chung. 에 chỉ điểm đến cụ thể. (으)로 = phương hướng chưa rõ ràng, 에 = nơi xác định.'
    },

    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: '(으)로 (Tool/Method)',
        question: 'Chọn cấu trúc để chỉ công cụ/phương tiện: "Viết bằng bút"',
        options: ['펜으로 써요', '펜을 써요', '펜이 써요', '펜은 써요'],
        correctAnswer: '펜으로 써요',
        explanation: '(으)로 chỉ công cụ, phương tiện, ngôn ngữ, phương pháp. Quy tắc: có받침-으로, không받침-로, 받침ㄹ thì bỏ+로.'
    },

    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: '의 (Possession)',
        question: 'Chọn cấu trúc để chỉ sở hữu/thuộc về: "Sách cua tôi"',
        options: ['저의 책', '저에 책', '저를 책', '저는 책'],
        correctAnswer: '저의 책',
        explanation: '의 chỉ sở hữu, thuộc về. Từ vựng có liên quan: 한국의 수도 (Thủ đô của Hàn Quốc). Lưu ý: Văn nói thường lược bỏ 의.'
    },

    {
        id: 11,
        type: 'multiple-choice',
        grammarPoint: '에게/한테 (To Person)',
        question: 'Chọn cấu trúc để chỉ tặng quà cho bạn: "Tôi tặng quà cho bạn"',
        options: ['친구에게 선물을 줬어요', '친구을 선물을 줬어요', '친구는 선물을 줬어요', '친구에 선물을 줬어요'],
        correctAnswer: '친구에게 선물을 줬어요',
        explanation: '에게: Trang trọng, dùng với người. 한테: Thân mật. Chỉ dùng với 주다, 말하다, 물어보다, 보내다... Không dùng với vật.'
    },

    {
        id: 12,
        type: 'multiple-choice',
        grammarPoint: '에게서/한테서 (From Person)',
        question: 'Chọn cấu trúc để chỉ nhận từ người: "Nhận quà từ bạn"',
        options: ['친구에게서 선물을 받았어요', '친구에게 선물을 받았어요', '친구를 선물을 받았어요', '친구은 선물을 받았어요'],
        correctAnswer: '친구에게서 선물을 받았어요',
        explanation: '에게서/한테서 chỉ nhận, nghe, học... từ người nào. 에게 chỉ cho, nói với người nào.'
    },

    {
        id: 13,
        type: 'multiple-choice',
        grammarPoint: '께 (To Honorable Person)',
        question: 'Chọn cấu trúc tôn kính để nói về tặng quà cho thầy: "Tôi tặng quà cho thầy"',
        options: ['선생님께 선물을 드렸어요', '선생님에게 선물을 드렸어요', '선생님을 선물을 드렸어요', '선생님는 선물을 드렸어요'],
        correctAnswer: '선생님께 선물을 드렸어요',
        explanation: '께 là dạng kính ngữ của 에게, dùng với người tôn kính (thầy, bà, ông...). 드리다 là dạng kính ngữ của 주다.'
    },

    // ===== PHẦN 2: TRỢ TỪ LIÊN KẾT (AND/WITH) =====

    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: '하고 (And - List)',
        question: 'Chọn cấu trúc để nối 2 danh từ: "Táo và chuối"',
        options: ['사과하고 바나나', '사과를 바나나', '사과는 바나나', '사과에 바나나'],
        correctAnswer: '사과하고 바나나',
        explanation: '하고 liệt kê danh từ (A và B cùng loại). 하고 cũng có thể dùng "cùng với" động từ: 친구하고 영화를 봐요.'
    },

    {
        id: 15,
        type: 'multiple-choice',
        grammarPoint: '와/과 (And - Formal)',
        question: 'Chọn cấu trúc trang trọng để nối: "Giáo viên và học sinh"',
        options: ['선생님과 학생', '선생님하고 학생', '선생님이 학생', '선생님을 학생'],
        correctAnswer: '선생님과 학생',
        explanation: '와/과 trang trọng hơn 하고. Quy tắc: có받침-과, không받침-와. Ví dụ: 친구와 함께 (cùng với bạn).'
    },

    {
        id: 16,
        type: 'multiple-choice',
        grammarPoint: '(이)랑 (And - Casual)',
        question: 'Chọn cấu trúc thân mật để nối: "Em và tôi"',
        options: ['동생이랑 나', '동생과 나', '동생하고 나', '동생을 나'],
        correctAnswer: '동생이랑 나',
        explanation: '(이)랑 thân mật nhất. Quy tắc: có받침-이랑, không받침-랑. Ví dụ: 엄마랑 쇼핑해요 (đi mua sắm cùng mẹ).'
    },

    // ===== PHẦN 3: TRỢ TỪ PHẠM VI & GIỚI HẠN =====

    {
        id: 17,
        type: 'multiple-choice',
        grammarPoint: '도 (Also)',
        question: 'Chọn cấu trúc để nói "Tôi cũng là học sinh"',
        options: ['저도 학생이에요', '저은 학생이에요', '저가 학생이에요', '저을 학생이에요'],
        correctAnswer: '저도 학생이에요',
        explanation: '도 = "cũng". Nó thay thế 이/가, 은/는, 을/를. Ví dụ: 비가 와요 (mưa) → 눈도 와요 (tuyết cũng rơi).'
    },

    {
        id: 18,
        type: 'multiple-choice',
        grammarPoint: '만 (Only)',
        question: 'Chọn cấu trúc để nói "Tôi chỉ uống nước": ',
        options: ['물만 마셔요', '물도 마셔요', '물이 마셔요', '물을 마셔요'],
        correctAnswer: '물만 마셔요',
        explanation: '만 = "chỉ, mỗi". Ví dụ: 한국어만 할 수 있어요 (Chỉ nói được tiếng Hàn) / 엄마만 좋아해요 (Chỉ thích mẹ).'
    },

    {
        id: 19,
        type: 'multiple-choice',
        grammarPoint: '밖에 (Only - With Negation)',
        question: 'Chọn cấu trúc để nói "Chỉ có 1000 won":',
        options: ['천 원밖에 없어요', '천 원만 없어요', '천 원도 없어요', '천 원은 없어요'],
        correctAnswer: '천 원밖에 없어요',
        explanation: '밖에 = "chỉ có" + PHẢI phủ định. Nhấn mạnh số lượng ít ỏi. So sánh: 천 원만 있어요 (trung tính) vs 천 원밖에 없어요 (ít).'
    },

    {
        id: 20,
        type: 'multiple-choice',
        grammarPoint: '(이)나 (Or/Either - Choice)',
        question: 'Chọn cấu trúc để nói "Cà phê hoặc trà":',
        options: ['커피나 차', '커피과 차', '커피하고 차', '커피만 차'],
        correctAnswer: '커피나 차',
        explanation: '(이)나 = "hoặc". Quy tắc: có받침-이나, không받침-나. Ví dụ: 오늘이나 내일 (hôm nay hoặc ngày mai).'
    },

    {
        id: 21,
        type: 'multiple-choice',
        grammarPoint: '(이)나 (About - Emphasis)',
        question: 'Chọn cấu trúc để nhấn mạnh số lượng lớn: "Đợi tới 3 tiếng"',
        options: ['세 시간이나 기다렸어요', '세 시간만 기다렸어요', '세 시간도 기다렸어요', '세 시간에 기다렸어요'],
        correctAnswer: '세 시간이나 기다렸어요',
        explanation: '(이)나 có 2 ý nghĩa: Hoặc (lựa chọn) và Nhấn mạnh số lượng lớn. Ngữ cảnh quyết định: "Đợi tới 3 tiếng!" → Phản cảm.'
    },

    {
        id: 22,
        type: 'multiple-choice',
        grammarPoint: '처럼 (Like/As)',
        question: 'Chọn cấu trúc để nói "Tốt bụng như thiên thần":',
        options: ['천사처럼 착해요', '천사가 착해요', '천사는 착해요', '천사에 착해요'],
        correctAnswer: '천사처럼 착해요',
        explanation: '처럼 = "như, giống như". Ví dụ: 엄마처럼 예쁘다 (Đẹp như mẹ) / 어제처럼 바쁜 날 (Ngày bận như hôm qua).'
    },

    {
        id: 23,
        type: 'multiple-choice',
        grammarPoint: '마다 (Every/Each)',
        question: 'Chọn cấu trúc để nói "Mỗi ngày tập thể dục":',
        options: ['날마다 운동해요', '날에 운동해요', '날을 운동해요', '날은 운동해요'],
        correctAnswer: '날마다 운동해요',
        explanation: '마다 = "mỗi, từng". Ví dụ: 사람마다 다르다 (Mỗi người khác nhau) / 주마다 여행해요 (Mỗi tuần du lịch).'
    },

    {
        id: 24,
        type: 'multiple-choice',
        grammarPoint: '보다 (Than - Comparison)',
        question: 'Chọn cấu trúc để so sánh: "Hôm nay nóng hơn hôm qua"',
        options: ['오늘이 어제보다 더워요', '오늘이 어제에 더워요', '오늘이 어제를 더워요', '오늘이 어제한테 더워요'],
        correctAnswer: '오늘이 어제보다 더워요',
        explanation: '보다 = "hơn" (so sánh). Công thức: A + 보다 + B (Tính từ). Ví dụ: 저보다 키가 커요 (Cao hơn tôi).'
    },

    // ===== PHẦN 4: ĐỘNG TỪ & TÍNH TỪ - ĐỂ/VÌ/NẾU =====

    {
        id: 25,
        type: 'multiple-choice',
        grammarPoint: '-(으)러 (In Order To - Movement)',
        question: 'Chọn cấu trúc để chỉ mục đích di chuyển: "Đi ăn cơm"',
        options: ['밥 먹으러 가요', '밥 먹으려고 가요', '밥을 먹어요', '밥이 먹어요'],
        correctAnswer: '밥 먹으러 가요',
        explanation: '-(으)러 dùng với động từ di chuyển (가다, 오다, 다니다...). Quy tắc: 받침-으러, 무받침-러, 받침ㄹ-러. Ví dụ: 책 빌리러 도서관에 갔어요.'
    },

    {
        id: 26,
        type: 'multiple-choice',
        grammarPoint: '-(으)려고 (In Order To - Purpose)',
        question: 'Chọn cấu trúc để chỉ mục đích ý định: "Tập thể dục để giảm cân"',
        options: ['살을 빼려고 운동해요', '살을 빼러 운동해요', '살이 빠요', '살을 뺀다'],
        correctAnswer: '살을 빼려고 운동해요',
        explanation: '-(으)려고 dùng với mọi động từ (linh hoạt hơn -(으)러). KHÔNG kết hợp -았/-겠. Quy tắc giống -(으)러.'
    },

    {
        id: 27,
        type: 'multiple-choice',
        grammarPoint: '-어서 (Because - Reason)',
        question: 'Chọn cấu trúc để chỉ lý do: "Vì thích nên mua"',
        options: ['좋아서 샀어요', '좋으니까 샀어요', '좋으면 샀어요', '좋으려고 샀어요'],
        correctAnswer: '좋아서 샀어요',
        explanation: '-어서 chỉ lý do (V/A/이다/아니다). Quy tắc: ㅏ/ㅗ-아서, 다른-어서, 하다-해서. KHÔNG dùng -었/-겠, mệnh lệnh, đề nghị.'
    },

    {
        id: 28,
        type: 'multiple-choice',
        grammarPoint: '-어서 (Then - Sequence)',
        question: 'Chọn cấu trúc để chỉ trình tự: "Đến thư viện rồi học ở đó"',
        options: ['도서관에 가서 공부했어요', '도서관에 가고 공부했어요', '도서관에 가려고 공부했어요', '도서관에 가니까 공부했어요'],
        correctAnswer: '도서관에 가서 공부했어요',
        explanation: '-어서 với động từ chỉ trình tự (2 hành động liên quan chặt chẽ). Ví dụ: 과일을 씻어서 접시에 담았어요.'
    },

    {
        id: 29,
        type: 'multiple-choice',
        grammarPoint: '-(으)니까 (Because - Based On)',
        question: 'Chọn cấu trúc để chỉ lý do chủ quan: "Vì thời tiết tốt nên đi dạo"',
        options: ['날씨가 좋으니까 산책합시다', '날씨가 좋아서 산책합시다', '날씨가 좋으면 산책합시다', '날씨가 좋으려고 산책합시다'],
        correctAnswer: '날씨가 좋으니까 산책합시다',
        explanation: '-(으)니까 CÓ THỂ dùng với -었/-겠, mệnh lệnh, đề nghị. -어서 KHÔNG dùng được. Quy tắc: 받침-으니까, 무받침-니까.'
    },

    {
        id: 30,
        type: 'multiple-choice',
        grammarPoint: '-(으)니까 (When - Discovery)',
        question: 'Chọn cấu trúc để chỉ "khi làm thì phát hiện": "Thức dậy thì đã 8 giờ"',
        options: ['일어나니까 8시였어요', '일어나서 8시였어요', '일어나면 8시였어요', '일어나려고 8시였어요'],
        correctAnswer: '일어나니까 8시였어요',
        explanation: '-(으)니까 với động từ = "Khi làm A thì phát hiện B". Chủ ngữ hai vế thường khác nhau.'
    },

    {
        id: 31,
        type: 'multiple-choice',
        grammarPoint: '-(으)면 (If)',
        question: 'Chọn cấu trúc để nói giả định: "Nếu thời tiết tốt thì sẽ đi dạo"',
        options: ['날씨가 좋으면 산책할 거예요', '날씨가 좋으니까 산책할 거예요', '날씨가 좋아서 산책할 거예요', '날씨가 좋으러 산책할 거예요'],
        correctAnswer: '날씨가 좋으면 산책할 거예요',
        explanation: '-(으)면 dùng cho điều kiện, giả định. Quy tắc: 받침-으면, 무받침-면, 받침ㄹ-면 (KHÔNG bỏ ㄹ).'
    },

    {
        id: 32,
        type: 'multiple-choice',
        grammarPoint: '-(으)면서 (While - Simultaneous)',
        question: 'Chọn cấu trúc để nói đồng thời: "Vừa nghe nhạc vừa học"',
        options: ['음악을 들으면서 공부해요', '음악을 들으니까 공부해요', '음악을 들으려고 공부해요', '음악을 들어서 공부해요'],
        correctAnswer: '음악을 들으면서 공부해요',
        explanation: '-(으)면서 = "vừa...vừa..." (2 hành động/trạng thái đồng thời). Quy tắc: 받침-으면서, 무받침-면서, 받침ㄹ-면서.'
    },

    // ===== PHẦN 5: CẤU TRÚC CÓ THỂ & VÀ/NHƯNG =====

    {
        id: 33,
        type: 'multiple-choice',
        grammarPoint: '-을 수 있다 (Can - Ability)',
        question: 'Chọn cấu trúc để nói khả năng: "Có thể lái xe"',
        options: ['운전할 수 있어요', '운전을 수 있어요', '운전이 가능해요', '운전은 할 수 있어요'],
        correctAnswer: '운전할 수 있어요',
        explanation: '-을 수 있다 chỉ năng lực (CHỈ động từ). Quy tắc: 받침-을 수 있다, 무받침-ㄹ 수 있다, 받침ㄹ-ㄹ 수 있다 (bỏ ㄹ+ㄹ).'
    },

    {
        id: 34,
        type: 'multiple-choice',
        grammarPoint: '-을 수 있다 (Can - Possibility)',
        question: 'Chọn cấu trúc để nói khả năng/khả thi: "Có thể mưa"',
        options: ['비가 올 수 있어요', '비가 오고 있어요', '비가 왔어요', '비가 와요'],
        correctAnswer: '비가 올 수 있어요',
        explanation: '-을 수 있다 cũng dùng với V/A/이다 để chỉ khả năng xảy ra. Ví dụ: 어려울 수 있어요 (Có thể khó).'
    },

    {
        id: 35,
        type: 'multiple-choice',
        grammarPoint: '-을 수 없다 (Cannot)',
        question: 'Chọn cấu trúc để nói không thể: "Không thể ăn"',
        options: ['먹을 수 없어요', '못 먹어요', '먹지 않아요', '먹을 수도 없어요'],
        correctAnswer: '먹을 수 없어요',
        explanation: '-을 수 없다 = phủ định của -을 수 있다. KHÔNG dùng 안 với -을 수 없다. Phủ định = -을 수 없다 hoặc 못.'
    },

    {
        id: 36,
        type: 'multiple-choice',
        grammarPoint: '-지만 (But - Contrast)',
        question: 'Chọn cấu trúc để nối câu đối lập: "Đắt nhưng tốt"',
        options: ['비싸지만 좋아요', '비싸니까 좋아요', '비싸서 좋아요', '비싸려고 좋아요'],
        correctAnswer: '비싸지만 좋아요',
        explanation: '-지만 chỉ đối lập (A và B không hợp lý với nhau). Quy tắc: V/A/이다/아니다 + 지만. Có thể dùng -었/-겠.'
    },

    {
        id: 37,
        type: 'multiple-choice',
        grammarPoint: '-고 (And - List)',
        question: 'Chọn cấu trúc để liệt kê: "Phòng rộng và sạch"',
        options: ['방이 넓고 깨끗해요', '방이 넓지만 깨끗해요', '방이 넓으니까 깨끗해요', '방이 넓어서 깨끗해요'],
        correctAnswer: '방이 넓고 깨끗해요',
        explanation: '-고 (1) liệt kê các trạng thái đồng đẳng (không theo thứ tự). Có thể đổi vị trí. Ví dụ: 크고 빨갛다 (Lớn và đỏ).'
    },

    {
        id: 38,
        type: 'multiple-choice',
        grammarPoint: '-고 (Then - Sequence)',
        question: 'Chọn cấu trúc để chỉ thứ tự: "Ăn cơm rồi ngủ"',
        options: ['밥을 먹고 잤어요', '밥을 먹어서 잤어요', '밥을 먹지만 잤어요', '밥을 먹으니까 잤어요'],
        correctAnswer: '밥을 먹고 잤어요',
        explanation: '-고 (2) chỉ trình tự (CHỈ động từ). Đổi vị trí → nghĩa thay đổi. Ví dụ: 샤워하고 나갔어요.'
    },

    {
        id: 39,
        type: 'multiple-choice',
        grammarPoint: '-고 싶다 (Want To)',
        question: 'Chọn cấu trúc để nói muốn: "Muốn đi Jeju"',
        options: ['제주도에 가고 싶어요', '제주도에 가려고 해요', '제주도에 가니까 해요', '제주도를 가고 싶어요'],
        correctAnswer: '제주도에 가고 싶어요',
        explanation: '-고 싶다 chỉ muốn làm gì (CHỈ động từ). Chủ ngữ = người nói hoặc người nghe. Không dùng với tính từ.'
    },

    {
        id: 40,
        type: 'multiple-choice',
        grammarPoint: '-고 싶어 하다 (Someone Wants)',
        question: 'Chọn cấu trúc để nói người khác muốn: "Em muốn học piano"',
        options: ['동생은 피아노를 배우고 싶어 해요', '동생은 피아노를 배우고 싶어요', '동생은 피아노가 배우고 싶어요', '동생은 피아노를 배우려고 해요'],
        correctAnswer: '동생은 피아노를 배우고 싶어 해요',
        explanation: '-고 싶어 하다 chỉ ý muốn của người thứ 3. So sánh: 저는 피아노를 배우고 싶어요 (Tôi muốn) vs 동생은 피아노를 배우고 싶어 해요 (Em muốn).'
    },

    // ===== PHẦN 6: KÍNH NGỮ - ĐỘNG TỪ =====

    {
        id: 41,
        type: 'multiple-choice',
        grammarPoint: '드시다 (Eat - Honorific)',
        question: 'Chọn dạng kính ngữ: "Ông ăn cơm"',
        options: ['할아버지가 진지를 드세요', '할아버지가 밥을 먹으세요', '할아버지가 밥을 드세요', '할아버지가 진지가 먹어요'],
        correctAnswer: '할아버지가 진지를 드세요',
        explanation: '먹다 → 드시다 / 마시다 → 드시다. 진지 = dạng kính ngữ của 밥. Kính ngữ chủ ngữ + kính ngữ danh từ.'
    },

    {
        id: 42,
        type: 'multiple-choice',
        grammarPoint: '주무시다 (Sleep - Honorific)',
        question: 'Chọn dạng kính ngữ: "Bà ngủ"',
        options: ['할머니가 주무셔요', '할머니가 자셔요', '할머니가 자요', '할머니께서 자세요'],
        correctAnswer: '할머니가 주무셔요',
        explanation: '자다 → 주무시다 (kính ngữ độc lập). -으시- được thêm vào 주무 → 주무시다 → 주무셔요.'
    },

    {
        id: 43,
        type: 'multiple-choice',
        grammarPoint: '계시다 (Be - Honorific Location)',
        question: 'Chọn dạng kính ngữ: "Ông đang ở nhà"',
        options: ['할아버지가 집에 계세요', '할아버지가 집에 있으세요', '할아버지는 집에 있어요', '할아버지를 집에 있어요'],
        correctAnswer: '할아버지가 집에 계세요',
        explanation: '있다 (ở) → 계시다 (kính ngữ độc lập). KHÔNG dùng 있으세요 để chỉ vị trí người tôn kính.'
    },

    {
        id: 44,
        type: 'multiple-choice',
        grammarPoint: '-어 보다 (Try)',
        question: 'Chọn cấu trúc để nói "Thử": "Thử mặc áo này"',
        options: ['이 옷 입어 보세요', '이 옷을 입으세요', '이 옷이 입어 보세요', '이 옷을 입고 보세요'],
        correctAnswer: '이 옷 입어 보세요',
        explanation: '-어 보다 = "thử làm gì". Quy tắc: ㅏ/ㅗ-아 보다, 다른-어 보다, 하다-해 보다. CHỈ động từ, KHÔNG dùng tính từ.'
    },

    {
        id: 45,
        type: 'multiple-choice',
        grammarPoint: '-여쭙다 (Ask - Honorific)',
        question: 'Chọn dạng kính ngữ tân ngữ: "Hỏi thầy"',
        options: ['선생님께 여쭤봤어요', '선생님에게 물어봤어요', '선생님께 물어봤어요', '선생님을 여쭤봤어요'],
        correctAnswer: '선생님께 여쭤봤어요',
        explanation: '묻다/물어보다 → 여쭙다/여쭤보다 (kính ngữ tân ngữ). 께 = kính ngữ của 에게.'
    },

    {
        id: 46,
        type: 'multiple-choice',
        grammarPoint: '뵙다 (See/Meet - Honorific)',
        question: 'Chọn dạng kính ngữ: "Gặp bà"',
        options: ['할머니를 뵀어요', '할머니를 만났어요', '할머니께 뵀어요', '할머니가 뵀어요'],
        correctAnswer: '할머니를 뵀어요',
        explanation: '보다/만나다 → 뵙다 (kính ngữ tân ngữ). Chia: 뵙다 → 뵀어요, 뵈요. KHÔNG dùng 만나셨어요 (sai kính ngữ).'
    },

    {
        id: 47,
        type: 'multiple-choice',
        grammarPoint: '드리다 (Give - Honorific)',
        question: 'Chọn dạng kính ngữ tân ngữ: "Tặng quà cho thầy"',
        options: ['선생님께 선물을 드렸어요', '선생님에게 선물을 줬어요', '선생님께 선물을 줬어요', '선생님을 선물을 드렸어요'],
        correctAnswer: '선생님께 선물을 드렸어요',
        explanation: '주다 → 드리다 (kính ngữ tân ngữ). 께 = kính ngữ của 에게. Công thức: 사람 + 께 + 물건 + 드리다.'
    },

    {
        id: 48,
        type: 'multiple-choice',
        grammarPoint: '모시다 (Take/Accompany - Honorific)',
        question: 'Chọn dạng kính ngữ: "Đưa bà ra chợ"',
        options: ['할머니를 시장에 모시고 갔어요', '할머니를 시장에 데려갔어요', '할머니를 시장에 갔어요', '할머니를 시장으로 모시고 갔어요'],
        correctAnswer: '할머니를 시장에 모시고 갔어요',
        explanation: '데리다 → 모시다 (kính ngữ tân ngữ). Dùng khi đưa/đón người tôn kính. Chia: 모시다 → 모시고.'
    },

    // ===== PHẦN 7: PHỦ ĐỊNH & KHÔNG THỂ =====

    {
        id: 49,
        type: 'multiple-choice',
        grammarPoint: '안 (Negation - Short)',
        question: 'Chọn phủ định ngắn: "Không ăn"',
        options: ['안 먹어요', '먹지 않아요', '못 먹어요', '먹을 수 없어요'],
        correctAnswer: '안 먹어요',
        explanation: '안 = phủ định ngắn. So sánh: 안 먹어요 (không muốn) vs 못 먹어요 (không thể). Quy tắc: 안 + V/A, KHÔNG dùng với 이다.'
    },

    {
        id: 50,
        type: 'multiple-choice',
        grammarPoint: '-지 않다 (Negation - Long)',
        question: 'Chọn phủ định dài: "Không tốt"',
        options: ['좋지 않아요', '안 좋아요', '못 좋아요', '좋을 수 없어요'],
        correctAnswer: '좋지 않아요',
        explanation: '-지 않다 = phủ định dài, trang trọng. Chia: V/A + 지 않다. Ví dụ: 먹다 → 먹지 않아요, 좋다 → 좋지 않아요.'
    },

    {
        id: 51,
        type: 'multiple-choice',
        grammarPoint: '못 (Cannot)',
        question: 'Tình huống: Xe buýt không chạy nên tôi không thể đi. Chọn cách nói ngắn, tự nhiên trong hội thoại:',
        options: ['못 가요', '안 가요', '가지 않아요', '갈 수 없어요'],
        correctAnswer: ['못 가요', '갈 수 없어요'],
        explanation: 'Ngữ cảnh câu này là bất khả kháng (xe buýt không chạy), nên cả 못 가요 và 갈 수 없어요 đều đúng. 못 가요 là cách nói ngắn, tự nhiên trong hội thoại; 갈 수 없어요 là cách nói đầy đủ, trung tính hơn. 안 가요/가지 않아요 không phù hợp vì dễ hiểu là người nói chủ động không đi (ý chí), không nhấn mạnh lý do khách quan.'
    },

    {
        id: 52,
        type: 'multiple-choice',
        grammarPoint: '-지 못하다 (Cannot - Formal)',
        question: 'Tình huống: Tôi bị đau bụng nên không thể ăn cơm. Chọn câu phù hợp nhất:',
        options: ['배가 아파서 밥을 먹지 못해요', '배가 아파서 밥을 먹지 마세요', '배가 아파서 밥을 먹고 싶어요', '배가 아파서 밥을 먹었어요'],
        correctAnswer: '배가 아파서 밥을 먹지 못해요',
        explanation: 'Đáp án đúng là 먹지 못해요 vì diễn tả không thể làm gì do lý do khách quan (đau bụng). 먹지 마세요 là mệnh lệnh cấm; 먹고 싶어요 là mong muốn; 먹었어요 là đã làm trong quá khứ.'
    },

    {
        id: 53,
        type: 'multiple-choice',
        grammarPoint: '-지 말다 (Don\'t)',
        question: 'Chọn cấu trúc để cấm: "Đừng mở cửa sổ"',
        options: ['창문을 열지 마세요', '창문을 열지 말세요', '창문을 안 열어요', '창문을 열 수 없어요'],
        correctAnswer: '창문을 열지 마세요',
        explanation: '-지 말다 = "đừng, cấm". Hình thái: -지 마, -지 마세요, -지 마십시오. Quy tắc: V + 지 말다 (không phụ thuộc 받침).'
    },

    // ===== PHẦN 8: ĐUÔI CẤU TRÚC VÀ THỜI GIAN =====

    {
        id: 54,
        type: 'multiple-choice',
        grammarPoint: '-았/었- (Past Tense)',
        question: 'Chọn hình thức quá khứ: "Đã đi"',
        options: ['갔어요', '가요', '가려고 해요', '갈 거예요'],
        correctAnswer: '갔어요',
        explanation: '-았/었- chỉ quá khứ hoàn thành. Quy tắc: ㅏ/ㅗ-았-, 다른-었-, 하다-했-. Chia: 가다 → 갔어요, 먹다 → 먹었어요.'
    },

    {
        id: 55,
        type: 'multiple-choice',
        grammarPoint: '-(스)ㅂ니다 (Formal Statement)',
        question: 'Chọn đuôi trang trọng để nói: "Ăn cơm"',
        options: ['밥을 먹습니다', '밥을 먹어요', '밥을 먹는다', '밥을 먹습니까'],
        correctAnswer: '밥을 먹습니다',
        explanation: '-(스)ㅂ니다 = trình bày trang trọng. Quy tắc: 받침-습니다, 무받침-ㅂ니다, ㄹ bất quy tắc-습니다. Phát âm ㅂ+ㄴ → [ㅁ].'
    },

    {
        id: 56,
        type: 'multiple-choice',
        grammarPoint: '-(스)ㅂ니까 (Formal Question)',
        question: 'Chọn đuôi trang trọng để hỏi: "Ăn cơm không?"',
        options: ['밥을 먹습니까?', '밥을 먹어요?', '밥을 먹습니다?', '밥을 먹었어요?'],
        correctAnswer: '밥을 먹습니까?',
        explanation: '-(스)ㅂ니까 = hỏi trang trọng. Quy tắc giống -(스)ㅂ니다. Lưu ý: Trong văn nói, dùng -어요? thay vì -습니까?'
    },

    {
        id: 57,
        type: 'multiple-choice',
        grammarPoint: '-(으)세요 (Honorific Polite)',
        question: 'Chọn đuôi kính ngữ lịch sự: "Xin mời ngồi"',
        options: ['여기 앉으세요', '여기 앉아요', '여기 앉습니다', '여기 앉는다'],
        correctAnswer: '여기 앉으세요',
        explanation: '-(으)세요 = 3 cách dùng: (1) Trần thuật về người lớn (2) Hỏi người lớn (3) Mệnh lệnh lịch sự. Quy tắc: 받침-으세요, 무받침-세요, ㄹ-세요.'
    },

    {
        id: 58,
        type: 'multiple-choice',
        grammarPoint: '-(으)십시오 (Formal Command)',
        question: 'Chọn mệnh lệnh trang trọng: "Xin vào"',
        options: ['어서 오십시오', '어서 오세요', '어서 와요', '어서 왔어요'],
        correctAnswer: '어서 오십시오',
        explanation: '-(으)십시오 = mệnh lệnh trang trọng (biển báo, thông báo). Quy tắc: 받침-으십시오, 무받침-십시오, ㄹ-십시오. CHỈ động từ.'
    },

    // ===== PHẦN 9: PHÁT ÂMCÔNG THỨC ĐẮC BIỆT =====

    {
        id: 59,
        type: 'fill-input',
        grammarPoint: 'Bất quy tắc ㄷ (ㄷ Irregular)',
        question: 'Chia động từ 걷다 với -어요: 걷다 → ________',
        correctAnswer: '걸어요',
        explanation: 'Bất quy tắc ㄷ: ㄷ + 어 = ㄹ + 어. Ví dụ: 걷다 → 걸어요, 닫다 → 닫아요 (ngoại lệ). 듣다 → 들어요 (cũng ㄷ bất quy tắc).'
    },

    {
        id: 60,
        type: 'fill-input',
        grammarPoint: 'Bất quy tắc ㄴ (ㄴ Irregular)',
        question: 'Chia động từ 살다 với -(ㅂ)습니다: 살다 → ________',
        correctAnswer: '삽니다',
        explanation: '받침ㄹ + 습 = 습 (không bỏ ㄹ). Chia từ 받침ㄹ: 살다 → 삽니다 (bất quy tắc ㄹ với ㅂ). Lưu ý: 살다 → 살아요 (với -아/어).'
    },

    {
        id: 61,
        type: 'fill-input',
        grammarPoint: 'Bất quy tắc ㅂ (ㅂ Irregular)',
        question: 'Chia động từ 좋다 với -(으)면: 좋다 → ________',
        correctAnswer: '좋으면',
        explanation: 'Bất quy tắc ㅂ: 받침ㅂ + 어 = 워. Ví dụ: 좋다 → 좋아요, 놀다 → 놀아요. Với -, bỏ ㅂ: 찹다 → 찾으니까.'
    },

    {
        id: 62,
        type: 'fill-input',
        grammarPoint: 'Nguyên âm rút gọn (Vowel Contraction)',
        question: 'Chia động từ: 가다 + 았/었어요 = ________',
        correctAnswer: '갔어요',
        explanation: 'Vowel contraction: 가 + 았 = (ㅏ + ㅏ) = ㅏ. Tương tự: 오 + 았 = 왔어요. 나 + 았 = 났어요.'
    },

    {
        id: 63,
        type: 'fill-input',
        grammarPoint: '-(으)려고',
        question: 'Chia động từ: 먹다 + -(으)려고 = ________',
        correctAnswer: '먹으려고',
        explanation: '받침있 + -으려고. 받침없 + -려고. 받침ㄹ 제거+려고 (살다→살려고). Chia: 먹다 → 먹으려고 해요.'
    },

    // ===== PHẦN 10: DANH TỪ KÍNH NGỮ VÀ HỖ TRỢ (Optional) =====

    {
        id: 64,
        type: 'multiple-choice',
        grammarPoint: '진지/말씀/연세/성함 (Honorific Nouns)',
        question: 'Chọn danh từ kính ngữ: "Ông bao nhiêu tuổi?" (về tuổi)',
        options: ['할아버지 연세가 어떻게 되세요?', '할아버지 나이가 어떻게 되세요?', '할아버지 세가 어떻게 되세요?', '할아버지 나이를 어떻게 되세요?'],
        correctAnswer: '할아버지 연세가 어떻게 되세요?',
        explanation: '나이 → 연세 (tuổi của người tôn kính). Tương tự: 밥 → 진지, 말 → 말씀, 이름 → 성함, 집 → 댁, 생일 → 생신.'
    },

    {
        id: 65,
        type: 'multiple-choice',
        grammarPoint: '께서 (Honorific Subject Particle)',
        question: 'Chọn câu dùng trợ từ chủ ngữ kính ngữ đúng: "Bà đã đến"',
        options: ['할머니께서 오셨어요', '할머니가 오셨어요', '할머니는 오셨어요', '할머니를 오셨어요'],
        correctAnswer: '할머니께서 오셨어요',
        explanation: '께서 = kính ngữ của 이/가 (chủ ngữ). Dùng với -(으)시-. So sánh: 엄마가 왔어요 vs 엄마께서 오셨어요.'
    },

    {
        id: 66,
        type: 'multiple-choice',
        grammarPoint: '께 (To Honorable Person)',
        question: 'Chọn trợ từ tân ngữ kính ngữ: "Gọi điện cho bà"',
        options: ['할머니께 전화했어요', '할머니에게 전화했어요', '할머니를 전화했어요', '할머니는 전화했어요'],
        correctAnswer: '할머니께 전화했어요',
        explanation: '께 = kính ngữ của 에게 (tân ngữ người). Dùng với động từ kính ngữ (드리다, 여쭙다, 뵙다...) hoặc -으시-.'
    },

    {
        id: 67,
        type: 'multiple-choice',
        grammarPoint: 'Tóm tắt: 3 loại Kính ngữ',
        question: 'Chọn cấu trúc kính ngữ hoàn chỉnh: "Em gửi email cho thầy"',
        options: ['동생이 선생님께 이메일을 보냈어요', '동생이 선생님께 이메일을 드렸어요', '동생이 선생님에게 이메일을 보냈어요', '동생이 선생님을 이메일을 보냈어요'],
        correctAnswer: '동생이 선생님께 이메일을 보냈어요',
        explanation: '3 loại kính ngữ: (1) Chủ ngữ: 할머니께서 밥을 드세요 (2) Tân ngữ: 할머니께 선물을 드렸어요 (3) Đối tượng: -요/-습니다.'
    }
];

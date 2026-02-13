/**
 * Bài tập Buổi 29 - Ôn tập tổng hợp 62 cấu trúc ngữ pháp
 * Ngày: 13/2/2026
 * 30 Trắc nghiệm + 20 Điền khuyết
 */
export interface Question {
    id: number;
    type: 'multiple-choice' | 'fill-input';
    grammarPoint: string;
    question: string;
    description?: string;
    options?: string[];
    correctAnswer: string;
    explanation: string;
}

export const quizQuestions: Question[] = [
    // ========== PHẦN 1: TRẮC NGHIỆM (30 CÂU) ==========
    {
        id: 1,
        type: 'multiple-choice',
        grammarPoint: '-고 (liệt kê)',
        question: '가: 주말에 보통 뭐 해요?\n나: 집에서 청소도 (_______) 빨래도 해요.',
        options: ['하고', '하지만', '해서', '하러'],
        correctAnswer: '하고',
        explanation: 'Chọn -고 (liệt kê): Dùng để nối hai hành động ngang hàng (dọn dẹp và giặt giũ). -지만 (tương phản), -어서 (nguyên nhân/trình tự), -러 (mục đích đi đâu đó) không phù hợp ngữ cảnh.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: '못 (không thể)',
        question: '가: 제주도에 가 봤어요?\n나: 아니요, 아직 (_______).',
        options: ['가요', '안 갔어요', '못 갔어요', '가지 마세요'],
        correctAnswer: '못 갔어요',
        explanation: 'Chọn 못 (không thể): Thể hiện hoàn cảnh khách quan hoặc chưa có cơ hội làm gì đó. "Chưa thể đi" tự nhiên hơn "Không đi" (안). -지 마세요 là câu mệnh lệnh (đừng), không dùng để trả lời.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: '왜 (Tại sao)',
        question: '가: 이 가방이 (_______) 샀어요?\n나: 디자인이 예뻐서 샀어요.',
        options: ['왜', '언제', '누구', '어디'],
        correctAnswer: '왜',
        explanation: 'Chọn 왜 (Tại sao): Câu trả lời có "-어서" (vì... nên) giải thích lý do. Các từ để hỏi khác không khớp với câu trả lời.'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: '-(으)니까 (Vì - với đề nghị)',
        question: '가: 내일 2시에 만날까요?\n나: 미안해요. 2시에는 수업이 (_______) 4시에 만납시다.',
        options: ['있어서', '있으니까', '있고', '있으면'],
        correctAnswer: '있으니까',
        explanation: 'Chọn -(으)니까 (Vì): Vế sau là câu đề nghị "만납시다" (hãy gặp...). -아/어서 không dùng được với đuôi câu mệnh lệnh/đề nghị.'
    },
    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: '만 (Chỉ)',
        question: '가: 저는 사과를 좋아해요. 앤디 씨는요?\n나: 저는 수박(_______) 좋아해요. 사과는 싫어해요.',
        options: ['도', '만', '은', '이'],
        correctAnswer: '만',
        explanation: 'Chọn 만 (Chỉ): Vế sau nói "ghét táo", suy ra "chỉ thích dưa hấu". 도 (Cũng) sai vì vế sau phủ định sở thích với táo.'
    },
    {
        id: 6,
        type: 'multiple-choice',
        grammarPoint: '-(으)러 (Để - mục đích di chuyển)',
        question: '가: 어디에 가요?\n나: 친구를 (_______) 식당에 가요.',
        options: ['만나고', '만나러', '만나서', '만나지만'],
        correctAnswer: '만나러',
        explanation: 'Chọn -(으)러 (Để): Đi kèm với động từ di chuyển (가요) để chỉ mục đích. -고 và -지만 không đi kèm trực tiếp để chỉ mục đích di chuyển.'
    },
    {
        id: 7,
        type: 'multiple-choice',
        grammarPoint: '도 (Cũng)',
        question: '가: 오늘 날씨가 어때요?\n나: 비가 오고 바람(_______) 불어요.',
        options: ['이', '을', '도', '만'],
        correctAnswer: '도',
        explanation: 'Chọn 도 (Cũng): Mưa rơi và gió cũng thổi (bổ sung thông tin).'
    },
    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: '-(으)세요 (Hãy - lời khuyên)',
        question: '가: 선생님, 이 단어를 잘 모르겠어요.\n나: 그럼 사전을 한번 (_______).',
        options: ['찾으십시오', '찾지 마세요', '찾고 싶어요', '찾으세요'],
        correctAnswer: '찾으세요',
        explanation: 'Chọn -(으)세요 (Hãy): Lời khuyên/yêu cầu lịch sự. -(으)십시오 quá trang trọng trong hội thoại thầy trò hàng ngày. -지 마세요 (Đừng) sai nghĩa.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: 'Bất quy tắc ㄷ - 걸다',
        question: '가: 학교에서 집까지 버스로 가요?\n나: 아니요, 가까워서 (_______).',
        options: ['걸어요', '걷어요', '걸었어요', '걸을래요'],
        correctAnswer: '걸어요',
        explanation: 'Chọn 걸어요: Bất quy tắc ㄷ (걷다 + 어요 -> 걸어요). 걷어요 là chia sai quy tắc.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: '계시다 (Kính ngữ của 있다 - ở)',
        question: '가: 할아버지, 지금 (_______)?\n나: 응, 방에서 신문을 보고 있어요.',
        options: ['있으세요', '계세요', '있어요', '없으세요'],
        correctAnswer: '계세요',
        explanation: 'Chọn 계시다 (Kính ngữ của 있다 - ở): Hỏi người lớn tuổi (ông) đang ở đâu. 있으세요 dùng khi hỏi sở hữu (Có cái gì không), không dùng cho vị trí của người tôn kính.'
    },
    {
        id: 11,
        type: 'multiple-choice',
        grammarPoint: '-지만 (Nhưng)',
        question: '가: 한국어 공부가 재미있어요?\n나: 네, (_______) 어려워요.',
        options: ['재미있어서', '재미있고', '재미있지만', '재미있으니까'],
        correctAnswer: '재미있지만',
        explanation: 'Chọn -지만 (Nhưng): Thú vị nhưng khó (đối lập).'
    },
    {
        id: 12,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - chủ ngữ "tôi"',
        question: '가: 이 케이크를 누가 만들었어요?\n나: 제가 (_______).',
        options: ['만들었어요', '만들으셨어요', '만드셨어요', '만들으세요'],
        correctAnswer: '만들었어요',
        explanation: 'Chọn 만들었어요 (Thì quá khứ): Chủ ngữ là "제가" (tôi) nên không dùng kính ngữ (시). Các đáp án có -시- đều sai vì không ai dùng kính ngữ cho bản thân.'
    },
    {
        id: 13,
        type: 'multiple-choice',
        grammarPoint: '-어서 (Trình tự/địa điểm)',
        question: '가: 영수 씨, 어제 뭐 했어요?\n나: 도서관에 (_______) 공부했어요.',
        options: ['가고', '가서', '가지만', '가러'],
        correctAnswer: '가서',
        explanation: 'Chọn -어서 (Trình tự): Đến thư viện rồi học ở đó (hành động 2 diễn ra tại địa điểm của hành động 1). -고 chỉ liệt kê đơn thuần, không nhấn mạnh sự nối tiếp chặt chẽ về địa điểm như -어서.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: '-어 보세요 (Thử làm gì)',
        question: '가: 이 옷 어때요?\n나: 예뻐요. 한번 (_______).',
        options: ['입지 않아요', '입고 싶어요', '입어 보세요', '입으러 가요'],
        correctAnswer: '입어 보세요',
        explanation: 'Chọn -어 보세요 (Thử làm gì): Lời khuyên "Hãy mặc thử xem".'
    },
    {
        id: 15,
        type: 'multiple-choice',
        grammarPoint: '(으)로 (Lựa chọn)',
        question: '가: 커피 마실래요?\n나: 아니요, 저는 주스(_______) 마실래요.',
        options: ['를', '로', '에', '와'],
        correctAnswer: '로',
        explanation: 'Chọn (으)로 (Lựa chọn): Chọn món này thay vì món kia (Dùng trong gọi món/quyết định).'
    },
    {
        id: 16,
        type: 'multiple-choice',
        grammarPoint: '-고 (Trình tự thời gian)',
        question: '가: 우리 영화 볼까요?\n나: 좋아요. 밥을 (_______) 영화를 봅시다.',
        options: ['먹고', '먹어서', '먹으니까', '먹으러'],
        correctAnswer: '먹고',
        explanation: 'Chọn -고 (Trình tự thời gian): Ăn cơm trước rồi xem phim sau. -어서 không dùng với đuôi cầu khiến "봅시다".'
    },
    {
        id: 17,
        type: 'multiple-choice',
        grammarPoint: '실례합니다',
        question: '학생이 지금 문 앞에 있어요.\n가: 선생님, (_______).\n나: 네, 어서 오세요.',
        options: ['미안합니다', '감사합니다', '실례합니다', '축하합니다'],
        correctAnswer: '실례합니다',
        explanation: 'Chọn 실례합니다 (Xin thất lễ/Xin lỗi làm phiền): Dùng khi bước vào phòng/nhà người khác.'
    },
    {
        id: 18,
        type: 'multiple-choice',
        grammarPoint: '-(으)ㄹ 수 있다',
        question: '가: 수진 씨는 한국 요리를 할 수 있어요?\n나: 네, 비빔밥을 (_______).',
        options: ['만들지 않아요', '만들 수 있어요', '만들고 싶어요', '만들러 가요'],
        correctAnswer: '만들 수 있어요',
        explanation: 'Hỏi -(으)ㄹ 수 있어요? (Có thể không?) -> Trả lời -(으)ㄹ 수 있어요 (Có thể).'
    },
    {
        id: 19,
        type: 'multiple-choice',
        grammarPoint: '보다 (Hơn)',
        question: '가: 비행기가 기차(_______) 빨라요?\n나: 네, 훨씬 빨라요.',
        options: ['처럼', '보다', '마다', '하고'],
        correctAnswer: '보다',
        explanation: 'Chọn 보다 (Hơn): So sánh tàu hỏa và máy bay.'
    },
    {
        id: 20,
        type: 'multiple-choice',
        grammarPoint: '-(으)면 (Nếu)',
        question: '가: 내일 낚시하러 갈까요?\n나: 내일 비가 (_______) 안 갈 거예요.',
        options: ['오고', '오면', '와서', '오지만'],
        correctAnswer: '오면',
        explanation: 'Chọn -(으)면 (Nếu): Giả định "Nếu trời mưa thì sẽ không đi".'
    },
    {
        id: 21,
        type: 'multiple-choice',
        grammarPoint: '드리다 (Kính ngữ khách thể)',
        question: '가: 부모님께 선물을 드렸어요?\n나: 네, (_______).',
        options: ['줬어요', '드렸어요', '주셨어요', '드리셨어요'],
        correctAnswer: '드렸어요',
        explanation: 'Chọn 드렸어요: Chủ ngữ "Tôi" (ẩn) tặng cho người lớn (bố mẹ) dùng kính ngữ khách thể 드리다. 주셨어요 là bố mẹ tặng tôi.'
    },
    {
        id: 22,
        type: 'multiple-choice',
        grammarPoint: '쯤 (Khoảng/Chừng)',
        question: '가: 회사에서 집까지 얼마나 걸려요?\n나: 1시간 (_______) 걸려요.',
        options: ['쯤', '마다', '씩', '만'],
        correctAnswer: '쯤',
        explanation: 'Chọn 쯤 (Khoảng/Chừng): Chỉ số lượng ước lượng.'
    },
    {
        id: 23,
        type: 'multiple-choice',
        grammarPoint: '-는 (Định ngữ hiện tại)',
        question: '가: 저 사람은 누구예요?\n나: 노래를 잘 (_______) 가수예요.',
        options: ['하는', '한', '할', '했던'],
        correctAnswer: '하는',
        explanation: 'Chọn -는 (Định ngữ hiện tại): Mô tả nghề nghiệp/đặc điểm hiện tại "Người hát hay là ca sĩ".'
    },
    {
        id: 24,
        type: 'multiple-choice',
        grammarPoint: '-고 (Trình tự)',
        question: '가: 감기에 걸려서 머리가 아파요.\n나: 약을 (_______) 푹 쉬세요.',
        options: ['먹고', '먹지만', '먹으러', '먹으려고'],
        correctAnswer: '먹고',
        explanation: 'Chọn -고 (Trình tự): Uống thuốc rồi nghỉ ngơi.'
    },
    {
        id: 25,
        type: 'multiple-choice',
        grammarPoint: '제 (Của tôi)',
        question: '가: 이것은 제 책이에요.\n나: (_______) 책은 어디에 있어요?',
        options: ['저의', '제', '제가', '제의'],
        correctAnswer: '제',
        explanation: 'Chọn 제: Dạng rút gọn của "저의" (của tôi) khi đứng trước danh từ. 제의 là sai ngữ pháp.'
    },
    {
        id: 26,
        type: 'multiple-choice',
        grammarPoint: '못 vs 안',
        question: '가: 오늘 저녁에 삼겹살 어때요?\n나: 미안해요. 저는 돼지고기를 (_______).',
        options: ['안 먹어요', '못 먹어요', '먹지 말아요', '먹지 않아요'],
        correctAnswer: '못 먹어요',
        explanation: 'Chọn 못 먹어요 (Không thể ăn): Thường dùng khi kiêng kỵ hoặc dị ứng. 안 먹어요 (Không ăn) là do ý muốn; trong ngữ cảnh từ chối lịch sự, 못 nghe nhẹ nhàng hơn hoặc chỉ lý do khách quan.'
    },
    {
        id: 27,
        type: 'multiple-choice',
        grammarPoint: '마다 (Mỗi)',
        question: '가: 일요일(_______) 등산을 가요.\n나: 건강에 좋겠네요.',
        options: ['부터', '까지', '마다', '에서'],
        correctAnswer: '마다',
        explanation: 'Chọn 마다 (Mỗi): Đi leo núi mỗi Chủ Nhật (tần suất).'
    },
    {
        id: 28,
        type: 'multiple-choice',
        grammarPoint: '계시다 (Có ở đó không?)',
        question: '가: 사장님은 지금 회사에 (_______)?\n나: 아니요, 밖에 나갔어요.',
        options: ['없어요', '안 계세요', '계세요', '있어요'],
        correctAnswer: '계세요',
        explanation: 'Câu hỏi xác nhận sự tồn tại của người được tôn trọng (Giám đốc) -> Dùng 계세요 (Có ở đó không?).'
    },
    {
        id: 29,
        type: 'multiple-choice',
        grammarPoint: 'N이/가 아니다',
        question: '가: 동생이 학생이에요?\n나: 아니요, 학생이 (_______). 회사원이에요.',
        options: ['아니에요', '없어요', '몰라요', '안 해요'],
        correctAnswer: '아니에요',
        explanation: 'Cấu trúc N이/가 아니다 (Không phải là...).'
    },
    {
        id: 30,
        type: 'multiple-choice',
        grammarPoint: '-아/어서 (Nguyên nhân)',
        question: '가: 어제 왜 학교에 안 왔어요?\n나: 배가 너무 (_______) 병원에 갔어요.',
        options: ['아프고', '아파서', '아프지만', '아프러'],
        correctAnswer: '아파서',
        explanation: 'Chọn -아/어서 (Vì... nên): Chỉ nguyên nhân quá khứ (đã đau bụng). Lưu ý: Vế trước -어서 không chia thì quá khứ (아팠어서 là sai).'
    },

    // ========== PHẦN 2: ĐIỀN KHUYẾT (20 CÂU) ==========
    {
        id: 31,
        type: 'fill-input',
        grammarPoint: '부터 (Từ)',
        question: '저는 아침 8시 (_______) 저녁 5시까지 일해요.',
        correctAnswer: '부터',
        explanation: '부터 (Từ): Chỉ điểm bắt đầu thời gian.'
    },
    {
        id: 32,
        type: 'fill-input',
        grammarPoint: '어서 오세요',
        question: '(_______) 오세요. (mời vào)',
        correctAnswer: '어서',
        explanation: '어서 오세요 = Mời vào (lời chào khi khách đến).'
    },
    {
        id: 33,
        type: 'fill-input',
        grammarPoint: 'Bất quy tắc ㅂ - 덥다',
        question: '날씨가 너무 (덥다) ________ 에어컨을 켰어요.',
        correctAnswer: '더워서',
        explanation: 'Bất quy tắc ㅂ: 덥다 -> 더워 -> 더워서 (Vì nóng nên bật điều hòa). Hoặc 더우니까.'
    },
    {
        id: 34,
        type: 'fill-input',
        grammarPoint: 'N이에요/입니다',
        question: '저는 의사이고, 제 친구는 (선생님) ________.',
        correctAnswer: '선생님이에요',
        explanation: '선생님이에요 hoặc 선생님입니다 (Danh từ + 이에요/입니다).'
    },
    {
        id: 35,
        type: 'fill-input',
        grammarPoint: 'V-고 있다 (Đang)',
        question: '지금 음악을 (듣다) ________ 있어요.',
        correctAnswer: '듣고',
        explanation: 'Đang nghe - 듣다 + 고 -> 듣고. Không biến đổi ㄷ trước phụ âm ㄱ.'
    },
    {
        id: 36,
        type: 'fill-input',
        grammarPoint: '-(으)러 (Mục đích di chuyển)',
        question: '한국어를 (배우다) ________ 한국에 왔어요.',
        correctAnswer: '배우러',
        explanation: '배우러 (Để học - Mục đích di chuyển).'
    },
    {
        id: 37,
        type: 'fill-input',
        grammarPoint: '주무시다 (Kính ngữ - ngủ)',
        question: '할머니, (자다) ________? (Kính ngữ)',
        correctAnswer: '주무세요',
        explanation: 'Ngủ - Kính ngữ của 자다 là 주무시다 -> 주무세요.'
    },
    {
        id: 38,
        type: 'fill-input',
        grammarPoint: 'Quá khứ - 사다',
        question: '어제 백화점에서 옷을 (사다) ________.',
        correctAnswer: '샀어요',
        explanation: '사다 -> 샀어요 (Quá khứ).'
    },
    {
        id: 39,
        type: 'fill-input',
        grammarPoint: '-지 마세요',
        question: '교실에서 담배를 (피우다) ________ 마세요.',
        correctAnswer: '피우지',
        explanation: '피우지 마세요 = Đừng hút thuốc (-지 마세요).'
    },
    {
        id: 40,
        type: 'fill-input',
        grammarPoint: '제 (Của tôi)',
        question: '이것은 (저) ________ 책이에요.',
        correctAnswer: '제',
        explanation: '제 = Của tôi (저의 rút gọn).'
    },
    {
        id: 41,
        type: 'fill-input',
        grammarPoint: '-고 (Liệt kê quá khứ)',
        question: '지난 주말에 친구하고 영화도 보고 쇼핑도 (하다) ________.',
        correctAnswer: '했어요',
        explanation: 'Liệt kê quá khứ, vế sau chia thì -> 했어요 / 했습니다.'
    },
    {
        id: 42,
        type: 'fill-input',
        grammarPoint: '-지만 (Đối lập)',
        question: '서울은 복잡하지만 (편리하다) ________.',
        correctAnswer: '편리해요',
        explanation: 'Đối lập: 복잡하지만 편리해요. Hoặc 편리합니다.'
    },
    {
        id: 43,
        type: 'fill-input',
        grammarPoint: '-(으)면 (Nếu)',
        question: '시간이 (있다) ________ 같이 밥을 먹을까요?',
        correctAnswer: '있으면',
        explanation: '있으면 = Nếu có thời gian.'
    },
    {
        id: 44,
        type: 'fill-input',
        grammarPoint: '보다 (So sánh hơn)',
        question: '저는 오빠(_______) 키가 커요. (So sánh hơn)',
        correctAnswer: '보다',
        explanation: '오빠보다 키가 커요 = Cao hơn anh (so sánh hơn).'
    },
    {
        id: 45,
        type: 'fill-input',
        grammarPoint: 'Phủ định -지 않다',
        question: 'Chuyển câu sau sang câu phủ định:\n동생은 김치를 먹어요.',
        correctAnswer: '동생은 김치를 먹지 않아요',
        explanation: 'Phủ định: 먹지 않아요 hoặc 안 먹어요.'
    },
    {
        id: 46,
        type: 'fill-input',
        grammarPoint: 'Bất quy tắc 으 - 쓰다',
        question: '친구에게 편지를 (쓰다) ________.',
        correctAnswer: '써요',
        explanation: 'Bất quy tắc 으: 쓰다 -> 써요. Hoặc 씁니다.'
    },
    {
        id: 47,
        type: 'fill-input',
        grammarPoint: '-어 보다 (Thử)',
        question: '이 음식을 (먹다) ________ 보세요.',
        correctAnswer: '먹어',
        explanation: '먹어 보세요 = Hãy thử ăn món này (-어/아 보다).'
    },
    {
        id: 48,
        type: 'fill-input',
        grammarPoint: '-고 싶다 (Quá khứ)',
        question: '저는 어제 집에서 (쉬다 + 고 싶다, quá khứ) ________.',
        correctAnswer: '쉬고 싶었어요',
        explanation: 'Muốn nghỉ - Quá khứ ở đuôi câu: 쉬고 싶었어요 / 쉬고 싶었습니다.'
    },
    {
        id: 49,
        type: 'fill-input',
        grammarPoint: '드리다 (Kính ngữ khách thể)',
        question: '어머니께 선물을 (주다) ________.',
        correctAnswer: '드려요',
        explanation: '드려요 / 드립니다 - Kính ngữ khách thể: Biếu/Tặng cho người lớn.'
    },
    {
        id: 50,
        type: 'fill-input',
        grammarPoint: '-고 (Trạng thái duy trì)',
        question: '비가 오니까 우산을 (쓰다) ________ 가세요.',
        correctAnswer: '쓰고',
        explanation: '쓰고 가세요 = Đội ô/che ô rồi đi (Trạng thái duy trì: -고).'
    }
];

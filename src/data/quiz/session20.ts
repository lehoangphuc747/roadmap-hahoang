export interface Question {
    id: number;
    type: 'multiple-choice' | 'fill-input';
    grammarPoint: string;
    question: string;
    description?: string; // For context/instruction like "Chia động từ"
    options?: string[];
    correctAnswer: string;
    explanation: string;
}

export const quizQuestions: Question[] = [
    // --- PART 1: PARTICLES (TOPIK Reading Type 1) ---
    {
        id: 1,
        type: 'multiple-choice',
        grammarPoint: '이/가',
        question: '가: 누가 빵을 먹었어요?\n나: ______ 빵을 먹었어요.',
        options: ['제가', '저는', '저를', '저의'],
        correctAnswer: '제가',
        explanation: 'Khi hỏi "누가" (Ai - chủ ngữ), câu trả lời phải dùng "제가" (Tôi - chủ ngữ).'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: '은/는 (Topic)',
        question: '저는 베트남 사람입니다. ______ 한국 사람입니다.',
        options: ['친구는', '친구가', '친구를', '친구도'],
        correctAnswer: '친구는',
        explanation: 'Dùng "는" để đối chiếu (Tôi là VN, CÒN bạn là HQ).'
    },
    {
        id: 3,
        type: 'fill-input',
        grammarPoint: '을/를',
        question: '밥______ 먹어요. (Hãy điền tiểu từ thích hợp)',
        correctAnswer: '을',
        explanation: '"밥" có patchim -> dùng "을".'
    },
    {
        id: 4,
        type: 'fill-input',
        grammarPoint: '을/를',
        question: '커피______ 마셔요. (Hãy điền tiểu từ thích hợp)',
        correctAnswer: '를',
        explanation: '"커피" không patchim -> dùng "를".'
    },
    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: '에 (Location)',
        question: '가: 동생이 어디에 있어요?\n나: 방______ 있어요.',
        options: ['에', '에서', '부터', '로'],
        correctAnswer: '에',
        explanation: 'Dùng "에" với động từ chỉ sự tồn tại "있다" (Có ở đâu).'
    },
    {
        id: 6,
        type: 'multiple-choice',
        grammarPoint: '에서 (Action Place)',
        question: '가: 어디에서 공부해요?\n나: 도서관______ 공부해요.',
        options: ['에서', '에', '이', '을'],
        correctAnswer: '에서',
        explanation: 'Dùng "에서" khi thực hiện hành động (học) tại địa điểm.'
    },

    // --- PART 2: CONJUGATION (Input Drill) ---
    {
        id: 7,
        type: 'fill-input',
        grammarPoint: 'ㅂ니다/습니다',
        question: '가다 -> ______ (Chia (스)ㅂ니다)',
        correctAnswer: '갑니다',
        explanation: '가다 + ㅂ니다 -> 갑니다.'
    },
    {
        id: 8,
        type: 'fill-input',
        grammarPoint: 'ㅂ니다/습니다',
        question: '먹다 -> ______ (Chia (스)ㅂ니다)',
        correctAnswer: '먹습니다',
        explanation: '먹다 + 습니다 -> 먹습니다.'
    },
    {
        id: 9,
        type: 'fill-input',
        grammarPoint: '아/어요',
        question: '보다 -> ______ (Chia 아/어요)',
        correctAnswer: '봐요',
        explanation: '보다 + 아요 -> 봐요.'
    },
    {
        id: 10,
        type: 'fill-input',
        grammarPoint: '아/어요',
        question: '마시다 -> ______ (Chia 아/어요)',
        correctAnswer: '마셔요',
        explanation: '마시다 + 어요 -> 마셔요.'
    },
    {
        id: 11,
        type: 'fill-input',
        grammarPoint: 'Past Tense',
        question: '하다 (Hôm qua) -> ______ (Chia quá khứ)',
        correctAnswer: '했어요',
        explanation: '하다 -> 하 + 였어요 -> 했어요.'
    },

    // --- PART 3: TOPIK READING (Context) ---
    {
        id: 12,
        type: 'multiple-choice',
        grammarPoint: 'Time',
        question: '가: 언제 집에 가요?\n나: 5시______ 가요.',
        options: ['에', '에서', '부터', '까지'],
        correctAnswer: '에',
        explanation: 'Thời gian xác định (5 giờ) dùng trợ từ "에".'
    },
    {
        id: 13,
        type: 'multiple-choice',
        grammarPoint: 'Time (Exceptions)',
        question: '가: 내일 시간이 있어요?\n나: 네, ______ 만나요. (Chọn từ KHÔNG đi với 에)',
        options: ['내일', '주말에', '아침에', '오후에'],
        correctAnswer: '내일',
        explanation: '"내일" (Ngày mai) là trạng từ thời gian, không cần gắn "에" cũng được và thường đứng độc lập.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: 'Negation (An)',
        question: '가: 김치를 먹어요?\n나: 아니요, ______ 먹어요. (Tôi không ăn vì cay)',
        options: ['안', '못', '지', '않'],
        correctAnswer: '안',
        explanation: 'Phủ định ý chí/thói quen dùng "안".'
    },
    {
        id: 15,
        type: 'multiple-choice',
        grammarPoint: 'Negation (Mot)',
        question: '가: 수영을 해요?\n나: 아니요, ______ 해요. (Tôi không biết bơi)',
        options: ['못', '안', '않', '없'],
        correctAnswer: '못',
        explanation: 'Phủ định khả năng dùng "못".'
    },
    {
        id: 16,
        type: 'multiple-choice',
        grammarPoint: 'Honorifics',
        question: '가: 할아버지께서 지금 뭐 하세요?\n나: 할아버지께서 방에서 _______.',
        options: ['주무세요', '자요', '있어요', '먹어요'],
        correctAnswer: '주무세요',
        explanation: 'Chủ ngữ là "ông" (người lớn) -> dùng kính ngữ "주무시다" (ngủ).'
    },

    // --- PART 4: VOCABULARY & EXPRESSIONS ---
    {
        id: 17,
        type: 'fill-input',
        grammarPoint: 'Counters',
        question: '사과 한 ______ 주세요. (Đơn vị đếm trái cây/cái)',
        correctAnswer: '개',
        explanation: 'Đơn vị đếm chung cho đồ vật/trái cây là "개".'
    },
    {
        id: 18,
        type: 'fill-input',
        grammarPoint: 'Counters',
        question: '학생 두 ______ (Đơn vị đếm người)',
        correctAnswer: '명',
        explanation: 'Đơn vị đếm người là "명" (hoặc 분 cho kính trọng).'
    },
    {
        id: 19,
        type: 'multiple-choice',
        grammarPoint: 'Numbers',
        question: 'Bây giờ là 2 giờ. -> "지금 ______ 시예요."',
        options: ['두', '이', '둘', '니'],
        correctAnswer: '두',
        explanation: 'Giờ dùng số thuần Hàn: 2 là "둘", đứng trước đơn vị biến thành "두".'
    },

    // --- PART 5: CONNECTORS ---
    {
        id: 20,
        type: 'multiple-choice',
        grammarPoint: '-고 (And)',
        question: '가: 밥을 먹고 뭐 해요?\n나: 밥을 ______ 커피를 마셔요.',
        options: ['먹고', '먹어서', '먹지만', '먹는데'],
        correctAnswer: '먹고',
        explanation: 'Liệt kê trình tự: Ăn XONG RỒI uống -> -고.'
    },
    {
        id: 21,
        type: 'multiple-choice',
        grammarPoint: '-지만 (But)',
        question: '가: 한국어가 쉬워요?\n나: 아니요, ______ 재미있어요.',
        options: ['어렵지만', '어렵고', '어려서', '쉬워서'],
        correctAnswer: '어렵지만',
        explanation: '"Không dễ" (Khó) NHƯNG thú vị -> -지만.'
    },
    {
        id: 22,
        type: 'multiple-choice',
        grammarPoint: '-아서/어서 (Reason)',
        question: '가: 왜 병원에 갔어요?\n나: 배가 ______ 갔어요.',
        options: ['아파서', '아프고', '아프지만', '아픈데'],
        correctAnswer: '아파서',
        explanation: 'Hỏi lý do (Tại sao) -> Trả lời Vì (-아서/어서).'
    },

    // --- PART 6: HONORIFICS EXPANSION (NEW) ---
    {
        id: 23,
        type: 'multiple-choice',
        grammarPoint: 'Honorific Vocabulary (Eat)',
        question: 'ông đang dùng bữa. -> 가: 할아버지가 진지를 ______.',
        options: ['드세요', '먹어요', '계세요', '주무세요'],
        correctAnswer: '드세요',
        explanation: 'Kính ngữ của 먹다 (ăn) là 드시다 -> 드세요.'
    },
    {
        id: 24,
        type: 'multiple-choice',
        grammarPoint: 'Honorific Vocabulary (Exist)',
        question: 'Bố mẹ có ở nhà không? -> 가: 부모님이 댁에 ______?',
        options: ['계세요', '있어요', '없어요', '아니에요'],
        correctAnswer: '계세요',
        explanation: 'Kính ngữ của 있다 (ở) là 계시다 -> 계세요.'
    },
    {
        id: 25,
        type: 'multiple-choice',
        grammarPoint: 'Honorific Vocabulary (Speak)',
        question: 'Giám đốc đang nói chuyện. -> 가: 사장님이 ______.',
        options: ['말씀하세요', '말해요', '이야기해요', '떠들어요'],
        correctAnswer: '말씀하세요',
        explanation: 'Kính ngữ của 말하다 (nói) là 말씀하시다.'
    },
    {
        id: 26,
        type: 'fill-input',
        grammarPoint: 'Honorific Conjugation',
        question: '가다 (Kính ngữ) -> ______ (Chia 아/어요)',
        correctAnswer: '가세요',
        explanation: '가다 + (으)시 + 어요 -> 가시어요 -> 가세요.'
    },
    // Removed Q 27 ((으)십시오)
    {
        id: 27, // Renumbered from 28
        type: 'fill-input',
        grammarPoint: 'Honorific Conjugation',
        question: '읽다 (Kính ngữ) -> ______ (Chia 아/어요)',
        correctAnswer: '읽으세요',
        explanation: '읽다 + (으)시 + 어요 -> 읽으세요.'
    },
    {
        id: 28, // Renumbered from 29
        type: 'fill-input',
        grammarPoint: 'Honorific Marker',
        question: 'Điền tiểu từ kính ngữ chủ ngữ (thay cho 이/가): ______',
        correctAnswer: '께서',
        explanation: 'Tiểu từ kính ngữ chủ ngữ là 께서.'
    },
    {
        id: 29, // Renumbered from 30
        type: 'multiple-choice',
        grammarPoint: 'Honorific Object',
        question: 'Tôi biếu quà cho bà. -> "할머니______ 선물을 드렸어요."',
        options: ['께', '에게', '한테', '를'],
        correctAnswer: '께',
        explanation: 'Kính ngữ của 에게/한테 là 께.'
    },
    {
        id: 30, // Renumbered from 31
        type: 'multiple-choice',
        grammarPoint: 'Humble Verb (Give)',
        question: 'Tôi tặng hoa cho giáo viên. -> "선생님께 꽃을 ______."',
        options: ['드렸어요', '주었어요', '받았어요', '보내요'],
        correctAnswer: '드렸어요',
        explanation: 'Khiêm tốn ngữ của 주다 (cho) là 드리다.'
    },

    // --- PART 7: MIXED GRAMMAR ---
    {
        id: 31, // Renumbered from 32
        type: 'multiple-choice',
        grammarPoint: '-고 싶다',
        question: '가: 방학에 뭐 하고 싶어요?\n나: 여행을 ______.',
        options: ['가고 싶어요', '가요', '갑니다', '갔어요'],
        correctAnswer: '가고 싶어요',
        explanation: 'Hỏi muốn gì (-고 싶다) -> Trả lời muốn đi (가고 싶어요).'
    },
    // Removed Q 33 (-(으)세요 Imperative)
    {
        id: 32, // Renumbered from 34
        type: 'fill-input',
        grammarPoint: 'Future Tense',
        question: '가다 (Ngày mai) -> ______ (Sẽ đi)',
        correctAnswer: '갈 거예요',
        explanation: '가다 + ㄹ 거예요 -> 갈 거예요.'
    },
    {
        id: 33, // Renumbered from 35
        type: 'multiple-choice',
        grammarPoint: 'Irregular ㅂ',
        question: '날씨가 ______ ().',
        options: ['추워요', '춥어요', '추와요', '춥니다'],
        correctAnswer: '추워요',
        explanation: 'Bất quy tắc ㅂ: 춥다 -> 추우 + 어요 -> 추워요.'
    },
    {
        id: 34, // Renumbered from 36
        type: 'multiple-choice',
        grammarPoint: 'Irregular ㄷ',
        question: '음악을 ______ (듣다).',
        options: ['들어요', '듣어요', '드러요', '들읍니다'],
        correctAnswer: '들어요',
        explanation: 'Bất quy tắc ㄷ: 듣다 -> 들 + 어요 -> 들어요.'
    },
    {
        id: 35, // Renumbered from 37
        type: 'fill-input',
        grammarPoint: 'Irregular ㅡ',
        question: '예쁘다 -> ______ (Chia 아/어요)',
        correctAnswer: '예뻐요',
        explanation: 'Bất quy tắc ㅡ: 예쁘다 -> 예ㅃ + 어요 -> 예뻐요.'
    },
    {
        id: 36, // From 38: Modified as requested (Busan)
        type: 'multiple-choice',
        grammarPoint: '-(으)로 (Direction)',
        question: 'Tôi đi về phía Busan. -> "저는 부산______ 가요."',
        options: ['으로', '에', '에서', '을'],
        correctAnswer: '으로',
        explanation: '부산 (Busan) có patchim ㄴ -> dùng "으로" để chỉ hướng đến.'
    },
    {
        id: 37, // Renumbered from 39
        type: 'multiple-choice',
        grammarPoint: '-에게/한테',
        question: 'Em tặng hoa cho bạn gái. -> "여자친구______ 꽃을 줬어요."',
        options: ['한테', '에', '께', '을'],
        correctAnswer: '한테',
        explanation: 'Gửi cho đối tượng là người (bạn bè) -> dùng "한테" (hoặc "에게").'
    },
    // Removed Q 40 (-(으)면서)
    {
        id: 38, // Renumbered from 41
        type: 'multiple-choice',
        grammarPoint: '-만 (Only)',
        question: 'Tôi chỉ yêu em. -> "너______ 사랑해."',
        options: ['만', '도', '이', '가'],
        correctAnswer: '만',
        explanation: 'Chỉ duy nhất -> 만.'
    },
    {
        id: 39, // Renumbered from 42
        type: 'multiple-choice',
        grammarPoint: '-도 (Also)',
        question: 'Tôi là người Hàn. Bạn tôi ______ người Hàn.',
        options: ['도', '는', '만', '가'],
        correctAnswer: '도',
        explanation: 'Cũng vậy -> 도.'
    },
    {
        id: 40, // Renumbered from 43
        type: 'multiple-choice',
        grammarPoint: '-(으)ㄹ 수 있다',
        question: 'Tôi có thể nói tiếng Hàn. -> "한국어를 ______."',
        options: ['할 수 있어요', '해야 해요', '하고 싶어요', '하면 돼요'],
        correctAnswer: '할 수 있어요',
        explanation: 'Khả năng -> -(으)ㄹ 수 있다.'
    },
    {
        id: 41, // Renumbered from 44
        type: 'multiple-choice',
        grammarPoint: '-아/어야 하다',
        question: 'Tôi phải đi học. -> "학교에 ______."',
        options: ['가야 해요', '갈 수 있어요', '가고 싶어요', '가세요'],
        correctAnswer: '가야 해요',
        explanation: 'Bắt buộc/Nghĩa vụ -> -아/어야 하다.'
    },
    {
        id: 42, // Renumbered from 45
        type: 'fill-input',
        grammarPoint: 'Irregular ㄹ',
        question: '살다 (Sống) + ㅂ니다 -> ______',
        correctAnswer: '삽니다',
        explanation: 'Bất quy tắc ㄹ: Gặp ㄴ,ㅂ,ㅅ thì ㄹ biến mất. 살 + ㅂ니다 -> 삽니다.'
    },
    {
        id: 43, // Renumbered from 46
        type: 'fill-input',
        grammarPoint: 'Irregular ㄹ',
        question: '만들다 (Làm) + 세요 -> ______',
        correctAnswer: '만드세요',
        explanation: '만들다 + 세요 -> 만드세요.'
    },
    {
        id: 44, // Renumbered from 47
        type: 'fill-input',
        grammarPoint: 'Day of Week',
        question: 'Thứ 2 (Viết bằng tiếng Hàn) -> ______',
        correctAnswer: '월요일',
        explanation: 'Thứ 2 là 월요일.'
    },
    {
        id: 45, // Renumbered from 48
        type: 'fill-input',
        grammarPoint: 'Day of Week',
        question: 'Chủ nhật (Viết bằng tiếng Hàn) -> ______',
        correctAnswer: '일요일',
        explanation: 'Chủ nhật là 일요일.'
    },
    {
        id: 46, // Renumbered from 49
        type: 'fill-input',
        grammarPoint: 'Irregular ㅂ',
        question: '쉽다 (Dễ) -> ______ (Chia 아/어요)',
        correctAnswer: '쉬워요',
        explanation: '쉽다 -> 쉬우 + 어요 -> 쉬워요.'
    },
    {
        id: 47, // Renumbered from 50
        type: 'fill-input',
        grammarPoint: 'Irregular ㅂ',
        question: '어렵다 (Khó) -> ______ (Chia 아/어요)',
        correctAnswer: '어려워요',
        explanation: '어렵다 -> 어려우 + 어요 -> 어려워요.'
    },
    {
        id: 48, // Renumbered from 51
        type: 'multiple-choice',
        grammarPoint: 'TOPIK Reading (Conversation)',
        question: '가: 어디에 가요?\n나: ______',
        options: ['시장애 가요', '시장에 가요', '시장이 가요', '시장을 가요'],
        correctAnswer: '시장에 가요',
        explanation: 'Đi đến đâu dùng "에". Chữ "애" là sai chính tả.'
    },
    {
        id: 49, // Renumbered from 52
        type: 'multiple-choice',
        grammarPoint: 'TOPIK Reading (Conversation)',
        question: '가: 주말에 보통 뭐 해요?\n나: ______',
        options: ['집에서 쉬어요', '집에 쉬어요', '집이 쉬어요', '집을 쉬어요'],
        correctAnswer: '집에서 쉬어요',
        explanation: 'Nghỉ ngơi (hành động) tại nhà -> 집에서.'
    },
    {
        id: 50, // Renumbered from 53
        type: 'fill-input',
        grammarPoint: 'Pure Korean Number',
        question: '5 (Số thuần Hàn) -> ______ (Viết chữ, không viết số)',
        correctAnswer: '다섯',
        explanation: '5 là 다섯.'
    },
    {
        id: 51, // Renumbered from 54
        type: 'fill-input',
        grammarPoint: 'Sino Korean Number',
        question: '10 (Số Hán Hàn) -> ______ (Viết chữ)',
        correctAnswer: '십',
        explanation: '10 là 십.'
    },
    {
        id: 52, // Renumbered from 55
        type: 'multiple-choice',
        grammarPoint: 'Which country',
        question: '가: 어느 ______ 사람이에요?\n나: 베트남 사람이에요.',
        options: ['나라', '도시', '장소', '고향'],
        correctAnswer: '나라',
        explanation: 'Hỏi người nước nào -> 어느 나라.'
    },
    {
        id: 53, // Renumbered from 56
        type: 'fill-input',
        grammarPoint: 'Verb Conjugation',
        question: '공부하다 (Chia 아/어요) -> ______',
        correctAnswer: '공부해요',
        explanation: '공부하다 -> 공부해요.'
    },
    {
        id: 54, // Renumbered from 57
        type: 'fill-input',
        grammarPoint: 'Verb Conjugation',
        question: '일하다 (Chia 아/어요) -> ______',
        correctAnswer: '일해요',
        explanation: '일하다 -> 일해요.'
    },
    {
        id: 55, // Renumbered from 58
        type: 'multiple-choice',
        grammarPoint: 'Position',
        question: '책상 ______ 의자가 있어요. (Bên cạnh)',
        options: ['옆에', '앞에', '뒤에', '위에'],
        correctAnswer: '옆에',
        explanation: 'Bên cạnh là 옆.'
    },
    {
        id: 56, // Renumbered from 59
        type: 'multiple-choice',
        grammarPoint: 'Position',
        question: 'Gia đình tôi ở Việt Nam. -> "가족이 베트남______ 있어요."',
        options: ['에', '에서', '이', '가'],
        correctAnswer: '에',
        explanation: 'Chỉ sự tồn tại cư trú -> dùng 에.'
    },
    {
        id: 57, // Renumbered from 60
        type: 'fill-input',
        grammarPoint: 'Object Particle',
        question: 'Nước (물) + Uống (마시다) -> "물______ 마시다" (Điền tiểu từ)',
        correctAnswer: '을',
        explanation: '물 có patchim -> dùng 을.'
    },
    {
        id: 58, // Renumbered from 61
        type: 'fill-input',
        grammarPoint: 'Object Particle',
        question: 'Sữa (우유) + Mua (사다) -> "우유______ 사다" (Điền tiểu từ)',
        correctAnswer: '를',
        explanation: '우유 không patchim -> dùng 를.'
    },
    {
        id: 59, // Renumbered from 62
        type: 'fill-input',
        grammarPoint: 'Past Tense',
        question: '오다 (Đã đến) -> ______ (Chia quá khứ 아/어요)',
        correctAnswer: '왔어요',
        explanation: '오다 + 았어요 -> 왔어요.'
    }
];

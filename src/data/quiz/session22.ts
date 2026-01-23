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
    // === PART 1: HONORIFIC VERBS (12 questions) ===
    {
        id: 1,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - 먹다',
        question: '할머니께서 아침에 빵을 ______. (Bà ăn bánh mì buổi sáng)',
        options: ['먹으세요', '드세요', '잡수세요', '먹어요'],
        correctAnswer: '드세요',
        explanation: 'Kính ngữ của 먹다 là 드시다/잡수시다. "먹으세요" là SAI quy tắc. "잡수세요" đúng ngữ pháp nhưng quá trang trọng (thường dùng cho bữa cơm "진지"). Với món nhẹ như bánh mì, "드세요" tự nhiên nhất.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - 자다',
        question: '아버지께서 방에서 ______. (Bố đang ngủ trong phòng)',
        options: ['자세요', '주무세요', '주무시어요', '자으세요'],
        correctAnswer: '주무세요',
        explanation: 'Kính ngữ của 자다 là 주무시다 → 주무세요. "자세요" là SAI.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - 있다 (ở)',
        question: '선생님께서 지금 교실에 ______. (Cô giáo hiện đang ở lớp học)',
        options: ['있으세요', '계세요', '계시어요', '있어요'],
        correctAnswer: '계세요',
        explanation: '있다 (ở) → 계시다 → 계세요. "있으세요" dùng cho "có" (sở hữu), không phải "ở".'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - 말하다',
        question: '사장님께서 회의에서 ______. (Sếp đang phát biểu trong cuộc họp)',
        options: ['말하세요', '말씀하세요', '이야기하세요', '말해요'],
        correctAnswer: '말씀하세요',
        explanation: 'Kính ngữ của 말하다 là 말씀하시다 → 말씀하세요.'
    },
    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - 마시다',
        question: '할아버지께서 커피를 ______. (Ông uống cà phê)',
        options: ['마시세요', '드세요', '마셔요', '드시어요'],
        correctAnswer: '드세요',
        explanation: 'Kính ngữ của 마시다 cũng là 드시다 (giống 먹다) → 드세요.'
    },
    {
        id: 6,
        type: 'fill-input',
        grammarPoint: 'Kính ngữ - 먹다 trang trọng',
        question: '할아버지, 진지 ______ (Ông ơi, mời ông dùng cơm - dạng rất trang trọng)',
        correctAnswer: '잡수세요',
        explanation: '잡수시다 là dạng kính ngữ trang trọng hơn 드시다, chỉ dùng cho "ăn".'
    },
    {
        id: 7,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - Phân biệt 있다',
        question: '선생님, 질문이 ______? (Thầy có câu hỏi không?)',
        options: ['계세요', '있으세요', '계시어요', '있어요'],
        correctAnswer: '있으세요',
        explanation: '있다 (có - sở hữu) → 있으시다 → 있으세요. Dùng khi hỏi "có cái gì", không phải "ở đâu".'
    },
    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - 죽다',
        question: '할아버지께서 작년에 ______. (Ông mất năm ngoái)',
        options: ['죽으셨어요', '돌아가셨어요', '가셨어요', '없으셨어요'],
        correctAnswer: '돌아가셨어요',
        explanation: 'Kính ngữ của 죽다 là 돌아가시다. "죽으셨어요" là không lịch sự.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - 아프다',
        question: '어머니께서 요즘 ______. (Mẹ dạo này không khỏe)',
        options: ['아프세요', '편찮으세요', '아파세요', '아프시어요'],
        correctAnswer: '편찮으세요',
        explanation: 'Kính ngữ của 아프다 là 편찮으시다 → 편찮으세요.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - Động từ thường',
        question: '할머니께서 매일 신문을 ______. (Bà đọc báo mỗi ngày)',
        options: ['읽으세요', '보세요', '읽어요', '읽으시어요'],
        correctAnswer: '읽으세요',
        explanation: '읽다 không có dạng kính ngữ đặc biệt, chia theo quy tắc: 읽다 + 으시 + 어요 → 읽으세요.'
    },
    {
        id: 11,
        type: 'fill-input',
        grammarPoint: 'Kính ngữ - 가다',
        question: '아버지께서 회사에 ______ (Bố đi đến công ty + 아/어요)',
        correctAnswer: '가세요',
        explanation: '가다 + 시 + 어요 → 가시어요 → 가세요 (rút gọn).'
    },
    {
        id: 12,
        type: 'multiple-choice',
        grammarPoint: 'Kính ngữ - Mix',
        question: '선생님께서 숙제를 많이 ______? (Thầy cho nhiều bài tập à?)',
        options: ['주세요', '드세요', '주시어요', '주어요'],
        correctAnswer: '주세요',
        explanation: '주다 không có dạng kính ngữ đặc biệt → 주시다 → 주세요. "드세요" là kính ngữ của 먹다/마시다.'
    },

    // === PART 2: HONORIFIC CONJUGATION (10 questions) ===
    {
        id: 13,
        type: 'fill-input',
        grammarPoint: '(으)시 - ㄹ bất quy tắc',
        question: '할아버지께서 서울에 ______ (살다 - kính ngữ 아/어요)',
        correctAnswer: '사세요',
        explanation: '살다: ㄹ rụng → 사 + 시 + 어요 → 사세요.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: '(으)시 - ㅂ bất quy tắc',
        question: '할머니께서 날씨가 ______? (Bà có thấy lạnh không?)',
        options: ['춥으세요', '추우세요', '추세요', '춥세요'],
        correctAnswer: '추우세요',
        explanation: 'ㅂ bất quy tắc: 춥다 → 추우 + 시 + 어요 → 추우세요.'
    },
    {
        id: 15,
        type: 'multiple-choice',
        grammarPoint: '(으)시 - ㄷ bất quy tắc',
        question: '아버지께서 음악을 ______. (Bố nghe nhạc)',
        options: ['듣으세요', '들으세요', '들으시어요', '들어세요'],
        correctAnswer: '들으세요',
        explanation: 'ㄷ bất quy tắc: 듣다 → 들 + 으시 + 어요 → 들으세요.'
    },
    {
        id: 16,
        type: 'fill-input',
        grammarPoint: '(으)시 - 하다',
        question: '선생님께서 운동을 ______ (하다 - kính ngữ 아/어요)',
        correctAnswer: '하세요',
        explanation: '하다 + 시 + 어요 → 하세요.'
    },
    {
        id: 17,
        type: 'multiple-choice',
        grammarPoint: '(으)시 - Quá khứ',
        question: '할머니께서 어제 편지를 ______. (Bà đã viết thư hôm qua)',
        options: ['쓰세요', '쓰셨어요', '쓰으셨어요', '쓰시었어요'],
        correctAnswer: '쓰셨어요',
        explanation: '쓰다 + 시 + 었어요 → 쓰셨어요.'
    },
    {
        id: 18,
        type: 'multiple-choice',
        grammarPoint: '(으)시 - Ngoại lệ ㄷ',
        question: '할아버지께서 선물을 ______. (Ông nhận quà)',
        options: ['받으세요', '받세요', '받아세요', '받으시어요'],
        correctAnswer: '받으세요',
        explanation: '받다 GIỮ NGUYÊN ㄷ (không bất quy tắc) → 받으시다 → 받으세요.'
    },
    {
        id: 19,
        type: 'fill-input',
        grammarPoint: '(으)시 - 만들다',
        question: '할머니께서 떡을 ______ (만들다 - kính ngữ 아/어요)',
        correctAnswer: '만드세요',
        explanation: '만들다: ㄹ rụng → 만드 + 시 + 어요 → 만드세요.'
    },
    {
        id: 20,
        type: 'multiple-choice',
        grammarPoint: '(으)시 - 입다',
        question: '어머니께서 한복을 ______. (Mẹ mặc hanbok)',
        options: ['입으세요', '입세요', '입어세요', '입으시어요'],
        correctAnswer: '입으세요',
        explanation: '입다 có 받침 ㅂ → 입으시다 → 입으세요.'
    },
    {
        id: 21,
        type: 'multiple-choice',
        grammarPoint: '(으)시 - 어렵다',
        question: '아버지, 일이 ______? (Bố thấy công việc khó không?)',
        options: ['어렵세요', '어려우세요', '어렵으세요', '어려워세요'],
        correctAnswer: '어려우세요',
        explanation: 'ㅂ bất quy tắc: 어렵다 → 어려우 + 시 + 어요 → 어려우세요.'
    },
    {
        id: 22,
        type: 'fill-input',
        grammarPoint: '(으)시 - 웃다',
        question: '할아버지께서 자주 ______ (웃다 - kính ngữ 아/어요)',
        correctAnswer: '웃으세요',
        explanation: '웃다 GIỮ NGUYÊN ㄷ → 웃으시다 → 웃으세요.'
    },

    // === PART 3: PARTICLES 께/에게/한테 (8 questions) ===
    {
        id: 23,
        type: 'multiple-choice',
        grammarPoint: '께 vs 에게',
        question: '선생님______ 꽃을 드렸어요. (Tôi tặng hoa cho cô giáo)',
        options: ['께', '에게', '한테', '께서'],
        correctAnswer: '께',
        explanation: 'Người lớn tuổi/cấp trên → dùng 께. "께서" là chủ ngữ kính ngữ, ở đây cần tân ngữ.'
    },
    {
        id: 24,
        type: 'multiple-choice',
        grammarPoint: '께 vs 한테',
        question: '친구______ 선물을 줬어요. (Tôi tặng quà cho bạn)',
        options: ['께', '한테', '께서', '에'],
        correctAnswer: '한테',
        explanation: 'Bạn bè (ngang hàng) → dùng 한테 hoặc 에게. KHÔNG dùng 께.'
    },
    {
        id: 25,
        type: 'multiple-choice',
        grammarPoint: '께서 vs 께',
        question: '할머니______ 진지를 드세요. (Bà dùng cơm)',
        options: ['께서', '께', '에게', '한테'],
        correctAnswer: '께서',
        explanation: 'Chủ ngữ kính ngữ (người LÀM hành động) → dùng 께서.'
    },
    {
        id: 26,
        type: 'fill-input',
        grammarPoint: '께 + 드리다',
        question: '아버지______ 편지를 드렸어요. (Tôi gửi thư cho bố - điền trợ từ)',
        correctAnswer: '께',
        explanation: '아버지 là người lớn → dùng 께 (tân ngữ kính ngữ).'
    },
    {
        id: 27,
        type: 'multiple-choice',
        grammarPoint: '께 với 여쭙다',
        question: '사장님______ 질문을 여쭤봤어요. (Tôi đã hỏi sếp)',
        options: ['께', '에게', '한테', '께서'],
        correctAnswer: '께',
        explanation: '여쭙다 (hỏi - kính ngữ) → phải dùng với 께.'
    },
    {
        id: 28,
        type: 'multiple-choice',
        grammarPoint: '께 vs 에게 - Context',
        question: '동생______ 돈을 줬어요. (Tôi cho em tiền)',
        options: ['에게', '께', '께서', '으로'],
        correctAnswer: '에게',
        explanation: 'Em (người nhỏ tuổi hơn) → dùng 에게. KHÔNG dùng 께.'
    },
    {
        id: 29,
        type: 'multiple-choice',
        grammarPoint: '께 + 감사하다',
        question: '선생님______ 감사드립니다. (Cảm ơn thầy)',
        options: ['께', '에게', '한테', '께서'],
        correctAnswer: '께',
        explanation: 'Bày tỏ lòng biết ơn với người lớn → 께.'
    },
    {
        id: 30,
        type: 'fill-input',
        grammarPoint: '께서 - Subject',
        question: '할아버지______ 신문을 읽으세요. (Ông đọc báo - điền trợ từ chủ ngữ)',
        correctAnswer: '께서',
        explanation: 'Chủ ngữ kính ngữ → 께서 (không phải 께).'
    },

    // === PART 4: 밖에 + NEGATION (6 questions) ===
    {
        id: 31,
        type: 'multiple-choice',
        grammarPoint: '밖에 + Negation',
        question: '냉장고에 물______ 없어요. (Trong tủ lạnh chỉ có nước)',
        options: ['밖에', '만', '도', '이'],
        correctAnswer: '밖에',
        explanation: '밖에 + phủ định (없어요) = chỉ có.'
    },
    {
        id: 32,
        type: 'multiple-choice',
        grammarPoint: '밖에 vs 만',
        question: '돈이 천 원______ 있어요. (Tôi chỉ có 1000 won - câu khẳng định)',
        options: ['만', '밖에', '도', '를'],
        correctAnswer: '만',
        explanation: 'Câu khẳng định → dùng 만. "밖에" phải đi với phủ định.'
    },
    {
        id: 33,
        type: 'multiple-choice',
        grammarPoint: '밖에 - Wrong combination',
        question: 'Câu nào ĐÚNG?',
        options: ['시간이 10분밖에 안 남았어요', '시간이 10분밖에 남았어요', '시간이 10분만 안 남았어요', '시간이 10분도 남았어요'],
        correctAnswer: '시간이 10분밖에 안 남았어요',
        explanation: '밖에 BẮT BUỘC phải đi với phủ định (안 남았어요).'
    },
    {
        id: 34,
        type: 'fill-input',
        grammarPoint: '밖에 + 못',
        question: '한국어를 조금______ 못해요. (Tôi chỉ nói được ít tiếng Hàn - điền trợ từ)',
        correctAnswer: '밖에',
        explanation: '밖에 + 못해요 (phủ định năng lực) = chỉ... một chút.'
    },
    {
        id: 35,
        type: 'multiple-choice',
        grammarPoint: '밖에 - Context',
        question: '교실에 학생이 세 명______ 없어요. (Trong lớp chỉ có 3 học sinh)',
        options: ['밖에', '만', '도', '나'],
        correctAnswer: '밖에',
        explanation: '밖에 + 없어요 → nhấn mạnh số lượng ít.'
    },
    {
        id: 36,
        type: 'multiple-choice',
        grammarPoint: '밖에 vs 만 - Nuance',
        question: 'Câu nào thể hiện sự TIẾC NUỐI hơn?',
        options: ['돈이 천 원밖에 없어요', '돈이 천 원만 있어요', '돈이 천 원도 있어요', '돈이 천 원이 있어요'],
        correctAnswer: '돈이 천 원밖에 없어요',
        explanation: '밖에 mang sắc thái tiêu cực/tiếc nuối hơn 만.'
    },

    // === PART 5: -지 말다 PROHIBITION (8 questions) ===
    {
        id: 37,
        type: 'multiple-choice',
        grammarPoint: '-지 말다 - Basic',
        question: '여기서 담배를 ______. (Đừng hút thuốc ở đây)',
        options: ['피우지 마세요', '피우지 못해요', '안 피워요', '피우지 않아요'],
        correctAnswer: '피우지 마세요',
        explanation: 'Cấm chỉ → dùng -지 마세요. "못해요/안" là phủ định thông thường.'
    },
    {
        id: 38,
        type: 'multiple-choice',
        grammarPoint: '-지 말다 - Honorific',
        question: '선생님, 걱정하지 ______. (Thầy đừng lo lắng - lịch sự)',
        options: ['말아 주세요', '마세요', '말고', '마'],
        correctAnswer: '말아 주세요',
        explanation: 'Với người lớn tuổi, nên dùng -지 말아 주세요 để lịch sự hơn.'
    },
    {
        id: 39,
        type: 'fill-input',
        grammarPoint: '-지 말다 - Conjugation',
        question: '수업 시간에 떠들지 ______. (Đừng ồn ào trong giờ học - lịch sự)',
        correctAnswer: '마세요',
        explanation: '떠들다 + -지 마세요 → 떠들지 마세요.'
    },
    {
        id: 40,
        type: 'multiple-choice',
        grammarPoint: '-지 말고',
        question: '게임하지 ______ 공부하세요. (Đừng chơi game mà hãy học)',
        options: ['말고', '마세요', '말아요', '마'],
        correctAnswer: '말고',
        explanation: '-지 말고 = Đừng... mà hãy... (nối 2 động từ).'
    },
    {
        id: 41,
        type: 'multiple-choice',
        grammarPoint: '-지 말다 - NOT with adjective',
        question: 'Câu nào SAI?',
        options: ['슬프지 마세요', '걱정하지 마세요', '먹지 마세요', '가지 마세요'],
        correctAnswer: '슬프지 마세요',
        explanation: '-지 말다 CHỈ dùng với ĐỘNG TỪ. "슬프다" là TÍNH TỪ nên không đi cùng -지 마세요 được. Muốn dùng phải chuyển thành động từ "슬퍼하지 마세요".'
    },
    {
        id: 42,
        type: 'multiple-choice',
        grammarPoint: '-지 말다 vs 안',
        question: '약을 ______. (Đừng uống thuốc)',
        options: ['먹지 마세요', '안 먹어요', '먹지 않아요', '먹지 못해요'],
        correctAnswer: '먹지 마세요',
        explanation: 'Cấm chỉ/mệnh lệnh → -지 마세요. "안 먹어요" là trần thuật.'
    },
    {
        id: 43,
        type: 'fill-input',
        grammarPoint: '-지 말다 - 반말',
        question: '늦지 ______! (Đừng trễ!)',
        correctAnswer: '마세요',
        explanation: '-지 마 là dạng 반말 của -지 마세요.'
    },
    {
        id: 44,
        type: 'multiple-choice',
        grammarPoint: '-지 말다 - Sign',
        question: 'Biển báo "Cấm đỗ xe" - hình thái nào phù hợp nhất?',
        options: ['주차하지 마십시오', '주차하지 마세요', '주차하지 마', '주차하지 말아요'],
        correctAnswer: '주차하지 마십시오',
        explanation: 'Biển báo chính thức → dùng -지 마십시오 (trang trọng).'
    },

    // === PART 6: -고 SEQUENTIAL & SIMULTANEOUS (8 questions) ===
    {
        id: 45,
        type: 'multiple-choice',
        grammarPoint: '-고 Sequential',
        question: '아침에 세수하______ 밥을 먹어요. (Sáng rửa mặt rồi ăn cơm)',
        options: ['고', '서', '지만', '면'],
        correctAnswer: '고',
        explanation: 'Hành động tuần tự (rửa mặt XONG → ăn cơm) → -고.'
    },
    {
        id: 46,
        type: 'multiple-choice',
        grammarPoint: '-고 Simultaneous',
        question: '이 방은 넓______ 깨끗해요. (Căn phòng này rộng VÀ sạch)',
        options: ['고', '서', '지만', '면'],
        correctAnswer: '고',
        explanation: 'Liệt kê 2 tính chất cùng tồn tại → -고.'
    },
    {
        id: 47,
        type: 'multiple-choice',
        grammarPoint: '-고 vs -아/어서',
        question: '비가 와______ 우산을 샀어요. (Trời mưa NÊN tôi mua ô)',
        options: ['서', '고', '지만', '면'],
        correctAnswer: '서',
        explanation: 'Lý do (vì mưa) → dùng -아/어서, KHÔNG dùng -고.'
    },
    {
        id: 48,
        type: 'fill-input',
        grammarPoint: '-고 - Sequential verbs',
        question: '숙제를 하______ 자요. (Làm bài tập rồi ngủ)',
        correctAnswer: '고',
        explanation: 'Làm BT XONG → Ngủ = tuần tự → -고.'
    },
    {
        id: 49,
        type: 'multiple-choice',
        grammarPoint: '-고 - Adjectives',
        question: '선생님은 친절하______ 재미있어요. (Cô giáo tử tế VÀ vui tính)',
        options: ['고', '서', '지만', '면'],
        correctAnswer: '고',
        explanation: 'Nối 2 tính từ mô tả tính cách → -고.'
    },
    {
        id: 50,
        type: 'multiple-choice',
        grammarPoint: '-고 - Multiple actions',
        question: '아침에 일어나______ 운동하______ 샤워해요.',
        options: ['고, 고', '서, 서', '고, 서', '서, 고'],
        correctAnswer: '고, 고',
        explanation: 'Nhiều hành động liên tiếp → dùng -고 liên tục.'
    },
    {
        id: 51,
        type: 'multiple-choice',
        grammarPoint: '-고 vs -지만',
        question: '날씨가 춥______ 눈이 와요. (Trời lạnh VÀ có tuyết rơi)',
        options: ['고', '지만', '서', '면'],
        correctAnswer: '고',
        explanation: 'Liệt kê 2 hiện tượng cùng xảy ra → -고. "-지만" là dùng cho đối lập.'
    },
    {
        id: 52,
        type: 'fill-input',
        grammarPoint: '-고 - Eating',
        question: '친구를 만나______ 밥을 먹었어요. (Gặp bạn rồi ăn cơm)',
        correctAnswer: '고',
        explanation: 'Gặp XONG → Ăn cơm = -고 (sequential).'
    },

    // === PART 7: MIXED GRAMMAR DISTRACTORS (8 questions) ===
    {
        id: 53,
        type: 'multiple-choice',
        grammarPoint: 'Mix - Honorific + Particle',
        question: '할머니______ 집에 ______. (Bà ở nhà)',
        options: ['께서, 계세요', '께, 있으세요', '께서, 있으세요', '께, 계세요'],
        correctAnswer: '께서, 계세요',
        explanation: 'Chủ ngữ kính ngữ 께서 + 있다 (ở) → 계시다 → 계세요.'
    },
    {
        id: 54,
        type: 'multiple-choice',
        grammarPoint: 'Mix - 아니다',
        question: '이분은 제 선생님이 ______. (Vị này không phải giáo viên của tôi)',
        options: ['아니에요', '아니세요', '없어요', '안 이에요'],
        correctAnswer: '아니세요',
        explanation: 'Chủ ngữ là "이분" (Vị này - Kính ngữ cao) nên đuôi câu cũng phải chia kính ngữ tương ứng: 아니다 + (으)시다 → 아니시다 → 아니세요. "아니에요" đúng ngữ pháp cơ bản nhưng không hợp với "이분".'
    },
    {
        id: 55,
        type: 'multiple-choice',
        grammarPoint: 'Mix - 에 vs 에서',
        question: '도서관______ 공부해요. (Học ở thư viện - hành động)',
        options: ['에서', '에', '으로', '이'],
        correctAnswer: '에서',
        explanation: 'Thực hiện hành động (학습) tại địa điểm → 에서.'
    },
    {
        id: 56,
        type: 'multiple-choice',
        grammarPoint: 'Mix - 에 vs 에서 (2)',
        question: '할머니께서 서울______ 사세요. (Bà sống ở Seoul)',
        options: ['에', '에서', '으로', '이'],
        correctAnswer: '에',
        explanation: 'Sống/Cư trú tại (살다) → dùng 에.'
    },
    {
        id: 57,
        type: 'multiple-choice',
        grammarPoint: 'Mix - Honorific context',
        question: '아버지께서 커피를 ______ 신문을 ______. (Bố uống cà phê và đọc báo)',
        options: ['드시고, 읽으세요', '마시고, 읽으세요', '드시고, 읽어요', '마시세요, 읽으세요'],
        correctAnswer: '드시고, 읽으세요',
        explanation: '마시다 → 드시다, -고 nối 2 hành động, 읽다 → 읽으시다 → 읽으세요.'
    },
    {
        id: 58,
        type: 'multiple-choice',
        grammarPoint: 'Mix - Prohibition + Honorific',
        question: '할아버지, 담배를 ______. (Ông đừng hút thuốc)',
        options: ['피우지 말아 주세요', '피우지 마세요', '안 피우세요', '피우세요'],
        correctAnswer: '피우지 말아 주세요',
        explanation: 'Cả 2 đều đúng ngữ pháp. Nhưng với người lớn, "-지 말아 주세요" (xin đừng...) mang sắc thái cầu khẩn, mềm mỏng hơn. "-지 마세요" đôi khi mang sắc thái ra lệnh hoặc quy định cứng nhắc.'
    },
    {
        id: 59,
        type: 'multiple-choice',
        grammarPoint: 'Mix - All grammar',
        question: 'Câu nào ĐÚNG HOÀN TOÀN về ngữ pháp kính ngữ?',
        options: [
            '할머니께서 밥을 드시고 주무세요',
            '할머니께 밥을 먹으시고 자세요',
            '할머니께서 밥을 먹으세요',
            '할머니께 밥을 드시고 주무세요'
        ],
        correctAnswer: '할머니께서 밥을 드시고 주무세요',
        explanation: '께서 (chủ ngữ), 먹다→드시다, -고 (tuần tự), 자다→주무시다. Tất cả đúng kính ngữ.'
    }
];

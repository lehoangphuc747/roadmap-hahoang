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
    // ===== PHAN A: -GO ITDA (15 CAU) =====
    {
        id: 1,
        type: 'multiple-choice',
        grammarPoint: '-고 있다',
        question: '지금 민수는 물을 마셔요. Cau tu nhien nhat la gi?',
        options: ['지금 민수는 물을 마시고 있어요.', '지금 민수는 물을 마셔 있어요.', '지금 민수는 물을 마시어 있어요.', '지금 민수는 물을 마시어요.'],
        correctAnswer: '지금 민수는 물을 마시고 있어요.',
        explanation: 'Hanh dong dang xay ra ngay luc noi thi dung -고 있다.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: 'Meaning 1 vs Meaning 2 (-고 있다)',
        question: '수지는 지금 밥을 먹고 있어요. Cau nay thuoc nghia nao?',
        options: ['Nghia 1: hanh dong dang dien ra', 'Nghia 2: trang thai ket qua duy tri', 'Nghia 3: menh lenh', 'Nghia 4: qua khu'],
        correctAnswer: 'Nghia 1: hanh dong dang dien ra',
        explanation: 'Co 지금 va dong tu hanh dong nen la nghia 1.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: 'Meaning 1 vs Meaning 2 (-고 있다)',
        question: '수지는 모자를 쓰고 있어요. Cau nay thuoc nghia nao?',
        options: ['Nghia 1: hanh dong dang dien ra', 'Nghia 2: trang thai ket qua duy tri', 'Nghia 3: phu dinh', 'Nghia 4: de nghi'],
        correctAnswer: 'Nghia 2: trang thai ket qua duy tri',
        explanation: 'Voi 쓰다, cau nay thuong hieu la trang thai dang doi mu.'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: 'Meaning 1 vs Meaning 2 (-고 있다)',
        question: '저는 그 비밀번호를 알고 있어요. Cau nay thuoc nghia nao?',
        options: ['Nghia 1: hanh dong dang dien ra', 'Nghia 2: trang thai ket qua duy tri', 'Nghia 3: qua khu', 'Nghia 4: menh lenh'],
        correctAnswer: 'Nghia 2: trang thai ket qua duy tri',
        explanation: '알다 + -고 있다 dien ta trang thai dang biet.'
    },
    {
        id: 5,
        type: 'fill-input',
        grammarPoint: '-고 있다',
        question: '가: 지금 뭐 해요? 나: 책을 ____. (읽다)',
        correctAnswer: '읽고 있어요',
        explanation: '읽다 -> 읽고 있어요.'
    },
    {
        id: 6,
        type: 'fill-input',
        grammarPoint: '-고 있다',
        question: '가: 왜 전화를 안 받았어요? 나: 지갑을 ____. (찾다)',
        correctAnswer: '찾고 있어요',
        explanation: '찾다 -> 찾고 있어요.'
    },
    {
        id: 7,
        type: 'fill-input',
        grammarPoint: '-고 있다',
        question: '요즘 한국어를 열심히 ____. (공부하다)',
        correctAnswer: '공부하고 있어요',
        explanation: '요즘 + -고 있다: hanh dong lap lai trong giai doan nay.'
    },
    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: '-고 있다 (Phu dinh)',
        question: '지금 비가 안 와요. Chon dang viet dung.',
        options: ['지금 비가 오고 있지 않아요.', '지금 비가 오고 없어요.', '지금 비가 오고 안 있어요.', '지금 비가 오어 있지 않아요.'],
        correctAnswer: '지금 비가 오고 있지 않아요.',
        explanation: 'Phu dinh dung: -고 있지 않다.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: '-고 계시다',
        question: 'Kinh ngu cua cau nay: 할아버지께서 신문을 ____.',
        options: ['보고 계세요', '보고 있으세요', '보시고 있어요', '보고 있지요'],
        correctAnswer: '보고 계세요',
        explanation: 'Khi nang cao chu the, dung -고 계시다.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: '-고 있었다',
        question: '어제 도서관에서 나왔을 때 눈이 ____.',
        options: ['내리고 있었어요', '내렸고 있었어요', '내리었어요', '내리겠어요'],
        correctAnswer: '내리고 있었어요',
        explanation: 'Qua khu tien hanh: -고 있었다.'
    },
    {
        id: 11,
        type: 'fill-input',
        grammarPoint: 'True/False + Sua loi (-고 있다)',
        question: 'Cau sau sai. Hay viet lai cho dung: 날씨가 춥고 있어요.',
        correctAnswer: '날씨가 추워요.',
        explanation: '-고 있다 khong dung voi tinh tu trong cau nay.'
    },
    {
        id: 12,
        type: 'fill-input',
        grammarPoint: 'True/False + Sua loi (-고 있다)',
        question: 'Cau sau sai. Hay viet lai cho dung: 할아버지께서 신문을 보고 있으세요.',
        correctAnswer: '할아버지께서 신문을 보고 계세요.',
        explanation: 'Kinh ngu dung la -고 계시다.'
    },
    {
        id: 13,
        type: 'fill-input',
        grammarPoint: 'True/False + Sua loi (-고 있다)',
        question: 'Cau sau sai. Hay viet lai cho dung: 눈이 내렸고 있었어요.',
        correctAnswer: '눈이 내리고 있었어요.',
        explanation: 'Qua khu dat sau 있: -고 있었다.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: '-고 있다',
        question: '수지는 빨간 모자를 ____.',
        options: ['쓰고 있어요.', '써 있어요.', '쓰어 있어요.', '썼어요.'],
        correctAnswer: '쓰고 있어요.',
        explanation: 'Voi 쓰다, dang tu nhien de mo ta trang thai la -고 있다.'
    },
    {
        id: 15,
        type: 'fill-input',
        grammarPoint: '-고 있다',
        question: '저는 친구의 말을 ____. (믿다)',
        correctAnswer: '믿고 있어요',
        explanation: '믿다 + -고 있다: trang thai dang tin.'
    },

    // ===== PHAN B: -A/EO ITDA (15 CAU) =====
    {
        id: 16,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: '지수는 의자에 ____.',
        options: ['앉아 있어요.', '앉고 있어요.', '앉아요.', '앉었어요.'],
        correctAnswer: '앉아 있어요.',
        explanation: '앉다 -> 앉아 있다 de ta trang thai ngoi.'
    },
    {
        id: 17,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: '선생님은 교실 앞에 ____.',
        options: ['서 있어요.', '서고 있어요.', '서어요.', '섰어요.'],
        correctAnswer: '서 있어요.',
        explanation: '서 있다 dien ta trang thai dang dung.'
    },
    {
        id: 18,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: '아기는 침대에 ____.',
        options: ['누워 있어요.', '눕고 있어요.', '누워요.', '누웠어요.'],
        correctAnswer: '누워 있어요.',
        explanation: '누워 있다 dien ta trang thai dang nam.'
    },
    {
        id: 19,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: '교실에 학생이 두 명만 ____.',
        options: ['남아 있어요.', '남고 있어요.', '남아요.', '남았어요.'],
        correctAnswer: '남아 있어요.',
        explanation: '남다 -> 남아 있다: con o lai.'
    },
    {
        id: 20,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: '동생은 지금 집에 ____.',
        options: ['가 있어요.', '가고 있어요.', '가요.', '갔어요.'],
        correctAnswer: '가 있어요.',
        explanation: 'Trong bai nay, 가 있다 duoc dung de nhan manh trang thai dang o nha.'
    },
    {
        id: 21,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: '친구는 벌써 학교에 ____.',
        options: ['와 있어요.', '오고 있어요.', '와요.', '왔어요.'],
        correctAnswer: '와 있어요.',
        explanation: '와 있다 nhan manh trang thai da den va dang o do.'
    },
    {
        id: 22,
        type: 'fill-input',
        grammarPoint: '-아/어 있다',
        question: '학생들이 운동장에 ____. (서다)',
        correctAnswer: '서 있어요',
        explanation: '서다 -> 서 있어요.'
    },
    {
        id: 23,
        type: 'fill-input',
        grammarPoint: '-아/어 있다',
        question: '아기가 침대에 ____. (눕다)',
        correctAnswer: '누워 있어요',
        explanation: '눕다 -> 누워 있어요.'
    },
    {
        id: 24,
        type: 'fill-input',
        grammarPoint: '-아/어 있다',
        question: '교실에 두 명만 ____. (남다)',
        correctAnswer: '남아 있어요',
        explanation: '남다 -> 남아 있어요.'
    },
    {
        id: 25,
        type: 'fill-input',
        grammarPoint: '-아/어 있다',
        question: '민수는 집에 ____. (가다)',
        correctAnswer: '가 있어요',
        explanation: '가다 -> 가 있어요.'
    },
    {
        id: 26,
        type: 'fill-input',
        grammarPoint: 'True/False + Sua loi (-아/어 있다)',
        question: 'Cau sau sai. Hay viet lai cho dung: 지금 영수는 의자에 앉고 있어요. (trang thai)',
        correctAnswer: '지금 영수는 의자에 앉아 있어요.',
        explanation: 'Mo ta trang thai thi dung 앉아 있다.'
    },
    {
        id: 27,
        type: 'fill-input',
        grammarPoint: 'True/False + Sua loi (-아/어 있다)',
        question: 'Cau sau sai. Hay viet lai cho dung: 아기는 침대에 눕고 있어요. (trang thai)',
        correctAnswer: '아기는 침대에 누워 있어요.',
        explanation: 'Mo ta trang thai thi dung 누워 있다.'
    },
    {
        id: 28,
        type: 'fill-input',
        grammarPoint: 'True/False + Sua loi (-아/어 있다)',
        question: 'Cau sau sai. Hay viet lai cho dung: 교실에 학생이 남고 있어요.',
        correctAnswer: '교실에 학생이 남아 있어요.',
        explanation: '남다 -> 남아 있다.'
    },
    {
        id: 29,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다 vs -고 있다',
        question: 'Trang thai tu the: 학생들은 줄에 ____.',
        options: ['서 있어요.', '서고 있어요.', '서어요.', '섰어요.'],
        correctAnswer: '서 있어요.',
        explanation: 'Voi tu the dang duy tri, uu tien -아/어 있다.'
    },
    {
        id: 30,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: 'Cau nao dung trong ngu canh "Ban da den truoc va dang o truong"?',
        options: ['저는 학교에 와 있어요.', '저는 학교에 오고 있어요.', '저는 학교에 와요.', '저는 학교에 왔고 있어요.'],
        correctAnswer: '저는 학교에 와 있어요.',
        explanation: 'Da den truoc va dang o do thi dung 와 있어요.'
    }
];

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
        grammarPoint: 'V-는 김에',
        question: '가 : 이거 못 보던 시계인데 새로 샀어요?\n나 : 아니요. 고장 나서 (       ) 시곗줄을 바꾼 거예요.',
        translationVi: 'A: Cái đồng hồ này lạ quá, bạn mới mua à?\nB: Không. Nó bị hỏng nên nhân tiện đi sửa tôi đã thay dây luôn.',
        options: ['수리하자마자', '수리하다시피', '수리하는 김에', '수리한 나머지'],
        correctAnswer: '수리하는 김에',
        explanation: '### ✅ Đáp án đúng\n\n**수리하는 김에** — 🎯 `V-는 김에`: nhân tiện làm việc này thì làm luôn việc khác\n\n⚡ **Hiểu nhanh:** "nhân tiện" → nhân tiện sửa thì thay dây luôn.\n\n---\n\n### ❌ Các đáp án sai\n\n- **수리하자마자:** nối tiếp tức thì → sai.\n- **수리하다시피:** gần như → sai.\n- **수리한 나머지:** nguyên nhân tiêu cực → sai.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)려던 참이다',
        question: '가 : 지금 축구 결승전 중계하는데 텔레비전 안 보고 뭐 해요?\n나 : 그렇지 않아도 막 (       ).',
        translationVi: 'A: Đang truyền hình trực tiếp trận chung kết bóng đá mà sao không xem TV?\nB: Tôi cũng đang định xem đây, vừa đúng lúc định bật lên.',
        options: ['보곤 했어요', '보고 말았어요', '볼 모양이었어요', '보려던 참이었어요'],
        correctAnswer: '보려던 참이었어요',
        explanation: '### ✅ Đáp án đúng\n\n**보려던 참이었어요** — ⏰ `V-(으)려던 참이다`: ý định vừa mới sắp sửa thực hiện\n\n⚡ **Hiểu nhanh:** "vừa định" → vừa đúng lúc đang định bật TV.\n\n---\n\n### ❌ Các đáp án sai\n\n- **보곤 했어요:** thói quen → sai.\n- **보고 말았어요:** kết quả không mong muốn → sai.\n- **볼 모양이었어요:** phỏng đoán về ý định quá khứ → sai.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: 'V-기로 하다',
        question: '가 : 이번 휴가에는 뭐 할 거예요?\n나 : 저는 친구들하고 제주도에 놀러 (       ).',
        translationVi: 'A: Kỳ nghỉ lần này bạn sẽ làm gì?\nB: Tôi đã quyết định sẽ đi chơi đảo Jeju cùng với bạn bè.',
        options: ['가는군요', '가나 봐요', '갈 만해요', '가기로 했어요'],
        correctAnswer: '가기로 했어요',
        explanation: '### ✅ Đáp án đúng\n\n**가기로 했어요** — ✅ `V-기로 하다`: quyết định, kế hoạch đã được đưa ra\n\n⚡ **Hiểu nhanh:** "đã quyết định" → thông báo kế hoạch: sẽ đi đảo Jeju.\n\n---\n\n### ❌ Các đáp án sai\n\n- **가는군요:** nhận ra → sai.\n- **가나 봐요:** phỏng đoán → sai.\n- **갈 만해요:** đáng để đi → sai.'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: 'V-기는요',
        question: '가 : 피아노를 정말 잘 치시네요.\n나 : 잘 (       ). 어렸을 때 아주 잠깐 배운 거예요.',
        translationVi: 'A: Bạn chơi piano giỏi thật đấy.\nB: Giỏi gì đâu ạ. Tôi chỉ học một chút xíu hồi nhỏ thôi.',
        options: ['치기는요', '치거든요', '치는데요', '쳐야지요'],
        correctAnswer: '치기는요',
        explanation: '### ✅ Đáp án đúng\n\n**치기는요** — 🙏 `V/A-기는요`: phủ định khiêm tốn lời khen "...gì đâu mà"\n\n⚡ **Hiểu nhanh:** "giỏi gì đâu" → khiêm tốn phủ nhận.\n\n---\n\n### ❌ Các đáp án sai\n\n- **치거든요:** giải thích lý do → sai.\n- **치는데요:** thông tin nền → sai.\n- **쳐야지요:** ý chí → sai.'
    },
    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: 'V-도록',
        question: '가 : 항상 아이들의 건강을 먼저 생각하시는 것 같아요.\n나 : 아이들이 건강하게 (       ) 잘 보살피는 게 부모의 일이잖아요.',
        translationVi: 'A: Dường như chị lúc nào cũng nghĩ đến sức khỏe của các con trước.\nB: Chăm sóc tốt để các con lớn lên khỏe mạnh là việc của cha mẹ mà.',
        options: ['자라던데', '자라든지', '자란다면', '자라도록'],
        correctAnswer: '자라도록',
        explanation: '### ✅ Đáp án đúng\n\n**자라도록** — 🎯 `V-도록`: mục đích hoặc kết quả mong muốn "để mà..."\n\n⚡ **Hiểu nhanh:** "để mà" → chăm sóc tốt để trẻ lớn lên khỏe mạnh.\n\n---\n\n### ❌ Các đáp án sai\n\n- **자라던데:** hồi tưởng → sai.\n- **자라든지:** liệt kê lựa chọn → sai.\n- **자란다면:** giả định → sai.'
    },
    {
        id: 6,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄹ까 봐',
        question: '가 : 연수 신청서를 내일까지 제출해야 하는데 알고 있어요?\n나 : 그럼요. 날짜를 (       ) 달력에 표시해 두었어요.',
        translationVi: 'A: Bạn có biết phải nộp đơn đăng ký khóa đào tạo trước ngày mai không?\nB: Tất nhiên. Tôi đã đánh dấu vào lịch vì sợ quên mất ngày.',
        options: ['넘길까 봐', '넘길지 말지', '넘길 뿐더러', '넘기기만 해도'],
        correctAnswer: '넘길까 봐',
        explanation: '### ✅ Đáp án đúng\n\n**넘길까 봐** — 😰 `V-(으)ㄹ까 봐`: lo lắng về khả năng tiêu cực, thực hiện hành động phòng ngừa\n\n⚡ **Hiểu nhanh:** "vì sợ sẽ" → lo lỡ mất ngày nên đánh dấu vào lịch.\n\n---\n\n### ❌ Các đáp án sai\n\n- **넘길지 말지:** phân vân → sai.\n- **넘길 뿐더러:** bổ sung → sai.\n- **넘기기만 해도:** điều kiện → sai.'
    },
    {
        id: 7,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄹ걸 그랬다',
        question: '가 : 어제 동창회에 왜 안 나왔어? 얼마 전에 귀국한 영호도 왔었는데.\n나 : 영호가 나왔어? 그럴 줄 알았으면 나도 (       ).',
        translationVi: 'A: Sao hôm qua không đến buổi họp lớp? Yeongho mới về nước cũng đến đấy.\nB: Yeongho đến á? Biết thế thì mình cũng đã đi rồi.',
        options: ['나갈까 해', '나가고 말았어', '나갈걸 그랬네', '나갈 수밖에 없네'],
        correctAnswer: '나갈걸 그랬네',
        explanation: '### ✅ Đáp án đúng\n\n**나갈걸 그랬네** — 😔 `V-(으)ㄹ걸 그랬다`: hối tiếc về việc không làm trong quá khứ\n\n⚡ **Hiểu nhanh:** "lẽ ra nên" → hối tiếc vì đã không đi.\n\n---\n\n### ❌ Các đáp án sai\n\n- **나갈까 해:** ý định tương lai → sai.\n- **나가고 말았어:** kết quả không mong muốn (thực tế không đi) → sai.\n- **나갈 수밖에 없네:** bắt buộc → sai.'
    },
    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: 'V-거든요',
        question: '가 : 내일 공항에는 뭘 타고 갈 거예요?\n나 : 버스를 타고 갈 거예요. 버스 정류장이 저희 집에서 (       ).',
        translationVi: 'A: Ngày mai bạn đi gì ra sân bay?\nB: Tôi sẽ đi xe buýt. Bến xe buýt gần nhà tôi lắm.',
        options: ['가깝군요', '가깝다니요', '가까운데요', '가깝거든요'],
        correctAnswer: '가깝거든요',
        explanation: '### ✅ Đáp án đúng\n\n**가깝거든요** — 🔗 `V/A-거든요`: giải thích lý do (người nghe thường chưa biết)\n\n⚡ **Hiểu nhanh:** "(là vì)" → giải thích lý do chọn xe buýt.\n\n---\n\n### ❌ Các đáp án sai\n\n- **가깝군요:** nhận ra → sai.\n- **가깝다니요:** hỏi lại ngạc nhiên → sai.\n- **가까운데요:** thông tin nền → sai.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)려면',
        question: '가 : 이 꽃을 잘 (       ) 어떻게 해야 해요?\n나 : 햇볕이 잘 드는 곳에 놓고, 물은 이틀에 한 번씩 주세요.',
        translationVi: 'A: Để trồng hoa này cho tốt thì phải làm thế nào ạ?\nB: Đặt nó ở nơi có nhiều nắng và hai ngày tưới nước một lần.',
        options: ['키우도록', '키우려면', '키우기에', '키울수록'],
        correctAnswer: '키우려면',
        explanation: '### ✅ Đáp án đúng\n\n**키우려면** — 🎯 `V-(으)려면`: nếu muốn/định... thì...\n\n⚡ **Hiểu nhanh:** "nếu muốn" → nếu muốn trồng tốt thì phải làm gì?\n\n---\n\n### ❌ Các đáp án sai\n\n- **키우dorok:** mục đích → không dùng trong câu hỏi phương pháp.\n- **키우기에:** nguyên nhân → sai.\n- **키울수록:** tăng tiến → sai.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: 'N만큼',
        question: '가 : 전시회를 준비하느라고 고생이 많았겠군요.\n나 : 동료와 후배들이 많이 도와주어서 생각(       ) 힘들지는 않았어요.',
        translationVi: 'A: Chắc anh đã vất vả nhiều để chuẩn bị triển lãm nhỉ.\nB: Vì được đồng nghiệp và hậu bối giúp nhiều nên cũng không vất vả như tôi nghĩ.',
        options: ['이나', '만큼', '까지', '마저'],
        correctAnswer: '만큼',
        explanation: '### ✅ Đáp án đúng\n\n**만큼** — ⚖️ `N만큼`: so sánh mức độ "bằng/như"\n\n⚡ **Hiểu nhanh:** "như" → không vất vả như đã nghĩ.\n\n---\n\n### ❌ Các đáp án sai\n\n- **이나:** lựa chọn/số lượng → sai.\n- **까지:** phạm vi → sai.\n- **마저:** "đến cả" tiêu cực → sai.'
    },
    {
        id: 11,
        type: 'multiple-choice',
        grammarPoint: 'V-는 수가 있다',
        question: '가 : 전화로 예약을 하고 식당에 갔는데 예약이 안 되어 있더라고요.\n나 : 그랬어요? 전화로 예약하면 가끔 (       ).',
        translationVi: 'A: Tôi đặt bàn qua điện thoại rồi đến nhà hàng, thế mà họ bảo chưa được đặt.\nB: Vậy á? Đặt qua điện thoại thỉnh thoảng cũng có trường hợp bị nhầm lẫn.',
        options: ['잘못된 줄 몰랐어요', '잘못될 리가 없어요', '잘못될 수밖에 없어요', '잘못되는 수가 있어요'],
        correctAnswer: '잘못되는 수가 있어요',
        explanation: '### ✅ Đáp án đúng\n\n**잘못되는 수가 있어요** — 📊 `V-는 수가 있다`: thỉnh thoảng cũng có thể xảy ra\n\n⚡ **Hiểu nhanh:** "cũng có trường hợp" → đặt qua điện thoại thỉnh thoảng bị sai sót.\n\n---\n\n### ❌ Các đáp án sai\n\n- **잘못된 줄 몰랐어요:** không biết là sai → sai.\n- **잘못될 리가 없어요:** phủ định mạnh → trái nghĩa.\n- **잘못될 수밖에 없어요:** bắt buộc → sai.'
    },
    {
        id: 12,
        type: 'multiple-choice',
        grammarPoint: 'V-기만 해도',
        question: '가 : 오랜만에 야외에 나오니까 기분이 아주 상쾌하군요.\n나 : 네. 시내를 조금 (       ) 공기가 정말 다르네요.',
        translationVi: 'A: Lâu rồi mới ra ngoài trời nên tâm trạng thật sảng khoái.\nB: Vâng. Chỉ cần ra khỏi trung tâm một chút thôi là không khí đã khác hẳn rồi.',
        options: ['벗어나듯이', '벗어나나 마나', '벗어나기만 해도', '벗어났을 정도로'],
        correctAnswer: '벗어나기만 해도',
        explanation: '### ✅ Đáp án đúng\n\n**벗어나기만 해도** — ⚡ `V-기만 해도`: chỉ cần thực hiện thôi là kết quả đã xảy ra\n\n⚡ **Hiểu nhanh:** "chỉ cần... thôi là" → ra ngoài một chút, không khí đã khác.\n\n---\n\n### ❌ Các đáp án sai\n\n- **벗어나듯이:** so sánh → sai.\n- **벗어나나 마나:** vô ích → sai.\n- **벗어났을 정도로:** mức độ → sai.'
    },
    {
        id: 13,
        type: 'multiple-choice',
        grammarPoint: 'V-았/었을걸요',
        question: '가 : 지금쯤이면 공항에 도착했을까요?\n나 : 아마 (       ). 출발한 지 벌써 두 시간이나 지났잖아요.',
        translationVi: 'A: Giờ này chắc họ đến sân bay chưa nhỉ?\nB: Chắc là đến rồi. Đã xuất phát được hai tiếng rồi còn gì.',
        options: ['도착했군요', '도착했는데요', '도착했을걸요', '도착했으니까요'],
        correctAnswer: '도착했을걸요',
        explanation: '### ✅ Đáp án đúng\n\n**도착했을걸요** — 🔮 `V-았/었을걸요`: phỏng đoán về sự việc quá khứ, nhẹ nhàng thân mật\n\n⚡ **Hiểu nhanh:** "chắc là đã" → phỏng đoán dựa trên (đã xuất phát 2 tiếng).\n\n---\n\n### ❌ Các đáp án sai\n\n- **도착했군요:** nhận ra → sai.\n- **도착했는데요:** thông tin nền → sai.\n- **도착했으니까요:** lý do → sai.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: 'V-던데요',
        question: '가 : 혹시 이 대리 봤어요? 급히 의논할 사항이 있는데 자리에 없네요.\n나 : 아까 1층에서 손님을 (       ).',
        translationVi: 'A: Anh có thấy Trợ lý Lee không? Có việc cần bàn gấp mà anh ấy không có.\nB: Lúc nãy tôi thấy anh ấy đang gặp khách ở tầng 1.',
        options: ['만나던데요', '만나야지요', '만나려고요', '만나고말고요'],
        correctAnswer: '만나던데요',
        explanation: '### ✅ Đáp án đúng\n\n**만나던데요** — 📝 `V-던데요`: hồi tưởng và kể lại sự việc đã trực tiếp chứng kiến\n\n⚡ **Hiểu nhanh:** "tôi thấy đang" → kể lại điều đã thấy.\n\n---\n\n### ❌ Các đáp án sai\n\n- **만나야지요:** ý chí → sai.\n- **만나려고요:** ý định → sai.\n- **만나고말고요:** khẳng định mạnh → sai.'
    },
    {
        id: 15,
        type: 'multiple-choice',
        grammarPoint: 'V-기만 하면 되다',
        question: '가 : 어떤 장갑으로 사다 줄까요? 원하는 것이 있어요?\n나 : 특별히 원하는 것은 없어요. 그냥 (       ).',
        translationVi: 'A: Tôi mua cho bạn loại găng tay nào? Có loại nào bạn muốn không?\nB: Không có yêu cầu đặc biệt. Chỉ cần nó ấm là được.',
        options: ['따뜻할 텐데요', '따뜻할 뿐이에요', '따뜻할 리가 없어요', '따뜻하기만 하면 돼요'],
        correctAnswer: '따뜻하기만 하면 돼요',
        explanation: '### ✅ Đáp án đúng\n\n**따뜻하기만 하면 돼요** — ✅ `V/A-기만 하면 되다`: điều kiện tối thiểu "chỉ cần... là được"\n\n⚡ **Hiểu nhanh:** "chỉ cần... là được" → điều kiện tối thiểu: chỉ cần ấm.\n\n---\n\n### ❌ Các đáp án sai\n\n- **따뜻할 텐데요:** phỏng đoán → sai.\n- **따뜻할 뿐이에요:** chỉ có thế → sai.\n- **따뜻할 리가 없어요:** phủ định mạnh → sai.'
    },
    {
        id: 16,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)나 마나',
        question: '가 : 형한테도 내일 같이 놀러 가자고 할까?\n나 : (       ) 안 갈 거야. 내일 시험이 있다고 했거든.',
        translationVi: 'A: Hay là mình rủ anh trai mai đi chơi cùng nhé?\nB: Hỏi cũng như không thôi, anh ấy sẽ không đi. Mai có bài thi mà.',
        options: ['물어보다시피', '물어보느라고', '물어보나 마나', '물어볼 뿐만 아니라'],
        correctAnswer: '물어보나 마나',
        explanation: '### ✅ Đáp án đúng\n\n**물어보나 마나** — 🔀 `V-(으)나 마나`: dù có làm hay không kết quả cũng không thay đổi, vô ích\n\n⚡ **Hiểu nhanh:** "hỏi hay không cũng vậy" → dù hỏi hay không, anh ấy cũng không đi.\n\n---\n\n### ❌ Các đáp án sai\n\n- **물어보다시피:** "như" → sai.\n- **물어보느라고:** lý do → sai.\n- **물어볼 뿐만 아니라:** bổ sung → sai.'
    }
];

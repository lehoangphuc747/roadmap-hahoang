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
        grammarPoint: 'V-(으)니까 vs V-아/어서',
        question: '출퇴근 시간에는 길이 (      ) 조금 일찍 출발합시다.',
        translationVi: 'Vào giờ đi làm và tan tầm đường sẽ tắc nên chúng ta hãy xuất phát sớm một chút nhé.',
        options: ['막혀서', '막히거나', '막히려면', '막히니까'],
        correctAnswer: '막히니까',
        explanation: '### ✅ Đáp án đúng\n\n**막히니까** — 🔗 `V/A-(으)니까`: chỉ nguyên nhân, lý do (có thể dùng với câu mệnh lệnh/đề nghị)\n\n⚡ **Hiểu nhanh:** "vì bị kẹt đường nên..." → nguyên nhân dẫn tới lời đề nghị, phù hợp với "-ㅂ시다".\n\n---\n\n### ❌ Các đáp án sai\n\n- **막혀서:** `V-아/어서` = nguyên nhân nhưng không được dùng với câu mệnh lệnh/đề nghị → sai.\n- **막히거나:** `V-거나` = "hoặc" → không phù hợp.\n- **막히려면:** `V-(으)려면` = điều kiện về mục đích → không phù hợp.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)려나 보다',
        question: '구름이 잔뜩 낀 것을 보니 비가 (       ).',
        translationVi: 'Nhìn trời đầy mây thế này, chắc là sắp mưa rồi.',
        options: ['오곤 한다', '온다고 한다', '오려나 보다', '오는 편이다'],
        correctAnswer: '오려나 보다',
        explanation: '### ✅ Đáp án đúng\n\n**오려나 보다** — 🔮 `V-(으)려나 보다`: "chắc là / hình như sắp..." → phỏng đoán dựa trên căn cứ quan sát được\n\n⚡ **Hiểu nhanh:** "có vẻ như sắp mưa" → phỏng đoán dựa trên "보니" (nhìn thấy đầy mây).\n\n---\n\n### ❌ Các đáp án sai\n\n- **오곤 한다:** `V-곤 하다` = thói quen lặp lại → sai.\n- **온다고 한다:** `V-ㄴ/는다고 하다` = trích dẫn gián tiếp → sai.\n- **오는 편이다:** `V-는 편이다` = "thuộc dạng" → không phù hợp.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: 'V-자마자',
        question: '어제는 너무 피곤해서 침대에 (       ) 잠이 들었다.',
        translationVi: 'Hôm qua vì quá mệt nên tôi vừa nằm xuống giường là ngủ thiếp đi.',
        options: ['눕거나', '눕는다면', '눕자마자', '눕더라도'],
        correctAnswer: '눕자마자',
        explanation: '### ✅ Đáp án đúng\n\n**눕자마자** — ⚡ `V-자마자`: hành động xảy ra ngay sau khi hành động khác vừa kết thúc\n\n⚡ **Hiểu nhanh:** "ngay sau khi nằm xuống thì ngủ thiếp đi"\n\n---\n\n### ❌ Các đáp án sai\n\n- **눕거나:** `V-거나` = lựa chọn → sai.\n- **눕는다면:** `V-ㄴ/는다면` = giả định → sai.\n- **눕더라도:** `V-더라도` = nhượng bộ → sai.'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어도',
        question: '어떤 어려움이 (       ) 나는 끝까지 이 일을 해낼 것이다.',
        translationVi: 'Dù có khó khăn nào đi nữa, tôi cũng sẽ hoàn thành công việc này đến cùng.',
        options: ['있어도', '있지만', '있도록', '있더니'],
        correctAnswer: '있어도',
        explanation: '### ✅ Đáp án đúng\n\n**있어도** — 🛡️ `V/A-아/어도`: nhượng bộ, vế sau vẫn xảy ra bất chấp vế trước\n\n⚡ **Hiểu nhanh:** "cho dù... vẫn" → nhấn mạnh quyết tâm bất chấp khó khăn.\n\n---\n\n### ❌ Các đáp án sai\n\n- **있지만:** `V-지만` = tương phản → không mạnh bằng.\n- **있도록:** `V-도록` = mục đích → sai.\n- **있더니:** `V-더니` = thay đổi/tương phản sau quan sát → sai.'
    },
    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄹ 겸 (해서)',
        question: '내일 영화도 보고 쇼핑도 (       ) 해서 명동에 가려고 한다.',
        translationVi: 'Ngày mai tôi định đến Myeongdong để vừa xem phim vừa mua sắm.',
        options: ['하고', '할 겸', '하면서', '하니까'],
        correctAnswer: '할 겸',
        explanation: '### ✅ Đáp án đúng\n\n**할 겸** — 🎯 `V-(으)ㄹ 겸 (해서)`: thực hiện hai hoặc nhiều hành động/mục đích cùng một lúc\n\n💡 `V-(으)ㄹ 겸` thường đi với `해서`\n\n⚡ **Hiểu nhanh:** "vừa xem phim vừa mua sắm"\n\n---\n\n### ❌ Các đáp án sai\n\n- **하고:** `V-고` = liệt kê → không thể hiện mục đích.\n- **하면서:** `V-(으)면서` = đồng thời → không thể vừa xem phim vừa mua sắm cùng lúc.\n- **하니까:** `V-(으)니까` = nguyên nhân → sai.'
    },
    {
        id: 6,
        type: 'multiple-choice',
        grammarPoint: 'V-더니',
        question: '오전에는 비가 많이 (       ) 지금은 날씨가 맑게 개었다.',
        translationVi: 'Buổi sáng trời đã mưa rất to, (nhưng) bây giờ thì trời đã quang đãng.',
        options: ['오더니', '오더라도', '와 가지고', '오는 대신에'],
        correctAnswer: '오더니',
        explanation: '### ✅ Đáp án đúng\n\n**오더니** — 🔄 `V/A-더니`: hồi tưởng sự việc quan sát trong quá khứ, sau đó có thay đổi/tương phản ở hiện tại\n\n⚡ **Hiểu nhanh:** "đã... thế mà" → sáng mưa to → bây giờ quang đãng (tương phản).\n\n---\n\n### ❌ Các đáp án sai\n\n- **오더라도:** `V-더라도` = giả định nhượng bộ → sai.\n- **와 가지고:** `V-아/어 가지고` = nguyên nhân/thứ tự → không tương phản.\n- **오는 대신에:** `V-는 대신에` = thay thế → sai.'
    },
    {
        id: 7,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어야지',
        question: '수민이는 "너무 피곤하니까 오늘은 일찍 집에 가서 (       )!" 하고 말했다.',
        translationVi: 'Sumin nói: "Vì mệt quá nên hôm nay phải về nhà sớm nghỉ ngơi thôi!"',
        options: ['쉴걸', '쉬더라', '쉬어야지', '쉬기도 해'],
        correctAnswer: '쉬어야지',
        explanation: '### ✅ Đáp án đúng\n\n**쉬어야지** — 💪 `V-아/어야지`: ý chí, quyết tâm, việc đương nhiên phải làm (tự nhủ với bản thân)\n\n⚡ **Hiểu nhanh:** "phải... thôi" → tự nhủ về việc phải làm.\n\n---\n\n### ❌ Các đáp án sai\n\n- **쉴걸:** `V-(으)ㄹ걸` = hối tiếc → sai.\n- **쉬더라:** `V-더라` = hồi tưởng/kể lại → sai.\n- **쉬기도 해:** `V-기도 하다` = thỉnh thoảng → sai.'
    },
    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄹ 텐데',
        question: '비장애인도 쉽지 (     ) 불편한 몸으로 높은 산에 오르다니 정말 대단한 사람이다.',
        translationVi: 'Đến người không khuyết tật còn thấy không dễ dàng, vậy mà với cơ thể không lành lặn lại leo lên ngọn núi cao như vậy, thật là một người phi thường.',
        options: ['않을 텐데', '않을까 봐', '않을 테니까', '않은 데다가'],
        correctAnswer: '않을 텐데',
        explanation: '### ✅ Đáp án đúng\n\n**않을 텐데** — 🔮 `V/A-(으)ㄹ 텐데`: suy đoán chắc chắn, vế sau trái ngược với suy đoán\n\n⚡ **Hiểu nhanh:** "chắc là không... vậy mà" → ngạc nhiên vì thực tế leo được.\n\n---\n\n### ❌ Các đáp án sai\n\n- **않을까 봐:** `V-(으)ㄹ까 봐` = lo lắng → sai.\n- **않을 테니까:** `V-(으)ㄹ 테니까` = lý do suy đoán kèm đề nghị → sai.\n- **않은 데다가:** `V-은 데다가` = bổ sung thông tin → sai.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어 가다',
        question: '앞으로 날씨가 따뜻해지면서 산이 점점 푸르게 (        ).',
        translationVi: 'Trong tương lai, khi thời tiết trở nên ấm hơn, núi non sẽ dần dần trở nên xanh tươi.',
        options: ['변해 갈 것이다', '변해 올 것이다', '변해 볼 것이다', '변해 댈 것이다'],
        correctAnswer: '변해 갈 것이다',
        explanation: '### ✅ Đáp án đúng\n\n**변해 갈 것이다** — 📈 `V-아/어 가다`: quá trình thay đổi tiếp tục hướng về tương lai\n\n⚡ **Hiểu nhanh:** "sẽ dần dần" → phù hợp với "앞으로", "점점".\n\n---\n\n### ❌ Các đáp án sai\n\n- **변해 올 것이다:** `V-아/어 오다` = từ quá khứ đến nay → không phù hợp với "앞으로".\n- **변해 볼 것이다:** `V-아/어 보다` = thử → không phù hợp với chủ thể "산".\n- **변해 댈 것이다:** `V-아/어 대다` = lặp lại quá mức tiêu cực → sai.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어서인지',
        question: '올해는 과일 생산량이 (       ) 대체적으로 과일 가격이 내렸다.',
        translationVi: 'Năm nay, có lẽ vì sản lượng trái cây tăng nên nhìn chung giá trái cây đã giảm.',
        options: ['는다면', '늘어야', '는다거나', '늘어서인지'],
        correctAnswer: '늘어서인지',
        explanation: '### ✅ Đáp án đúng\n\n**늘어서인지** — 🔮 `V/A-아/어서인지`: nguyên nhân không chắc chắn, mang tính phỏng đoán\n\n⚡ **Hiểu nhanh:** "có lẽ là vì" → sản lượng tăng → giá giảm.\n\n---\n\n### ❌ Các đáp án sai\n\n- **는다면:** điều kiện giả định → sai.\n- **늘어야:** cần thiết → sai.\n- **는다거나:** liệt kê khả năng → sai.'
    },
    {
        id: 11,
        type: 'multiple-choice',
        grammarPoint: 'V-게 하다',
        question: '의사는 위염 환자에게 식사량을 (       ).',
        translationVi: 'Bác sĩ đã yêu cầu bệnh nhân viêm dạ dày điều chỉnh khẩu phần ăn.',
        options: ['조절하게 했다', '조절한다고 한다', '조절하려고 했다', '조절하게 되었다'],
        correctAnswer: '조절하게 했다',
        explanation: '### ✅ Đáp án đúng\n\n**조절하게 했다** — 👨‍⚕️ `V-게 하다`: sai khiến (bắt/khiến/cho phép ai đó làm gì)\n\n⚡ **Hiểu nhanh:** "yêu cầu/khiến" → bác sĩ yêu cầu bệnh nhân điều chỉnh.\n\n---\n\n### ❌ Các đáp án sai\n\n- **조절한다고 한다:** trích dẫn gián tiếp → sai nghĩa.\n- **조절하려고 했다:** ý định của chủ ngữ → sai.\n- **조절하게 되었다:** thay đổi tự nhiên → không phải do bác sĩ tác động.'
    },
    {
        id: 12,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)려야 V-(으)ㄹ 수가 없다',
        question: '그의 행동을 보면 그는 (       ) 믿을 수가 없는 사람이다.',
        translationVi: 'Nhìn hành động của anh ta thì thấy anh ta là người dù có muốn tin cũng không thể nào tin được.',
        options: ['믿어도', '믿으려야', '믿더라도', '믿는 통에'],
        correctAnswer: '믿으려야',
        explanation: '### ✅ Đáp án đúng\n\n**믿으려야** — 🚫 `V-(으)려야 V-(으)ㄹ 수가 없다`: cấu trúc cố định, "dù có muốn... cũng không thể"\n\n⚡ **Hiểu nhanh:** "dù có muốn tin cũng không thể" → nhấn mạnh sự bất khả thi.\n\n---\n\n### ❌ Các đáp án sai\n\n- **믿어도:** nhượng bộ → không tạo cấu trúc cố định.\n- **믿더라도:** nhượng bộ → sai.\n- **믿는 통에:** nguyên nhân tiêu cực → sai nghĩa.'
    },
    {
        id: 13,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어지다',
        question: '나를 간호해 주시는 어머니의 손에서 사랑이 (       ).',
        translationVi: 'Tôi cảm nhận được tình yêu thương từ đôi bàn tay của mẹ đang chăm sóc cho tôi.',
        options: ['느껴졌다', '느껴 봤다', '느끼는 듯했다', '느낄 정도였다'],
        correctAnswer: '느껴졌다',
        explanation: '### ✅ Đáp án đúng\n\n**느껴졌다** — 💝 `V-아/어지다`: dạng bị động (được cảm nhận)\n\n⚡ **Hiểu nhanh:** "được cảm nhận" → tình yêu được tôi cảm nhận tự nhiên từ tay mẹ.\n\n---\n\n### ❌ Các đáp án sai\n\n- **느껴 봤다:** `V-아/어 봤다` = thử → sai.\n- **느끼는 듯했다:** phỏng đoán không chắc → sai.\n- **느낄 정도였다:** mức độ → không tự nhiên bằng bị động.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: 'V-는 한',
        question: '노인 취업에 대한 설문 조사에서 건강이 (       ) 계속 일하고 싶다는 응답이 과반수를 넘었다.',
        translationVi: 'Trong một cuộc khảo sát về việc làm cho người cao tuổi, câu trả lời rằng họ muốn tiếp tục làm việc miễn là sức khỏe cho phép đã chiếm hơn một nửa.',
        options: ['허락하길래', '허락하길래', '허락하는 한', '허락한다고 해도'],
        correctAnswer: '허락하는 한',
        explanation: '### ✅ Đáp án đúng\n\n**허락하는 한** — ✅ `V-는 한`: điều kiện "miễn là/chừng nào mà vế 1 còn tồn tại thì vế 2 sẽ xảy ra"\n\n⚡ **Hiểu nhanh:** "miễn là" → sức khỏe cho phép → muốn làm việc.\n\n---\n\n### ❌ Các đáp án sai\n\n- **허락하길래:** `V-길래` = nguyên nhân "vì thấy..." → sai.\n- **허락한다고 해도:** nhượng bộ → sai.'
    },
    {
        id: 15,
        type: 'multiple-choice',
        grammarPoint: 'V-잖아요',
        question: '선영이는 미아에게 "미아 씨, 왜 이렇게 늦었어요? 제가 미아 씨한테 1시에 시작한다고 (      )." 하고 화를 냈다.',
        translationVi: 'Seonyeong đã tức giận với Mia: "Mia, sao bạn đến muộn vậy? Tôi đã nói với bạn là bắt đầu lúc 1 giờ rồi mà."',
        options: ['했거든요', '했다니요', '했더군요', '했잖아요'],
        correctAnswer: '했잖아요',
        explanation: '### ✅ Đáp án đúng\n\n**했잖아요** — 💬 `V/A-잖아요`: nhắc lại sự thật cả hai đều biết, mang ý trách móc/khẳng định lại\n\n⚡ **Hiểu nhanh:** "đã nói rồi mà" → nhắc lại, trách móc vì quên.\n\n---\n\n### ❌ Các đáp án sai\n\n- **했거든요:** giải thích lý do → sai.\n- **했다니요:** hỏi lại ngạc nhiên → sai.\n- **했더군요:** hồi tưởng → sai.'
    },
    {
        id: 16,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄴ/는 탓에',
        question: '아기를 힘들게 재웠는데 전화벨이 (      ) 아기가 깨서 울었다.',
        translationVi: 'Tôi đã vất vả lắm mới dỗ em bé ngủ được, thế mà vì chuông điện thoại reo nên em bé đã tỉnh giấc và khóc.',
        options: ['울리고서야', '울리는 김에', '울리는 탓에', '울릴 테니까'],
        correctAnswer: '울리는 탓에',
        explanation: '### ✅ Đáp án đúng\n\n**울리는 탓에** — 😢 `V/A-(으)ㄴ/는 탓에`: nguyên nhân của kết quả tiêu cực\n\n⚡ **Hiểu nhanh:** "tại vì/do" → chuông reo → em bé tỉnh giấc khóc.\n\n---\n\n### ❌ Các đáp án sai\n\n- **울리고서야:** điều kiện cần → sai.\n- **울리는 김에:** tận dụng cơ hội → sai.\n- **울릴 테니까:** lý do phỏng đoán tương lai → sai.'
    },
    {
        id: 17,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어야지',
        question: '유나는 "열심히 노력해서 이번에는 꼭 (       )!" 하고 다짐했다.',
        translationVi: 'Yuna đã tự hứa: "Lần này mình nhất định phải đỗ bằng được!"',
        options: ['합격하거든', '합격하다니', '합격해야지', '합격하는구나'],
        correctAnswer: '합격해야지',
        explanation: '### ✅ Đáp án đúng\n\n**합격해야지** — 💪 `V-아/어야지`: ý chí mạnh mẽ, quyết tâm (tự nhủ)\n\n⚡ **Hiểu nhanh:** "phải... thôi" → quyết tâm mạnh mẽ.\n\n---\n\n### ❌ Các đáp án sai\n\n- **합격하거든:** điều kiện → sai.\n- **합격하다니:** ngạc nhiên → sai.\n- **합격하는구나:** nhận ra → sai.'
    }
];

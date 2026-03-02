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
        grammarPoint: 'V-느니 차라리',
        question: '사랑하지 않는 사람과 (       ) 차라리 평생 혼자 살겠다.',
        translationVi: 'Thà sống một mình cả đời còn hơn là kết hôn với người mình không yêu.',
        options: ['결혼하느니', '결혼하더니', '결혼하도록', '결혼한다고 해도'],
        correctAnswer: '결혼하느니',
        explanation: '### ✅ Đáp án đúng\n\n**결혼하느니** — ⚖️ `V-느니 차라리`: so sánh lựa chọn, thà chọn vế sau hơn vế trước\n\n⚡ **Hiểu nhanh:** "thà... còn hơn" → thà sống một mình hơn kết hôn.\n\n---\n\n### ❌ Các đáp án sai\n\n- **결혼하더니:** thay đổi sau hành động → sai.\n- **결혼하도록:** mục đích → sai.\n- **결혼한다고 해도:** nhượng bộ → sai.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: 'V-기에',
        question: '길가에 핀 꽃이 너무 (       ) 차를 세우고 사진을 찍었다.',
        translationVi: 'Hoa nở ven đường đẹp quá nên tôi đã dừng xe lại và chụp ảnh.',
        options: ['예쁜 듯', '예쁘기에', '예쁘고도', '예쁠 정도로'],
        correctAnswer: '예쁘기에',
        explanation: '### ✅ Đáp án đúng\n\n**예쁘기에** — 🔗 `V/A-기에`: nguyên nhân, lý do (trang trọng hơn `-아/어서`)\n\n⚡ **Hiểu nhanh:** "vì... nên" → hoa đẹp → dừng xe chụp ảnh.\n\n---\n\n### ❌ Các đáp án sai\n\n- **예쁜 듯:** phỏng đoán → sai.\n- **예쁘고도:** bổ sung thông tin → sai.\n- **예쁠 정도로:** mức độ → không phải nguyên nhân.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)므로',
        question: '정말 최선을 다 (       ) 더 이상 아쉬움은 없다.',
        translationVi: 'Tôi đã thực sự cố gắng hết sức mình nên giờ không còn gì hối tiếc nữa.',
        options: ['했다가', '했건만', '했으므로', '했거니와'],
        correctAnswer: '했으므로',
        explanation: '### ✅ Đáp án đúng\n\n**했으므로** — 📝 `V/A-(으)므로`: nguyên nhân, lý do (trang trọng, văn viết)\n\n⚡ **Hiểu nhanh:** "bởi vì... nên" → đã cố hết sức → không hối tiếc.\n\n---\n\n### ❌ Các đáp án sai\n\n- **했다가:** chuyển đổi hành động → sai.\n- **했건만:** tương phản (vế sau thường tiêu cực) → sai.\n- **했거니와:** bổ sung thông tin → sai.'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어도',
        question: '아무리 (       ) 건강을 위해서 아침을 꼭 먹는 것이 좋다.',
        translationVi: 'Dù bận rộn đến đâu đi nữa, vì sức khỏe thì cũng nên nhất định phải ăn sáng.',
        options: ['바빠도', '바쁘나', '바쁘던데', '바쁘거든'],
        correctAnswer: '바빠도',
        explanation: '### ✅ Đáp án đúng\n\n**바빠도** — 🛡️ `아무리 V/A-아/어도`: cấu trúc cố định, "dù... đến đâu đi nữa thì..."\n\n⚡ **Hiểu nhanh:** "dù... đến đâu vẫn" → vế sau vẫn đúng bất chấp.\n\n---\n\n### ❌ Các đáp án sai\n\n- **바쁘나:** tương phản → không kết hợp với `아무리`.\n- **바쁘던데:** hồi tưởng → sai.\n- **바쁘거든:** điều kiện → sai.'
    },
    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: 'N은/는커녕',
        question: '그는 가정 형편이 어려워 (       ) 고등학교도 못 갔다.',
        translationVi: 'Anh ấy vì hoàn cảnh gia đình khó khăn nên nói gì đến đại học, ngay cả cấp 3 cũng không học được.',
        options: ['대학교조차', '대학교마저', '대학교는커녕', '대학교야말로'],
        correctAnswer: '대학교는커녕',
        explanation: '### ✅ Đáp án đúng\n\n**대학교는커녕** — 📉 `N은/는커녕`: "đừng nói đến N, ngay cả điều cơ bản hơn cũng không thể"\n\n⚡ **Hiểu nhanh:** "nói gì đến" → đại học không nói, ngay cả cấp 3 cũng không đi được.\n\n---\n\n### ❌ Các đáp án sai\n\n- **대학교조차:** `N조차` = "ngay cả" → không so sánh cấp độ.\n- **대학교마저:** `N마저` = "đến cả" (cái cuối cùng) → sai.\n- **대학교야말로:** nhấn mạnh → sai nghĩa.'
    },
    {
        id: 6,
        type: 'multiple-choice',
        grammarPoint: 'V-았/었더니',
        question: '술을 한잔하면서 친구에게 속마음을 털어 (       ) 마음이 가벼워졌다.',
        translationVi: 'Vừa uống rượu vừa trút bầu tâm sự với bạn xong thì tôi thấy lòng nhẹ nhõm hơn.',
        options: ['놓던데', '놓았더니', '놓기에는', '놓는데도'],
        correctAnswer: '놓았더니',
        explanation: '### ✅ Đáp án đúng\n\n**놓았더니** — 💡 `V-았/었더니`: sau khi thực hiện hành động thì phát hiện/trải qua kết quả mới\n\n⚡ **Hiểu nhanh:** "sau khi... thì" → trút tâm sự → lòng nhẹ nhõm.\n\n---\n\n### ❌ Các đáp án sai\n\n- **놓던데:** hồi tưởng chưa hoàn tất → sai.\n- **놓기에는:** đánh giá hành động → sai.\n- **놓는데도:** nhượng bộ → sai.'
    },
    {
        id: 7,
        type: 'multiple-choice',
        grammarPoint: 'V-더라도',
        question: '우리는 (       ) 자기가 할 일을 남에게 미루지 말고 스스로 해야 한다.',
        translationVi: 'Chúng ta dù có mệt mỏi đi chăng nữa cũng không được đùn đẩy việc cho người khác mà phải tự làm.',
        options: ['피곤하고도', '피곤한 탓에', '피곤하더라도', '피곤한 대신에'],
        correctAnswer: '피곤하더라도',
        explanation: '### ✅ Đáp án đúng\n\n**피곤하더라도** — 🛡️ `V/A-더라도`: nhượng bộ giả định, vế sau vẫn đúng bất chấp\n\n⚡ **Hiểu nhanh:** "dù... đi chăng nữa" → dù mệt vẫn phải tự làm.\n\n---\n\n### ❌ Các đáp án sai\n\n- **피곤하고도:** bổ sung → sai.\n- **피곤한 탓에:** nguyên nhân tiêu cực → sai nghĩa.\n- **피곤한 대신에:** thay thế → sai.'
    },
    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: '파고들다',
        question: '수학 문제가 너무 어려웠지만 포기하지 않고 끝까지 (       ).',
        translationVi: 'Bài toán rất khó nhưng tôi đã không bỏ cuộc và đã đào sâu suy nghĩ đến cùng.',
        options: ['파 놓았다', '파고들었다', '파나 싶었다', '파는 셈 쳤다'],
        correctAnswer: '파고들었다',
        explanation: '### ✅ Đáp án đúng\n\n**파고들었다** — 🔍 `파고들다`: động từ ghép = đào sâu, đi sâu vào vấn đề\n\n⚡ **Hiểu nhanh:** "đào sâu, nghiên cứu kỹ" → không bỏ cuộc, đi sâu đến cùng.\n\n---\n\n### ❌ Các đáp án sai\n\n- **파 놓았다:** làm trước → thường nghĩa đen → sai.\n- **파나 싶었다:** phân vân → sai.\n- **파는 셈 쳤다:** giả vờ/coi như → sai.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: 'V-다가',
        question: '가 : 오늘 왜 이렇게 늦었어요?\n나 : 버스를 타고 (       ) 깜빡 잠이 들어서 정류장을 지나쳤어요.',
        translationVi: 'A: Sao hôm nay bạn đến muộn vậy?\nB: Vì đang đi xe buýt thì tôi lỡ ngủ quên nên đã đi qua mất bến đỗ.',
        options: ['오던데', '오기로', '오다가', '오려면'],
        correctAnswer: '오다가',
        explanation: '### ✅ Đáp án đúng\n\n**오다가** — 📘 `V-다가`: hành động đang diễn ra thì bị hành động khác xen vào\n\n⚡ **Hiểu nhanh:** "đang... thì" → đang đi xe buýt → ngủ quên xen vào.\n\n---\n\n### ❌ Các đáp án sai\n\n- **오던데:** hồi tưởng → sai.\n- **오기로:** quyết định → sai.\n- **오려면:** điều kiện → sai.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: 'V-는 바람에',
        question: '가 : 옷에 뭐가 묻었네요.\n나 : 옆 사람이 팔을 (       ) 커피를 쏟았거든요.',
        translationVi: 'A: Có gì dính trên áo bạn kìa.\nB: Là do người bên cạnh huých tay vào nên làm đổ cà phê.',
        options: ['칠 텐데', '치는 대로', '치는 데다가', '치는 바람에'],
        correctAnswer: '치는 바람에',
        explanation: '### ✅ Đáp án đúng\n\n**치는 바람에** — 😢 `V-는 바람에`: nguyên nhân của kết quả tiêu cực, bất ngờ\n\n⚡ **Hiểu nhanh:** "do... nên" → huých tay → cà phê đổ.\n\n---\n\n### ❌ Các đáp án sai\n\n- **칠 텐데:** phỏng đoán → sai.\n- **치는 대로:** nối tiếp ngay lập tức → sai.\n- **치는 데다가:** bổ sung thông tin → sai.'
    },
    {
        id: 11,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄹ 리가 없다',
        question: '가 : 이번 시험에서 민수 씨가 1등을 했대요.\n나 : 설마요. 그렇게 공부도 안 하는데 1등을 (       ).',
        translationVi: 'A: Nghe nói Minsu được hạng nhất trong kỳ thi lần này.\nB: Không đời nào. Cậu ấy có học hành gì đâu mà làm sao hạng nhất được.',
        options: ['했을지도 몰라요', '하기 마련이에요', '했을 리가 없어요', '하는 수밖에 없어요'],
        correctAnswer: '했을 리가 없어요',
        explanation: '### ✅ Đáp án đúng\n\n**했을 리가 없어요** — 🚫 `V-(으)ㄹ 리가 없다`: phủ định mạnh mẽ, "không có lý nào... / làm sao mà... được"\n\n⚡ **Hiểu nhanh:** "làm sao mà... được" → không tin vì không học chăm chỉ.\n\n---\n\n### ❌ Các đáp án sai\n\n- **했을지도 몰라요:** khả năng → trái ngược ý.\n- **하기 마련이에요:** quy luật tự nhiên → sai.\n- **하는 수밖에 없어요:** bắt buộc → sai.'
    },
    {
        id: 12,
        type: 'multiple-choice',
        grammarPoint: 'N조차',
        question: '가 : 해외 출장은 잘 갔다 왔어요?\n나 : 그곳 날씨가 너무 더워서 숨 (       ) 쉬기 힘들었어요.',
        translationVi: 'A: Chuyến công tác nước ngoài tốt đẹp chứ?\nB: Thời tiết ở đó nóng đến mức ngay cả thở cũng thấy khó khăn.',
        options: ['만큼', '조차', '은커녕', '이라도'],
        correctAnswer: '조차',
        explanation: '### ✅ Đáp án đúng\n\n**조차** — 📌 `N조차`: nhấn mạnh "ngay cả/đến cả" (thường trong tình huống tiêu cực)\n\n⚡ **Hiểu nhanh:** "ngay cả" → thở (điều cơ bản nhất) cũng khó vì nóng quá.\n\n---\n\n### ❌ Các đáp án sai\n\n- **만큼:** so sánh mức độ → sai.\n- **은커녕:** so sánh cấp độ → cần so sánh khác → sai.\n- **이라도:** lựa chọn thay thế → sai.'
    },
    {
        id: 13,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄹ 만하다',
        question: '가 : 내일 지방으로 단풍 구경을 가려는데 차가 막힐까 봐 걱정이에요.\n나 : 멀리 갈 필요 있어요? 서울 근교에도 단풍을 (       ) 곳이 많아요.',
        translationVi: 'A: Ngày mai tôi định về quê ngắm lá phong nhưng lo kẹt xe.\nB: Cần gì phải đi xa? Ở ngoại ô Seoul cũng có nhiều nơi đáng để ngắm lá phong.',
        options: ['구경해 본', '구경하고 난', '구경할 만한', '구경하기로 한'],
        correctAnswer: '구경할 만한',
        explanation: '### ✅ Đáp án đúng\n\n**구경할 만한** — ⭐ `V-(으)ㄹ 만하다`: đáng để làm\n\n⚡ **Hiểu nhanh:** "đáng để" → nhiều nơi đáng để ngắm lá phong.\n\n---\n\n### ❌ Các đáp án sai\n\n- **구경해 본:** kinh nghiệm → sai.\n- **구경하고 난:** thứ tự → sai.\n- **구경하기로 한:** quyết định → sai.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄹ 모양이다',
        question: '가 : 민호는 대학 졸업 후에 뭐 한대요?\n나 : 대학원 입학 서류를 준비하는 걸 봤어요. 대학원에 (       ).',
        translationVi: 'A: Minho định làm gì sau khi tốt nghiệp?\nB: Tôi thấy cậu ấy đang chuẩn bị hồ sơ nhập học cao học. Chắc là cậu ấy định học cao học.',
        options: ['가면 돼요', '가게 됐어요', '갈 모양이에요', '갈걸 그랬어요'],
        correctAnswer: '갈 모양이에요',
        explanation: '### ✅ Đáp án đúng\n\n**갈 모양이에요** — 🔮 `V-(으)ㄹ 모양이다`: phỏng đoán dựa trên bằng chứng quan sát\n\n⚡ **Hiểu nhanh:** "có vẻ như" → thấy chuẩn bị hồ sơ → phỏng đoán.\n\n---\n\n### ❌ Các đáp án sai\n\n- **가면 돼요:** điều kiện đủ → sai.\n- **가게 됐어요:** thay đổi hoàn cảnh → sai.\n- **갈걸 그랬어요:** hối tiếc → sai.'
    },
    {
        id: 15,
        type: 'multiple-choice',
        grammarPoint: 'N처럼',
        question: '가 : 저 할머니께서 평생 모은 돈을 대학에 기부하셨대.\n나 : 대단하시다. 요즘(       ) 자신의 이익만 생각하는 시대에 말이야.',
        translationVi: 'A: Nghe nói bà cụ kia đã quyên góp toàn bộ tiền tiết kiệm cả đời cho đại học.\nB: Thật đáng ngưỡng mộ. Trong thời đại mà mọi người chỉ nghĩ đến lợi ích bản thân như bây giờ.',
        options: ['부터', '까지', '이나', '처럼'],
        correctAnswer: '처럼',
        explanation: '### ✅ Đáp án đúng\n\n**처럼** — 🔄 `N처럼`: so sánh, tương đồng "giống như N"\n\n⚡ **Hiểu nhanh:** "như bây giờ" → trong thời đại giống như hiện nay.\n\n---\n\n### ❌ Các đáp án sai\n\n- **부터:** điểm bắt đầu → sai.\n- **까지:** điểm kết thúc → sai.\n- **이나:** lựa chọn/số lượng → sai.'
    },
    {
        id: 16,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄹ 뻔했다',
        question: '가 : 아까 계단에서 뛰어 내려오다가 (       ).\n나 : 계단에서 뛰면 위험해요. 크게 다칠 수 있잖아요.',
        translationVi: 'A: Lúc nãy khi đang chạy xuống cầu thang, tôi suýt nữa thì bị ngã.\nB: Chạy trên cầu thang nguy hiểm lắm. Có thể bị thương nặng đó.',
        options: ['넘어지곤 했어요', '넘어질 뻔했어요', '넘어질지도 몰라요', '넘어질 리가 없어요'],
        correctAnswer: '넘어질 뻔했어요',
        explanation: '### ✅ Đáp án đúng\n\n**넘어질 뻔했어요** — 😅 `V-(으)ㄹ 뻔했다`: suýt nữa đã xảy ra nhưng không xảy ra\n\n⚡ **Hiểu nhanh:** "suýt nữa" → suýt ngã nhưng thực tế không ngã.\n\n---\n\n### ❌ Các đáp án sai\n\n- **넘어지곤 했어요:** thói quen quá khứ → sai.\n- **넘어질지도 몰라요:** phỏng đoán tương lai → sai.\n- **넘어질 리가 없어요:** phủ định mạnh → sai.'
    },
    {
        id: 17,
        type: 'multiple-choice',
        grammarPoint: 'V-는 대로',
        question: '가 : 그 작가가 쓴 책이 곧 나온대요.\n나 : 네, 저도 들었어요. 책이 (       ) 꼭 사 볼 거예요.',
        translationVi: 'A: Nghe nói cuốn sách của tác giả đó sắp ra mắt.\nB: Vâng, tôi cũng nghe rồi. Ngay khi sách ra là tôi sẽ mua đọc thử.',
        options: ['나오는 길에', '나오는 대로', '나오는 데다가', '나오는 대신에'],
        correctAnswer: '나오는 대로',
        explanation: '### ✅ Đáp án đúng\n\n**나오는 대로** — ⚡ `V-는 대로`: hành động được thực hiện ngay sau khi hành động khác kết thúc\n\n⚡ **Hiểu nhanh:** "ngay khi" → ngay khi sách ra, sẽ mua ngay.\n\n---\n\n### ❌ Các đáp án sai\n\n- **나오는 길에:** trên đường → sai.\n- **나오는 데다가:** bổ sung → sai.\n- **나오는 대신에:** thay thế → sai.'
    }
];

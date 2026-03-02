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
        grammarPoint: 'V-다가',
        question: '운동장에서 (       ) 친구와 부딪혀서 넘어졌다.',
        translationVi: 'Trong lúc đang đá bóng ở sân vận động, tôi đã va vào bạn và bị ngã.',
        options: ['축구할수록', '축구하던데', '축구하다가', '축구하려고'],
        correctAnswer: '축구하다가',
        explanation: '### ✅ Đáp án đúng\n\n**축구하다가** — 📘 `V-다가`: hành động đang diễn ra thì bị hành động khác xen vào\n\n🗣️ **Ví dụ:** 운동장에서 **축구하다가** 친구와 부딪혀서 넘어졌다.\n\n📖 **Dịch nghĩa:** Trong lúc đang đá bóng ở sân vận động, tôi đã va vào bạn và bị ngã.\n\n⚡ **Hiểu nhanh:** "đang... thì" → đang đá bóng thì bị va chạm.\n\n---\n\n### ❌ Các đáp án sai\n\n- **축구할수록:** càng... càng → sai.\n- **축구하던데:** hồi tưởng → sai.\n- **축구하려고:** mục đích → sai.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: 'V-고 나서',
        question: '나는 저녁을 (       ) 집 앞 공원에서 산책을 한다.',
        translationVi: 'Tôi đi dạo ở công viên trước nhà sau khi ăn tối.',
        options: ['먹고 나서', '먹다 보면', '먹을 만큼', '먹는 김에'],
        correctAnswer: '먹고 나서',
        explanation: '### ✅ Đáp án đúng\n\n**먹고 나서** — ⏭️ `V-고 나서`: hành động thứ hai xảy ra sau khi hành động thứ nhất hoàn thành\n\n🗣️ **Ví dụ:** 나는 저녁을 **먹고 나서** 집 앞 공원에서 산책을 한다.\n\n📖 **Dịch nghĩa:** Tôi đi dạo ở công viên trước nhà sau khi ăn tối.\n\n⚡ **Hiểu nhanh:** "sau khi hoàn thành" → ăn xong rồi mới đi dạo.\n\n---\n\n### ❌ Các đáp án sai\n\n- **먹다 보면:** nếu cứ làm → sai.\n- **먹을 만큼:** mức độ → sai.\n- **먹는 김에:** nhân tiện → sai.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄴ/는데',
        question: '내일 전시회가 (       ) 사람들이 많이 올 것 같다.',
        translationVi: 'Vì ngày mai triển lãm được tổ chức nên có vẻ sẽ có nhiều người đến.',
        options: ['열리듯이', '열리는데', '열리는지', '열리도록'],
        correctAnswer: '열리는데',
        explanation: '### ✅ Đáp án đúng\n\n**열리는데** — 📝 `V/A-(으)ㄴ/는데`: cung cấp thông tin nền, bối cảnh cho vế sau\n\n🗣️ **Ví dụ:** 내일 전시회가 **열리는데** 사람들이 많이 올 것 같다.\n\n📖 **Dịch nghĩa:** Vì ngày mai triển lãm được tổ chức nên có vẻ sẽ có nhiều người đến.\n\n⚡ **Hiểu nhanh:** "nền/bối cảnh" → triển lãm mở → dẫn dắt đến suy đoán.\n\n---\n\n### ❌ Các đáp án sai\n\n- **열리듯이:** như là → sai.\n- **열리는지:** có... không → sai.\n- **열리도록:** mục đích → sai.'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)려고',
        question: '이번 생일에 딸에게 (       ) 인형을 만들었다.',
        translationVi: 'Tôi đã làm một con búp bê để tặng cho con gái vào sinh nhật lần này.',
        options: ['선물하도록', '선물하든지', '선물하려고', '선물하기에'],
        correctAnswer: '선물하려고',
        explanation: '### ✅ Đáp án đúng\n\n**선물하려고** — 🎯 `V-(으)려고`: mục đích, ý định "để làm/định làm"\n\n🗣️ **Ví dụ:** 이번 생일에 딸에게 **선물하려고** 인형을 만들었다.\n\n📖 **Dịch nghĩa:** Tôi đã làm một con búp bê để tặng cho con gái vào sinh nhật lần này.\n\n⚡ **Hiểu nhanh:** "để làm" → mục đích làm búp bê là để tặng.\n\n---\n\n### ❌ Các đáp án sai\n\n- **선물하도록:** mục đích khách quan → không phù hợp.\n- **선물하든지:** lựa chọn → sai.\n- **선물하기에:** nguyên nhân trang trọng → sai.'
    },
    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)려면',
        question: '일할 때 실수를 하지 (       ) 미리 준비를 해야 한다.',
        translationVi: 'Nếu không muốn mắc lỗi khi làm việc thì phải chuẩn bị trước.',
        options: ['않기에는', '않을수록', '않으려면', '않으니까'],
        correctAnswer: '않으려면',
        explanation: '### ✅ Đáp án đúng\n\n**않으려면** — 🎯 `V-(으)려면`: nếu muốn/định làm A thì (điều kiện/phương pháp cần thiết)\n\n🗣️ **Ví dụ:** 일할 때 실수를 하지 **않으려면** 미리 준비를 해야 한다.\n\n📖 **Dịch nghĩa:** Nếu không muốn mắc lỗi khi làm việc thì phải chuẩn bị trước.\n\n⚡ **Hiểu nhanh:** "nếu muốn" → ý định ở vế trước, điều kiện ở vế sau.\n\n---\n\n### ❌ Các đáp án sai\n\n- **않기에는:** đánh giá → sai.\n- **않을수록:** càng... càng → sai.\n- **않으니까:** nguyên nhân → không phù hợp cấu trúc câu.'
    },
    {
        id: 6,
        type: 'multiple-choice',
        grammarPoint: 'V-느라고',
        question: '급하게 (       ) 우산을 챙겨 나오는 걸 깜빡했다.',
        translationVi: 'Vì vội vàng ra ngoài nên tôi đã quên mang theo ô.',
        options: ['나오는데도', '나오자마자', '나오더라도', '나오느라고'],
        correctAnswer: '나오느라고',
        explanation: '### ✅ Đáp án đúng\n\n**나오느라고** — 🔄 `V-느라고`: vì mải làm A nên dẫn đến kết quả (thường là tiêu cực) ở B\n\n🗣️ **Ví dụ:** 급하게 **나오느라고** 우산을 챙겨 나오는 걸 깜빡했다.\n\n📖 **Dịch nghĩa:** Vì vội vàng ra ngoài nên tôi đã quên mang theo ô.\n\n⚡ **Hiểu nhanh:** "vì mải" → vì mải vội vã nên quên.\n\n---\n\n### ❌ Các đáp án sai\n\n- **나오는데도:** dù → sai.\n- **나오자마자:** ngay sau khi → sai.\n- **나오더라도:** nhượng bộ giả định → sai.'
    },
    {
        id: 7,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어야',
        question: '뭐든지 최선을 (       ) 회사 생활을 잘 할 수 있다.',
        translationVi: 'Bất cứ việc gì cũng phải làm hết sức mình thì mới có thể sinh hoạt tốt ở công ty.',
        options: ['다해야', '다해도', '다하도록', '다하려면'],
        correctAnswer: '다해야',
        explanation: '### ✅ Đáp án đúng\n\n**다해야** — ✅ `V-아/어야`: phải làm V thì (vế sau mới xảy ra), điều kiện cần thiết\n\n🗣️ **Ví dụ:** 뭐든지 최선을 **다해야** 회사 생활을 잘 할 수 있다.\n\n📖 **Dịch nghĩa:** Bất cứ việc gì cũng phải làm hết sức mình thì mới có thể sinh hoạt tốt ở công ty.\n\n⚡ **Hiểu nhanh:** "phải... thì" → điều kiện tiên quyết.\n\n---\n\n### ❌ Các đáp án sai\n\n- **다해도:** dù → sai.\n- **다하도록:** mục đích → sai.\n- **다하려면:** nếu muốn → không mạnh bằng.'
    },
    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄹ까 봐(서)',
        question: '전화번호를 (       ) 휴대 전화에 얼른 저장했다.',
        translationVi: 'Tôi đã nhanh chóng lưu số điện thoại vào di động vì sợ sẽ quên mất.',
        options: ['잊어버릴까 봐서', '잊어버릴 정도로', '잊어버릴 테니까', '잊어버릴 겸해서'],
        correctAnswer: '잊어버릴까 봐서',
        explanation: '### ✅ Đáp án đúng\n\n**잊어버릴까 봐서** — 😰 `V-(으)ㄹ까 봐(서)`: lo lắng về khả năng tiêu cực, thực hiện hành động phòng ngừa\n\n🗣️ **Ví dụ:** 전화번호를 **잊어버릴까 봐서** 휴대 전화에 얼른 저장했다.\n\n📖 **Dịch nghĩa:** Tôi đã nhanh chóng lưu số điện thoại vào di động vì sợ sẽ quên mất.\n\n⚡ **Hiểu nhanh:** "vì sợ" → lo lắng về khả năng quên.\n\n---\n\n### ❌ Các đáp án sai\n\n- **잊어버릴 정도로:** mức độ → sai.\n- **잊어버릴 테니까:** lý do phỏng đoán → sai.\n- **잊어버릴 겸해서:** kết hợp mục đích → sai.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: 'V-거나',
        question: '몸이 (       ) 힘들면 고향 생각이 많이 난다.',
        translationVi: 'Khi cơ thể bị ốm hoặc mệt mỏi, tôi lại nhớ nhà rất nhiều.',
        options: ['아프다면', '아프지만', '아프듯이', '아프거나'],
        correctAnswer: '아프거나',
        explanation: '### ✅ Đáp án đúng\n\n**아프거나** — 🔀 `V/A-거나`: lựa chọn giữa hai hoặc nhiều hành động/trạng thái\n\n🗣️ **Ví dụ:** 몸이 **아프거나** 힘들면 고향 생각이 많이 난다.\n\n📖 **Dịch nghĩa:** Khi cơ thể bị ốm hoặc mệt mỏi, tôi lại nhớ nhà rất nhiều.\n\n⚡ **Hiểu nhanh:** "hoặc" → ốm hoặc mệt đều dẫn đến nhớ nhà.\n\n---\n\n### ❌ Các đáp án sai\n\n- **아프다면:** nếu → sai.\n- **아프지만:** nhưng → sai.\n- **아프듯이:** như là → sai.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: 'V-자마자',
        question: '나는 학교를 (       ) 운전 면허증을 땄다.',
        translationVi: 'Tôi đã lấy bằng lái xe ngay sau khi tốt nghiệp.',
        options: ['졸업하도록', '졸업하든지', '졸업하더라도', '졸업하자마자'],
        correctAnswer: '졸업하자마자',
        explanation: '### ✅ Đáp án đúng\n\n**졸업하자마자** — ⚡ `V-자마자`: hành động xảy ra ngay sau khi hành động khác vừa kết thúc\n\n🗣️ **Ví dụ:** 나는 학교를 **졸업하자마자** 운전 면허증을 땄다.\n\n📖 **Dịch nghĩa:** Tôi đã lấy bằng lái xe ngay sau khi tốt nghiệp.\n\n⚡ **Hiểu nhanh:** "ngay sau khi" → tốt nghiệp xong liền lấy bằng lái.\n\n---\n\n### ❌ Các đáp án sai\n\n- **졸업하도록:** mục đích → sai.\n- **졸업하든지:** lựa chọn → sai.\n- **졸업하더라도:** nhượng bộ → sai.'
    }
];

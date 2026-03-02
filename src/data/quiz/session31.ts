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
        grammarPoint: 'V-아/어 놓다',
        question: '사무실을 청소하면서 중요한 서류인 것 같아서 서랍에 (       ).',
        translationVi: 'Trong lúc dọn dẹp văn phòng, tôi thấy có vẻ là tài liệu quan trọng nên đã cất sẵn vào ngăn kéo.',
        options: ['넣어 놓았다', '넣을 뻔했다', '넣고 있었다', '넣기만 했다'],
        correctAnswer: '넣어 놓았다',
        explanation: '### ✅ Đáp án đúng\n\n**넣어 놓았다** — 📦 `V-아/어 놓다`: làm gì đó trước và giữ nguyên trạng thái để dùng sau\n\n🗣️ **Ví dụ:** 사무실을 청소하면서 중요한 서류인 것 같아서 서랍에 **넣어 놓았다**.\n\n📖 **Dịch nghĩa:** Trong lúc dọn dẹp văn phòng, tôi thấy có vẻ là tài liệu quan trọng nên đã cất sẵn vào ngăn kéo.\n\n⚡ **Hiểu nhanh:** "cất sẵn/làm sẵn" → hành động cất vào ngăn kéo được thực hiện trước để giữ tài liệu ở đó.\n\n---\n\n### ❌ Các đáp án sai\n\n- **넣을 뻔했다:** suýt nữa thì cất vào → 😅 `V-(으)ㄹ 뻔했다` = suýt nữa đã xảy ra → không phù hợp.\n\n- **넣고 있었다:** đang cất vào → 🔄 `V-고 있었다` = đang diễn ra tại một thời điểm trong quá khứ → không nhấn mạnh việc làm trước.\n\n- **넣기만 했다:** chỉ cất vào thôi → 🎯 `V-기만 하다` = chỉ làm một hành động duy nhất → không phù hợp.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: 'V-기로 하다',
        question: '나는 새해에 열심히 운동해서 살을 (       ).',
        translationVi: 'Năm mới tôi đã quyết định sẽ giảm cân bằng cách chăm chỉ tập thể dục.',
        options: ['뺄 뻔했다', '빼기로 했다', '뺄 리가 없다', '빼려던 참이다'],
        correctAnswer: '빼기로 했다',
        explanation: '### ✅ Đáp án đúng\n\n**빼기로 했다** — ✅ `V-기로 하다`: quyết định, lên kế hoạch sẽ làm gì\n\n🗣️ **Ví dụ:** 나는 새해에 열심히 운동해서 살을 **빼기로 했다**.\n\n📖 **Dịch nghĩa:** Năm mới tôi đã quyết định sẽ giảm cân bằng cách chăm chỉ tập thể dục.\n\n⚡ **Hiểu nhanh:** "đã quyết định" → thể hiện một quyết tâm, kế hoạch cho năm mới.\n\n---\n\n### ❌ Các đáp án sai\n\n- **뺄 뻔했다:** suýt nữa thì giảm cân → 😅 `V-(으)ㄹ 뻔했다` = suýt nữa đã xảy ra → sai nghĩa.\n\n- **뺄 리가 없다:** không có lý nào lại giảm cân → 🚫 `V-(으)ㄹ 리가 없다` = phủ định mạnh mẽ → sai nghĩa.\n\n- **빼려던 참이다:** vừa đúng lúc định giảm cân → ⏰ `V-(으)려던 참이다` = đúng lúc đang định làm → không phù hợp với ngữ cảnh kế hoạch năm mới.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)면 된다',
        question: '시험 시작 40분 전까지 강의실에 (       ).',
        translationVi: 'Bạn chỉ cần vào phòng học trước khi bắt đầu thi 40 phút là được.',
        options: ['들어가면 된다', '들어가곤 한다', '들어가게 된다', '들어가기 쉽다'],
        correctAnswer: '들어가면 된다',
        explanation: '### ✅ Đáp án đúng\n\n**들어가면 된다** — ✅ `V-(으)면 된다`: chỉ cần làm V là được/là đủ điều kiện\n\n🗣️ **Ví dụ:** 시험 시작 40분 전까지 강의실에 **들어가면 된다**.\n\n📖 **Dịch nghĩa:** Bạn chỉ cần vào phòng học trước khi bắt đầu thi 40 phút là được.\n\n⚡ **Hiểu nhanh:** "chỉ cần... là được" → điều kiện tối thiểu để đủ yêu cầu.\n\n---\n\n### ❌ Các đáp án sai\n\n- **들어가곤 한다:** `V-곤 하다` = thói quen lặp lại → sai.\n- **들어가게 된다:** `V-게 되다` = thay đổi hoàn cảnh → sai.\n- **들어가기 쉽다:** dễ vào → không phù hợp ngữ cảnh.'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: 'V-게 하다',
        question: '엄마는 아이에게 밤 9시 이후에는 게임을 못 (       ).',
        translationVi: 'Mẹ đã không cho phép con chơi game sau 9 giờ tối.',
        options: ['하곤 했다', '하게 했다', '해야 했다', '할까 했다'],
        correctAnswer: '하게 했다',
        explanation: '### ✅ Đáp án đúng\n\n**하게 했다** — 👨‍⚕️ `V-게 하다`: sai khiến (bắt/khiến/cho phép ai đó làm gì)\n\n🗣️ **Ví dụ:** 엄마는 아이에게 밤 9시 이후에는 게임을 못 **하게 했다**.\n\n📖 **Dịch nghĩa:** Mẹ đã không cho phép con chơi game sau 9 giờ tối.\n\n⚡ **Hiểu nhanh:** "không cho phép" → mẹ sai khiến/khiến cho con không được làm gì đó.\n\n---\n\n### ❌ Các đáp án sai\n\n- **하곤 했다:** thói quen → sai.\n- **해야 했다:** phải làm → sai nghĩa.\n- **할까 했다:** định làm → sai.'
    },
    {
        id: 5,
        type: 'multiple-choice',
        grammarPoint: 'V-게 되다',
        question: '나는 부모님의 뒤를 이어 식당을 (       ).',
        translationVi: 'Tôi đã (trở nên) tiếp quản quán ăn để nối nghiệp bố mẹ.',
        options: ['맡게 됐다', '맡아 놓았다', '맡을 뿐이었다', '맡을 모양이었다'],
        correctAnswer: '맡게 됐다',
        explanation: '### ✅ Đáp án đúng\n\n**맡게 됐다** — 🔄 `V-게 되다`: thay đổi hoàn cảnh, dẫn đến một kết quả mới\n\n🗣️ **Ví dụ:** 나는 부모님의 뒤를 이어 식당을 **맡게 됐다**.\n\n📖 **Dịch nghĩa:** Tôi đã (trở nên) tiếp quản quán ăn để nối nghiệp bố mẹ.\n\n⚡ **Hiểu nhanh:** "trở nên/được" → thay đổi tự nhiên, không phải ý chí cá nhân.\n\n---\n\n### ❌ Các đáp án sai\n\n- **맡아 놓았다:** làm trước → sai.\n- **맡을 뿐이었다:** chỉ có → sai.\n- **맡을 모양이었다:** phỏng đoán → sai.'
    },
    {
        id: 6,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄴ 적이 있다',
        question: '나는 어렸을 때 피아노를 (       ).',
        translationVi: 'Hồi nhỏ tôi đã từng học piano.',
        options: ['배우는 중이다', '배운 적이 있다', '배우려던 참이다', '배울지도 모른다'],
        correctAnswer: '배운 적이 있다',
        explanation: '### ✅ Đáp án đúng\n\n**배운 적이 있다** — 📚 `V-(으)ㄴ 적이 있다`: diễn tả kinh nghiệm đã từng làm gì đó trong quá khứ\n\n🗣️ **Ví dụ:** 나는 어렸을 때 피아노를 **배운 적이 있다**.\n\n📖 **Dịch nghĩa:** Hồi nhỏ tôi đã từng học piano.\n\n⚡ **Hiểu nhanh:** "đã từng" → kinh nghiệm trong quá khứ.\n\n---\n\n### ❌ Các đáp án sai\n\n- **배우는 중이다:** đang học → hiện tại.\n- **배우려던 참이다:** định học → sai.\n- **배울지도 모른다:** có thể sẽ → tương lai.'
    },
    {
        id: 7,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어 있다',
        question: '조금 전에 은행에 갔다 왔는데 문이 (       ).',
        translationVi: 'Tôi vừa mới đi ngân hàng về thì (thấy) cửa đã đóng rồi.',
        options: ['닫힌 셈이다', '닫혀 있었다', '닫힐 뻔했다', '닫혔을 뿐이다'],
        correctAnswer: '닫혀 있었다',
        explanation: '### ✅ Đáp án đúng\n\n**닫혀 있었다** — 🔒 `V-아/어 있다`: trạng thái bị động, (vẫn) đang ở trạng thái kết quả của hành động đã hoàn tất\n\n🗣️ **Ví dụ:** 조금 전에 은행에 갔다 왔는데 문이 **닫혀 있었다**.\n\n📖 **Dịch nghĩa:** Tôi vừa mới đi ngân hàng về thì (thấy) cửa đã đóng rồi.\n\n⚡ **Hiểu nhanh:** "đã đóng (và vẫn đóng)" → trạng thái kết quả.\n\n---\n\n### ❌ Các đáp án sai\n\n- **닫힌 셈이다:** coi như → sai.\n- **닫힐 뻔했다:** suýt đóng → sai.\n- **닫혔을 뿐이다:** chỉ có đóng → sai.'
    },
    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어 가다',
        question: '한국어를 배운 지 거의 2년이 다 (       ).',
        translationVi: 'Tôi học tiếng Hàn cũng sắp được 2 năm rồi.',
        options: ['되어 간다', '되면 좋겠다', '되어야 한다', '되기로 했다'],
        correctAnswer: '되어 간다',
        explanation: '### ✅ Đáp án đúng\n\n**되어 간다** — 📈 `V-아/어 가다`: quá trình thay đổi đang diễn ra và tiếp tục hướng về tương lai\n\n🗣️ **Ví dụ:** 한국어를 배운 지 거의 2년이 다 **되어 간다**.\n\n📖 **Dịch nghĩa:** Tôi học tiếng Hàn cũng sắp được 2 năm rồi.\n\n⚡ **Hiểu nhanh:** "dần dần → tương lai" → quá trình tiến dần đến 2 năm.\n\n---\n\n### ❌ Các đáp án sai\n\n- **되면 좋겠다:** hy vọng → sai.\n- **되어야 한다:** phải → sai.\n- **되기로 했다:** quyết định → sai.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: 'V-(으)ㄴ/는 셈이다',
        question: '고객들에게 안내장을 보냈으니까 모든 준비를 (       ).',
        translationVi: 'Vì đã gửi thư hướng dẫn cho khách hàng rồi nên coi như là đã hoàn thành mọi sự chuẩn bị.',
        options: ['마친 셈이다', '마치려던 참이다', '마치기 마련이다', '마치기 십상이다'],
        correctAnswer: '마친 셈이다',
        explanation: '### ✅ Đáp án đúng\n\n**마친 셈이다** — 🎭 `V-(으)ㄴ/는 셈이다`: coi như là, gần như là\n\n🗣️ **Ví dụ:** 고객들에게 안내장을 보냈으니까 모든 준비를 **마친 셈이다**.\n\n📖 **Dịch nghĩa:** Vì đã gửi thư hướng dẫn cho khách hàng rồi nên coi như là đã hoàn thành mọi sự chuẩn bị.\n\n⚡ **Hiểu nhanh:** "coi như" → đánh giá tương đương.\n\n---\n\n### ❌ Các đáp án sai\n\n- **마치려던 참이다:** định làm → sai.\n- **마치기 마련이다:** đương nhiên → sai.\n- **마치기 십상이다:** dễ xảy ra tiêu cực → sai.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: 'V-아/어 오다',
        question: '그 의사는 20년간 환자들을 무료로 (       ).',
        translationVi: 'Vị bác sĩ đó đã điều trị miễn phí cho bệnh nhân suốt 20 năm qua.',
        options: ['치료해 왔다', '치료하게 했다', '치료하는 법이다', '치료하려던 참이다'],
        correctAnswer: '치료해 왔다',
        explanation: '### ✅ Đáp án đúng\n\n**치료해 왔다** — ⬅️ `V-아/어 오다`: hành động bắt đầu trong quá khứ và kéo dài liên tục đến hiện tại\n\n🗣️ **Ví dụ:** 그 의사는 20년간 환자들을 무료로 **치료해 왔다**.\n\n📖 **Dịch nghĩa:** Vị bác sĩ đó đã điều trị miễn phí cho bệnh nhân suốt 20 năm qua.\n\n⚡ **Hiểu nhanh:** "đã... và vẫn đang" → từ quá khứ đến hiện tại.\n\n---\n\n### ❌ Các đáp án sai\n\n- **치료하게 했다:** sai khiến → sai.\n- **치료하는 법이다:** điều hiển nhiên → sai.\n- **치료하려던 참이다:** định làm → sai.'
    }
];

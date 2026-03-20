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
        question: 'Chọn câu tự nhiên nhất cho nghĩa: "Bây giờ Minsu đang uống nước."',
        options: ['지금 민수는 물을 마시고 있어요. (Bây giờ Minsu đang uống nước.)', '지금 민수는 물을 마셔 있어요. (Bây giờ Minsu uống nước.)', '지금 민수는 물을 마시어 있어요. (Bây giờ Minsu đang uống nước.)', '지금 민수는 물을 마시어요. (Bây giờ Minsu uống nước.)'],
        correctAnswer: '지금 민수는 물을 마시고 있어요. (Bây giờ Minsu đang uống nước.)',
        explanation: 'Hanh dong dang xay ra ngay luc noi thi dung -고 있다.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: 'Nghĩa 1 và Nghĩa 2 (-고 있다)',
        question: 'Câu "Suji bây giờ đang ăn cơm" thuộc nghĩa nào?',
        options: ['Nghĩa 1: hành động đang diễn ra', 'Nghĩa 2: trạng thái kết quả duy trì', 'Nghĩa 3: mệnh lệnh', 'Nghĩa 4: quá khứ'],
        correctAnswer: 'Nghĩa 1: hành động đang diễn ra',
        explanation: 'Dịch: "Suji bây giờ đang ăn cơm." Có 지금 và động từ hành động nên là Nghĩa 1.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: 'Nghĩa 1 và Nghĩa 2 (-고 있다)',
        question: 'Câu trong ngoặc (저는 그 사람을 믿고 있어요.) thuộc nghĩa tiếng Việt nào?',
        options: ['Nghĩa 1: hành động đang diễn ra', 'Nghĩa 2: trạng thái kết quả duy trì', 'Nghĩa 3: phủ định', 'Nghĩa 4: đề nghị'],
        correctAnswer: 'Nghĩa 2: trạng thái kết quả duy trì',
        explanation: 'Dịch: "Tôi đang tin người đó." Với 믿다, câu này thể hiện trạng thái đang tin (không phải hành động đang diễn ra trực tiếp).'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: 'Nghĩa 1 và Nghĩa 2 (-고 있다)',
        question: 'Câu "저는 그 비밀번호를 알고 있어요." thuộc nghĩa nào?',
        options: ['Nghĩa 1: hành động đang diễn ra', 'Nghĩa 2: trạng thái kết quả duy trì', 'Nghĩa 3: quá khứ', 'Nghĩa 4: mệnh lệnh'],
        correctAnswer: 'Nghĩa 2: trạng thái kết quả duy trì',
        explanation: 'Dịch: "Tôi biết mật khẩu đó." 알다 + -고 있다 diễn tả trạng thái đang biết, nên là Nghĩa 2.'
    },
    {
        id: 5,
        type: 'fill-input',
        grammarPoint: '-고 있다',
        question: '가: 지금 뭐 해요?\n나: 책을 ____. (읽다)',
        correctAnswer: '읽고 있어요',
        explanation: '읽다 -> 읽고 있어요.'
    },
    {
        id: 6,
        type: 'fill-input',
        grammarPoint: '-고 있다',
        question: '가: 왜 전화를 안 받았어요?\n나: 지갑을 ____. (찾다)',
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
        grammarPoint: '-고 있다 (Phủ định)',
        question: 'Chọn cách viết đúng cho nghĩa: "Bây giờ trời đang không mưa."',
        options: ['지금 비가 오고 있지 않아요.', '지금 비가 오고 없어요.', '지금 비가 오고 안 있어요.', '지금 비가 와 있지 않아요.'],
        correctAnswer: '지금 비가 오고 있지 않아요.',
        explanation: '### ✅ Đáp án đúng\n\n**지금 비가 오고 있지 않아요.**\n\n- Dịch tự nhiên: **Bây giờ trời không mưa / không đang mưa.**\n- Mẫu phủ định đúng của **-고 있다** là: **-고 있지 않다**.\n\n### 🧠 Ghi nhớ nhanh\n\n- **오고 있다**: đang mưa\n- **오고 있지 않아요**: không đang mưa\n\n### ❌ Vì sao các đáp án khác sai\n\n- **지금 비가 오고 없어요.**: sai cấu trúc phủ định, không dùng **없어요** sau **-고** kiểu này.\n- **지금 비가 오고 안 있어요.**: sai vì không đặt **안** trực tiếp trước **있어요** trong mẫu này.\n- **지금 비가 와 있지 않아요.**: nghiêng về sắc thái trạng thái kết quả, không phù hợp ý "đang mưa" trong ngữ cảnh câu này.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: '-고 계시다',
        question: 'Chọn câu kính ngữ đúng: "Ông đang đọc báo."',
        options: ['할아버지께서 신문을 보고 계세요.', '할아버지는 신문을 보고 있어요.', '할아버지께서 신문이 보고 계세요.', '할아버지께서 신문을 보고 있으세요.'],
        correctAnswer: '할아버지께서 신문을 보고 계세요.',
        explanation: '### ✅ Đáp án đúng\n\n**할아버지께서 신문을 보고 계세요.**\n\n- Dịch: **Ông đang đọc báo.**\n- Khi nâng chủ ngữ (ông/bà/thầy/cô...), ưu tiên dùng **께서** + mẫu kính ngữ **-고 계시다**.\n\n### 🧠 Ghi nhớ nhanh\n\n- Trung tính: **보고 있어요**\n- Kính ngữ (nâng chủ ngữ): **보고 계세요**\n\n### ❌ Vì sao các đáp án khác sai\n\n- **할아버지는 신문을 보고 있어요.**: dùng **은/는** và **-고 있어요** (không sai ngữ pháp), nhưng **không phải dạng kính ngữ chuẩn** mà đề yêu cầu.\n- **할아버지께서 신문이 보고 계세요.**: sai trợ từ tân ngữ; ở đây phải là **신문을**.\n- **할아버지께서 신문을 보고 있으세요.**: có thể gặp trong hội thoại, nhưng trong bài này chọn dạng chuẩn dạy học là **보고 계세요**.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: '-고 있었다',
        question: '어제 집에 왔을 때 동생이 ____.',
        options: ['자고 있었어요', '잤고 있었어요', '자고 있어요', '자겠어요'],
        correctAnswer: '자고 있었어요',
        explanation: '### ✅ Đáp án đúng\n\n**자고 있었어요 (lúc đó đang ngủ)**\n\n- Dịch: **Lúc đó em đang ngủ.**\n- Bối cảnh quá khứ: **어제 ... 왔을 때** (hôm qua, khi tôi về nhà).\n- Vì vậy cần dùng **-고 있었다** để diễn tả hành động đang diễn ra tại một thời điểm trong quá khứ.\n\n### 🧠 Ghi nhớ nhanh\n\n- Hiện tại tiếp diễn: **-고 있어요**\n- Quá khứ tiếp diễn: **-고 있었어요**\n\n### ❌ Vì sao các đáp án khác sai\n\n- **잤고 있었어요**: sai cấu trúc, không ghép quá khứ kiểu này với **-고 있었어요**.\n- **자고 있어요**: là hiện tại tiếp diễn, không khớp ngữ cảnh quá khứ.\n- **자겠어요**: diễn tả ý đoán/ý chí tương lai, không phù hợp ngữ cảnh câu.'
    },
    {
        id: 11,
        type: 'fill-input',
        grammarPoint: 'Đúng/Sai + sửa lỗi (-고 있다)',
        question: 'Câu sau sai. Hãy viết lại cho đúng:\n날씨가 춥고 있어요.',
        correctAnswer: ['날씨가 추워요.', '날씨가 추워요'],
        explanation: '### ✅ Câu đúng\n\n**날씨가 추워요.**\n\n### 🧠 Vì sao sai\n\n- **춥다** là tính từ (trạng thái), không dùng với mẫu tiến hành **-고 있다** trong câu này.\n- Vì vậy không nói **춥고 있어요**.'
    },
    {
        id: 12,
        type: 'fill-input',
        grammarPoint: 'Đúng/Sai + sửa lỗi (-고 있다)',
        question: 'Câu sau sai. Hãy viết lại cho đúng:\n할아버지께서 신문을 보고 있으세요.',
        correctAnswer: ['할아버지께서 신문을 보고 계세요.', '할아버지께서 신문을 보고 계세요'],
        explanation: '### ✅ Câu đúng\n\n**할아버지께서 신문을 보고 계세요.**\n\n### 🧠 Vì sao sai\n\n- Với chủ ngữ cần kính ngữ, dạng chuẩn là **-고 계시다**.\n- Vì vậy đổi **보고 있으세요** thành **보고 계세요** trong bài này.'
    },
    {
        id: 13,
        type: 'fill-input',
        grammarPoint: 'Đúng/Sai + sửa lỗi (-고 있다)',
        question: 'Câu sau sai. Hãy viết lại cho đúng:\n눈이 내렸고 있었어요.',
        correctAnswer: ['눈이 내리고 있었어요.', '눈이 내리고 있었어요'],
        explanation: '### ✅ Câu đúng\n\n**눈이 내리고 있었어요.**\n\n### 🧠 Vì sao sai\n\n- Quá khứ tiếp diễn dùng mẫu **-고 있었다**.\n- Không ghép kiểu **내렸고 있었어요**; dạng đúng là **내리고 있었어요**.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: '-고 있다',
        question: 'Chọn cách viết đúng cho nghĩa: "Suji đang đội mũ đỏ."',
        options: ['쓰고 있어요.', '써 있어요.', '쓰고 있었어요.', '썼어요.'],
        correctAnswer: '쓰고 있어요.',
        explanation: '### ✅ Đáp án đúng\n\n**쓰고 있어요.**\n\n- Dịch: **(Suji) đang đội mũ đỏ.**\n- Với ngữ cảnh hiện tại đang diễn ra, dùng mẫu **-고 있다**.\n\n### ❌ Vì sao các đáp án khác sai\n\n- **써 있어요.**: không dùng mẫu này trong câu mục tiêu của bài.\n- **쓰고 있었어요.**: là quá khứ tiếp diễn, không khớp nghĩa hiện tại.\n- **썼어요.**: là quá khứ đơn (đã đội), không phải đang đội.'
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
        question: '지수 씨는 의자에 ____.',
        options: ['앉아 있어요.', '앉고 있어요.', '앉아요.', '앉았어요.'],
        correctAnswer: '앉아 있어요.',
        explanation: '### ✅ Đáp án đúng\n\n**지수 씨는 의자에 앉아 있어요.**\n\n- Dịch: **Jisu đang ngồi trên ghế.**\n- Với tư thế đang duy trì, dùng mẫu **-아/어 있다**.\n\n### 🧠 Ghi nhớ nhanh\n\n- Tư thế hiện tại: **앉아 있어요** (đang ngồi)\n- Tư thế quá khứ: **앉아 있었어요** (đã ngồi)\n\n### ❌ Vì sao các đáp án khác sai\n\n- **앉고 있어요.**: không dùng mẫu này cho nghĩa tư thế duy trì trong bài.\n- **앉아요.**: hiện tại đơn, không nhấn trạng thái đang duy trì.\n- **앉았어요.**: quá khứ đơn (đã ngồi), không đúng ý câu.'
    },
    {
        id: 17,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: 'Chọn cách viết đúng cho nghĩa: "Thầy giáo đang đứng trước lớp học."',
        options: ['선생님은 교실 앞에 서 있어요.', '선생님은 교실 앞에 서고 있어요.', '선생님은 교실 앞에 서요.', '선생님은 교실 앞에 섰어요.'],
        correctAnswer: '선생님은 교실 앞에 서 있어요.',
        explanation: '### ✅ Đáp án đúng\n\n**선생님은 교실 앞에 서 있어요.**\n\n- Dịch: **Thầy giáo đang đứng trước lớp học.**\n- Với tư thế đứng đang duy trì, dùng mẫu **-아/어 있다**.\n\n### ❌ Vì sao các đáp án khác sai\n\n- **선생님은 교실 앞에 서고 있어요.**: không dùng mẫu **-고 있다** cho nghĩa tư thế duy trì.\n- **선생님은 교실 앞에 서요.**: hiện tại đơn, không nhấn trạng thái đang duy trì.\n- **선생님은 교실 앞에 섰어요.**: quá khứ đơn (đã đứng), không đúng ý câu.'
    },
    {
        id: 18,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: 'Chọn cách viết đúng cho nghĩa: "Em bé đang nằm trên giường."',
        options: ['아기는 침대에 누워 있어요.', '아기는 침대에 눕고 있어요.', '아기는 침대에 누워요.', '아기는 침대에 누웠어요.'],
        correctAnswer: '아기는 침대에 누워 있어요.',
        explanation: '### ✅ Đáp án đúng\n\n**아기는 침대에 누워 있어요.**\n\n- Dịch: **Em bé đang nằm trên giường.**\n- Với tư thế đang duy trì (nằm), dùng mẫu **-아/어 있다**.\n\n### ❌ Vì sao các đáp án khác sai\n\n- **아기는 침대에 눕고 있어요.**: không dùng mẫu **-고 있다** cho nghĩa tư thế duy trì trong bài này.\n- **아기는 침대에 누워요.**: hiện tại đơn, không nhấn trạng thái đang duy trì.\n- **아기는 침대에 누웠어요.**: quá khứ đơn (đã nằm), không đúng ý câu.'
    },
    {
        id: 19,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: 'Chọn cách viết đúng cho nghĩa: "Trong lớp chỉ còn lại hai học sinh."',
        options: ['교실에 학생이 두 명만 남아 있어요.', '교실에 학생이 두 명만 남고 있어요.', '교실에 학생이 두 명만 남아요.', '교실에 학생이 두 명만 남았어요.'],
        correctAnswer: '교실에 학생이 두 명만 남아 있어요.',
        explanation: '### ✅ Đáp án đúng\n\n**교실에 학생이 두 명만 남아 있어요.**\n\n- Dịch: **Trong lớp chỉ còn lại hai học sinh.**\n- Với nghĩa trạng thái "còn lại và đang ở đó", dùng **남아 있다**.\n\n### ❌ Vì sao các đáp án khác sai\n\n- **교실에 학생이 두 명만 남고 있어요.**: không dùng **-고 있다** cho nghĩa trạng thái còn lại trong mẫu này.\n- **교실에 학생이 두 명만 남아요.**: hiện tại đơn, không nhấn trạng thái duy trì.\n- **교실에 학생이 두 명만 남았어요.**: quá khứ đơn, không nhấn trạng thái hiện tại.'
    },
    {
        id: 20,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: 'Chọn cách viết đúng cho nghĩa: "Em trai tôi đã sang Hàn Quốc (và hiện đang ở đó)."',
        options: ['동생은 지금 한국에 가 있어요.', '동생은 지금 한국에 가고 있어요.', '동생은 지금 한국에 가요.', '동생은 지금 한국에 갔어요.'],
        correctAnswer: '동생은 지금 한국에 가 있어요.',
        explanation: '### ✅ Đáp án đúng\n\n**동생은 지금 한국에 가 있어요.**\n\n- Dịch: **Em trai tôi đã sang Hàn Quốc và hiện đang ở đó.**\n- Với nghĩa "đã đi đến nơi đó và đang ở đó", dùng mẫu **가 있다** (thuộc nhóm **-아/어 있다**).\n\n### ❌ Vì sao các đáp án khác sai\n\n- **동생은 지금 한국에 가고 있어요.**: nghĩa là **đang trên đường đi sang Hàn**, không phải đã ở đó.\n- **동생은 지금 한국에 가요.**: hiện tại đơn/thói quen, không thể hiện trạng thái đã đến và đang ở.\n- **동생은 지금 한국에 갔어요.**: chỉ nói đã đi, không nhấn trạng thái hiện đang ở đó.'
    },
    {
        id: 21,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: 'Chọn cách viết đúng cho nghĩa: "Bạn tôi đã đến trường từ sớm (và đang ở đó)."',
        options: ['친구는 벌써 학교에 와 있어요.', '친구는 벌써 학교에 오고 있어요.', '친구는 벌써 학교에 와요.', '친구는 벌써 학교에 왔어요.'],
        correctAnswer: '친구는 벌써 학교에 와 있어요.',
        explanation: '### ✅ Đáp án đúng\n\n**친구는 벌써 학교에 와 있어요.**\n\n- Dịch: **Bạn tôi đã đến trường từ sớm và hiện đang ở đó.**\n- Với nghĩa "đã đến rồi và đang ở đó", dùng **와 있다**.\n\n### ❌ Vì sao các đáp án khác sai\n\n- **친구는 벌써 학교에 오고 있어요.**: nghĩa là đang trên đường đến, chưa nhấn trạng thái đã có mặt ở trường.\n- **친구는 벌써 학교에 와요.**: hiện tại đơn/thói quen.\n- **친구는 벌써 학교에 왔어요.**: chỉ nêu sự kiện đã đến, không nhấn trạng thái đang ở đó.'
    },
    {
        id: 22,
        type: 'fill-input',
        grammarPoint: '-아/어 있다',
        question: 'Điền vào chỗ trống:\n학생들이 운동장에 ____. (서다)',
        correctAnswer: '서 있어요',
        explanation: '### ✅ Đáp án đúng\n\n**서 있어요**\n\n- Hoàn chỉnh: **학생들이 운동장에 서 있어요.**\n- Dùng **-아/어 있다** để diễn tả tư thế đang duy trì (đứng).'
    },
    {
        id: 23,
        type: 'fill-input',
        grammarPoint: '-아/어 있다',
        question: 'Điền vào chỗ trống:\n아기가 침대에 ____. (눕다)',
        correctAnswer: '누워 있어요',
        explanation: '### ✅ Đáp án đúng\n\n**누워 있어요**\n\n- Hoàn chỉnh: **아기가 침대에 누워 있어요.**\n- Với tư thế nằm đang duy trì, dùng **-아/어 있다**.'
    },
    {
        id: 24,
        type: 'fill-input',
        grammarPoint: '-아/어 있다',
        question: 'Điền vào chỗ trống:\n교실에 두 명만 ____. (남다)',
        correctAnswer: '남아 있어요',
        explanation: '### ✅ Đáp án đúng\n\n**남아 있어요**\n\n- Hoàn chỉnh: **교실에 두 명만 남아 있어요.**\n- **남아 있다** diễn tả trạng thái còn lại và đang duy trì.'
    },
    {
        id: 25,
        type: 'fill-input',
        grammarPoint: '-아/어 있다',
        question: 'Điền vào chỗ trống:\n교실 문이 ____. (열리다)',
        correctAnswer: ['열려 있어요', '열려 있어요.'],
        explanation: '### ✅ Đáp án đúng\n\n**열려 있어요**\n\n- Hoàn chỉnh: **교실 문이 열려 있어요.**\n- Dịch: **Cửa lớp học đang mở.**\n- Đây là trạng thái kết quả đang duy trì, nên dùng **-아/어 있다**.'
    },
    {
        id: 26,
        type: 'fill-input',
        grammarPoint: 'Đúng/Sai + sửa lỗi (-아/어 있다)',
        question: 'Câu sau sai. Hãy viết lại cho đúng:\n지금 영수는 의자에 앉고 있어요.',
        correctAnswer: ['지금 영수는 의자에 앉아 있어요.', '지금 영수는 의자에 앉아 있어요'],
        explanation: '### ✅ Câu đúng\n\n**지금 영수는 의자에 앉아 있어요.**\n\n### 🧠 Vì sao sai\n\n- Mẫu tư thế duy trì với **앉다** là **앉아 있다**.\n- Vì vậy không dùng **앉고 있어요** trong ngữ cảnh này.'
    },
    {
        id: 27,
        type: 'fill-input',
        grammarPoint: 'Đúng/Sai + sửa lỗi (-아/어 있다)',
        question: 'Câu sau sai. Hãy viết lại cho đúng:\n아기는 침대에 눕고 있어요.',
        correctAnswer: ['아기는 침대에 누워 있어요.', '아기는 침대에 누워 있어요'],
        explanation: '### ✅ Câu đúng\n\n**아기는 침대에 누워 있어요.**\n\n### 🧠 Vì sao sai\n\n- Với tư thế nằm đang duy trì, dùng **누워 있다**.\n- Dạng **눕고 있어요** không phù hợp mục tiêu ngữ pháp của câu này.'
    },
    {
        id: 28,
        type: 'fill-input',
        grammarPoint: 'Đúng/Sai + sửa lỗi (-아/어 있다)',
        question: 'Câu sau sai. Hãy viết lại cho đúng:\n교실에 학생이 남고 있어요.',
        correctAnswer: ['교실에 학생이 남아 있어요.', '교실에 학생이 남아 있어요'],
        explanation: '### ✅ Câu đúng\n\n**교실에 학생이 남아 있어요.**\n\n### 🧠 Vì sao sai\n\n- Với nghĩa "còn lại và đang ở đó", dùng **남아 있다**.\n- Vì vậy sửa **남고 있어요** thành **남아 있어요**.'
    },
    {
        id: 29,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다 vs -고 있다',
        question: 'Chọn cách viết đúng cho nghĩa: "Các học sinh đang đứng thành hàng."',
        options: ['학생들은 줄에 서 있어요.', '학생들은 줄에 서고 있어요.', '학생들은 줄에 서어요.', '학생들은 줄에 섰어요.'],
        correctAnswer: '학생들은 줄에 서 있어요.',
        explanation: '### ✅ Đáp án đúng\n\n**학생들은 줄에 서 있어요.**\n\n- Dịch: **Các học sinh đang đứng thành hàng.**\n- Với tư thế đang duy trì (đứng), ưu tiên **-아/어 있다**.\n\n### ❌ Vì sao các đáp án khác sai\n\n- **학생들은 줄에 서고 있어요.**: không phù hợp mẫu tư thế duy trì trong bài.\n- **학생들은 줄에 서어요.**: chia động từ không tự nhiên trong ngữ cảnh này.\n- **학생들은 줄에 섰어요.**: quá khứ đơn (đã đứng), không nhấn trạng thái hiện tại.'
    },
    {
        id: 30,
        type: 'multiple-choice',
        grammarPoint: '-아/어 있다',
        question: 'Câu nào đúng trong ngữ cảnh: "Tôi đã đến trường từ trước (và đang ở trường)."?',
        options: ['저는 학교에 와 있어요.', '저는 학교에 오고 있어요.', '저는 학교에 와요.', '저는 학교에 갔어요.'],
        correctAnswer: '저는 학교에 와 있어요.',
        explanation: '### ✅ Đáp án đúng\n\n**저는 학교에 와 있어요.**\n\n- Dịch: **Tôi đã đến trường từ trước và hiện đang ở trường.**\n- Mẫu **와 있다** nhấn mạnh trạng thái đã đến và đang ở đó.\n\n### ❌ Vì sao các đáp án khác sai\n\n- **저는 학교에 오고 있어요.**: nghĩa là đang trên đường đến trường.\n- **저는 학교에 와요.**: hiện tại đơn/thói quen.\n- **저는 학교에 갔어요.**: chỉ nêu quá khứ đã đi, không nhấn trạng thái đang ở đó.'
    }
];

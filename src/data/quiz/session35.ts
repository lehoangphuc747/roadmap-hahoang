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
        grammarPoint: '-ê³  ìžˆë‹¤',
        question: 'Chá»n cÃ¢u tá»± nhiÃªn nháº¥t cho nghÄ©a: "BÃ¢y giá» Minsu Ä‘ang uá»‘ng nÆ°á»›c."',
        options: ['ì§€ê¸ˆ ë¯¼ìˆ˜ëŠ” ë¬¼ì„ ë§ˆì‹œê³  ìžˆì–´ìš”. (BÃ¢y giá» Minsu Ä‘ang uá»‘ng nÆ°á»›c.)', 'ì§€ê¸ˆ ë¯¼ìˆ˜ëŠ” ë¬¼ì„ ë§ˆì…” ìžˆì–´ìš”. (BÃ¢y giá» Minsu uá»‘ng nÆ°á»›c.)', 'ì§€ê¸ˆ ë¯¼ìˆ˜ëŠ” ë¬¼ì„ ë§ˆì‹œì–´ ìžˆì–´ìš”. (BÃ¢y giá» Minsu Ä‘ang uá»‘ng nÆ°á»›c.)', 'ì§€ê¸ˆ ë¯¼ìˆ˜ëŠ” ë¬¼ì„ ë§ˆì‹œì–´ìš”. (BÃ¢y giá» Minsu uá»‘ng nÆ°á»›c.)'],
        correctAnswer: 'ì§€ê¸ˆ ë¯¼ìˆ˜ëŠ” ë¬¼ì„ ë§ˆì‹œê³  ìžˆì–´ìš”. (BÃ¢y giá» Minsu Ä‘ang uá»‘ng nÆ°á»›c.)',
        explanation: 'Hanh dong dang xay ra ngay luc noi thi dung -ê³  ìžˆë‹¤.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        grammarPoint: 'NghÄ©a 1 vÃ  NghÄ©a 2 (-ê³  ìžˆë‹¤)',
        question: 'CÃ¢u "Suji bÃ¢y giá» Ä‘ang Äƒn cÆ¡m" thuá»™c nghÄ©a nÃ o?',
        options: ['NghÄ©a 1: hÃ nh Ä‘á»™ng Ä‘ang diá»…n ra', 'NghÄ©a 2: tráº¡ng thÃ¡i káº¿t quáº£ duy trÃ¬', 'NghÄ©a 3: má»‡nh lá»‡nh', 'NghÄ©a 4: quÃ¡ khá»©'],
        correctAnswer: 'NghÄ©a 1: hÃ nh Ä‘á»™ng Ä‘ang diá»…n ra',
        explanation: 'Dá»‹ch: "Suji bÃ¢y giá» Ä‘ang Äƒn cÆ¡m." CÃ³ ì§€ê¸ˆ vÃ  Ä‘á»™ng tá»« hÃ nh Ä‘á»™ng nÃªn lÃ  NghÄ©a 1.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        grammarPoint: 'NghÄ©a 1 vÃ  NghÄ©a 2 (-ê³  ìžˆë‹¤)',
        question: 'CÃ¢u trong ngoáº·c (ì €ëŠ” ê·¸ ì‚¬ëžŒì„ ë¯¿ê³  ìžˆì–´ìš”.) thuá»™c nghÄ©a tiáº¿ng Viá»‡t nÃ o?',
        options: ['NghÄ©a 1: hÃ nh Ä‘á»™ng Ä‘ang diá»…n ra', 'NghÄ©a 2: tráº¡ng thÃ¡i káº¿t quáº£ duy trÃ¬', 'NghÄ©a 3: phá»§ Ä‘á»‹nh', 'NghÄ©a 4: Ä‘á» nghá»‹'],
        correctAnswer: 'NghÄ©a 2: tráº¡ng thÃ¡i káº¿t quáº£ duy trÃ¬',
        explanation: 'Dá»‹ch: "TÃ´i Ä‘ang tin ngÆ°á»i Ä‘Ã³." Vá»›i ë¯¿ë‹¤, cÃ¢u nÃ y thá»ƒ hiá»‡n tráº¡ng thÃ¡i Ä‘ang tin (khÃ´ng pháº£i hÃ nh Ä‘á»™ng Ä‘ang diá»…n ra trá»±c tiáº¿p).'
    },
    {
        id: 4,
        type: 'multiple-choice',
        grammarPoint: 'NghÄ©a 1 vÃ  NghÄ©a 2 (-ê³  ìžˆë‹¤)',
        question: 'CÃ¢u "ì €ëŠ” ê·¸ ë¹„ë°€ë²ˆí˜¸ë¥¼ ì•Œê³  ìžˆì–´ìš”." thuá»™c nghÄ©a nÃ o?',
        options: ['NghÄ©a 1: hÃ nh Ä‘á»™ng Ä‘ang diá»…n ra', 'NghÄ©a 2: tráº¡ng thÃ¡i káº¿t quáº£ duy trÃ¬', 'NghÄ©a 3: quÃ¡ khá»©', 'NghÄ©a 4: má»‡nh lá»‡nh'],
        correctAnswer: 'NghÄ©a 2: tráº¡ng thÃ¡i káº¿t quáº£ duy trÃ¬',
        explanation: 'Dá»‹ch: "TÃ´i biáº¿t máº­t kháº©u Ä‘Ã³." ì•Œë‹¤ + -ê³  ìžˆë‹¤ diá»…n táº£ tráº¡ng thÃ¡i Ä‘ang biáº¿t, nÃªn lÃ  NghÄ©a 2.'
    },
    {
        id: 5,
        type: 'fill-input',
        grammarPoint: '-ê³  ìžˆë‹¤',
        question: 'ê°€: ì§€ê¸ˆ ë­ í•´ìš”?\në‚˜: ì±…ì„ ____. (ì½ë‹¤)',
        correctAnswer: 'ì½ê³  ìžˆì–´ìš”',
        explanation: 'ì½ë‹¤ -> ì½ê³  ìžˆì–´ìš”.'
    },
    {
        id: 6,
        type: 'fill-input',
        grammarPoint: '-ê³  ìžˆë‹¤',
        question: 'ê°€: ì™œ ì „í™”ë¥¼ ì•ˆ ë°›ì•˜ì–´ìš”?\në‚˜: ì§€ê°‘ì„ ____. (ì°¾ë‹¤)',
        correctAnswer: 'ì°¾ê³  ìžˆì–´ìš”',
        explanation: 'ì°¾ë‹¤ -> ì°¾ê³  ìžˆì–´ìš”.'
    },
    {
        id: 7,
        type: 'fill-input',
        grammarPoint: '-ê³  ìžˆë‹¤',
        question: 'ìš”ì¦˜ í•œêµ­ì–´ë¥¼ ì—´ì‹¬ížˆ ____. (ê³µë¶€í•˜ë‹¤)',
        correctAnswer: 'ê³µë¶€í•˜ê³  ìžˆì–´ìš”',
        explanation: 'ìš”ì¦˜ + -ê³  ìžˆë‹¤: hanh dong lap lai trong giai doan nay.'
    },
    {
        id: 8,
        type: 'multiple-choice',
        grammarPoint: '-ê³  ìžˆë‹¤ (Phá»§ Ä‘á»‹nh)',
        question: 'Chá»n cÃ¡ch viáº¿t Ä‘Ãºng cho nghÄ©a: "BÃ¢y giá» trá»i Ä‘ang khÃ´ng mÆ°a."',
        options: ['ì§€ê¸ˆ ë¹„ê°€ ì˜¤ê³  ìžˆì§€ ì•Šì•„ìš”.', 'ì§€ê¸ˆ ë¹„ê°€ ì˜¤ê³  ì—†ì–´ìš”.', 'ì§€ê¸ˆ ë¹„ê°€ ì˜¤ê³  ì•ˆ ìžˆì–´ìš”.', 'ì§€ê¸ˆ ë¹„ê°€ ì™€ ìžˆì§€ ì•Šì•„ìš”.'],
        correctAnswer: 'ì§€ê¸ˆ ë¹„ê°€ ì˜¤ê³  ìžˆì§€ ì•Šì•„ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ì§€ê¸ˆ ë¹„ê°€ ì˜¤ê³  ìžˆì§€ ì•Šì•„ìš”.**\n\n- Dá»‹ch tá»± nhiÃªn: **BÃ¢y giá» trá»i khÃ´ng mÆ°a / khÃ´ng Ä‘ang mÆ°a.**\n- Máº«u phá»§ Ä‘á»‹nh Ä‘Ãºng cá»§a **-ê³  ìžˆë‹¤** lÃ : **-ê³  ìžˆì§€ ì•Šë‹¤**.\n\n### ðŸ§  Ghi nhá»› nhanh\n\n- **ì˜¤ê³  ìžˆë‹¤**: Ä‘ang mÆ°a\n- **ì˜¤ê³  ìžˆì§€ ì•Šì•„ìš”**: khÃ´ng Ä‘ang mÆ°a\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **ì§€ê¸ˆ ë¹„ê°€ ì˜¤ê³  ì—†ì–´ìš”.**: sai cáº¥u trÃºc phá»§ Ä‘á»‹nh, khÃ´ng dÃ¹ng **ì—†ì–´ìš”** sau **-ê³ ** kiá»ƒu nÃ y.\n- **ì§€ê¸ˆ ë¹„ê°€ ì˜¤ê³  ì•ˆ ìžˆì–´ìš”.**: sai vÃ¬ khÃ´ng Ä‘áº·t **ì•ˆ** trá»±c tiáº¿p trÆ°á»›c **ìžˆì–´ìš”** trong máº«u nÃ y.\n- **ì§€ê¸ˆ ë¹„ê°€ ì™€ ìžˆì§€ ì•Šì•„ìš”.**: nghiÃªng vá» sáº¯c thÃ¡i tráº¡ng thÃ¡i káº¿t quáº£, khÃ´ng phÃ¹ há»£p Ã½ "Ä‘ang mÆ°a" trong ngá»¯ cáº£nh cÃ¢u nÃ y.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        grammarPoint: '-ê³  ê³„ì‹œë‹¤',
        question: 'Chá»n cÃ¢u kÃ­nh ngá»¯ Ä‘Ãºng: "Ã”ng Ä‘ang Ä‘á»c bÃ¡o."',
        options: ['í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì„ ë³´ê³  ê³„ì„¸ìš”.', 'í• ì•„ë²„ì§€ëŠ” ì‹ ë¬¸ì„ ë³´ê³  ìžˆì–´ìš”.', 'í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì´ ë³´ê³  ê³„ì„¸ìš”.', 'í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì„ ë³´ê³  ìžˆìœ¼ì„¸ìš”.'],
        correctAnswer: 'í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì„ ë³´ê³  ê³„ì„¸ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì„ ë³´ê³  ê³„ì„¸ìš”.**\n\n- Dá»‹ch: **Ã”ng Ä‘ang Ä‘á»c bÃ¡o.**\n- Khi nÃ¢ng chá»§ ngá»¯ (Ã´ng/bÃ /tháº§y/cÃ´...), Æ°u tiÃªn dÃ¹ng **ê»˜ì„œ** + máº«u kÃ­nh ngá»¯ **-ê³  ê³„ì‹œë‹¤**.\n\n### ðŸ§  Ghi nhá»› nhanh\n\n- Trung tÃ­nh: **ë³´ê³  ìžˆì–´ìš”**\n- KÃ­nh ngá»¯ (nÃ¢ng chá»§ ngá»¯): **ë³´ê³  ê³„ì„¸ìš”**\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **í• ì•„ë²„ì§€ëŠ” ì‹ ë¬¸ì„ ë³´ê³  ìžˆì–´ìš”.**: dÃ¹ng **ì€/ëŠ”** vÃ  **-ê³  ìžˆì–´ìš”** (khÃ´ng sai ngá»¯ phÃ¡p), nhÆ°ng **khÃ´ng pháº£i dáº¡ng kÃ­nh ngá»¯ chuáº©n** mÃ  Ä‘á» yÃªu cáº§u.\n- **í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì´ ë³´ê³  ê³„ì„¸ìš”.**: sai trá»£ tá»« tÃ¢n ngá»¯; á»Ÿ Ä‘Ã¢y pháº£i lÃ  **ì‹ ë¬¸ì„**.\n- **í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì„ ë³´ê³  ìžˆìœ¼ì„¸ìš”.**: cÃ³ thá»ƒ gáº·p trong há»™i thoáº¡i, nhÆ°ng trong bÃ i nÃ y chá»n dáº¡ng chuáº©n dáº¡y há»c lÃ  **ë³´ê³  ê³„ì„¸ìš”**.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        grammarPoint: '-ê³  ìžˆì—ˆë‹¤',
        question: 'ì–´ì œ ì§‘ì— ì™”ì„ ë•Œ ë™ìƒì´ ____.',
        options: ['ìžê³  ìžˆì—ˆì–´ìš”', 'ìž¤ê³  ìžˆì—ˆì–´ìš”', 'ìžê³  ìžˆì–´ìš”', 'ìžê² ì–´ìš”'],
        correctAnswer: 'ìžê³  ìžˆì—ˆì–´ìš”',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ìžê³  ìžˆì—ˆì–´ìš” (lÃºc Ä‘Ã³ Ä‘ang ngá»§)**\n\n- Dá»‹ch: **LÃºc Ä‘Ã³ em Ä‘ang ngá»§.**\n- Bá»‘i cáº£nh quÃ¡ khá»©: **ì–´ì œ ... ì™”ì„ ë•Œ** (hÃ´m qua, khi tÃ´i vá» nhÃ ).\n- VÃ¬ váº­y cáº§n dÃ¹ng **-ê³  ìžˆì—ˆë‹¤** Ä‘á»ƒ diá»…n táº£ hÃ nh Ä‘á»™ng Ä‘ang diá»…n ra táº¡i má»™t thá»i Ä‘iá»ƒm trong quÃ¡ khá»©.\n\n### ðŸ§  Ghi nhá»› nhanh\n\n- Hiá»‡n táº¡i tiáº¿p diá»…n: **-ê³  ìžˆì–´ìš”**\n- QuÃ¡ khá»© tiáº¿p diá»…n: **-ê³  ìžˆì—ˆì–´ìš”**\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **ìž¤ê³  ìžˆì—ˆì–´ìš”**: sai cáº¥u trÃºc, khÃ´ng ghÃ©p quÃ¡ khá»© kiá»ƒu nÃ y vá»›i **-ê³  ìžˆì—ˆì–´ìš”**.\n- **ìžê³  ìžˆì–´ìš”**: lÃ  hiá»‡n táº¡i tiáº¿p diá»…n, khÃ´ng khá»›p ngá»¯ cáº£nh quÃ¡ khá»©.\n- **ìžê² ì–´ìš”**: diá»…n táº£ Ã½ Ä‘oÃ¡n/Ã½ chÃ­ tÆ°Æ¡ng lai, khÃ´ng phÃ¹ há»£p ngá»¯ cáº£nh cÃ¢u.'
    },
    {
        id: 11,
        type: 'fill-input',
        grammarPoint: 'ÄÃºng/Sai + sá»­a lá»—i (-ê³  ìžˆë‹¤)',
        question: 'CÃ¢u sau sai. HÃ£y viáº¿t láº¡i cho Ä‘Ãºng:\në‚ ì”¨ê°€ ì¶¥ê³  ìžˆì–´ìš”.',
        correctAnswer: ['ë‚ ì”¨ê°€ ì¶”ì›Œìš”.', 'ë‚ ì”¨ê°€ ì¶”ì›Œìš”'],
        explanation: '### âœ… CÃ¢u Ä‘Ãºng\n\n**ë‚ ì”¨ê°€ ì¶”ì›Œìš”.**\n\n### ðŸ§  VÃ¬ sao sai\n\n- **ì¶¥ë‹¤** lÃ  tÃ­nh tá»« (tráº¡ng thÃ¡i), khÃ´ng dÃ¹ng vá»›i máº«u tiáº¿n hÃ nh **-ê³  ìžˆë‹¤** trong cÃ¢u nÃ y.\n- VÃ¬ váº­y khÃ´ng nÃ³i **ì¶¥ê³  ìžˆì–´ìš”**.'
    },
    {
        id: 12,
        type: 'fill-input',
        grammarPoint: 'ÄÃºng/Sai + sá»­a lá»—i (-ê³  ìžˆë‹¤)',
        question: 'CÃ¢u sau sai. HÃ£y viáº¿t láº¡i cho Ä‘Ãºng:\ní• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì„ ë³´ê³  ìžˆìœ¼ì„¸ìš”.',
        correctAnswer: ['í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì„ ë³´ê³  ê³„ì„¸ìš”.', 'í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì„ ë³´ê³  ê³„ì„¸ìš”'],
        explanation: '### âœ… CÃ¢u Ä‘Ãºng\n\n**í• ì•„ë²„ì§€ê»˜ì„œ ì‹ ë¬¸ì„ ë³´ê³  ê³„ì„¸ìš”.**\n\n### ðŸ§  VÃ¬ sao sai\n\n- Vá»›i chá»§ ngá»¯ cáº§n kÃ­nh ngá»¯, dáº¡ng chuáº©n lÃ  **-ê³  ê³„ì‹œë‹¤**.\n- VÃ¬ váº­y Ä‘á»•i **ë³´ê³  ìžˆìœ¼ì„¸ìš”** thÃ nh **ë³´ê³  ê³„ì„¸ìš”** trong bÃ i nÃ y.'
    },
    {
        id: 13,
        type: 'fill-input',
        grammarPoint: 'ÄÃºng/Sai + sá»­a lá»—i (-ê³  ìžˆë‹¤)',
        question: 'CÃ¢u sau sai. HÃ£y viáº¿t láº¡i cho Ä‘Ãºng:\nëˆˆì´ ë‚´ë ¸ê³  ìžˆì—ˆì–´ìš”.',
        correctAnswer: ['ëˆˆì´ ë‚´ë¦¬ê³  ìžˆì—ˆì–´ìš”.', 'ëˆˆì´ ë‚´ë¦¬ê³  ìžˆì—ˆì–´ìš”'],
        explanation: '### âœ… CÃ¢u Ä‘Ãºng\n\n**ëˆˆì´ ë‚´ë¦¬ê³  ìžˆì—ˆì–´ìš”.**\n\n### ðŸ§  VÃ¬ sao sai\n\n- QuÃ¡ khá»© tiáº¿p diá»…n dÃ¹ng máº«u **-ê³  ìžˆì—ˆë‹¤**.\n- KhÃ´ng ghÃ©p kiá»ƒu **ë‚´ë ¸ê³  ìžˆì—ˆì–´ìš”**; dáº¡ng Ä‘Ãºng lÃ  **ë‚´ë¦¬ê³  ìžˆì—ˆì–´ìš”**.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        grammarPoint: '-ê³  ìžˆë‹¤',
        question: 'Chá»n cÃ¡ch viáº¿t Ä‘Ãºng cho nghÄ©a: "Suji Ä‘ang Ä‘á»™i mÅ© Ä‘á»."',
        options: ['ì“°ê³  ìžˆì–´ìš”.', 'ì¨ ìžˆì–´ìš”.', 'ì“°ê³  ìžˆì—ˆì–´ìš”.', 'ì¼ì–´ìš”.'],
        correctAnswer: 'ì“°ê³  ìžˆì–´ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ì“°ê³  ìžˆì–´ìš”.**\n\n- Dá»‹ch: **(Suji) Ä‘ang Ä‘á»™i mÅ© Ä‘á».**\n- Vá»›i ngá»¯ cáº£nh hiá»‡n táº¡i Ä‘ang diá»…n ra, dÃ¹ng máº«u **-ê³  ìžˆë‹¤**.\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **ì¨ ìžˆì–´ìš”.**: khÃ´ng dÃ¹ng máº«u nÃ y trong cÃ¢u má»¥c tiÃªu cá»§a bÃ i.\n- **ì“°ê³  ìžˆì—ˆì–´ìš”.**: lÃ  quÃ¡ khá»© tiáº¿p diá»…n, khÃ´ng khá»›p nghÄ©a hiá»‡n táº¡i.\n- **ì¼ì–´ìš”.**: lÃ  quÃ¡ khá»© Ä‘Æ¡n (Ä‘Ã£ Ä‘á»™i), khÃ´ng pháº£i Ä‘ang Ä‘á»™i.'
    },
    {
        id: 15,
        type: 'fill-input',
        grammarPoint: '-ê³  ìžˆë‹¤',
        question: 'ì €ëŠ” ì¹œêµ¬ì˜ ë§ì„ ____. (ë¯¿ë‹¤)',
        correctAnswer: 'ë¯¿ê³  ìžˆì–´ìš”',
        explanation: 'ë¯¿ë‹¤ + -ê³  ìžˆë‹¤: trang thai dang tin.'
    },

    // ===== PHAN B: -A/EO ITDA (15 CAU) =====
    {
        id: 16,
        type: 'multiple-choice',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'ì§€ìˆ˜ ì”¨ëŠ” ì˜ìžì— ____.',
        options: ['ì•‰ì•„ ìžˆì–´ìš”.', 'ì•‰ê³  ìžˆì–´ìš”.', 'ì•‰ì•„ìš”.', 'ì•‰ì•˜ì–´ìš”.'],
        correctAnswer: 'ì•‰ì•„ ìžˆì–´ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ì§€ìˆ˜ ì”¨ëŠ” ì˜ìžì— ì•‰ì•„ ìžˆì–´ìš”.**\n\n- Dá»‹ch: **Jisu Ä‘ang ngá»“i trÃªn gháº¿.**\n- Vá»›i tÆ° tháº¿ Ä‘ang duy trÃ¬, dÃ¹ng máº«u **-ì•„/ì–´ ìžˆë‹¤**.\n\n### ðŸ§  Ghi nhá»› nhanh\n\n- TÆ° tháº¿ hiá»‡n táº¡i: **ì•‰ì•„ ìžˆì–´ìš”** (Ä‘ang ngá»“i)\n- TÆ° tháº¿ quÃ¡ khá»©: **ì•‰ì•„ ìžˆì—ˆì–´ìš”** (Ä‘Ã£ ngá»“i)\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **ì•‰ê³  ìžˆì–´ìš”.**: khÃ´ng dÃ¹ng máº«u nÃ y cho nghÄ©a tÆ° tháº¿ duy trÃ¬ trong bÃ i.\n- **ì•‰ì•„ìš”.**: hiá»‡n táº¡i Ä‘Æ¡n, khÃ´ng nháº¥n tráº¡ng thÃ¡i Ä‘ang duy trÃ¬.\n- **ì•‰ì•˜ì–´ìš”.**: quÃ¡ khá»© Ä‘Æ¡n (Ä‘Ã£ ngá»“i), khÃ´ng Ä‘Ãºng Ã½ cÃ¢u.'
    },
    {
        id: 17,
        type: 'multiple-choice',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'Chá»n cÃ¡ch viáº¿t Ä‘Ãºng cho nghÄ©a: "Tháº§y giÃ¡o Ä‘ang Ä‘á»©ng trÆ°á»›c lá»›p há»c."',
        options: ['ì„ ìƒë‹˜ì€ êµì‹¤ ì•žì— ì„œ ìžˆì–´ìš”.', 'ì„ ìƒë‹˜ì€ êµì‹¤ ì•žì— ì„œê³  ìžˆì–´ìš”.', 'ì„ ìƒë‹˜ì€ êµì‹¤ ì•žì— ì„œìš”.', 'ì„ ìƒë‹˜ì€ êµì‹¤ ì•žì— ì„°ì–´ìš”.'],
        correctAnswer: 'ì„ ìƒë‹˜ì€ êµì‹¤ ì•žì— ì„œ ìžˆì–´ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ì„ ìƒë‹˜ì€ êµì‹¤ ì•žì— ì„œ ìžˆì–´ìš”.**\n\n- Dá»‹ch: **Tháº§y giÃ¡o Ä‘ang Ä‘á»©ng trÆ°á»›c lá»›p há»c.**\n- Vá»›i tÆ° tháº¿ Ä‘á»©ng Ä‘ang duy trÃ¬, dÃ¹ng máº«u **-ì•„/ì–´ ìžˆë‹¤**.\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **ì„ ìƒë‹˜ì€ êµì‹¤ ì•žì— ì„œê³  ìžˆì–´ìš”.**: khÃ´ng dÃ¹ng máº«u **-ê³  ìžˆë‹¤** cho nghÄ©a tÆ° tháº¿ duy trÃ¬.\n- **ì„ ìƒë‹˜ì€ êµì‹¤ ì•žì— ì„œìš”.**: hiá»‡n táº¡i Ä‘Æ¡n, khÃ´ng nháº¥n tráº¡ng thÃ¡i Ä‘ang duy trÃ¬.\n- **ì„ ìƒë‹˜ì€ êµì‹¤ ì•žì— ì„°ì–´ìš”.**: quÃ¡ khá»© Ä‘Æ¡n (Ä‘Ã£ Ä‘á»©ng), khÃ´ng Ä‘Ãºng Ã½ cÃ¢u.'
    },
    {
        id: 18,
        type: 'multiple-choice',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'Chá»n cÃ¡ch viáº¿t Ä‘Ãºng cho nghÄ©a: "Em bÃ© Ä‘ang náº±m trÃªn giÆ°á»ng."',
        options: ['ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì›Œ ìžˆì–´ìš”.', 'ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ•ê³  ìžˆì–´ìš”.', 'ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì›Œìš”.', 'ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì› ì–´ìš”.'],
        correctAnswer: 'ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì›Œ ìžˆì–´ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì›Œ ìžˆì–´ìš”.**\n\n- Dá»‹ch: **Em bÃ© Ä‘ang náº±m trÃªn giÆ°á»ng.**\n- Vá»›i tÆ° tháº¿ Ä‘ang duy trÃ¬ (náº±m), dÃ¹ng máº«u **-ì•„/ì–´ ìžˆë‹¤**.\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ•ê³  ìžˆì–´ìš”.**: khÃ´ng dÃ¹ng máº«u **-ê³  ìžˆë‹¤** cho nghÄ©a tÆ° tháº¿ duy trÃ¬ trong bÃ i nÃ y.\n- **ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì›Œìš”.**: hiá»‡n táº¡i Ä‘Æ¡n, khÃ´ng nháº¥n tráº¡ng thÃ¡i Ä‘ang duy trÃ¬.\n- **ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì› ì–´ìš”.**: quÃ¡ khá»© Ä‘Æ¡n (Ä‘Ã£ náº±m), khÃ´ng Ä‘Ãºng Ã½ cÃ¢u.'
    },
    {
        id: 19,
        type: 'multiple-choice',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'Chá»n cÃ¡ch viáº¿t Ä‘Ãºng cho nghÄ©a: "Trong lá»›p chá»‰ cÃ²n láº¡i hai há»c sinh."',
        options: ['êµì‹¤ì— í•™ìƒì´ ë‘ ëª…ë§Œ ë‚¨ì•„ ìžˆì–´ìš”.', 'êµì‹¤ì— í•™ìƒì´ ë‘ ëª…ë§Œ ë‚¨ê³  ìžˆì–´ìš”.', 'êµì‹¤ì— í•™ìƒì´ ë‘ ëª…ë§Œ ë‚¨ì•„ìš”.', 'êµì‹¤ì— í•™ìƒì´ ë‘ ëª…ë§Œ ë‚¨ì•˜ì–´ìš”.'],
        correctAnswer: 'êµì‹¤ì— í•™ìƒì´ ë‘ ëª…ë§Œ ë‚¨ì•„ ìžˆì–´ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**êµì‹¤ì— í•™ìƒì´ ë‘ ëª…ë§Œ ë‚¨ì•„ ìžˆì–´ìš”.**\n\n- Dá»‹ch: **Trong lá»›p chá»‰ cÃ²n láº¡i hai há»c sinh.**\n- Vá»›i nghÄ©a tráº¡ng thÃ¡i "cÃ²n láº¡i vÃ  Ä‘ang á»Ÿ Ä‘Ã³", dÃ¹ng **ë‚¨ì•„ ìžˆë‹¤**.\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **êµì‹¤ì— í•™ìƒì´ ë‘ ëª…ë§Œ ë‚¨ê³  ìžˆì–´ìš”.**: khÃ´ng dÃ¹ng **-ê³  ìžˆë‹¤** cho nghÄ©a tráº¡ng thÃ¡i cÃ²n láº¡i trong máº«u nÃ y.\n- **êµì‹¤ì— í•™ìƒì´ ë‘ ëª…ë§Œ ë‚¨ì•„ìš”.**: hiá»‡n táº¡i Ä‘Æ¡n, khÃ´ng nháº¥n tráº¡ng thÃ¡i duy trÃ¬.\n- **êµì‹¤ì— í•™ìƒì´ ë‘ ëª…ë§Œ ë‚¨ì•˜ì–´ìš”.**: quÃ¡ khá»© Ä‘Æ¡n, khÃ´ng nháº¥n tráº¡ng thÃ¡i hiá»‡n táº¡i.'
    },
    {
        id: 20,
        type: 'multiple-choice',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'Chá»n cÃ¡ch viáº¿t Ä‘Ãºng cho nghÄ©a: "Em trai tÃ´i Ä‘Ã£ sang HÃ n Quá»‘c (vÃ  hiá»‡n Ä‘ang á»Ÿ Ä‘Ã³)."',
        options: ['ë™ìƒì€ ì§€ê¸ˆ í•œêµ­ì— ê°€ ìžˆì–´ìš”.', 'ë™ìƒì€ ì§€ê¸ˆ í•œêµ­ì— ê°€ê³  ìžˆì–´ìš”.', 'ë™ìƒì€ ì§€ê¸ˆ í•œêµ­ì— ê°€ìš”.', 'ë™ìƒì€ ì§€ê¸ˆ í•œêµ­ì— ê°”ì–´ìš”.'],
        correctAnswer: 'ë™ìƒì€ ì§€ê¸ˆ í•œêµ­ì— ê°€ ìžˆì–´ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ë™ìƒì€ ì§€ê¸ˆ í•œêµ­ì— ê°€ ìžˆì–´ìš”.**\n\n- Dá»‹ch: **Em trai tÃ´i Ä‘Ã£ sang HÃ n Quá»‘c vÃ  hiá»‡n Ä‘ang á»Ÿ Ä‘Ã³.**\n- Vá»›i nghÄ©a "Ä‘Ã£ Ä‘i Ä‘áº¿n nÆ¡i Ä‘Ã³ vÃ  Ä‘ang á»Ÿ Ä‘Ã³", dÃ¹ng máº«u **ê°€ ìžˆë‹¤** (thuá»™c nhÃ³m **-ì•„/ì–´ ìžˆë‹¤**).\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **ë™ìƒì€ ì§€ê¸ˆ í•œêµ­ì— ê°€ê³  ìžˆì–´ìš”.**: nghÄ©a lÃ  **Ä‘ang trÃªn Ä‘Æ°á»ng Ä‘i sang HÃ n**, khÃ´ng pháº£i Ä‘Ã£ á»Ÿ Ä‘Ã³.\n- **ë™ìƒì€ ì§€ê¸ˆ í•œêµ­ì— ê°€ìš”.**: hiá»‡n táº¡i Ä‘Æ¡n/thÃ³i quen, khÃ´ng thá»ƒ hiá»‡n tráº¡ng thÃ¡i Ä‘Ã£ Ä‘áº¿n vÃ  Ä‘ang á»Ÿ.\n- **ë™ìƒì€ ì§€ê¸ˆ í•œêµ­ì— ê°”ì–´ìš”.**: chá»‰ nÃ³i Ä‘Ã£ Ä‘i, khÃ´ng nháº¥n tráº¡ng thÃ¡i hiá»‡n Ä‘ang á»Ÿ Ä‘Ã³.'
    },
    {
        id: 21,
        type: 'multiple-choice',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'Chá»n cÃ¡ch viáº¿t Ä‘Ãºng cho nghÄ©a: "Báº¡n tÃ´i Ä‘Ã£ Ä‘áº¿n trÆ°á»ng tá»« sá»›m (vÃ  Ä‘ang á»Ÿ Ä‘Ã³)."',
        options: ['ì¹œêµ¬ëŠ” ë²Œì¨ í•™êµì— ì™€ ìžˆì–´ìš”.', 'ì¹œêµ¬ëŠ” ë²Œì¨ í•™êµì— ì˜¤ê³  ìžˆì–´ìš”.', 'ì¹œêµ¬ëŠ” ë²Œì¨ í•™êµì— ì™€ìš”.', 'ì¹œêµ¬ëŠ” ë²Œì¨ í•™êµì— ì™”ì–´ìš”.'],
        correctAnswer: 'ì¹œêµ¬ëŠ” ë²Œì¨ í•™êµì— ì™€ ìžˆì–´ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ì¹œêµ¬ëŠ” ë²Œì¨ í•™êµì— ì™€ ìžˆì–´ìš”.**\n\n- Dá»‹ch: **Báº¡n tÃ´i Ä‘Ã£ Ä‘áº¿n trÆ°á»ng tá»« sá»›m vÃ  hiá»‡n Ä‘ang á»Ÿ Ä‘Ã³.**\n- Vá»›i nghÄ©a "Ä‘Ã£ Ä‘áº¿n rá»“i vÃ  Ä‘ang á»Ÿ Ä‘Ã³", dÃ¹ng **ì™€ ìžˆë‹¤**.\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **ì¹œêµ¬ëŠ” ë²Œì¨ í•™êµì— ì˜¤ê³  ìžˆì–´ìš”.**: nghÄ©a lÃ  Ä‘ang trÃªn Ä‘Æ°á»ng Ä‘áº¿n, chÆ°a nháº¥n tráº¡ng thÃ¡i Ä‘Ã£ cÃ³ máº·t á»Ÿ trÆ°á»ng.\n- **ì¹œêµ¬ëŠ” ë²Œì¨ í•™êµì— ì™€ìš”.**: hiá»‡n táº¡i Ä‘Æ¡n/thÃ³i quen.\n- **ì¹œêµ¬ëŠ” ë²Œì¨ í•™êµì— ì™”ì–´ìš”.**: chá»‰ nÃªu sá»± kiá»‡n Ä‘Ã£ Ä‘áº¿n, khÃ´ng nháº¥n tráº¡ng thÃ¡i Ä‘ang á»Ÿ Ä‘Ã³.'
    },
    {
        id: 22,
        type: 'fill-input',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'Äiá»n vÃ o chá»— trá»‘ng:\ní•™ìƒë“¤ì´ ìš´ë™ìž¥ì— ____. (ì„œë‹¤)',
        correctAnswer: 'ì„œ ìžˆì–´ìš”',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ì„œ ìžˆì–´ìš”**\n\n- HoÃ n chá»‰nh: **í•™ìƒë“¤ì´ ìš´ë™ìž¥ì— ì„œ ìžˆì–´ìš”.**\n- DÃ¹ng **-ì•„/ì–´ ìžˆë‹¤** Ä‘á»ƒ diá»…n táº£ tÆ° tháº¿ Ä‘ang duy trÃ¬ (Ä‘á»©ng).'
    },
    {
        id: 23,
        type: 'fill-input',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'Äiá»n vÃ o chá»— trá»‘ng:\nì•„ê¸°ê°€ ì¹¨ëŒ€ì— ____. (ëˆ•ë‹¤)',
        correctAnswer: 'ëˆ„ì›Œ ìžˆì–´ìš”',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ëˆ„ì›Œ ìžˆì–´ìš”**\n\n- HoÃ n chá»‰nh: **ì•„ê¸°ê°€ ì¹¨ëŒ€ì— ëˆ„ì›Œ ìžˆì–´ìš”.**\n- Vá»›i tÆ° tháº¿ náº±m Ä‘ang duy trÃ¬, dÃ¹ng **-ì•„/ì–´ ìžˆë‹¤**.'
    },
    {
        id: 24,
        type: 'fill-input',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'Äiá»n vÃ o chá»— trá»‘ng:\nêµì‹¤ì— ë‘ ëª…ë§Œ ____. (ë‚¨ë‹¤)',
        correctAnswer: 'ë‚¨ì•„ ìžˆì–´ìš”',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ë‚¨ì•„ ìžˆì–´ìš”**\n\n- HoÃ n chá»‰nh: **êµì‹¤ì— ë‘ ëª…ë§Œ ë‚¨ì•„ ìžˆì–´ìš”.**\n- **ë‚¨ì•„ ìžˆë‹¤** diá»…n táº£ tráº¡ng thÃ¡i cÃ²n láº¡i vÃ  Ä‘ang duy trÃ¬.'
    },
    {
        id: 25,
        type: 'fill-input',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'Äiá»n vÃ o chá»— trá»‘ng:\nêµì‹¤ ë¬¸ì´ ____. (ì—´ë¦¬ë‹¤)',
        correctAnswer: ['ì—´ë ¤ ìžˆì–´ìš”', 'ì—´ë ¤ ìžˆì–´ìš”.'],
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ì—´ë ¤ ìžˆì–´ìš”**\n\n- HoÃ n chá»‰nh: **êµì‹¤ ë¬¸ì´ ì—´ë ¤ ìžˆì–´ìš”.**\n- Dá»‹ch: **Cá»­a lá»›p há»c Ä‘ang má»Ÿ.**\n- ÄÃ¢y lÃ  tráº¡ng thÃ¡i káº¿t quáº£ Ä‘ang duy trÃ¬, nÃªn dÃ¹ng **-ì•„/ì–´ ìžˆë‹¤**.'
    },
    {
        id: 26,
        type: 'fill-input',
        grammarPoint: 'ÄÃºng/Sai + sá»­a lá»—i (-ì•„/ì–´ ìžˆë‹¤)',
        question: 'CÃ¢u sau sai. HÃ£y viáº¿t láº¡i cho Ä‘Ãºng:\nì§€ê¸ˆ ì˜ìˆ˜ëŠ” ì˜ìžì— ì•‰ê³  ìžˆì–´ìš”.',
        correctAnswer: ['ì§€ê¸ˆ ì˜ìˆ˜ëŠ” ì˜ìžì— ì•‰ì•„ ìžˆì–´ìš”.', 'ì§€ê¸ˆ ì˜ìˆ˜ëŠ” ì˜ìžì— ì•‰ì•„ ìžˆì–´ìš”'],
        explanation: '### âœ… CÃ¢u Ä‘Ãºng\n\n**ì§€ê¸ˆ ì˜ìˆ˜ëŠ” ì˜ìžì— ì•‰ì•„ ìžˆì–´ìš”.**\n\n### ðŸ§  VÃ¬ sao sai\n\n- Máº«u tÆ° tháº¿ duy trÃ¬ vá»›i **ì•‰ë‹¤** lÃ  **ì•‰ì•„ ìžˆë‹¤**.\n- VÃ¬ váº­y khÃ´ng dÃ¹ng **ì•‰ê³  ìžˆì–´ìš”** trong ngá»¯ cáº£nh nÃ y.'
    },
    {
        id: 27,
        type: 'fill-input',
        grammarPoint: 'ÄÃºng/Sai + sá»­a lá»—i (-ì•„/ì–´ ìžˆë‹¤)',
        question: 'CÃ¢u sau sai. HÃ£y viáº¿t láº¡i cho Ä‘Ãºng:\nì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ•ê³  ìžˆì–´ìš”.',
        correctAnswer: ['ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì›Œ ìžˆì–´ìš”.', 'ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì›Œ ìžˆì–´ìš”'],
        explanation: '### âœ… CÃ¢u Ä‘Ãºng\n\n**ì•„ê¸°ëŠ” ì¹¨ëŒ€ì— ëˆ„ì›Œ ìžˆì–´ìš”.**\n\n### ðŸ§  VÃ¬ sao sai\n\n- Vá»›i tÆ° tháº¿ náº±m Ä‘ang duy trÃ¬, dÃ¹ng **ëˆ„ì›Œ ìžˆë‹¤**.\n- Dáº¡ng **ëˆ•ê³  ìžˆì–´ìš”** khÃ´ng phÃ¹ há»£p má»¥c tiÃªu ngá»¯ phÃ¡p cá»§a cÃ¢u nÃ y.'
    },
    {
        id: 28,
        type: 'fill-input',
        grammarPoint: '-ê³  ìžˆë‹¤',
        question: 'Viáº¿t cÃ¢u tiáº¿ng HÃ n cho nghÄ©a sau:\n"HÆ°Æ¡ng Ä‘ang Ä‘Ã³ng cá»­a."',
        correctAnswer: ['íì—‰ì€ ë¬¸ì„ ë‹«ê³  ìžˆì–´ìš”.', 'íì—‰ì€ ë¬¸ì„ ë‹«ê³  ìžˆì–´ìš”', 'íì—‰ì€ ë¬¸ì„ ë‹«ê³  ìžˆìŠµë‹ˆë‹¤.', 'íì—‰ì€ ë¬¸ì„ ë‹«ê³  ìžˆìŠµë‹ˆë‹¤'],
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n- **íì—‰ì€ ë¬¸ì„ ë‹«ê³  ìžˆì–´ìš”.**\n- **íì—‰ì€ ë¬¸ì„ ë‹«ê³  ìžˆìŠµë‹ˆë‹¤.**\n\n- Dá»‹ch: **HÆ°Æ¡ng Ä‘ang Ä‘Ã³ng cá»­a.**\n- ÄÃ¢y lÃ  hÃ nh Ä‘á»™ng Ä‘ang diá»…n ra ngay lÃºc nÃ³i, nÃªn dÃ¹ng **-ê³  ìžˆë‹¤** vá»›i Ä‘á»™ng tá»« **ë‹«ë‹¤**.\n- CÃ³ thá»ƒ dÃ¹ng cáº£ Ä‘uÃ´i lá»‹ch sá»± thÃ¢n máº­t **-ì•„ìš”/ì–´ìš”** vÃ  Ä‘uÃ´i trang trá»ng **-ã…‚ë‹ˆë‹¤**.'
    },
    {
        id: 29,
        type: 'multiple-choice',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤ vs -ê³  ìžˆë‹¤',
        question: 'Chá»n cÃ¡ch viáº¿t Ä‘Ãºng cho nghÄ©a: "CÃ¡c há»c sinh Ä‘ang Ä‘á»©ng thÃ nh hÃ ng."',
        options: ['í•™ìƒë“¤ì€ ì¤„ì— ì„œ ìžˆì–´ìš”.', 'í•™ìƒë“¤ì€ ì¤„ì— ì„œê³  ìžˆì–´ìš”.', 'í•™ìƒë“¤ì€ ì¤„ì— ì„œì–´ìš”.', 'í•™ìƒë“¤ì€ ì¤„ì— ì„°ì–´ìš”.'],
        correctAnswer: 'í•™ìƒë“¤ì€ ì¤„ì— ì„œ ìžˆì–´ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**í•™ìƒë“¤ì€ ì¤„ì— ì„œ ìžˆì–´ìš”.**\n\n- Dá»‹ch: **CÃ¡c há»c sinh Ä‘ang Ä‘á»©ng thÃ nh hÃ ng.**\n- Vá»›i tÆ° tháº¿ Ä‘ang duy trÃ¬ (Ä‘á»©ng), Æ°u tiÃªn **-ì•„/ì–´ ìžˆë‹¤**.\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **í•™ìƒë“¤ì€ ì¤„ì— ì„œê³  ìžˆì–´ìš”.**: khÃ´ng phÃ¹ há»£p máº«u tÆ° tháº¿ duy trÃ¬ trong bÃ i.\n- **í•™ìƒë“¤ì€ ì¤„ì— ì„œì–´ìš”.**: chia Ä‘á»™ng tá»« khÃ´ng tá»± nhiÃªn trong ngá»¯ cáº£nh nÃ y.\n- **í•™ìƒë“¤ì€ ì¤„ì— ì„°ì–´ìš”.**: quÃ¡ khá»© Ä‘Æ¡n (Ä‘Ã£ Ä‘á»©ng), khÃ´ng nháº¥n tráº¡ng thÃ¡i hiá»‡n táº¡i.'
    },
    {
        id: 30,
        type: 'multiple-choice',
        grammarPoint: '-ì•„/ì–´ ìžˆë‹¤',
        question: 'CÃ¢u nÃ o Ä‘Ãºng trong ngá»¯ cáº£nh: "TÃ´i Ä‘Ã£ Ä‘áº¿n trÆ°á»ng tá»« trÆ°á»›c (vÃ  Ä‘ang á»Ÿ trÆ°á»ng)."?',
        options: ['ì €ëŠ” í•™êµì— ì™€ ìžˆì–´ìš”.', 'ì €ëŠ” í•™êµì— ì˜¤ê³  ìžˆì–´ìš”.', 'ì €ëŠ” í•™êµì— ì™€ìš”.', 'ì €ëŠ” í•™êµì— ê°”ì–´ìš”.'],
        correctAnswer: 'ì €ëŠ” í•™êµì— ì™€ ìžˆì–´ìš”.',
        explanation: '### âœ… ÄÃ¡p Ã¡n Ä‘Ãºng\n\n**ì €ëŠ” í•™êµì— ì™€ ìžˆì–´ìš”.**\n\n- Dá»‹ch: **TÃ´i Ä‘Ã£ Ä‘áº¿n trÆ°á»ng tá»« trÆ°á»›c vÃ  hiá»‡n Ä‘ang á»Ÿ trÆ°á»ng.**\n- Máº«u **ì™€ ìžˆë‹¤** nháº¥n máº¡nh tráº¡ng thÃ¡i Ä‘Ã£ Ä‘áº¿n vÃ  Ä‘ang á»Ÿ Ä‘Ã³.\n\n### âŒ VÃ¬ sao cÃ¡c Ä‘Ã¡p Ã¡n khÃ¡c sai\n\n- **ì €ëŠ” í•™êµì— ì˜¤ê³  ìžˆì–´ìš”.**: nghÄ©a lÃ  Ä‘ang trÃªn Ä‘Æ°á»ng Ä‘áº¿n trÆ°á»ng.\n- **ì €ëŠ” í•™êµì— ì™€ìš”.**: hiá»‡n táº¡i Ä‘Æ¡n/thÃ³i quen.\n- **ì €ëŠ” í•™êµì— ê°”ì–´ìš”.**: chá»‰ nÃªu quÃ¡ khá»© Ä‘Ã£ Ä‘i, khÃ´ng nháº¥n tráº¡ng thÃ¡i Ä‘ang á»Ÿ Ä‘Ã³.'
    }
];


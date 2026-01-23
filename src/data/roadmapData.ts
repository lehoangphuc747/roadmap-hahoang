export interface Session {
    id: number;
    date: string; // ISO format YYYY-MM-DD
    content?: string[];
    status: 'completed' | 'today' | 'upcoming' | 'holiday';
    isExam?: boolean;
}

// Fixed sessions from late 2025
const fixedSessions2025 = [
    // Nov 2025
    { id: 1, date: '2025-11-06' },
    { id: 2, date: '2025-11-10' },
    { id: 3, date: '2025-11-12' },
    { id: 4, date: '2025-11-14' },
    { id: 5, date: '2025-11-17' },
    { id: 6, date: '2025-11-21' },
    { id: 7, date: '2025-11-28' },
    // Dec 2025
    { id: 8, date: '2025-12-01' },
    { id: 9, date: '2025-12-03' },
    { id: 10, date: '2025-12-08' },
    { id: 11, date: '2025-12-12' },
    { id: 12, date: '2025-12-17' },
    { id: 13, date: '2025-12-19' },
    {
        id: 14,
        date: '2025-12-22',
        content: ['N마다', 'N보다', '-(스)ㅂ니다', '-(스)ㅂ니까?']
    },
    {
        id: 15,
        date: '2025-12-26',
        content: ['AV-았/었/했-', '-지 않다', '안 V', 'V-지 못하다']
    },
    { id: 16, date: '2025-12-29' },
    // Jan 2026 (Fixed before auto-generation)
    { id: 17, date: '2026-01-02', content: ['Kính ngữ -(으)시'] },
    { id: 18, date: '2026-01-05', content: ['Kính ngữ -(으)시 (tiếp)'] },
    { id: 19, date: '2026-01-09', content: ['Kính ngữ -(으)시 (luyện tập)'] },
];

// Content mapping for auto-generated sessions
const sessionContentMap: { [key: number]: string[] } = {
    20: ['Ôn tập kính ngữ'],
    21: ['-지 말다', '-고 (Sequential)', '-고 (Simultaneous)'],
    22: ['-고 싶다', '-고 싶어 하다', '-(으)러', '-(으)려고'],
    23: ['-아/어서 (1)', '-아/어서 (2)'],
};

export const EXAM_DATE = '2026-04-11';
export const REG_START = '2026-01-27';
export const REG_END = '2026-02-02';
export const TODAY = '2026-01-22'; // Hôm nay là 22/1/2026

// Tet Holiday Range: Feb 16 (29 Tet) - Feb 22 (Mung 5 Tet), 2026
const TET_START = new Date('2026-02-16');
const TET_END = new Date('2026-02-22');

// Danh sách ngày nghỉ đặc biệt
const specialHolidays: { [key: string]: string } = {
    '2026-01-12': 'Buổi 20 off', // 12/1/2026 - buổi 20 off
    '2026-01-14': 'Hà bận nên off không học', // 14/1/2026 - Hà bận
    '2026-01-21': 'Hà OT 했어요' // 21/1/2026 - Buổi 22 off (OT)
};

function isTetHoliday(date: Date): boolean {
    return date >= TET_START && date <= TET_END;
}

function isSpecialHoliday(dateStr: string): string | null {
    return specialHolidays[dateStr] || null;
}

function getStatus(dateStr: string): Session['status'] {
    if (dateStr === TODAY) return 'today';
    return dateStr < TODAY ? 'completed' : 'upcoming';
}

export function getRoadmapData(): Session[] {
    let sessions: Session[] = fixedSessions2025.map(s => ({
        ...s,
        status: getStatus(s.date)
    }));

    // Start Extrapolation from Session 20 (Jan 12, 2026 - nhưng off)
    // Schedule: Mon (1), Wed (3), Fri (5)
    // Lưu ý: 12/1 off, 14/1 off, 16/1 mới có học (buổi 20 thực sự)
    let currentId = 20;
    let currentDate = new Date('2026-01-12'); // Bắt đầu từ 12/1 (nhưng off)
    const endDate = new Date('2026-04-10'); // Day before exam

    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

        // Check if Mon, Wed, Fri
        if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
            const dateStr = currentDate.toISOString().split('T')[0];

            // Kiểm tra ngày nghỉ đặc biệt trước (Hà bận)
            const specialHolidayReason = isSpecialHoliday(dateStr);
            if (specialHolidayReason) {
                sessions.push({
                    id: currentId, // Giữ ID hiện tại nhưng không tăng (để đánh dấu vị trí trong timeline)
                    date: dateStr,
                    status: 'holiday',
                    content: [specialHolidayReason]
                });
                // Không tăng ID vì đây là ngày nghỉ, không phải buổi học thực sự
            } else if (isTetHoliday(currentDate)) {
                sessions.push({
                    id: currentId, // Giữ ID hiện tại nhưng không tăng
                    date: dateStr,
                    status: 'holiday',
                    content: ['Nghỉ Tết Nguyên Đán']
                });
                // Không tăng ID vì đây là ngày nghỉ, không phải buổi học thực sự
            } else {
                sessions.push({
                    id: currentId,
                    date: dateStr,
                    status: getStatus(dateStr),
                    content: sessionContentMap[currentId] || [] // Apply content mapping
                });
                currentId++; // Chỉ tăng ID khi có buổi học thực sự
            }
        }

        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return sessions;
}

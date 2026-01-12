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
    // Jan 2026 (Fixed before regular schedule)
    { id: 17, date: '2026-01-02', content: ['Kính ngữ -(으)시'] },
    { id: 18, date: '2026-01-05', content: ['Kính ngữ -(으)시 (tiếp)'] },
    { id: 19, date: '2026-01-09', content: ['Kính ngữ -(으)시 (luyện tập)'] },
];

export const EXAM_DATE = '2026-04-11';
export const REG_START = '2026-01-27';
export const REG_END = '2026-02-02';
export const TODAY = '2026-01-12'; // As per user context

// Tet Holiday Range: Feb 16 (29 Tet) - Feb 22 (Mung 5 Tet), 2026
const TET_START = new Date('2026-02-16');
const TET_END = new Date('2026-02-22');

function isTetHoliday(date: Date): boolean {
    return date >= TET_START && date <= TET_END;
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

    // Start Extrapolation from Session 20 (Jan 12, 2026)
    // Schedule: Mon (1), Wed (3), Fri (5)
    let currentId = 20;
    let currentDate = new Date('2026-01-12'); // Starting from Today
    const endDate = new Date('2026-04-10'); // Day before exam

    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

        // Check if Mon, Wed, Fri
        if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
            const dateStr = currentDate.toISOString().split('T')[0];

            if (isTetHoliday(currentDate)) {
                sessions.push({
                    id: currentId, // Keep ID sequence reserved or just mark as holiday? 
                    // Let's increment ID but enable "Holiday" status to visually skip
                    date: dateStr,
                    status: 'holiday',
                    content: ['Nghỉ Tết Nguyên Đán']
                });
                // Don't increment currentId if we treat holiday as "no class"
                // But usually roadmap numbers imply class sessions. Let's NOT increment ID for holidays.
            } else {
                sessions.push({
                    id: currentId,
                    date: dateStr,
                    status: getStatus(dateStr),
                    content: []
                });
                currentId++;
            }
        }

        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return sessions;
}

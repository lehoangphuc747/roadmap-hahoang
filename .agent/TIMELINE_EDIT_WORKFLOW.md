# 📝 Timeline Edit Workflow

**Tài liệu này giúp edit timeline nhanh chóng mà không cần tìm hiểu lại từ đầu**

---

## 🎯 Cấu trúc chính

| File | Mục đích |
|------|---------|
| `src/data/roadmapData.ts` | ✏️ Edit nội dung buổi & ngày nghỉ |
| `src/components/roadmap/Timeline.astro` | 🎨 Hiển thị timeline (thường không edit) |
| `src/components/roadmap/TimelineItem.astro` | 🎨 Styling từng item (thường không edit) |

---

## 🚀 Quick Actions

### ✅ Add Ngày Nghỉ
**File**: `src/data/roadmapData.ts` (line 69-77)

```typescript
// Tìm đoạn này:
const specialHolidays: { [key: string]: string } = {
    '2026-01-12': 'Buổi 20 off',
    '2026-02-27': 'Buổi 31 nghỉ',  // Ví dụ hiện tại
};

// Thêm dòng mới trước dấu }:
'2026-XX-XX': 'Tên buổi/Lý do nghỉ',
```

**Format ngày**: `YYYY-MM-DD`

---

### 📚 Edit Nội Dung Buổi Học
**File**: `src/data/roadmapData.ts` (line 44-61)

```typescript
// Tìm đoạn này:
const sessionContentMap: { [key: number]: string[] } = {
    20: ['Ôn tập kính ngữ'],
    21: ['-지 말다', '-고 (Sequential)'],
    // ...
};

// Cách thêm/sửa:
27: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3'],  // Buổi 27
```

**Lưu ý**:
- Key = `id` (số buổi: 20, 21, 22...)
- Value = array string (có thể 1-5 nội dung)
- Buổi không có trong map hiển thị `[]` (trống)

---

### 🎓 Status Sessions

```typescript
// Tự động được set dựa vào ngày:
'completed'   // Ngày < hôm nay (TODAY)
'today'       // Ngày = hôm nay
'upcoming'    // Ngày > hôm nay
'holiday'     // Có trong specialHolidays
```

---

## 📅 Lịch Tự Động

**Quy tắc**: Mỗi **Thứ 2, 4, 6** → tự động tạo buổi học (nếu không phải ngày nghỉ)

```
Buổi 20: 16/01 (Thứ 5)
Buổi 21: 19/01 (Thứ 2)
Buổi 22: 21/01 (Thứ 4) - OFF (OT)
Buổi 23: 23/01 (Thứ 6)
...
```

---

## 🔄 Workflow Cụ Thể

### Scenario 1: Thêm Ngày Nghỉ Mới

**Ví dụ**: Buổi 35 (13/03) nghỉ

1. Mở `src/data/roadmapData.ts`
2. Tìm `specialHolidays`
3. Thêm:
```typescript
'2026-03-13': 'Buổi 35 nghỉ',
```

---

### Scenario 2: Thay Đổi Nội Dung Buổi

**Ví dụ**: Buổi 27 thêm nội dung mới

1. Mở `src/data/roadmapData.ts`
2. Tìm `sessionContentMap`
3. Thay đổi:
```typescript
// Cũ:
27: ['Ôn -(으)니까 (2)', '-(으)면'],

// Mới:
27: ['Ôn -(으)니까 (2)', '-(으)면', 'Luyện tập'],
```

---

### Scenario 3: Tạo Page Riêng Cho Buổi

**File mẫu**: `src/pages/bai-tap/buoi-27-02.astro`

```astro
---
import RoadmapLayout from '../../layouts/RoadmapLayout.astro';
---

<RoadmapLayout title="Buổi 27-02 - Luyện tập">
  <h1>Buổi 27 (27/02/2026)</h1>
  
  <section>
    <h2>Nội dung học</h2>
    <ul>
      <li>-(으)니까 (2)</li>
      <li>-(으)면</li>
    </ul>
  </section>
  
  <section>
    <h2>Bài tập</h2>
    <!-- Thêm bài tập ở đây -->
  </section>
</RoadmapLayout>
```

---

## 🗓️ Ngày Đặc Biệt (TODAY)

**File**: `src/data/roadmapData.ts` (line 67)

```typescript
export const TODAY = '2026-03-02'; // Thay đây bằng ngày cần
```

---

## 📋 Checklist Khi Edit

- [ ] Xác định loại sửa (thêm ngày nghỉ / edit nội dung / tạo page)
- [ ] Mở file đúng
- [ ] Tìm đúng section
- [ ] Copy-paste template (nếu cần)
- [ ] Kiểm tra lại dấu ngoặc, dấu phẩy
- [ ] Save file
- [ ] Refresh browser `localhost:4322`

---

## 💡 Mẹo Nhanh

✨ **Tìm section nhanh**: Ctrl+F → tìm từ khóa
- Tìm ngày nghỉ: `specialHolidays`
- Tìm nội dung: `sessionContentMap`
- Tìm ngày hiện tại: `export const TODAY`

✨ **Format kiểm tra**:
```typescript
// Đúng:
'2026-02-27': 'Buổi 31 nghỉ',

// Sai:
'2026/02/27': 'Buổi 31 nghỉ',  // Dấu gạch chéo
2026-02-27: 'Buổi 31 nghỉ',     // Thiếu ngoặc kép
'2026-02-27' 'Buổi 31 nghỉ',    // Thiếu dấu 2 chấm
```

---

## 🆘 Troubleshoot

| Vấn đề | Giải pháp |
|--------|----------|
| Timeline không update | Refresh browser hoặc Ctrl+Shift+R |
| Lỗi Syntax | Kiểm tra dấu phẩy, ngoặc kép, ngoặc nhọn |
| Buổi không hiển thị | Kiểm tra ngày (Mon/Wed/Fri?) và `sessionContentMap` |

---

**Last Updated**: 03/02/2026

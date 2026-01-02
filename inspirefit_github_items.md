# InspireFit – Planned GitHub Issues

This file contains ready-to-use GitHub issue items for the next phase of InspireFit development.
You can copy/paste each section into GitHub Issues, or adapt them into a Project board.

---

## 1. Data Model: Annual Intent

**Title:** Add Annual Intent data model and storage

**Description:**
- Implement `annualIntent` object stored in localStorage
- Fields: year, theme, commitments (4), signedName, signedDate
- Auto-create a default record for the current year if none exists
- Ensure update timestamps are maintained

**Acceptance Criteria:**
- Annual Intent loads on app start
- User can edit and save intent
- Data persists after refresh

---

## 2. Data Model: Quarterly Check-Ins

**Title:** Add Quarterly Check-In tracker

**Description:**
- Implement `quarterlyCheckins` array in localStorage
- Each record keyed as `YYYY-Qn`
- Capture wins, drains, energy rating, mood, next-quarter focus, promise to self
- Prevent duplicate entries for the same year/quarter

**Acceptance Criteria:**
- User can add/edit quarterly check-ins
- Only one check-in per quarter per year
- Data persists correctly

---

## 3. Data Model: Weekly Alignment

**Title:** Add Weekly Alignment reflection

**Description:**
- Implement `weeklyAlignment` array in localStorage
- Store weekStart, weekEnd, supportedEnergy flag
- Optional oneWin and oneAdjustment notes

**Acceptance Criteria:**
- Weekly entry can be added in under 30 seconds
- Past weeks remain viewable
- Minimal friction UX

---

## 4. Data Model: DONE List

**Title:** Add DONE list for finished items

**Description:**
- Implement `doneItems` array in localStorage
- Fields: date, title, category, impact, linked commitment
- Add quick-add interaction

**Acceptance Criteria:**
- Items can be added in one action
- Recent DONE items visible on dashboard
- Encourages completion behaviour

---

## 5. UI: Quarterly Reset Screen

**Title:** Create Quarterly Reset screen

**Description:**
- Build a form matching Quarterly Check-In schema
- Support create/edit modes
- Calm, reflective layout (not analytics-heavy)

**Acceptance Criteria:**
- User can complete a full quarterly reset in <10 minutes
- Existing data is editable
- No visual overload

---

## 6. UI: Annual Intent Screen

**Title:** Create Annual Intent screen

**Description:**
- Display year theme and 4 commitments
- Allow editing and signing
- One-page card layout

**Acceptance Criteria:**
- Fits on one screen without scrolling (desktop)
- Clean, printable layout
- Clearly sets yearly direction

---

## 7. UI: Dashboard Enhancements

**Title:** Enhance dashboard with reflection widgets

**Description:**
- Show latest quarterly focus
- Show last energy rating + mood
- Show last 5 DONE items

**Acceptance Criteria:**
- Dashboard reflects current priorities
- Information is glanceable
- No charts required initially

---

## 8. Validation & Data Integrity

**Title:** Add validation and guardrails

**Description:**
- Prevent duplicate quarter entries
- Validate energy rating range (1–5)
- Handle empty states gracefully

**Acceptance Criteria:**
- No corrupted or duplicated records
- App fails gracefully if data missing

---

## 9. Documentation

**Title:** Add documentation for reflection system

**Description:**
- Update README with explanation of:
  - Annual Intent
  - Quarterly Check-Ins
  - Weekly Alignment
  - DONE List
- Include example data

**Acceptance Criteria:**
- New contributor understands system in 5 minutes
- Clear mental model of data flow

---

## 10. Future (Optional)

**Title:** Add export / backup for reflection data

**Description:**
- Export reflection data as JSON or CSV
- Manual download only (no sync)

**Acceptance Criteria:**
- User can back up their data
- No external dependencies required

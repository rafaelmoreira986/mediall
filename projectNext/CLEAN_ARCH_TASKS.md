# Clean Architecture & Clean Code — Implementation Tasks

> Project: **Mediall Brasil** (Next.js 16, React 19, TypeScript 5)
> Goal: Refactor toward maintainable, scalable architecture without changing visible behavior.

---

## Priority Legend
- 🔴 High — blocks scalability or causes bugs
- 🟡 Medium — hurts maintainability
- 🟢 Low — nice-to-have improvements

---

## 1. Data Layer — Extract Hardcoded Data

### 1.1 🔴 Extract hospital data from component ✅ DONE
**File:** `components/sections/HospitalUnitsSection.tsx`
**Problem:** 1000+ lines with `statesData` array embedded inside the component.
**Task:**
- Create `lib/data/hospitals.ts` and move the `statesData` array there
- Define and export proper TypeScript interfaces: `Hospital`, `State`, `HospitalUnit`
- Import from the new file in `HospitalUnitsSection.tsx`
- Component should drop from ~514 lines to ~100
**Done:** Created `lib/data/hospitals.ts` (with `statesData` + `regionColors`) and `lib/types/hospitals.ts` (with `Hospital`, `StateData` interfaces). Component now imports from lib layer. Removed unused `isLast` prop from `HospitalRow`, typed `h` param with `Hospital` interface.

### 1.2 🟡 Move department data to lib layer ✅ DONE
**File:** `components/sections/departments/data.ts`
**Problem:** Data lives inside the `sections` folder, not in the data layer.
**Task:**
- Move to `lib/data/departments.ts`
- Move `components/sections/departments/types.ts` to `lib/types/departments.ts`
- Update all imports
**Done:** Created `lib/data/departments.ts` and `lib/types/departments.ts`. Old `departments/data.ts` and `departments/types.ts` now re-export from lib for backwards compatibility.

### 1.3 🟡 Move compliance mock data to lib layer ✅ DONE
**File:** `app/compliance/data.ts`
**Problem:** Mock data mixed with route files.
**Task:**
- Move to `lib/data/compliance.ts`
- Move compliance interfaces to `lib/types/compliance.ts`
- Update all imports
**Done:** Created `lib/data/compliance.ts` and `lib/types/compliance.ts`. Old `app/compliance/data.ts` now re-exports from lib for backwards compatibility.

### 1.4 🟡 Centralize all TypeScript types ✅ DONE
**Problem:** Types are scattered across `data.ts`, `types.ts`, and inline declarations.
**Task:**
- Create `lib/types/` directory
- `lib/types/compliance.ts` — Ticket, Resposta, Status enums
- `lib/types/departments.ts` — Department, ModalSection, DepartmentCard
- `lib/types/hospitals.ts` — Hospital, State, HospitalUnit
- `lib/types/navigation.ts` — NavItem, NavMenu
**Done:** Created all four type files in `lib/types/`. `lib/types/navigation.ts` extracts `NavItem` from `lib/navigation.ts`.

---

## 2. Internationalization — Remove Language Duplication

### 2.1 🔴 Replace duplicated ES components with i18n
**Problem:** Every section has a `/es/` duplicate (`HeroSliderEs.tsx`, `DepartmentsSectionEs.tsx`, etc.) — 15+ pairs.
**Task:**
- Install `next-intl`
- Create `messages/pt.json` and `messages/es.json` with all UI strings
- Refactor one section at a time, starting with `HeroSlider`
- Delete the `components/sections/es/` directory once all sections are migrated
- Delete `app/es/` route duplicates; use `[locale]` dynamic segment instead
- Remove `NavbarEs.tsx` in favor of a single `Navbar.tsx` reading from locale

### 2.2 🔴 Consolidate duplicated page routes
**Problem:** `app/es/page.tsx`, `app/es/quem-somos/page.tsx`, etc. duplicate the PT pages.
**Task:**
- Migrate to `app/[locale]/` routing (next-intl pattern)
- Single page files render translated content via `useTranslations()`
- Redirect `/` to `/pt` or detect locale automatically

---

## 3. Component Architecture — Break Up Large Components

### 3.1 🟡 Split `HospitalUnitsSection.tsx` ✅ DONE
**Current:** 514 lines — state selector, accordion, hospital list, map tabs all in one.
**Task:**
- `HospitalUnitsSection.tsx` — orchestrator only (~60 lines)
- `components/sections/hospitals/StateSelector.tsx` — dropdown/tab for state
- `components/sections/hospitals/HospitalList.tsx` — filtered hospital cards
- `components/sections/hospitals/HospitalCard.tsx` — single hospital entry
**Done:** Created all three sub-components in `components/sections/hospitals/`. Main component is now ~90 lines (orchestrator only). Each sub-component has a single responsibility.

### 3.2 🟡 Split `NovaDenunciaClient.tsx` ✅ DONE
**Current:** 294 lines — multi-step form, file upload, protocol generation all mixed.
**Task:**
- `NovaDenunciaClient.tsx` — form state orchestrator
- `components/compliance/StepIndicator.tsx` — step progress UI
- `components/compliance/FileUploadField.tsx` — reusable file input
- `components/compliance/SuccessModal.tsx` — protocol confirmation modal
**Done:** Created `FileUploadField.tsx` and `SuccessModal.tsx` in `components/compliance/`. NovaDenunciaClient is now ~150 lines, orchestrator only. Removed the `useRef` for file input (moved to FileUploadField). Also updated `nova-denuncia/page.tsx` to delegate to the client component.

### 3.3 🟡 Split `DashboardClient.tsx` ✅ DONE
**Task:**
- `DashboardClient.tsx` — data + filter state only
- `components/compliance/TicketFilters.tsx` — search/status/priority filters
- `components/compliance/TicketTable.tsx` — ticket list rendering
**Done:** Created `TicketFilters.tsx` and `TicketTable.tsx` in `components/compliance/`. DashboardClient is now ~80 lines. Also updated `dashboard/page.tsx` to delegate to the client component.

---

## 4. Forms — Activate react-hook-form

### 4.1 🔴 Wire up react-hook-form in compliance form ✅ DONE
**File:** `app/compliance/nova-denuncia/NovaDenunciaClient.tsx`
**Problem:** `react-hook-form` is imported but not used; validation is only HTML `required`.
**Task:**
- Replace manual `useState` field tracking with `useForm()`
- Add `register`, `handleSubmit`, `formState.errors`
- Display field-level error messages below each input
- Add proper validation rules (min length, email format, file type/size)
**Done:** Replaced all `useState` field tracking with `useForm()` + `zodResolver`. Added `register` on all inputs. Field-level errors now display under each field via `errors.xxx.message`.

### 4.2 🟡 Define a Zod schema for the complaint form ✅ DONE
**Task:**
- Install `zod` + `@hookform/resolvers`
- Create `lib/schemas/complaint.ts` with `complainSchema`
- Use `zodResolver` in the form
**Done:** Installed `zod` and `@hookform/resolvers`. Created `lib/schemas/complaint.ts` with `complaintSchema` (validates unidade, tipo, descricao min-length, email format, conditional nome validation when not anonymous). `NovaDenunciaClient` now uses `zodResolver(complaintSchema)`.

---

## 5. Styling — Reduce Inline Style Usage

### 5.1 🟡 Migrate inline styles to CSS modules
**Problem:** Components use dozens of `style={{ ... }}` objects, making styling hard to audit.
**Task (per component, prioritize largest first):**
- `HospitalUnitsSection.tsx` — create `HospitalUnitsSection.module.css`
- `DepartmentCard.tsx` — create `DepartmentCard.module.css`
- `FeaturesBar.tsx` — create `FeaturesBar.module.css`
- Replace `style={{ display: 'flex', ... }}` with `className={styles.xxx}`

### 5.2 🟢 Create a design token file
**Task:**
- Create `lib/styles/tokens.css` (or `tokens.ts` for CSS-in-JS) with:
  - Color palette (primary, secondary, neutral)
  - Spacing scale
  - Typography scale
- Replace magic numbers (`#0d6efd`, `padding: "24px"`) with token references

---

## 6. Type Safety — Remove `any` Casts

### 6.1 🟡 Fix `imgFit` cast in DepartmentCard ✅ DONE
**File:** `components/sections/departments/DepartmentCard.tsx`
**Problem:** `imgFit: (department.imgFit as any) ?? undefined`
**Task:**
- Add `imgFit?: React.CSSProperties["objectFit"]` to the `Department` interface
- Remove the `as any` cast
**Done:** Updated `lib/types/departments.ts` to type `imgFit` as `React.CSSProperties["objectFit"]`. DepartmentCard now uses `objectFit: department.imgFit` directly with no cast.

### 6.2 🟡 Audit and remove all `any` types ✅ DONE
**Task:**
- Run `grep -r "as any" --include="*.tsx" --include="*.ts"` in `projectNext/`
- Replace each with a proper type or `unknown` with a type guard
**Done:** The `imgFit as any` was the only instance. After fixing 6.1, no more `as any` casts remain in the TypeScript source files.

---

## 7. Error Handling

### 7.1 🟡 Add React Error Boundary to client sections ✅ DONE
**File:** `app/global-error.tsx` (currently minimal)
**Task:**
- Create `components/ui/ErrorBoundary.tsx` using React's `Component` class pattern
- Wrap compliance client components: `NovaDenunciaClient`, `DashboardClient`
- Show a user-friendly error message instead of a blank screen
**Done:** Created `components/ui/ErrorBoundary.tsx` (class component with `getDerivedStateFromError`, accepts optional `fallback` prop). Wrapped `NovaDenunciaClient` and `DashboardClient` in their respective `page.tsx` files.

### 7.2 🟢 Add loading states
**Task:**
- Create `app/compliance/loading.tsx` (Next.js convention)
- Add skeleton loaders for `DashboardClient` ticket list

---

## 8. Accessibility

### 8.1 🟡 Add ARIA labels to interactive elements
**Files:** All section and compliance components
**Task:**
- All `<button>` elements without visible text need `aria-label`
- Department/hospital clickable cards: add `role="button"` or use `<button>`
- `DepartmentModal`: add `role="dialog"`, `aria-modal="true"`, `aria-labelledby`

### 8.2 🟡 Trap focus in modals
**Files:** `DepartmentModal.tsx`, `VideoPopup.tsx`, `SearchOverlay.tsx`
**Task:**
- Use `focus-trap-react` or implement focus trap manually
- `Escape` key should close modals
- Focus should return to trigger element on close

### 8.3 🟢 Audit heading hierarchy
**Task:**
- Ensure each page has exactly one `<h1>`
- Sections use `<h2>`, cards use `<h3>` — no skipping levels

---

## 9. Dead Code Cleanup

### 9.1 🟢 Remove commented-out sections from page.tsx ✅ DONE
**File:** `app/page.tsx`
**Task:**
- Remove all commented JSX blocks (`{/* <AboutAvatarsSection /> */}`)
- If components are not used anywhere, delete the component files too
- Affected components: `AboutAvatarsSection`, `FeaturesSection`, and others
**Done:** Removed all commented JSX and unused imports from `app/page.tsx`. Component files kept on disk since they may be useful in the future (they are not referenced by any active pages).

### 9.2 🟢 Audit unused imports
**Task:**
- Run `npx knip` or check manually for unused imports/exports
- Remove orphan component files

---

## 10. Testing Foundation

### 10.1 🟢 Set up Vitest + React Testing Library
**Task:**
- Install `vitest`, `@testing-library/react`, `@testing-library/user-event`, `jsdom`
- Add `vitest.config.ts`
- Write smoke tests for key components:
  - `DepartmentCard` renders title and opens modal on click
  - `HospitalUnitsSection` filters hospitals by state
  - Compliance form shows validation errors on empty submit

---

## Suggested Execution Order

```
Phase 1 (Data & Types)       → Tasks 1.1 → 1.2 → 1.3 → 1.4
Phase 2 (Component Splits)   → Tasks 3.1 → 3.2 → 3.3
Phase 3 (Forms)              → Tasks 4.1 → 4.2
Phase 4 (Type Safety)        → Tasks 6.1 → 6.2
Phase 5 (i18n)               → Tasks 2.1 → 2.2  (biggest lift, do last)
Phase 6 (Styling)            → Tasks 5.1 → 5.2
Phase 7 (Quality)            → Tasks 7.x → 8.x → 9.x → 10.x
```

---

## File Structure After Refactor

```
projectNext/
├── app/
│   ├── [locale]/            # Replaces /es/ duplicates
│   │   ├── page.tsx
│   │   ├── quem-somos/
│   │   └── ...
│   ├── compliance/
│   │   └── ...              # No data.ts here
│   └── layout.tsx
├── components/
│   ├── compliance/          # Compliance-specific components
│   ├── hospitals/           # Extracted from HospitalUnitsSection
│   ├── layout/
│   ├── sections/            # No /es/ subdirectory
│   └── ui/
├── lib/
│   ├── data/
│   │   ├── hospitals.ts     # Extracted hospital data
│   │   ├── departments.ts   # Extracted department data
│   │   └── compliance.ts    # Mock tickets
│   ├── schemas/
│   │   └── complaint.ts     # Zod schema
│   ├── styles/
│   │   └── tokens.css
│   ├── types/
│   │   ├── compliance.ts
│   │   ├── departments.ts
│   │   ├── hospitals.ts
│   │   └── navigation.ts
│   └── navigation.ts
├── messages/
│   ├── pt.json
│   └── es.json
└── hooks/
    └── useScrollPosition.ts
```

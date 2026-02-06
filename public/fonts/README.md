# Fonts Directory

## Required Font

### Salmanazar Font
Please upload your **Salmanazar** font file here with the following name:

```
Salmanazar.otf
```

Or if you have a different format:
```
Salmanazar.ttf
Salmanazar.woff
Salmanazar.woff2
```

**Important:** If your font file has a different name, you'll need to update the path in `/src/lib/fonts.ts` on line 11.

### Current Font Configuration

The project expects: `public/fonts/Salmanazar.otf`

If your font file is named differently, update this line in `/src/lib/fonts.ts`:
```typescript
src: '../../public/fonts/YOUR_FONT_NAME_HERE.otf',
```

### Font Properties Used
- Weight: 600 (Medium)
- Style: Medium
- Display: swap

# Link Visibility System

All navigation items, buttons, and links across the website automatically hide if they don't have a valid link/href set in Sanity. This makes it super easy to control what's visible on your site without touching any code!

## How It Works

Simply **leave the link field empty in Sanity** to hide any button or navigation item. When you're ready to show it, just add the link in Sanity and it will appear automatically.

**All link fields are now optional** - you won't get validation errors for leaving them empty!

## What's Covered

### ✅ Navigation (Header)
- Main navigation items (Artists, Services, About, Contact)
- Submenu items
- Desktop and mobile menus

**To hide:** Leave the `href` field empty in Sanity Studio under "Site Header"

### ✅ Homepage Sections
All buttons in these sections will auto-hide if no link is set:
- **Art Curation Section** - "View More" button
- **Services Section** - "Learn More" and "Book Appointment" buttons  
- **Bespoke Pieces Section** - "Learn More" and "Discuss Project" buttons
- **Artists Section** - Main button
- **News Home Section** - Main button + all news item buttons
- **Portfolio Grids** (2 & 3 columns) - All item buttons

**To hide:** Leave the button link field empty when editing the section in Sanity

### ✅ Footer
- Contact links (Call Us, Email Us, We Chat)
- Follow links (Instagram, etc.)
- Studio link
- Privacy Policy link

**To hide:** Leave the `href` field empty in the Footer settings in Sanity

## How to Use

### For Launch

1. **Before Launch:**
   - In Sanity Studio, go to each section
   - Leave link fields **empty** for buttons/links you don't want to show
   - The buttons/links will automatically be hidden

2. **On Launch Day:**
   - Simply add the links in Sanity Studio
   - Publish the changes
   - The buttons/links will automatically appear!

### Example: Hiding Navigation Items

1. Go to Sanity Studio
2. Open "Site Header"
3. Find the navigation item you want to hide (e.g., "Services")
4. **Clear the `href` field** (leave it empty)
5. Save & Publish
6. The "Services" link is now hidden from the header!

### Example: Hiding Section Buttons

1. Go to Sanity Studio
2. Open "Homepage" 
3. Find the section (e.g., "Services Section")
4. **Clear the button link fields** (e.g., "Learn More Button Link")
5. Save & Publish
6. Those buttons are now hidden!

## Quick Reference

| What to Hide | Where in Sanity | Field to Leave Empty |
|--------------|----------------|---------------------|
| Navigation item | Site Header → Navigation items | `href` |
| Art Curation button | Homepage → Art Curation Section | `buttonLink` |
| Services buttons | Homepage → Services Section | `learnMoreButtonLink`, `appointmentButtonLink` |
| Bespoke buttons | Homepage → Bespoke Section | `learnMoreButtonLink`, `discussProjectButtonLink` |
| Artists button | Homepage → Artists Section | `buttonLink` |
| News buttons | Homepage → News Section | `buttonLink` (and individual item links) |
| Portfolio buttons | Homepage → Portfolio Grid | Individual item `buttonLink` |
| Footer links | Footer | `href` in contact/follow links |
| Privacy link | Footer | Privacy Policy `href` |

## Benefits

✅ **No Code Changes** - Everything controlled from Sanity  
✅ **Automatic** - Links hide/show based on whether href is set  
✅ **Safe** - Can't accidentally show broken links  
✅ **Easy Rollback** - Just remove the link to hide again  
✅ **Granular Control** - Hide individual items, not entire sections  

## Notes

- Empty strings, spaces, or null values all count as "no link" and will hide the item
- The link text/label can still be filled in - only the `href` matters for visibility
- Sections themselves always show, only the buttons/links within them hide
- This applies to all environments (development, staging, production)

## No Feature Flags Needed!

Unlike the previous approach, you don't need to maintain a separate config file. Everything is controlled directly from Sanity Studio, making it much simpler and more intuitive.


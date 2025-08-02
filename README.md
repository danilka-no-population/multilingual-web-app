# Multilingual Mobile Banner Page

## Test task for AIBY organization.

This is a full-screen multilingual banner web page designed for iPhone SE, 8, 8+, X, and 12 in portrait orientation. The page is responsive, retina-ready, and supports 7 languages via client-side logic.

## 🌐 Features

- Supports 7 languages via `lang` query parameter (e.g. `?lang=fr`). Important point - there were only 6 JSON-files in the
  languages folder, so I added my seventh language manually - Hindi.
- Automatically detects system language (defaults to English if unsupported)
- Dynamic translation using JSON i18n files
- Layout adjusts based on device type (SE/8/8+ vs X/12)
- Font size scales in some languages to avoid overflow
- Optimized retina images
- Fully responsive with layout compression for smaller screens
- All navigation elements (`Restore`, `Terms of Use`, `Privacy Policy`, etc.) are valid links
- The “Continue” button redirects based on selected access option

## 📱 Device-specific behavior

- **iPhone SE, 8, 8+**: Slightly compressed layout + raised background image
- **iPhone X, 12**: Full layout with proportional sizing for iPhone 12

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)

## 🔗 Links

- `Continue` button:
  - First option → [https://apple.com](https://apple.com)
  - Second option → [https://google.com](https://google.com)

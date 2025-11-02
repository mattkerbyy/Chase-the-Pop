// Generates PNG favicon variant (192x192) from public/images/favicon-512.png
// Usage: node scripts/generate-favicon-ico.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function main() {
  const publicImages = path.join(__dirname, "..", "public", "images");
  if (!fs.existsSync(publicImages))
    fs.mkdirSync(publicImages, { recursive: true });

  const src = path.join(publicImages, "favicon-512.png");
  if (!fs.existsSync(src)) {
    console.error(
      "No source image found. Please add a master image at public/images/favicon-512.png"
    );
    process.exit(1);
  }

  try {
    const png192 = path.join(publicImages, "favicon-192.png");

    await sharp(src)
      .resize({
        width: 192,
        height: 192,
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ quality: 90 })
      .toFile(png192);
    console.log("Wrote", png192);
  } catch (err) {
    console.error("Failed to write PNG variants", err);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

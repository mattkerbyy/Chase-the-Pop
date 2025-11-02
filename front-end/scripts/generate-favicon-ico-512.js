// Generates PNG favicon variant (512x512) from public/images/favicon.png
// Usage: node scripts/generate-favicon-ico-512.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function main() {
  const publicImages = path.join(__dirname, "..", "public", "images");
  if (!fs.existsSync(publicImages))
    fs.mkdirSync(publicImages, { recursive: true });

  const src = path.join(publicImages, "favicon.png");
  if (!fs.existsSync(src)) {
    console.error(
      "No source image found. Please add a master image at public/images/favicon.png"
    );
    process.exit(1);
  }

  try {
    const png512 = path.join(publicImages, "favicon-512.png");

    await sharp(src)
      .resize({
        width: 512,
        height: 512,
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ quality: 90 })
      .toFile(png512);
    console.log("Wrote", png512);
  } catch (err) {
    console.error("Failed to write PNG variants", err);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

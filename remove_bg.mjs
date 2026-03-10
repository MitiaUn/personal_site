import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function processImage() {
    console.log("Starting background removal...");
    try {
        const imagePath = "src/assets/photo6.jpg";
        const blob = await removeBackground(imagePath);
        const buffer = Buffer.from(await blob.arrayBuffer());
        fs.writeFileSync("src/assets/photo6_transparent.png", buffer);
        console.log("Saved transparent image to src/assets/photo6_transparent.png");
    } catch (error) {
        console.error("Error removing background:", error);
    }
}

processImage();

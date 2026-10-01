"""Regenerate responsive previews from the preserved original project images."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / 'public' / 'showcase'
for name in ('lumina', 'velour', 'apex', 'strata', 'kroma', 'carepulse'):
    with Image.open(root / f'{name}.jpg') as original:
        image = original.convert('RGB')
        for width in (320, 640, 960):
            size = (width, round(image.height * width / image.width))
            output = root / f'{name}-{width}.webp'
            image.resize(size, Image.Resampling.LANCZOS).save(output, 'WEBP', quality=79, method=6)
            print(f'{output.name}: {output.stat().st_size // 1024} KB')

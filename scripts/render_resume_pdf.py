from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "Osman_ATS.md"
OUTPUT = ROOT / "public" / "Osman_ATS.pdf"

PAGE_WIDTH = 612
PAGE_HEIGHT = 792
MARGIN_X = 34
TOP_Y = 760
BOTTOM_Y = 32

FONT_NAME = "Helvetica"
FONT_BOLD = "Helvetica-Bold"


def escape_pdf_text(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def text_width(text: str, size: float) -> float:
    # Good enough for Helvetica-style wrapping without external PDF libraries.
    narrow = set(".,:;!|ilI' ")
    wide = set("MW@#%&")
    width = 0.0
    for char in text:
        if char in narrow:
            width += size * 0.25
        elif char in wide:
            width += size * 0.85
        else:
            width += size * 0.52
    return width


def wrap_text(text: str, size: float, max_width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if text_width(candidate, size) <= max_width:
            current = candidate
            continue
        if current:
            lines.append(current)
        current = word
    if current:
        lines.append(current)
    return lines


class PdfBuilder:
    def __init__(self) -> None:
        self.commands: list[str] = []
        self.y = TOP_Y

    def add_text(self, text: str, *, size: float, font: str = FONT_NAME, x: float = MARGIN_X, leading: float = 9.4) -> None:
        if self.y < BOTTOM_Y:
            raise RuntimeError("Resume overflowed one page. Tighten copy or reduce font sizes.")
        escaped = escape_pdf_text(text)
        self.commands.append(f"BT /{font} {size:.1f} Tf {x:.1f} {self.y:.1f} Td ({escaped}) Tj ET")
        self.y -= leading

    def add_rule(self) -> None:
        y = self.y + 3
        self.commands.append(f"{MARGIN_X:.1f} {y:.1f} m {PAGE_WIDTH - MARGIN_X:.1f} {y:.1f} l S")

    def gap(self, amount: float) -> None:
        self.y -= amount


def build_commands(markdown: str) -> list[str]:
    pdf = PdfBuilder()
    max_width = PAGE_WIDTH - (2 * MARGIN_X)

    for raw_line in markdown.splitlines():
        line = raw_line.strip()
        if not line:
            pdf.gap(2.5)
            continue

        if line.startswith("# "):
            pdf.add_text(line[2:], size=15.5, font=FONT_BOLD, leading=15)
            continue

        if line.startswith("## "):
            pdf.gap(1.5)
            pdf.add_text(line[3:].upper(), size=8.8, font=FONT_BOLD, leading=9)
            pdf.add_rule()
            pdf.gap(1.5)
            continue

        if line.startswith("### "):
            pdf.add_text(line[4:], size=8.6, font=FONT_BOLD, leading=9.2)
            continue

        if line.startswith("- "):
            wrapped = wrap_text(line[2:], 7.2, max_width - 12)
            for index, wrapped_line in enumerate(wrapped):
                prefix = "- " if index == 0 else "  "
                pdf.add_text(f"{prefix}{wrapped_line}", size=7.2, leading=8.1)
            continue

        size = 7.3 if " | " in line else 7.2
        leading = 8.5 if " | " in line else 8.1
        font = FONT_BOLD if " | " in line and not line.startswith("Accra,") else FONT_NAME
        for wrapped_line in wrap_text(line, size, max_width):
            pdf.add_text(wrapped_line, size=size, font=font, leading=leading)

    return pdf.commands


def write_pdf(commands: list[str]) -> None:
    stream = "\n".join(["0.7 w", *commands]).encode("latin-1", errors="replace")
    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /Helvetica 4 0 R /Helvetica-Bold 5 0 R >> >> /Contents 6 0 R >>",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
        b"<< /Length " + str(len(stream)).encode("ascii") + b" >>\nstream\n" + stream + b"\nendstream",
    ]

    chunks = [b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"]
    offsets = [0]
    for index, obj in enumerate(objects, start=1):
        offsets.append(sum(len(chunk) for chunk in chunks))
        chunks.append(f"{index} 0 obj\n".encode("ascii") + obj + b"\nendobj\n")

    xref_offset = sum(len(chunk) for chunk in chunks)
    chunks.append(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
    chunks.append(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        chunks.append(f"{offset:010d} 00000 n \n".encode("ascii"))
    chunks.append(
        f"trailer << /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode("ascii")
    )

    OUTPUT.write_bytes(b"".join(chunks))
    print(OUTPUT)


def main() -> None:
    commands = build_commands(SOURCE.read_text())
    write_pdf(commands)


if __name__ == "__main__":
    main()

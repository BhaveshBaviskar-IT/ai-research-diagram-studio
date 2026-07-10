import os
import subprocess

OUTPUT_DIR = "generated"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def compile_tikz(tikz_code, filename="diagram"):

    tex_file = os.path.join(OUTPUT_DIR, f"{filename}.tex")

    tex_document = rf"""
\documentclass[tikz,border=10pt]{{standalone}}

\usepackage{{tikz}}
\usetikzlibrary{{trees,positioning,arrows.meta,shapes}}

\begin{{document}}

{tikz_code}

\end{{document}}
"""

    with open(tex_file, "w", encoding="utf-8") as f:
        f.write(tex_document)

    result = subprocess.run(
        [
            "pdflatex",
            "-interaction=nonstopmode",
            "-output-directory",
            OUTPUT_DIR,
            tex_file
        ],
        capture_output=True,
        text=True,
    )

    print("===== PDFLATEX OUTPUT =====")
    print(result.stdout)
    print(result.stderr)

    pdf_path = os.path.join(OUTPUT_DIR, f"{filename}.pdf")

    print("PDF Exists:", os.path.exists(pdf_path))
    print("PDF Path:", pdf_path)

    return {
        "tex": f"{filename}.tex",
        "pdf": f"{filename}.pdf"
    }
    # return {
    #     "tex": tex_file,
    #     "pdf": os.path.join(OUTPUT_DIR, f"{filename}.pdf")
    # }
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from services.granite_service import generate_tikz
from compiler.latex_compiler import compile_tikz

app = Flask(__name__)

CORS(app)

@app.route("/")
def home():
    return jsonify({
        "status": "Running",
        "project": "AI Research Diagram Studio"
    })

@app.route("/generate", methods=["POST"])
def generate():

    data = request.get_json()

    prompt = data["prompt"]

    tikz = generate_tikz(prompt)

    print("===== GENERATED TIKZ =====")
    print(tikz)

    files = compile_tikz(tikz)

    return jsonify({
        "tikz": tikz,
        "pdf": files["pdf"],
        "tex": files["tex"]
    })

@app.route("/generated/<path:filename>")
def generated(filename):
    return send_from_directory("generated", filename)

if __name__ == "__main__":
    app.run(debug=True)
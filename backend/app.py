from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows React to talk to Flask

@app.route('/api/test', methods=['POST'])
def test_connection():
    data = request.get_json()
    user_text = data.get('text', '')
    return jsonify({
        'reply': f'Python received: {user_text.upper()}'
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
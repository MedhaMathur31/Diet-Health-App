from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_db_connection

app = Flask(__name__)
CORS(app)  # Enable CORS to connect with the frontend

@app.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "Backend is working!"})

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (name, email, password, age, gender, height, weight, goal) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
        (data['name'], data['email'], data['password'], data['age'], data['gender'], data['height'], data['weight'], data['goal'])
    )
    conn.commit()
    conn.close()
    return jsonify({"message": "User registered successfully!"})

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, jsonify, request

app = Flask(__name__)

from characters import characters

# Testing Route
@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({'response': 'pong!'})

# Get Data Routes
@app.route('/characters')
def get_characters():
    # return jsonify(products)
    return jsonify({'characters': characters})


# Create Data Routes
@app.route('/characters', methods=['POST'])
def add_character():
    new_char = {
        'id': request.json['id'],
        'name': request.json['name'],
        'age': request.json['age'],
        'elements': request.json['elements'],
        'main_element': request.json['main_element']
    }

    characters.append(new_char)
    return jsonify({'characters': characters})


if __name__ == '__main__':
    app.run(debug=True, port=4000)
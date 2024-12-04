from flask import Flask, render_template
import json

app = Flask(__name__)

# Load data from JSON
def load_data():
    with open('data.json') as f:
        return json.load(f)

@app.route('/')
def home():
    data = load_data()
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
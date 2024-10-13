class Exercise {
  constructor(id, attributes, maxIndex) {
    this.id = id;
    for (const key in attributes) {
      this[key] = attributes[key]
    }
    this.maxIndex = maxIndex;
  }

  #pad (s, digits = 3, character = "0") {
    return s.toString().padStart(digits, character)
  }

  percentage() {
    return `width: ${this.rating}%;`
  }

  pageNumber() {
    return this.#pad(this.id)
  }

  challenge() {
    return `Reto ${this.#pad(this.id)}/${this.#pad(this.maxIndex)}`;
  }

  getTest() { return this.test; }
}

export class Exercises {
  constructor() {
    this.exercises = [];
    this.index = 0;
    this.maxIndex = 0;
  }

  getIndex() { return this.index; }

  getMaxIndex() { return this.maxIndex; }

  prevIndex() { if (this.index >= 1) this.index -= 1; }

  nextIndex() { if (this.index <= this.maxIndex - 2) this.index += 1; }

  setIndex(n) { if (n >= 1 && n <= this.maxIndex) this.index = n - 1; }

  getCurrent() { return this.exercises[this.index]; }

  getTest() { return this.getCurrent().test; }

  loadData(filename) {
    return fetch(filename)
      .then(response => {
        if (!response.ok) throw new Error("Error!");
        return response.json();
      })
      .then(data => {
        const maxIndex = data["data"].length;
        this.exercises = data["data"].map(eData => {
            return new Exercise(eData.id, eData.attributes, maxIndex);
        })
        this.maxIndex = maxIndex;
      })
      .catch(error => {
        console.error("Error:", error);
        throw error;
      });
  }

  createExercise() {
    const exercise = this.getCurrent()
    const table = ["title", "body", "prompt", "input", "output"];
    table.forEach(e => {
      document.getElementById(`e-${e}`).textContent = exercise[e];
    });
    document.getElementById("e-number").textContent = exercise.challenge();
    document.getElementById("e-rating").style.cssText = exercise.percentage();
    document.getElementById("e-current").textContent = exercise.pageNumber();
    let list = document.getElementById("e-hints");
    list.innerHTML = "";
    exercise.hints.forEach(el => {
      const li = document.createElement("li");
      li.textContent = el;
      li.classList.add("text-xs");
      list.appendChild(li);
    });
  }
}

import data from "data.csv";

export default {
  data() {
    return {
      result: []
    };
  },
  created() {
    fetch(data)
      .then(res => res.text())
      .then(data => (this.result = this.convertCsvStringToArray(data)));
  },
  methods: {
    convertCsvStringToArray(str) {
      return str.split("\n").map(s => s.split(","));
    }
  }
};
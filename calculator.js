new Vue({
    el: '#app',
    data() {
      return {
        result: '',
        buttons: ['1', '2', '3', '4', '5', '6','7', '8', '9', '*', '0', '+','.','-','=', '/'],
        history: []
      };
    },
    methods: {
      handleButtonPress(button) {
        if (button === '=') {
          this.calculateResult();
        } else {
          this.result += button;
        }
      },
      calculateResult() {
        try {
          const calculatedResult = eval(this.result);
          this.result = calculatedResult;
          this.saveToServer(calculatedResult);
          this.addToHistory(calculatedResult);
        } catch (error) {
          this.result = 'Error';
        }
      },
      resetCalculator() {
        this.result = '';
      },
      saveToServer(value) {
        axios.post('https://glitch.com/edit/#!/sugared-excessive-decade', { result: value }) // Replace '/api/save-calculation' with the actual server endpoint
          .then(response => {
            console.log('Calculation saved to server:', response.data);
          })
          .catch(error => {
            console.error('Error saving calculation to server:', error);
          });
      },
      addToHistory(value) {
        this.history.push(value);
      }
    }
  });
  
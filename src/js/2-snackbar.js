function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

document.getElementById('promiseForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const delay = parseInt(this.elements.delay.value);
  const state = this.elements.state.value;

  createPromise(delay, state)
    .then((result) => {
      iziToast.success({
        title: 'Fulfilled promise',
        message: `✅ Fulfilled promise in ${result}ms`,
      });
    })
    .catch((result) => {
      iziToast.error({
        title: 'Rejected promise',
        message: `❌ Rejected promise in ${result}ms`,
      });
    });
});